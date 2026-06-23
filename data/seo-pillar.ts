export type SeoKeywordBlock = {
  id: string;
  keyword: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  bullets: string[];
  href: string;
  hrefLabel: string;
  caseSlugs?: string[];
};

export type SeoPillarCluster = {
  id: string;
  label: string;
  intro: string;
  keywords: SeoKeywordBlock[];
};

export const seoPillarMeta = {
  slug: "agence-shopify-branding-web",
  title: "Agence Shopify, Branding & Web à Arras",
  description:
    "42studio : agence Shopify France, expert freelance, branding e-commerce, création site sur mesure et studio créatif à Arras. Refonte Shopify, identité visuelle et CRO.",
  h1: "Agence Shopify, branding et web sur mesure.",
  intro:
    "Un seul studio pour votre marque, votre site et votre boutique. 42studio accompagne les marques ambitieuses en France depuis Arras : identité, e-commerce Shopify, sites vitrines SaaS et optimisation conversion.",
  proofPoints: [
    "+60 marques",
    "Shopify · Brand · Web",
    "Arras · France · Worldwide",
    "Réponse sous 24 h"
  ]
};

export const seoPillarKeywords = [
  "agence Shopify France",
  "refonte Shopify",
  "création boutique Shopify",
  "expert Shopify freelance",
  "agence web Arras",
  "création site internet sur mesure",
  "refonte site vitrine",
  "création identité de marque",
  "agence branding France",
  "branding e-commerce",
  "optimisation Shopify conversion",
  "studio créatif Arras",
  "branding Arras",
  "site vitrine SaaS",
  "refonte identité visuelle"
] as const;

