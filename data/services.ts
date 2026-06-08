export type Service = {
  id: string;
  index: string;
  title: string;
  short: string;
  tags: string[];
  promise: string;
  deliverables: string[];
  href: string;
};

export const services: Service[] = [
  {
    id: "brand",
    index: "01",
    title: "Brand",
    short: "Stratégie, identité et système visuel pour des marques qui tiennent debout partout.",
    tags: ["Stratégie", "Naming", "Logo", "Charte", "Design system"],
    promise: "Un territoire clair, un signe fort, un langage visuel exploitable par toute l'equipe.",
    deliverables: [
      "Plateforme de marque",
      "Direction artistique",
      "Logo et variantes",
      "Charte graphique",
      "Kit social et deck"
    ],
    href: "/brand"
  },
  {
    id: "web",
    index: "02",
    title: "Web",
    short: "Sites vitrines, e-commerce et expériences web qui transforment l'identité en présence.",
    tags: ["Next.js", "Shopify", "E-commerce", "SEO", "Motion"],
    promise: "Un site rapide, mémorable, administrable et pensé pour convertir sans devenir banal.",
    deliverables: [
      "Architecture UX",
      "UI responsive",
      "Front-end anime",
      "Intégration CMS ou Shopify",
      "SEO technique"
    ],
    href: "/web"
  },
  {
    id: "produit",
    index: "03",
    title: "Produit",
    short: "Interfaces, apps et outils métier conçus comme des produits, pas comme des maquettes.",
    tags: ["SaaS", "UX", "Prototype", "Design Ops", "Build"],
    promise: "Des parcours lisibles, des composants robustes et une expérience qui supporte l'usage réel.",
    deliverables: [
      "Audit experience",
      "Wireframes",
      "Prototype haute fidélité",
      "Design system produit",
      "Front-end React"
    ],
    href: "/produit"
  }
];
