export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Teo a accompagné Studio Boucle Paris sur la refonte UX, le CRO et des sections sur-mesure. Au-delà de l'exécution technique : rigueur, réactivité et exigence sur la qualité. Un partenaire fiable pour faire évoluer un e-commerce durablement.",
    author: "Équipe Studio Boucle Paris",
    role: "Direction",
    company: "Studio Boucle Paris"
  },
  {
    quote:
      "Impact direct sur la performance : pages plus rapides, checkout plus fluide, conversions en hausse en quelques semaines. Il priorise bien, lit les données et transforme les recommandations en résultats mesurables.",
    author: "Direction e-commerce",
    role: "Responsable digital",
    company: "Marque premium"
  },
  {
    quote:
      "Un seul interlocuteur senior sur Shopify, du front au SEO technique. Pas de couche agence, pas de jargon inutile — de la clarté, de la vitesse et une exécution qui tient en production.",
    author: "Fondatrice",
    role: "CEO",
    company: "Marque D2C"
  }
];
