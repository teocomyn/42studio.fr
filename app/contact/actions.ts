"use server";

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
const recentSubmissions = new Map<string, number>();

function isRateLimited(key: string) {
  const last = recentSubmissions.get(key);
  if (!last) return false;
  return Date.now() - last < RATE_LIMIT_MS;
}

export async function submitBrief(_prev: ContactState, formData: FormData): Promise<ContactState> {
  if (formData.get("company")) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent") === "on";

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2) fieldErrors.name = "Indique ton nom.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Adresse email invalide.";
  if (message.length < 10) fieldErrors.message = "Ajoute un peu de contexte (10 caractères minimum).";
  if (!consent) fieldErrors.consent = "Merci d'accepter la politique de confidentialité.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Quelques champs sont à corriger.", fieldErrors };
  }

  const rateKey = email.toLowerCase();
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

  const payload = { name, email, projectType, budget, message };
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

    recentSubmissions.set(rateKey, Date.now());

    return { status: "success", message: "Reçu, on revient vers toi sous 24 h." };
  } catch (error) {
    console.error("[contact] Resend request failed:", error);
    return { status: "error", message: `Envoi impossible pour le moment. Écris-nous à ${siteConfig.email}.` };
  }
}
