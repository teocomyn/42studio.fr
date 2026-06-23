// Configuration centrale du site.

export const siteConfig = {
  email: "hello@42studio.fr",

  // Cal.com / Calendly — laisser vide pour masquer le bouton.
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",

  socials: {
    instagram: "https://www.instagram.com/42studio",
    linkedin: "https://www.linkedin.com/company/42studio"
  },

  geo: { latitude: 50.29, longitude: 2.78 },

  legal: {
    companyName: "42studio — Teo Comyn",
    legalForm: "Entrepreneur individuel (6201Z — Programmation informatique)",
    siren: "850 274 101",
    siret: "850 274 101 00011",
    vat: "FR26850274101",
    address: "30 Grand Rue, Neuville-Vitasse",
    postalCode: "62217",
    city: "Arras · Hauts-de-France",
    director: "Teo Comyn",
    host: "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com"
  }
} as const;
