import type { Project } from "@/data/projects";

export type CaseStudySection = {
  id: string;
  title: string;
  kicker: string;
  paragraphs: string[];
  bullets?: string[];
  table?: Array<{ label: string; value: string }>;
};

export type CaseStudy = {
  headline: string;
  clientIntro: string;
  missionIntro: string;
  industry: string;
  sections: CaseStudySection[];
};

export type CaseStudyOverride = Partial<
  Pick<CaseStudy, "headline" | "clientIntro" | "missionIntro" | "industry"> & {
    sections?: Partial<CaseStudySection>[];
  }
>;

const industryBySlug: Record<string, string> = {
  "nussa-cosmetics": "Beauté & Cosmétiques",
  nutripure: "Nutrition & Compléments",
  "second-step": "Mode",
  apoticari: "Beauté premium",
  "on-the-wild-side": "Cosmétique clean",
  locrillon: "Mode",
  "le-monde-sauvage": "Lifestyle",
  novemlab: "Skincare",
  "maison-jearom": "Maison & Décoration",
  "studio-boucle-paris": "Mode",
  novagla: "Art de la table",
  "champagne-amis-de-beauregard": "Viticole",
  "bulles-signature": "Champagne premium",
  themelioo: "Bien-être",
  appart17: "Décoration",
  "la-pelucherie": "Puériculture premium",
  shopdermopro: "Dermocosmétique B2B",
  "pro-roc": "B2B Industrie",
  lumihome: "Luminaires",
  "amoses-clothing": "Streetwear",
  "sibylle-de-tavernost": "Maison & Lifestyle",
  hytrape: "Marketplace créateurs",
  laborantin: "Santé",
  neije: "Bijoux premium",
  "dossiers-criminels": "Culture & Édition",
  felco: "Outillage pro",
  "table-festive": "Événementiel",
  "amel-atelier": "Mode féminine",
  "piano-led-shop": "Produit technique premium",
  "cosy-coffee": "Torréfaction D2C",
  wazy: "CBD & Wellness",
  "geep-for-good": "Impact & Abonnement",
  artefiko: "Design intérieur",
  "112mode": "Mode & Drops",
  "sublife-store": "Culture & Merch",
  nalisa: "Puériculture",
  profitys: "Finance B2B",
  "digit-solution": "SaaS",
  "thomas-comyn-osteo": "Santé local",
  "arras-patrimoine": "Finance & Patrimoine",
  kyrent: "SaaS Immobilier",
  "hotel-jeu-de-paume": "Hôtellerie",
  "hotel-angleterre-versailles": "Hôtellerie premium"
};

function isShopify(project: Project) {
  return project.category === "E-commerce Shopify";
}

function hasBrand(project: Project) {
  return project.disciplines?.includes("brand") ?? project.services.some((s) => ["DA", "Brand", "Identité"].includes(s));
}

function shopifyDevTable(project: Project) {
  return [
    { label: "Plateforme", value: "Shopify Online Store 2.0" },
    { label: "Front-end", value: "Thème sur-mesure + sections Liquid custom" },
    { label: "Contenu", value: "CMS Shopify (pages, collections, fiches produit)" },
    { label: "Merchandising", value: "Grilles produit, drops et navigation optimisée" },
    { label: "Performance", value: "Images WebP, lazy loading, scripts allégés" },
    { label: "Mobile", value: "Parcours mobile-first et checkout simplifié" },
    ...(project.secondaryHrefs?.length
      ? [{ label: "International", value: "Shopify Markets / variantes multi-sites" }]
      : [])
  ];
}

function webDevTable(project: Project) {
  const stack = project.slug === "profitys" ? "Framer" : project.slug === "kyrent" ? "Next.js" : "Stack moderne (Next.js / Framer)";
  return [
    { label: "Stack", value: stack },
    { label: "Architecture", value: "Pages structurées par intention de conversion" },
    { label: "Contenu", value: "Sections modulaires et mises à jour autonomes" },
    { label: "SEO", value: "Métadonnées, sitemap, balisage sémantique" },
    { label: "Performance", value: "Rendu optimisé, images compressées, Core Web Vitals" },
    { label: "Conversion", value: "CTA, formulaires et parcours contact clarifiés" }
  ];
}

