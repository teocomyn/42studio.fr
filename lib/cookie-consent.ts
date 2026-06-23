export type CookieConsentChoice = "all" | "essential";

const STORAGE_KEY = "42studio:cookie-consent";

export function getCookieConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === "all" || value === "essential") return value;
  return null;
}

export function setCookieConsent(choice: CookieConsentChoice) {
  window.localStorage.setItem(STORAGE_KEY, choice);
  window.dispatchEvent(new CustomEvent("42studio:cookie-consent", { detail: choice }));
}

export const consentGrantedUpdate = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted"
} as const;

export const consentDeniedUpdate = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied"
} as const;

export function applyGtagConsent(granted: boolean) {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", granted ? consentGrantedUpdate : consentDeniedUpdate);
}
