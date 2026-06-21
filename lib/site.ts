// Configuration centrale du site.
// ⚠️ Les valeurs marquées "À COMPLÉTER" doivent être renseignées avant la mise en production.

export const siteConfig = {
  email: "hello@42studio.fr",

  // Lien de prise de rendez-vous (Cal.com / Calendly). Laisse vide pour masquer le bouton.
  // TODO: remplace par ton vrai lien, ex: "https://cal.com/42studio/decouverte"
  bookingUrl: "",

  socials: {
    instagram: "https://www.instagram.com/42studio",
    linkedin: "https://www.linkedin.com/company/42studio"
  },

  // Coordonnées affichées dans le Hero, réutilisées dans les données structurées.
  geo: { latitude: 50.29, longitude: 2.78 },

  // Informations légales (obligation LCEN pour une entreprise française).
  // TODO: compléter avec les vraies informations.
  legal: {
    companyName: "42studio",
    legalForm: "À COMPLÉTER (ex: SASU au capital de X €)",
    siren: "À COMPLÉTER",
    address: "À COMPLÉTER",
    postalCode: "62000",
    city: "Arras",
    director: "À COMPLÉTER",
    // Hébergeur par défaut (à ajuster si tu déploies ailleurs que Vercel).
    host: "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com"
  }
} as const;