function buildShopifySections(project: Project): CaseStudySection[] {
  const brand = hasBrand(project);
  const sections: CaseStudySection[] = [];

  if (brand) {
    sections.push({
      id: "identite",
      title: "Identité & direction artistique",
      kicker: "Une marque lisible dès la première seconde",
      paragraphs: [
        `${project.title} avait besoin d'une présence e-commerce qui porte son positionnement sans diluer l'ADN produit. L'enjeu : traduire une identité forte en expérience digitale crédible, moderne et mémorisable.`,
        project.challenge ??
          "Harmoniser image de marque, clarté produit et exigence de performance sur un parcours entièrement digital.",
        project.approach ??
          "Direction artistique appliquée au e-commerce : typographie, rythme visuel, hiérarchie éditoriale et cohérence sur home, collections et fiches produit."
      ],
      bullets: [
        "Registre visuel aligné avec le positionnement premium de la marque",
        "Système de composants réutilisables pour les lancements et campagnes",
        "Équilibre entre émotion produit et clarté du parcours d'achat"
      ]
    });
  }

  sections.push({
    id: "ux-ui",
    title: "UX & UI Design",
    kicker: "Des interfaces pensées pour convertir",
    paragraphs: [
      `Chaque écran a été conçu pour réduire la friction : navigation produit fluide, preuves visibles et hiérarchie d'information adaptée au mobile.`,
      project.approach ??
        "Wireframes orientés conversion, maquettes haute fidélité et itérations sur les pages clés (home, collection, produit, panier).",
      project.result ??
        "Un parcours plus lisible, plus rapide et plus crédible pour soutenir acquisition et réachat."
    ],
    bullets: [
      "Home orientée bénéfices et best-sellers",
      "Fiches produit éditorialisées avec preuves et cross-sell",
      "Mobile-first : 70 %+ du trafic e-commerce pris en compte dès la conception"
    ]
  });

  sections.push({
    id: "developpement",
    title: "Développement Shopify",
    kicker: "Une boutique pensée pour évoluer vite",
    paragraphs: [
      `L'intégration Shopify de ${project.title} repose sur un thème sur-mesure, des sections paramétrables et une base technique propre pour itérer sans dette.`,
      "Chaque bloc est pensé pour être mis à jour par l'équipe client : contenus, visuels, merchandising et pages landing sans repasser par du code lourd.",
      "La stack reste légère pour préserver la vitesse de chargement, même sur catalogue dense ou pics de trafic."
    ],
    table: shopifyDevTable(project)
  });

  sections.push({
    id: "cro-seo",
    title: "CRO & SEO",
    kicker: "Visibilité et conversion intégrées dès la conception",
    paragraphs: [
      "Le SEO technique et le CRO ne sont pas des couches ajoutées en fin de projet : structure des URLs, balisage Hn, métadonnées et temps de chargement sont traités dès le design.",
      project.result ??
        "Une base solide pour le trafic organique, les campagnes paid et l'optimisation continue du tunnel d'achat.",
      `Pour ${project.title}, l'objectif est un site qui performe autant en acquisition qu'en conversion, sur le long terme.`
    ],
    bullets: [
      "Architecture sémantique home / collections / produits",
      "Optimisation mobile et checkout simplifié",
      "Fondations prêtes pour A/B tests et itérations CRO"
    ]
  });

  return sections;
}