export const seoPillarClusters: SeoPillarCluster[] = [
  {
    id: "shopify",
    label: "Shopify & E-commerce",
    intro:
      "Boutiques premium, refontes UX, sections Liquid sur-mesure et CRO intégré. 42studio intervient comme agence Shopify en France et expert freelance sur des projets exigeants.",
    keywords: [
      {
        id: "agence-shopify-france",
        keyword: "agence Shopify France",
        kicker: "E-commerce premium",
        title: "Une agence Shopify France orientée marque et conversion",
        paragraphs: [
          "42studio conçoit des boutiques Shopify pour des marques qui refusent le template générique. Direction front-end, UX e-commerce, identité digitale et fondations SEO dans le même flux.",
          "Nutripure, Nussa Cosmetics, Second Step, Sublife Store : des projets où le Shopify n'est pas qu'une vitrine, c'est le canal principal de croissance."
        ],
        bullets: [
          "Thèmes Shopify 2.0 sur-mesure et sections paramétrables",
          "Shopify Markets et variantes internationales",
          "Accompagnement senior, sans couche agence inutile"
        ],
        href: "/shopify",
        hrefLabel: "Expertise Shopify",
        caseSlugs: ["nutripure", "nussa-cosmetics", "sublife-store"]
      },
      {
        id: "refonte-shopify",
        keyword: "refonte Shopify",
        kicker: "Modernisation",
        title: "Refonte Shopify sans perdre trafic ni ADN de marque",
        paragraphs: [
          "Une refonte Shopify bien menée préserve le SEO, clarifie le parcours d'achat et modernise l'image sans repartir de zéro.",
          "Studio Boucle Paris, Nutripure : audit UX, templates restructurés, sections custom et base technique prête pour scaler."
        ],
        bullets: [
          "Audit UX, CRO et SEO avant la refonte",
          "Redirections 301 et continuité organique",
          "Livraison itérative, réactive et documentée"
        ],
        href: "/shopify",
        hrefLabel: "Refonte Shopify",
        caseSlugs: ["studio-boucle-paris", "nutripure"]
      },
      {
        id: "creation-boutique-shopify",
        keyword: "création boutique Shopify",
        kicker: "Lancement",
        title: "Création boutique Shopify prête à convertir dès le jour 1",
        paragraphs: [
          "Du lancement D2C à la boutique merch haute visibilité, 42studio structure home, collections, fiches produit et checkout pour une conversion immédiate.",
          "Chaque boutique est pensée mobile-first, rapide à mettre à jour et alignée avec le positionnement produit."
        ],
        bullets: [
          "Architecture merchandising et storytelling produit",
          "Fiches produit éditorialisées et preuves sociales",
          "Formation à la prise en main Shopify"
        ],
        href: "/shopify",
        hrefLabel: "Créer ma boutique",
        caseSlugs: ["nussa-cosmetics", "apoticari", "second-step"]
      },
      {
        id: "expert-shopify-freelance",
        keyword: "expert Shopify freelance",
        kicker: "Senior · Direct",
        title: "Expert Shopify freelance : Liquid, CRO et exécution rapide",
        paragraphs: [
          "Pas de junior caché derrière un compte : vous travaillez avec un profil senior qui maîtrise Liquid, UX e-commerce, SEO technique et CRO.",
          "Idéal pour les refontes urgentes, les sections sur-mesure, les optimisations conversion et les projets où la réactivité compte."
        ],
        bullets: [
          "Interlocuteur unique du brief au déploiement",
          "Sections Liquid custom et intégrations tierces",
          "Collaboration fluide avec vos équipes marketing ou produit"
        ],
        href: "/contact",
        hrefLabel: "Parler à l'expert",
        caseSlugs: ["studio-boucle-paris", "nutripure"]
      },
      {
        id: "optimisation-shopify-conversion",
        keyword: "optimisation Shopify conversion",
        kicker: "CRO · Performance",
        title: "Optimisation Shopify conversion : UX, vitesse et tunnel d'achat",
        paragraphs: [
          "Le CRO Shopify ne se limite pas à changer un bouton. Structure des pages, preuves, mobile, vitesse de chargement et clarté du checkout sont traités ensemble.",
          "Des recommandations priorisées, actionnables et mesurables, avec un focus sur l'impact business dès les premières semaines."
        ],
        bullets: [
          "Audit parcours home → produit → panier → checkout",
          "Optimisation mobile et Core Web Vitals",
          "Itérations CRO compatibles avec votre stack marketing"
        ],
        href: "/shopify",
        hrefLabel: "Optimiser ma boutique",
        caseSlugs: ["studio-boucle-paris", "nutripure", "apoticari"]
      },
      {
        id: "branding-ecommerce",
        keyword: "branding e-commerce",
        kicker: "Marque · Boutique",
        title: "Branding e-commerce : identité et Shopify dans le même studio",
        paragraphs: [
          "Le branding e-commerce aligne identité visuelle, ton éditorial et expérience boutique. Plus de rupture entre la charte PDF et le site live.",
          "42studio conçoit des marques D2C où chaque pixel sert la conversion et la mémorisation."
        ],
        bullets: [
          "Identité pensée pour l'écran et le parcours d'achat",
          "Direction artistique cohérente sur ads, social et boutique",
          "Lancement ou refonte brand + Shopify en continu"
        ],
        href: "/brand",
        hrefLabel: "Branding e-commerce",
        caseSlugs: ["nussa-cosmetics", "second-step", "apoticari"]
      }
    ]
  },
  {
    id: "web",
    label: "Web & Sites vitrines",
    intro:
      "Sites sur mesure, rapides et orientés conversion. De la vitrine institutionnelle au site produit SaaS, 42studio conçoit des expériences web premium.",
    keywords: [
      {
        id: "agence-web-arras",
        keyword: "agence web Arras",
        kicker: "Local · Premium",
        title: "Agence web Arras avec une exigence internationale",
        paragraphs: [
          "Basé à Arras, 42studio accompagne les entreprises des Hauts-de-France et au-delà avec des sites sur mesure, pas des templates recyclés.",
          "Proximité quand vous en avez besoin, exécution digitale partout en France."
        ],
        bullets: [
          "Sites vitrines, SaaS et landing pages sur mesure",
          "Stack moderne : Next.js, Framer, SEO technique",
          "Un interlocuteur senior du cadrage au déploiement"
        ],
        href: "/web",
        hrefLabel: "Agence web Arras",
        caseSlugs: ["profitys", "kyrent", "hotel-angleterre-versailles"]
      },
      {
        id: "creation-site-internet-sur-mesure",
        keyword: "création site internet sur mesure",
        kicker: "Sur-mesure",
        title: "Création site internet sur mesure, pas un template",
        paragraphs: [
          "Chaque site est construit autour de votre positionnement, de vos preuves et de votre parcours de conversion. Design system, contenu structuré et performance mesurable.",
          "L'objectif : un site crédible, rapide et prêt à évoluer sans refonte tous les 18 mois."
        ],
        bullets: [
          "Maquettes haute fidélité et direction artistique intégrée",
          "Architecture de contenu orientée SEO et leads",
          "Administration autonome et composants réutilisables"
        ],
        href: "/web",
        hrefLabel: "Site sur mesure",
        caseSlugs: ["profitys", "kyrent"]
      },
      {
        id: "refonte-site-vitrine",
        keyword: "refonte site vitrine",
        kicker: "Modernisation",
        title: "Refonte site vitrine : message, design et technique alignés",
        paragraphs: [
          "Une refonte site vitrine réussie clarifie l'offre, modernise l'image et préserve la visibilité organique.",
          "Migration Wix → Framer pour Profitys, sites hôteliers premium : chaque refonte part d'un audit du message et du trafic existant."
        ],
        bullets: [
          "Repositionnement éditorial et hiérarchie des preuves",
          "Redirections SEO et continuité de l'indexation",
          "Design premium et performances Core Web Vitals"
        ],
        href: "/web",
        hrefLabel: "Refonte vitrine",
        caseSlugs: ["profitys", "hotel-angleterre-versailles"]
      },
      {
        id: "site-vitrine-saas",
        keyword: "site vitrine SaaS",
        kicker: "Produit B2B",
        title: "Site vitrine SaaS : expliquer, convaincre, convertir",
        paragraphs: [
          "Un site vitrine SaaS doit traduire une promesse technique en bénéfices business en quelques secondes. Wireframes orientés conversion, sections preuves et parcours vers la démo.",
          "Kyrent, Digit Solution : des sites produit pensés pour l'acquisition organique et paid."
        ],
        bullets: [
          "Pages produit structurées par persona (décideur, utilisateur)",
          "Parcours vers démo, essai ou contact qualifié",
          "SEO technique et contenus indexables sans JavaScript bloquant"
        ],
        href: "/produit",
        hrefLabel: "Site SaaS",
        caseSlugs: ["kyrent", "digit-solution"]
      }
    ]
  },
  {
    id: "brand",
    label: "Branding & Identité",
    intro:
      "Identités de marque complètes, chartes activables et refontes visuelles. 42studio travaille le branding comme un système, pas comme un logo isolé.",
    keywords: [
      {
        id: "creation-identite-de-marque",
        keyword: "création identité de marque",
        kicker: "Identité",
        title: "Création identité de marque pensée pour le digital",
        paragraphs: [
          "Logo, typographie, couleur, ton et règles d'usage : une identité construite pour vivre sur site web, social, packaging et campagnes.",
          "La création identité de marque chez 42studio commence par le positionnement, pas par la décoration."
        ],
        bullets: [
          "Plateforme de marque et territoire créatif",
          "Charte graphique activable par vos équipes",
          "Kit digital prêt pour le web et l'e-commerce"
        ],
        href: "/brand",
        hrefLabel: "Créer mon identité",
        caseSlugs: ["nussa-cosmetics", "second-step"]
      },
      {
        id: "agence-branding-france",
        keyword: "agence branding France",
        kicker: "National",
        title: "Agence branding France : stratégie, DA et déploiement",
        paragraphs: [
          "42studio intervient comme agence branding en France pour des marques D2C, SaaS, institutions et e-commerces premium.",
          "Un seul studio pour la stratégie de marque, la direction artistique et le déploiement digital."
        ],
        bullets: [
          "Branding + site + Shopify sans rupture de qualité",
          "+60 marques accompagnées depuis 2018",
          "Process clair, livrables exploitables, réactivité senior"
        ],
        href: "/brand",
        hrefLabel: "Agence branding",
        caseSlugs: ["apoticari", "sublife-store"]
      },
      {
        id: "refonte-identite-visuelle",
        keyword: "refonte identité visuelle",
        kicker: "Évolution",
        title: "Refonte identité visuelle sans effacer ce qui fonctionne",
        paragraphs: [
          "Moderniser une marque existante demande de trancher : conserver l'équité de marque, clarifier le positionnement et déployer un système visuel cohérent.",
          "La refonte identité visuelle est souvent couplée à une refonte site ou Shopify pour un impact immédiat."
        ],
        bullets: [
          "Audit de l'existant et recommandations priorisées",
          "Logo, palette, typo et règles de composition",
          "Déclinaisons web, social, print et e-commerce"
        ],
        href: "/brand",
        hrefLabel: "Refonte identité",
        caseSlugs: ["second-step", "studio-boucle-paris"]
      }
    ]
  },
  {
    id: "local",
    label: "Arras & Studio",
    intro:
      "Studio créatif basé à Arras, disponible partout en France. Branding local, web sur mesure et Shopify pour les marques ambitieuses des Hauts-de-France.",
    keywords: [
      {
        id: "studio-creatif-arras",
        keyword: "studio créatif Arras",
        kicker: "Studio",
        title: "Studio créatif Arras : brand, web et produit",
        paragraphs: [
          "42studio est un studio créatif à Arras qui refuse la logique agence à couches. Direction créative et technique par le même profil senior.",
          "Brand, web, Shopify et produit digital : une seule logique de bout en bout."
        ],
        bullets: [
          "Basé à Arras, projets France & international",
          "Méthode en 5 étapes, livrables activables",
          "Portfolio de +60 marques et case studies détaillées"
        ],
        href: "/studio",
        hrefLabel: "Découvrir le studio",
        caseSlugs: ["nussa-cosmetics", "profitys", "kyrent"]
      },
      {
        id: "branding-arras",
        keyword: "branding Arras",
        kicker: "Local",
        title: "Branding Arras : identité, site et Shopify en proximité",
        paragraphs: [
          "Pour les entreprises d'Arras et des Hauts-de-France qui veulent une identité forte et une exécution digitale à la hauteur.",
          "Branding Arras ne veut pas dire penser petit : 42studio accompagne des marques locales avec une ambition nationale."
        ],
        bullets: [
          "Rencontres en présentiel ou remote selon le projet",
          "Branding, site vitrine et e-commerce Shopify",
          "Interlocuteur unique, réponse sous 24 h"
        ],
        href: "/branding-arras",
        hrefLabel: "Branding à Arras",
        caseSlugs: ["profitys", "arras-patrimoine"]
      }
    ]
  }
];

