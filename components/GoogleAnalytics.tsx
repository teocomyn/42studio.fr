"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { getCookieConsent } from "@/lib/cookie-consent";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-ZTMCPNWGL5";

function subscribeToConsent(onChange: () => void) {
  window.addEventListener("42studio:cookie-consent", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("42studio:cookie-consent", onChange);
    window.removeEventListener("storage", onChange);
  };
}

function hasAnalyticsConsent() {
  return getCookieConsent() === "all";
}

function getServerConsent() {
  return false;
}

/**
 * Consent Mode "basic" : gtag.js (~130 KB) n'est chargé qu'après un consentement
 * explicite "Tout accepter" — les visiteurs qui refusent ne paient ni le réseau
 * ni l'exécution. Le stub dataLayer + defaults denied restent dans le <head>.
 */
export function GoogleAnalytics() {
  const enabled = useSyncExternalStore(subscribeToConsent, hasAnalyticsConsent, getServerConsent);

  if (!gaId || !enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics-config" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('consent', 'update', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            analytics_storage: 'granted'
          });
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