function buildWebSections(project: Project): CaseStudySection[] {
  return [
    {
      id: "positionnement",
      title: "Positionnement & message",
      kicker: "Clarifier l'offre avant de designer",
      paragraphs: [
        `${project.title} devait rendre une proposition de valeur complexe immédiatement compréhensible pour des visiteurs pressés.`,
        project.challenge ??
          "Structurer le message, hiérarchiser les preuves et orienter vers la prise de contact ou la conversion.",
        project.approach ??
          "Atelier de cadrage, architecture de contenu et pages pensées par intention (découverte, preuve, action)."
      ],
      bullets: [
        "Proposition de valeur visible above the fold",
        "Preuves sociales et cas concrets positionnés en amont des CTA",
        "Ton éditorial aligné avec la crédibilité du secteur"
      ]
    },
    {
      id: "web-design",
      title: "Web Design",
      kicker: "Un site qui inspire confiance",
      paragraphs: [
        "Le design traduit le niveau de service attendu : espaces aérés, typographie affirmée et rythme visuel cohérent sur l'ensemble du parcours.",
        project.approach ??
          "Maquettes desktop et mobile, composants réutilisables et direction artistique alignée avec l'identité existante ou en cours de définition.",
        project.result ?? "Une expérience premium, lisible et mémorisable."
      ],
      bullets: [
        "Grilles modulaires pour faire évoluer le site sans rupture",
        "Sections preuves, FAQ et services structurées",
        "Accessibilité et contrastes vérifiés sur les parcours clés"
      ]
    },
    {
      id: "developpement",
      title: "Développement",
      kicker: "Rapide, stable, prêt à scaler",
      paragraphs: [
        `Le site de ${project.title} est construit pour durer : stack moderne, code maintenable et performances mesurables.`,
        "Les pages critiques (accueil, services, contact) sont optimisées pour le référencement et la conversion dès le lancement.",
        "L'équipe client peut faire évoluer contenus et sections sans friction technique majeure."
      ],
      table: webDevTable(project)
    },
    {
      id: "seo-conversion",
      title: "SEO & Conversion",
      kicker: "Être trouvé, puis convaincre",
      paragraphs: [
        "Chaque page cible une intention de recherche ou un moment du parcours décisionnel, avec des balises title/description individualisées.",
        project.result ??
          "Un site crédible, indexable et orienté génération de leads ou prises de contact qualifiées.",
        "Les fondations techniques permettent d'enrichir le contenu SEO sans refonte structurelle."
      ],
      bullets: [
        "Sitemap, métadonnées Open Graph et structure Hn cohérente",
        "Formulaires et CTA testés sur mobile",
        "Base prête pour contenus blog, landing pages et campagnes"
      ]
    }
  ];
}

function defaultClientIntro(project: Project, industry: string) {
  return `${project.title} est une marque ${industry.toLowerCase()} qui s'adresse à une audience exigeante. ${project.summary} Le site live reflète un positionnement clair, une expérience soignée et une exécution technique rigoureuse.`;
}

function defaultMissionIntro(project: Project) {
  const scope = isShopify(project)
    ? "direction front-end Shopify, UX e-commerce et fondations CRO/SEO"
    : "positionnement, web design, développement et conversion";
  return `42studio a accompagné ${project.title} sur ${scope}. L'objectif : livrer une présence digitale cohérente, performante et prête à soutenir la croissance commerciale.`;
}

function defaultHeadline(project: Project) {
  if (isShopify(project)) {
    return hasBrand(project)
      ? `Identité et Shopify sur-mesure pour ${project.title}`
      : `Design et Shopify orientés conversion pour ${project.title}`;
  }
  return `Site vitrine premium et orienté conversion pour ${project.title}`;
}

