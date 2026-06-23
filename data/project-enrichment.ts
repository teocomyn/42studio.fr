type ProjectPatch = {
  summary?: string;
  year?: string;
  challenge?: string;
  approach?: string;
  result?: string;
  href?: string;
  featured?: boolean;
  highlights?: string[];
  disciplines?: Array<"brand" | "shopify" | "web">;
};

export const projectPatches: Record<string, ProjectPatch> = {
  "nussa-cosmetics": {
    year: "2024",
    featured: true,
    disciplines: ["brand", "shopify"],
    highlights: ["Lancement D2C", "Identité + Shopify", "Parcours mobile-first"],
    summary:
      "Création Shopify pour une marque de cosmétiques premium : parcours produit, identité digitale et conversion dès le lancement.",
    challenge:
      "Lancer une marque D2C avec une expérience e-commerce à la hauteur du positionnement produit, sans compromis sur la performance.",
    approach:
      "Architecture Shopify sur-mesure, direction front-end, fiches produit éditorialisées et parcours d'achat simplifié.",
    result:
      "Une boutique cohérente, rapide et prête à scaler : identité, UX et technique dans le même flux de production."
  },
  nutripure: {
    year: "2023",
    featured: true,
    disciplines: ["shopify"],
    highlights: ["Shopify Markets FR + COM", "CRO catalogue dense", "SEO technique"],
    summary:
      "Refonte et optimisation Shopify pour une marque de compléments : UX, CRO et déploiement multi-marchés (.fr / .com).",
    challenge:
      "Unifier l'expérience entre marchés francophone et international tout en améliorant la conversion sur un catalogue dense.",
    approach:
      "Restructuration des templates, optimisation mobile, SEO technique et préparation Shopify Markets.",
    result:
      "Parcours plus lisibles, base SEO solide et boutique prête pour la croissance internationale."
  },
  "second-step": {
    year: "2024",
    featured: true,
    disciplines: ["brand", "shopify"],
    highlights: ["Merchandising drops", "Sections custom", "Image mode premium"],
    summary:
      "Site Shopify mode : merchandising, drops et image de marque pensés pour une audience exigeante.",
    challenge: "Traduire une identité forte en expérience e-commerce sans sacrifier la vitesse ni la clarté.",
    approach: "Sections custom, grilles produit dynamiques et direction artistique cohérente sur tout le parcours.",
    result: "Une boutique qui porte la marque autant que le produit, prête pour les lancements réguliers."
  },
  apoticari: {
    year: "2024",
    featured: true,
    disciplines: ["brand", "shopify"],
    highlights: ["UX sensorielle", "Storytelling produit", "Conversion premium"],
    summary:
      "E-commerce beauté premium : UX sensorielle, storytelling produit et conversion sur Shopify.",
    challenge: "Créer une expérience haut de gamme sans alourdir le parcours d'achat.",
    approach: "Design system léger, fiches produit éditoriales et micro-interactions sobres.",
    result: "Une boutique élégante, performante et alignée avec le positionnement de la marque."
  },
  "on-the-wild-side": {
    year: "2023",
    summary: "Shopify beauté clean : catalogue, preuves produit et parcours d'achat optimisé."
  },
  locrillon: {
    year: "2023",
    summary: "Boutique Shopify pour une marque de mode : image éditoriale et navigation produit fluide."
  },
  "le-monde-sauvage": {
    year: "2022",
    summary: "E-commerce Shopify pour une marque lifestyle : merchandising et UX orientés conversion."
  },
  novemlab: {
    year: "2024",
    summary: "Création Shopify pour une marque skincare : storytelling, preuves et tunnel d'achat clarifié."
  },
  "maison-jearom": {
    year: "2023",
    summary: "Site Shopify maison & décoration : catalogue structuré et expérience premium."
  },
  "studio-boucle-paris": {
    year: "2023",
    featured: true,
    disciplines: ["brand", "shopify"],
    highlights: ["Refonte UX complète", "Sections Liquid custom", "Base SEO + CRO"],
    summary:
      "Refonte UX Shopify, sections sur-mesure et base CRO/SEO pour une marque mode parisienne.",
    challenge:
      "Moderniser une boutique existante sans perdre l'ADN de marque ni impacter le trafic organique.",
    approach:
      "Audit UX, refonte home/collection/produit, sections Liquid custom et fondations SEO technique.",
    result:
      "Parcours plus performants, structure SEO renforcée et base solide pour les campagnes acquisition."
  },
  novagla: {
    year: "2024",
    summary: "Shopify pour une marque verrerie : mise en valeur produit et checkout optimisé."
  },
  "champagne-amis-de-beauregard": {
    year: "2022",
    summary: "E-commerce viticole : storytelling de domaine, catalogue et conversion sur Shopify."
  },
  "bulles-signature": {
    year: "2023",
    summary: "Boutique champagne premium : UX élégante et parcours d'achat cadeau simplifié."
  },
  themelioo: {
    year: "2024",
    summary: "Shopify pour une marque bien-être : preuves, abonnements et UX mobile-first."
  },
  appart17: {
    year: "2023",
    summary: "E-commerce décoration belge : catalogue riche et navigation par univers produit."
  },
  "la-pelucherie": {
    year: "2022",
    summary: "Shopify pour une marque peluche premium : émotion produit et conversion famille."
  },
  shopdermopro: {
    year: "2023",
    summary: "Boutique B2B/pro Shopify : catalogue technique et parcours de commande clarifié."
  },
  "pro-roc": {
    year: "2022",
    href: "https://pro-roc.fr/",
    summary: "E-commerce B2B : devis, catalogue pro et UX adaptée aux acheteurs métier."
  },
  lumihome: {
    year: "2024",
    summary: "Shopify luminaires : merchandising, fiches produit détaillées et CRO."
  },
  "amoses-clothing": {
    year: "2023",
    summary: "Mode streetwear sur Shopify : drops, lookbook et expérience mobile."
  },
  "sibylle-de-tavernost": {
    year: "2023",
    summary: "Maison & lifestyle premium : image éditoriale et boutique Shopify sur-mesure."
  },
  hytrape: {
    year: "2022",
    summary: "Marketplace créateurs sur Shopify : UX multi-vendeurs et découverte produit."
  },
  laborantin: {
    year: "2024",
    summary: "E-commerce santé : parcours pédagogique, confiance et conversion."
  },
  "mindy-toy": {
    year: "2024",
    summary: "Optimisation Shopify jouets : UX famille, mobile et tunnel d'achat simplifié."
  },
  "saphir-solaire": {
    year: "2024",
    summary: "Boutique solaire/énergie : catalogue technique et lead generation e-commerce."
  },
  neije: {
    year: "2023",
    summary: "Bijoux premium sur Shopify : storytelling, preuves et expérience haut de gamme."
  },
  "dossiers-criminels": {
    year: "2023",
    summary: "E-commerce jeu/édition : storytelling immersif et conversion sur Shopify."
  },
  felco: {
    year: "2022",
    summary: "Shopify international outillage : catalogue dense, UX pro et SEO technique."
  },
  "table-festive": {
    year: "2023",
    summary: "Événementiel & location : parcours devis et présentation offre sur Shopify."
  },
  "amel-atelier": {
    year: "2024",
    summary: "Mode féminine : boutique Shopify éditoriale et merchandising saisonnier."
  },
  "piano-led-shop": {
    year: "2023",
    summary: "Produit technique premium : fiches détaillées, preuves sociales et CRO."
  },
  "cosy-coffee": {
    year: "2023",
    summary: "Torréfacteur D2C : storytelling marque, abonnements et UX chaleureuse."
  },
  wazy: {
    year: "2024",
    summary: "CBD/wellness Shopify : conformité, pédagogie produit et conversion."
  },
  "geep-for-good": {
    year: "2023",
    summary: "Abonnement & impact : parcours panier et récurrence optimisés sur Shopify."
  },
  artefiko: {
    year: "2023",
    summary: "Design intérieur : catalogue visuel et expérience d'achat premium."
  },
  "112mode": {
    year: "2024",
    summary: "Mode & drops : boutique Shopify rapide à mettre à jour et orientée conversion."
  },
  "sublife-store": {
    year: "2024",
    featured: true,
    disciplines: ["brand", "shopify"],
    highlights: ["Boutique merch haute visibilité", "Drop-ready", "Mobile-first"],
    summary:
      "Création Shopify pour Sublife Store, la marque merch de Booba : culture, drops et expérience fan.",
    challenge: "Lancer une boutique merch à fort volume d'attention avec une exigence visuelle maximale.",
    approach: "Front Shopify performant, merchandising drop-ready et parcours mobile optimisé.",
    result: "Une boutique prête pour les pics de trafic et les lancements produits."
  },
  nalisa: {
    year: "2023",
    summary: "Puériculture Shopify : confiance parent, UX claire et conversion mobile."
  },
  profitys: {
    year: "2024",
    featured: true,
    disciplines: ["brand", "web"],
    highlights: ["Migration Wix → Framer", "Positionnement B2B", "Lead generation"],
    summary:
      "Site vitrine B2B : positionnement, génération de leads et clarté de l'offre.",
    challenge: "Rendre une offre complexe lisible pour des décideurs pressés.",
    approach: "Architecture de contenu, pages services structurées et formulaires de contact optimisés.",
    result: "Un site crédible, rapide et orienté prise de contact qualifiée."
  },
  "digit-solution": {
    year: "2023",
    summary: "Site vitrine SaaS : proposition de valeur, preuves et conversion lead."
  },
  "thomas-comyn-osteo": {
    year: "2022",
    summary: "Site vitrine local : prise de RDV, SEO local et image professionnelle."
  },
  "arras-patrimoine": {
    year: "2023",
    summary: "Finance/patrimoine : site vitrine institutionnel et génération de leads."
  },
  kyrent: {
    year: "2025",
    featured: true,
    disciplines: ["web"],
    highlights: ["Site produit SaaS", "Parcours vers démo", "UX B2B claire"],
    summary:
      "Site vitrine SaaS immobilier : positionnement produit, UX claire et conversion essai.",
    challenge: "Expliquer un produit technique à des professionnels immobiliers en quelques secondes.",
    approach: "Wireframe orienté bénéfices, sections preuves et parcours vers la démo.",
    result: "Un site produit crédible, prêt pour l'acquisition organique et paid."
  },
  "hotel-jeu-de-paume": {
    year: "2023",
    summary: "Hôtellerie : site vitrine élégant, réservation et SEO local."
  },
  "hotel-angleterre-versailles": {
    year: "2024",
    summary: "Hôtel 4* Versailles : image premium, multilingue et parcours réservation."
  }
};

export function applyProjectPatch<T extends { slug: string }>(project: T): T {
  const patch = projectPatches[project.slug];
  if (!patch) return project;
  return { ...project, ...patch };
}

export const featuredSlugs = Object.entries(projectPatches)
  .filter(([, patch]) => patch.featured)
  .map(([slug]) => slug);
