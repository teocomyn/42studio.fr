import { getCookieConsent } from "@/lib/cookie-consent";

export type GaEventParams = Record<string, string | number | boolean | undefined>;

export function trackGaEvent(eventName: string, params?: GaEventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (getCookieConsent() !== "all") return;

  const payload = params
    ? Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined))
    : undefined;

  window.gtag("event", eventName, payload);
}

export function trackCtaClick(itemId: string, location: string) {
  trackGaEvent("cta_click", {
    item_id: itemId,
    cta_location: location
  });
}

export function trackGenerateLead(method: string, location: string) {
  trackGaEvent("generate_lead", {
    method,
    form_location: location
  });
}
