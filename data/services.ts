// Les quatre piliers de 42studio (positionnement validé), affichés sur l'accueil et /studio.
// Détail des sept expertises : data/creative-services.ts.
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
    short: "Stratégie, naming, identité visuelle et graphisme pour des marques qui se reconnaissent partout.",
    tags: ["Stratégie", "Naming", "Identité", "Graphisme", "Guidelines"],
    promise: "Une marque reconnaissable, du logo au dernier support.",
    deliverables: ["Plateforme de marque", "Logo et variantes", "Système visuel", "Guidelines et supports"],
    href: "/brand"
  },
  {
    id: "digital",
    index: "02",
    title: "Digital",
    short: "Sites de marque, portfolios, sites de campagne et e-commerce premium, conçus et développés sur mesure.",
    tags: ["Site de marque", "Portfolio", "E-commerce", "UI", "Creative dev"],
    promise: "Une expérience digitale mémorable, rapide et simple à faire vivre.",
    deliverables: ["Arborescence et maquettes", "Site développé et testé", "Back-office administrable", "Principes de mouvement"],
    href: "/web"
  },
  {
    id: "direction",
    index: "03",
    title: "Direction",
    short: "Concepts de campagne, lancements, identité social, direction photo, vidéo, motion et 3D.",
    tags: ["Concept", "Campagne", "Lancement", "Photo", "Vidéo"],
    promise: "Un langage visuel cohérent, d'une campagne à l'autre.",
    deliverables: ["Note d'intention", "Moodboards et références", "Concept et déclinaisons", "Direction de production"],
    href: "/direction-artistique"
  },
  {
    id: "production",
    index: "04",
    title: "Production",
    short: "Motion design, 3D, CGI et réalisation vidéo, produits avec les talents adaptés à chaque projet.",
    tags: ["Motion design", "3D", "CGI", "Vidéo", "Photo"],
    promise: "Les images qui font vivre la marque, produites par les bons talents.",
    deliverables: ["Vidéos animées", "Packshots et animations 3D", "Films de marque", "Formats pour les réseaux"],
    href: "/services#visual-production"
  }
];