export const seoPillarFaqs = [
  {
    question: "42studio est-il une agence Shopify France ?",
    answer:
      "Oui. 42studio conçoit, refond et optimise des boutiques Shopify pour des marques premium en France : thèmes sur-mesure, sections Liquid, CRO et SEO technique."
  },
  {
    question: "Proposez-vous une refonte Shopify sans couper le trafic organique ?",
    answer:
      "Oui. Chaque refonte Shopify inclut un audit SEO, une architecture URL cohérente et des redirections 301 pour préserver l'indexation et le trafic existant."
  },
  {
    question: "Peut-on vous mandater comme expert Shopify freelance ?",
    answer:
      "Oui. 42studio intervient en direct avec un profil senior : Liquid, UX e-commerce, CRO, SEO technique et intégrations, sans intermédiaire junior."
  },
  {
    question: "Faites-vous aussi de l'agence web à Arras ?",
    answer:
      "Oui. 42studio est basé à Arras et crée des sites vitrines sur mesure, des sites SaaS et des expériences web premium pour des clients locaux et nationaux."
  },
  {
    question: "Quelle différence entre création site internet sur mesure et un template ?",
    answer:
      "Un site sur mesure est construit autour de votre positionnement, de vos preuves et de votre conversion. Le design, le contenu et la technique servent votre business, pas l'inverse."
  },
  {
    question: "Accompagnez-vous la création identité de marque et le site ensemble ?",
    answer:
      "C'est notre modèle préféré. Identité, site et Shopify sont pensés dans le même flux pour éviter les ruptures entre charte, discours et expérience live."
  },
  {
    question: "Travaillez-vous le branding e-commerce et Shopify en continu ?",
    answer:
      "Oui. Branding e-commerce signifie aligner identité visuelle, storytelling produit et parcours d'achat Shopify dans un seul projet cohérent."
  },
  {
    question: "Comment se passe une optimisation Shopify conversion ?",
    answer:
      "Audit du parcours complet, priorisation des leviers UX et technique, itérations sur home, collection, fiche produit et checkout. Objectif : impact mesurable rapidement."
  },
  {
    question: "Êtes-vous un studio créatif Arras ou une agence nationale ?",
    answer:
      "Les deux. Basé à Arras, 42studio accompagne des marques partout en France et à l'international avec le même niveau d'exigence."
  },
  {
    question: "Proposez-vous des sites vitrine SaaS orientés démo ?",
    answer:
      "Oui. Wireframes orientés bénéfices, sections preuves, parcours vers la démo et fondations SEO pour l'acquisition organique et paid."
  },
  {
    question: "Une refonte identité visuelle inclut-elle le site ?",
    answer:
      "Souvent oui. La refonte identité visuelle gagne à être déployée immédiatement sur le site ou la boutique pour maximiser l'impact business."
  },
  {
    question: "Quel délai pour lancer un projet ?",
    answer:
      "Premier échange sous 24 h. Le calendrier dépend du périmètre : une création boutique Shopify ou une refonte site vitrine se cale en fonction de vos contraintes."
  }
];

export const seoPillarRelated = [
  { label: "Shopify", href: "/shopify" },
  { label: "Brand", href: "/brand" },
  { label: "Web", href: "/web" },
  { label: "Produit", href: "/produit" },
  { label: "Branding Arras", href: "/branding-arras" },
  { label: "Réalisations", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" }
];
