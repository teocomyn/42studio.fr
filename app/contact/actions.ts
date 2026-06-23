"use server";

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? siteConfig.email;
  const from = process.env.CONTACT_FROM ?? "42studio <hello@42studio.fr>";

  if (!apiKey) {
    return {
      status: "error",
      message: `Le formulaire n'est pas encore relié à l'envoi d'emails. Écris-nous directement à ${siteConfig.email}.`
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Nouveau brief · ${name}${projectType ? ` (${projectType})` : ""}`,
        text: [
          `Nom : ${name}`,
          `Email : ${email}`,
          `Type de projet : ${projectType || "Non renseigné"}`,
          `Budget : ${budget || "Non renseigné"}`,
          `Consentement RGPD : oui`,
          "",
          message
        ].join("\n")
      })
    });

    if (!res.ok) {
      return { status: "error", message: `Envoi impossible pour le moment. Écris-nous à ${siteConfig.email}.` };
    }

    recentSubmissions.set(rateKey, Date.now());

    return { status: "success", message: "Reçu, on revient vers toi sous 24 h." };
  } catch {
    return { status: "error", message: `Envoi impossible pour le moment. Écris-nous à ${siteConfig.email}.` };
  }
}
