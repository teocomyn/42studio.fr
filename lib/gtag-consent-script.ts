export function getGtagConsentInitScript() {
  // Un seul default global "denied" : le default régionalisé EEE était rendu
  // inopérant par un second default global identique (doublon supprimé).
  // gtag.js n'est de toute façon chargé qu'après consentement (mode basic).
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      wait_for_update: 500
    });

    gtag('set', 'url_passthrough', true);
    gtag('set', 'ads_data_redaction', true);
  `;
}
