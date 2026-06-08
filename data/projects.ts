export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  metrics: string[];
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "helstart",
    index: "01",
    title: "HelStart",
    category: "Brand system + launch site",
    year: "2026",
    summary:
      "Identité cinétique, affiches halftone et site de lancement pour un acteur énergie en rupture.",
    metrics: ["+38% lead qualifié", "2 semaines vers MVP", "AA contraste"],
    services: ["Brand", "Web", "Motion"]
  },
  {
    slug: "platin",
    index: "02",
    title: "Platin",
    category: "Luxury commerce platform",
    year: "2026",
    summary:
      "Direction artistique chrome, Shopify headless et système éditorial pour une maison premium.",
    metrics: ["LCP 1.7s", "+21% panier moyen", "Design system 46 composants"],
    services: ["Web", "E-commerce", "Produit"]
  },
  {
    slug: "nadir",
    index: "03",
    title: "Nadir OS",
    category: "SaaS product interface",
    year: "2025",
    summary:
      "Interface opérationnelle dense pour piloter des flux complexes sans sacrifier la clarté.",
    metrics: ["-31% temps de tâche", "12 vues produit", "Prototype testé en 5 jours"],
    services: ["Produit", "UX", "Front-end"]
  },
  {
    slug: "arras-futures",
    index: "04",
    title: "Arras Futures",
    category: "Cultural identity",
    year: "2025",
    summary:
      "Système de marque génératif pour un programme culturel local avec ambition internationale.",
    metrics: ["1 système génératif", "80 assets campagne", "Print + digital"],
    services: ["Brand", "Art direction", "Système"]
  }
];
