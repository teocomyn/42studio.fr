// Prix sur devis : la grille commerciale du vault reste à arbitrer.
export const offers = [
  {
    slug: "brand-identity", number: "01", name: "Brand Identity", projectType: "Brand",
    need: "Créer une marque. Ou lui donner une nouvelle direction.",
    description: "Une identité qui pose le ton et reste cohérente partout où la marque apparaît.",
    duration: "2 à 3 semaines", servicePath: "/brand",
    deliverables: ["Positionnement et direction créative", "Logo, typographies et système visuel", "Charte et premiers supports de marque"],
    outcome: "Un système de marque prêt à être utilisé."
  },
  {
    slug: "digital-experience", number: "02", name: "Digital Experience", projectType: "Web",
    need: "Faire de votre site une vraie expérience de marque.",
    description: "Un site pensé du premier écran au dernier détail, avec le design et le développement sous la même direction.",
    duration: "3 à 6 semaines", servicePath: "/web",
    deliverables: ["Parcours, arborescence et design des écrans", "Développement responsive et interactions", "Recette, mise en ligne et prise en main"],
    outcome: "Une présence digitale qui montre ce qui vous distingue."
  },
  {
    slug: "brand-digital", number: "03", name: "Brand × Digital", projectType: "Brand × Digital",
    need: "Construire la marque et son site dans le même mouvement.",
    description: "De l’identité à l’expérience digitale, un seul fil créatif pour lancer ou repositionner la marque.",
    duration: "4 à 8 semaines", servicePath: "/services",
    deliverables: ["Stratégie, identité et direction artistique", "Site, design et développement", "Déclinaisons visuelles pour le lancement"],
    outcome: "Une marque et un site qui parlent le même langage."
  },
  {
    slug: "creative-campaign", number: "04", name: "Creative Campaign", projectType: "Direction artistique",
    need: "Donner une forme à votre prochain lancement.",
    description: "Concept, direction artistique, motion, 3D ou film : le format suit l’idée et les supports de diffusion.",
    duration: "Selon le périmètre", servicePath: "/direction-artistique",
    deliverables: ["Concept et direction artistique", "Production des visuels retenus", "Déclinaisons par support"],
    outcome: "Un langage visuel cohérent pour la campagne."
  },
  {
    slug: "creative-partner", number: "05", name: "Creative Partner", projectType: "Direction artistique",
    need: "Faire vivre votre marque dans la durée.",
    description: "Un accompagnement créatif régulier pour vos supports, vos campagnes et les évolutions du site. Capacité et rythme définis ensemble.",
    duration: "Accompagnement mensuel", servicePath: "/services",
    deliverables: ["Priorités créatives partagées", "Production selon la capacité convenue", "Suivi de la cohérence de marque"],
    outcome: "Une direction créative qui accompagne votre équipe."
  }
] as const;

export const projectTimelines = ["Dès que possible", "Dans 1 à 3 mois", "Dans 3 à 6 mois", "À définir ensemble"] as const;

export function getOffer(slug: string) {
  return offers.find((offer) => offer.slug === slug);
}
