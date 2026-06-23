import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export function getContactFrom() {
  return process.env.CONTACT_FROM ?? `42studio <${siteConfig.email}>`;
}

export function getContactTo() {
  return process.env.CONTACT_TO ?? siteConfig.email;
}

export function isResendConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}
