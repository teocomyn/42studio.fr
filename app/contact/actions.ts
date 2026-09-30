"use server";

import { headers } from "next/headers";
import { getOffer, projectTimelines } from "@/data/offers";
import {
  buildBriefHtml,
  buildBriefSubject,
  buildBriefText,
  buildConfirmationHtml,
  buildConfirmationSubject,
  buildConfirmationText
} from "@/lib/email/contact-brief";
import { getContactFrom, getContactTo, getResendClient } from "@/lib/resend";
import { siteConfig } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MS = 60_000;
const NAME_MAX = 100;
const EMAIL_MAX = 200;
const MESSAGE_MAX = 5_000;

// Limite par IP, avec purge des entrées expirées. Best-effort : la Map est
// par instance serverless — pour un vrai rate limiting multi-instances,
// brancher Upstash/Vercel KV.
const recentSubmissions = new Map<string, number>();

function isRateLimited(key: string) {
  const now = Date.now();
  for (const [entry, at] of recentSubmissions) {
    if (now - at > RATE_LIMIT_MS) recentSubmissions.delete(entry);
  }
  const last = recentSubmissions.get(key);
  return Boolean(last && now - last < RATE_LIMIT_MS);
}

async function getClientKey(fallback: string) {
  try {
    const headerList = await headers();
    const forwarded = headerList.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || headerList.get("x-real-ip");
    return ip || fallback;
  } catch {
    return fallback;
  }
}

export async function submitBrief(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot : nom de champ non standard pour éviter le remplissage
  // automatique des gestionnaires (l'ancien "company" créait des faux succès).
  if (formData.get("website_field")) {
    console.warn("[contact] honeypot triggered — submission dropped");
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim().slice(0, NAME_MAX);
  const email = String(formData.get("email") ?? "").trim().slice(0, EMAIL_MAX);
  const projectType = String(formData.get("projectType") ?? "").trim().slice(0, 60);
  const budget = String(formData.get("budget") ?? "").trim().slice(0, 60);
  const offer = getOffer(String(formData.get("offer") ?? ""))?.name ?? "";
  const submittedTimeline = String(formData.get("timeline") ?? "");
  const timeline = projectTimelines.find((value) => value === submittedTimeline) ?? "";
  const projectWebsite = String(formData.get("projectWebsite") ?? "").trim().slice(0, 300);
  const message = String(formData.get("message") ?? "").trim().slice(0, MESSAGE_MAX);
  const consent = formData.get("consent") === "on";

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2) fieldErrors.name = "Indique ton nom.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Adresse email invalide.";
  if (message.length < 10) fieldErrors.message = "Ajoute un peu de contexte (10 caractères minimum).";
  if (!consent) fieldErrors.consent = "Merci d'accepter la politique de confidentialité.";
  if (projectWebsite) {
    try {
      const url = new URL(projectWebsite);
      if (!["https:", "http:"].includes(url.protocol)) throw new Error("Invalid protocol");
    } catch {
      fieldErrors.projectWebsite = "Indique une adresse complète, commençant par https://.";
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Quelques champs sont à corriger.", fieldErrors };
  }

  // Clé de rate limit contrôlée par le serveur (IP), pas par l'expéditeur.
  const rateKey = await getClientKey(email.toLowerCase());
  if (isRateLimited(rateKey)) {
    return {
      status: "error",
      message: "Un message a déjà été envoyé récemment. Réessaie dans une minute ou écris-nous directement."
    };
  }

  const resend = getResendClient();
  if (!resend) {
    return {
      status: "error",
      message: `Le formulaire n'est pas encore relié à l'envoi d'emails. Écris-nous directement à ${siteConfig.email}.`
    };
  }

  const payload = { name, email, projectType, budget, message, offer, timeline, projectWebsite };
  const from = getContactFrom();
  const to = getContactTo();

  try {
    const teamEmail = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: buildBriefSubject(payload),
      text: buildBriefText(payload),
      html: buildBriefHtml(payload)
    });

    if (teamEmail.error) {
      console.error("[contact] Resend team email failed:", teamEmail.error);
      return { status: "error", message: `Envoi impossible pour le moment. Écris-nous à ${siteConfig.email}.` };
    }

    // Marque l'envoi AVANT la confirmation : l'auto-répondeur ne peut pas être
    // utilisé en rafale vers des adresses arbitraires.
    recentSubmissions.set(rateKey, Date.now());

    const confirmationEmail = await resend.emails.send({
      from,
      to: [email],
      subject: buildConfirmationSubject(),
      text: buildConfirmationText(payload),
      html: buildConfirmationHtml(payload)
    });

    if (confirmationEmail.error) {
      console.error("[contact] Resend confirmation email failed:", confirmationEmail.error);
    }

    return { status: "success", message: "Reçu, on revient vers toi sous 24 h." };
  } catch (error) {
    console.error("[contact] Resend request failed:", error);
    return { status: "error", message: `Envoi impossible pour le moment. Écris-nous à ${siteConfig.email}.` };
  }
}
