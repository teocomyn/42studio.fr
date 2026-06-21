export type SeoServicePage = {
  slug: string;
  title: string;
  eyebrow: string;
  h1: string;
  description: string;
  intro: string;
  keywords: string[];
  serviceName: string;
  proofPoints: string[];
  sections: Array<{
    title: string;
    text: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  related: Array<{
    label: string;
    href: string;
  }>;
};

export const seoServicePages: SeoServicePage[] = [
  {
    slug: "brand",
    title: "Création d'identité de marque & design system",
    eyebrow: "Brand / Identité",
    h1: "Une marque pensée comme un système.",
    description:
      "42studio conçoit des identités de marque complètes : stratégie, naming, logo, direction artistique, charte graphique et design system.",
    intro:
      "Le branding n'est pas une couche décorative. C'est l'architecture qui permet à une entreprise d'être reconnue, comprise et mémorisée sur tous ses points de contact.",
    keywords: ["création identité de marque", "identité visuelle", "création logo", "charte graphique", "design system marque"],
    serviceName: "Branding et identité visuelle",
    proofPoints: ["Plateforme de marque", "Logo et système visuel", "Charte activable", "Kit digital"],
    sections: [
      {
        title: "Stratégie avant esthétique",
        text:
          "On commence par clarifier le positionnement, les audiences, la promesse et la tension créative. Le logo arrive ensuite comme conséquence d'un territoire solide."
      },
      {
        title: "Identité faite pour l'écran",
        text:
          "Chaque signe, grille, typographie et règle de composition est pensé pour vivre en site web, social, présentation, produit et campagne."
      },
      {
        title: "Un système exploitable",
        text:
          "La livraison ne s'arrête pas à de beaux fichiers. Vous repartez avec des règles, composants et usages qui permettent à la marque de rester cohérente."
      }
    ],
    faqs: [
      {
        question: "42studio crée-t-il uniquement des logos ?",
        answer:
          "Non. Le logo est une pièce du système. 42studio travaille aussi la stratégie, la direction artistique, la charte, les déclinaisons et les usages digitaux."
      },
      {
        question: "Le studio travaille-t-il avec des clients hors Arras ?",
        answer:
          "Oui. 42studio est basé à Arras et accompagne des projets partout en France et à l'international."
      }
    ],
    related: [
      { label: "Branding à Arras (local)", href: "/branding-arras" },
      { label: "Créer un site web", href: "/web" },
      { label: "Parler d'un projet", href: "/contact" }
    ]
  },
  {
    slug: "web",
    title: "Agence web créative à Arras",
    eyebrow: "Web / Sites sur mesure",
    h1: "Des sites rapides, désirables et administrables.",
    description:
      "42studio crée des sites web sur mesure avec Next.js, animation, SEO technique, design system et intégration CMS ou Shopify.",
    intro:
      "Un site vitrine premium doit faire plus que présenter une offre. Il doit installer la confiance, clarifier la valeur et transformer l'identité en expérience.",
    keywords: ["agence web Arras", "création site internet Arras", "site Next.js", "site vitrine premium", "SEO technique"],
    serviceName: "Création de site web sur mesure",
    proofPoints: ["Architecture UX", "Interface responsive", "SEO technique", "Front-end animé"],
    sections: [
      {
        title: "Design et front-end ensemble",
        text:
          "Les maquettes sont pensées avec le code en tête : animations, contraintes responsive, accessibilité, performance et maintien du système dans le temps."
      },
      {
        title: "SEO intégré dès la structure",
        text:
          "On travaille les titles, descriptions, canonicals, sitemap, données structurées, hiérarchie de contenu et maillage interne dès la conception."
      },
      {
        title: "Performance sans site générique",
        text:
          "Le site peut être immersif sans devenir lourd : lazy-loading, composants client ciblés, images optimisées et fallback propre pour les animations."
      }
    ],
    faqs: [
      {
        question: "42studio peut-il créer un site vitrine complet ?",
        answer:
          "Oui. Le studio prend en charge l'architecture, la direction artistique, l'interface, le développement, le SEO technique et le déploiement."
      },
      {
        question: "Le site peut-il être connecté à un CMS ?",
        answer:
          "Oui. Selon le besoin, le site peut être connecté à Shopify, un CMS headless ou une solution plus légère."
      }
    ],
    related: [
      { label: "Identité de marque", href: "/brand" },
      { label: "Shopify premium", href: "/shopify" },
      { label: "Nous contacter", href: "/contact" }
    ]
  },
  {
    slug: "produit",
    title: "Design produit digital",
    eyebrow: "Produit / UX UI",
    h1: "Des interfaces conçues pour l'usage réel.",
    description:
      "42studio conçoit des interfaces produit, SaaS et outils métier : UX, UI, prototypes, design system produit et front-end React.",
    intro:
      "Un produit digital réussi doit être clair, dense quand il le faut, rapide à comprendre et robuste dans les usages quotidiens.",
    keywords: ["design produit digital", "UX UI SaaS", "interface SaaS", "design system produit", "front-end React"],
    serviceName: "Design produit digital et interface SaaS",
    proofPoints: ["Audit UX", "Parcours utilisateur", "Prototype", "Design system produit"],
    sections: [
      {
        title: "Comprendre les workflows",
        text:
          "On cartographie les actions réelles, les données importantes et les moments de friction avant de produire l'interface."
      },
      {
        title: "Composer pour la répétition",
        text:
          "Les interfaces produit ne sont pas des landing pages. Elles doivent rester lisibles, stables et efficaces après des centaines d'utilisations."
      },
      {
        title: "Du prototype au composant",
        text:
          "Le design system sert de pont entre la décision UX, le design visuel et l'implémentation front-end."
      }
    ],
    faqs: [
      {
        question: "42studio peut-il intervenir sur un produit existant ?",
        answer:
          "Oui. Le studio peut auditer un produit, améliorer les parcours, refondre l'interface ou construire un système de composants."
      },
      {
        question: "Le studio code-t-il les interfaces ?",
        answer:
          "Oui. 42studio peut accompagner le front-end React lorsque le projet demande une continuité entre design et build."
      }
    ],
    related: [
      { label: "Méthode studio", href: "/studio" },
      { label: "Sites web", href: "/web" },
      { label: "Lancer un projet", href: "/contact" }
    ]
  },
  {
    slug: "shopify",
    title: "Agence Shopify créative",
    eyebrow: "Shopify / E-commerce",
    h1: "Un e-commerce premium sans perdre la conversion.",
    description:
      "42studio crée des expériences Shopify et e-commerce premium : direction artistique, UX, thème sur mesure, headless, performance et SEO.",
    intro:
      "Un Shopify performant ne doit pas ressembler à un thème standard. L'enjeu est de rendre la marque mémorable tout en gardant un parcours d'achat clair.",
    keywords: ["agence Shopify France", "création Shopify", "Shopify headless", "e-commerce premium", "UX e-commerce"],
    serviceName: "Création Shopify et e-commerce premium",
    proofPoints: ["UX e-commerce", "Thème sur mesure", "Shopify headless", "SEO marchand"],
    sections: [
      {
        title: "Marque et conversion",
        text:
          "On équilibre direction artistique, lisibilité produit, réassurance, vitesse et friction minimale dans le tunnel d'achat."
      },
      {
        title: "Architecture propre",
        text:
          "Collections, fiches produits, navigation, contenus éditoriaux et pages légales sont structurés pour l'utilisateur comme pour Google."
      },
      {
        title: "Base technique durable",
        text:
          "Selon l'ambition, le projet peut partir d'un thème optimisé ou d'une approche headless avec Next.js."
      }
    ],
    faqs: [
      {
        question: "42studio crée-t-il des boutiques Shopify sur mesure ?",
        answer:
          "Oui. Le studio peut créer une boutique Shopify avec direction artistique, UX, intégration technique et optimisation SEO."
      },
      {
        question: "Faut-il choisir Shopify headless ?",
        answer:
          "Pas toujours. Le headless est pertinent pour des expériences avancées. Pour certains projets, un thème Shopify bien construit est plus efficace."
      }
    ],
    related: [
      { label: "Créer une marque", href: "/brand" },
      { label: "Créer un site web", href: "/web" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    slug: "branding-arras",
    title: "Agence de branding à Arras (Hauts-de-France)",
    eyebrow: "Local / Arras",
    h1: "Un studio créatif à Arras avec une ambition internationale.",
    description:
      "42studio accompagne les entreprises d'Arras, des Hauts-de-France et d'ailleurs en branding, site web, Shopify et produit digital.",
    intro:
      "Être basé à Arras ne veut pas dire penser petit. 42studio accompagne les marques locales, nationales et internationales avec le même niveau d'exigence.",
    keywords: ["branding Arras", "agence communication Arras", "agence web Arras", "studio créatif Arras", "création logo Arras"],
    serviceName: "Branding, web et produit digital à Arras",
    proofPoints: ["Arras, Hauts-de-France", "Branding", "Site web", "E-commerce"],
    sections: [
      {
        title: "Pour les marques locales ambitieuses",
        text:
          "Le studio aide les entreprises qui veulent sortir du rendu générique et construire une présence plus identifiable."
      },
      {
        title: "Un interlocuteur pour le fond et la forme",
        text:
          "Stratégie, identité, site et produit peuvent être pensés ensemble pour éviter les ruptures entre discours, design et technique."
      },
      {
        title: "Présence locale, exécution digitale",
        text:
          "42studio travaille à distance ou en proximité selon le projet, avec une méthode claire et des livrables activables."
      }
    ],
    faqs: [
      {
        question: "42studio est-il basé à Arras ?",
        answer:
          "Oui. Le studio est basé à Arras et travaille avec des clients locaux, français et internationaux."
      },
      {
        question: "Le studio fait-il aussi des sites web à Arras ?",
        answer:
          "Oui. 42studio conçoit des sites vitrines, sites e-commerce, expériences Shopify et interfaces produit."
      }
    ],
    related: [
      { label: "Branding", href: "/brand" },
      { label: "Agence web Arras", href: "/web" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

export function getSeoServicePage(slug: string) {
  return seoServicePages.find((page) => page.slug === slug);
}