const overrides: Record<string, CaseStudyOverride> = {
  "nussa-cosmetics": {
    clientIntro:
      "Nussa Cosmetics est une marque de cosmétiques premium en lancement D2C. Le produit est exigeant, l'identité aussi : il fallait une boutique capable de porter cette promesse dès le premier jour, sans compromis sur la performance ni sur la clarté du parcours d'achat.",
    missionIntro:
      "42studio a conçu et développé la boutique Shopify de Nussa : direction front-end, fiches produit éditorialisées, architecture mobile-first et base prête pour scaler acquisition et réassort.",
    headline: "Lancement Shopify premium pour une marque cosmétiques D2C"
  },
  nutripure: {
    clientIntro:
      "Nutripure est une référence française des compléments alimentaires. Avec un catalogue dense et une ambition internationale (.fr / .com), la marque avait besoin d'une expérience e-commerce plus lisible, plus performante et prête pour Shopify Markets.",
    missionIntro:
      "42studio a piloté la refonte UX, la restructuration des templates Shopify, l'optimisation mobile et les fondations SEO technique pour unifier les marchés sans perdre en conversion.",
    headline: "Refonte Shopify multi-marchés pour une marque nutrition leader"
  },
  "second-step": {
    clientIntro:
      "Second Step est une marque mode avec une identité forte et des lancements réguliers. Le e-commerce devait devenir un levier éditorial autant qu'un canal de vente, sans alourdir l'expérience ni ralentir les mises à jour.",
    missionIntro:
      "42studio a traduit cette exigence en boutique Shopify drop-ready : sections custom, merchandising dynamique et direction artistique cohérente sur tout le parcours.",
    headline: "Boutique mode Shopify pensée pour les drops et l'image de marque"
  },
  apoticari: {
    clientIntro:
      "Apoticari incarne une beauté premium, sensorielle et exigeante. Le défi : créer une expérience e-commerce élégante qui prolonge l'univers produit sans friction au moment d'acheter.",
    missionIntro:
      "42studio a conçu une boutique Shopify à la hauteur du positionnement : storytelling produit, UX sensorielle, micro-interactions sobres et conversion optimisée.",
    headline: "E-commerce beauté premium : UX sensorielle et conversion Shopify"
  },
  "studio-boucle-paris": {
    clientIntro:
      "Studio Boucle Paris est une marque mode parisienne avec une clientèle fidèle et un trafic organique à préserver. La boutique existante devait évoluer sans casser l'ADN ni la performance SEO.",
    missionIntro:
      "42studio a mené la refonte UX complète, développé des sections Liquid sur-mesure et posé une base CRO/SEO solide pour les campagnes à venir.",
    headline: "Refonte UX Shopify et sections custom pour une marque mode parisienne"
  },
  "sublife-store": {
    clientIntro:
      "Sublife Store est la boutique merch de Booba : forte visibilité, pics de trafic, attentes visuelles maximales. Le site devait encaisser l'attention, convertir vite et rester simple à mettre à jour.",
    missionIntro:
      "42studio a livré une boutique Shopify performante, drop-ready et mobile-first, pensée pour les lancements produits à fort volume.",
    headline: "Boutique merch haute visibilité, drop-ready sur Shopify"
  },
  profitys: {
    clientIntro:
      "Profitys accompagne les dirigeants sur l'optimisation fiscale. L'offre est complexe, la cible pressée : le site devait inspirer confiance et clarifier la proposition en quelques secondes.",
    missionIntro:
      "42studio a piloté la migration Wix → Framer, restructuré le message et optimisé les parcours de prise de contact pour une génération de leads plus qualifiée.",
    headline: "Migration Framer et repositionnement B2B pour Profitys"
  },
  kyrent: {
    clientIntro:
      "Kyrent est un produit SaaS à destination des professionnels de l'immobilier. Il fallait expliquer une promesse technique en langage business, rapidement, avec un parcours clair vers la démo.",
    missionIntro:
      "42studio a conçu un site produit Next.js orienté bénéfices : wireframes, sections preuves, UX B2B claire et fondations SEO prêtes pour l'acquisition.",
    headline: "Site produit SaaS immobilier orienté conversion démo"
  }
};

function mergeSections(base: CaseStudySection[], patch?: Partial<CaseStudySection>[]) {
  if (!patch?.length) return base;
  return base.map((section, index) => ({
    ...section,
    ...(patch[index] ?? {})
  }));
}

export function getCaseStudy(project: Project): CaseStudy {
  const industry = overrides[project.slug]?.industry ?? industryBySlug[project.slug] ?? "E-commerce";
  const baseSections = isShopify(project) ? buildShopifySections(project) : buildWebSections(project);
  const override = overrides[project.slug];

  return {
    headline: override?.headline ?? defaultHeadline(project),
    clientIntro: override?.clientIntro ?? defaultClientIntro(project, industry),
    missionIntro: override?.missionIntro ?? defaultMissionIntro(project),
    industry,
    sections: mergeSections(baseSections, override?.sections)
  };
}

export function getRelatedProjects(project: Project, all: Project[], limit = 4) {
  return all
    .filter((item) => item.slug !== project.slug && item.image)
    .sort((a, b) => {
      const score = (item: Project) =>
        (item.category === project.category ? 2 : 0) +
        (item.featured ? 1 : 0) +
        (industryBySlug[item.slug] === industryBySlug[project.slug] ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);
}
