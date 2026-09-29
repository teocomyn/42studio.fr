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
    title: "E-commerce Shopify premium et sur mesure",
    eyebrow: "Shopify / E-commerce",
    h1: "Un e-commerce premium sans perdre la conversion.",
    description:
      "42studio crée des expériences Shopify et e-commerce premium : direction artistique, UX, thème sur mesure, headless, performance et SEO.",
    intro:
      "Un Shopify performant ne doit pas ressembler à un thème standard. L'enjeu est de rendre la marque mémorable tout en gardant un parcours d'achat clair.",
    keywords: ["expertise Shopify", "thème Shopify sur mesure", "Shopify headless", "CRO e-commerce", "UX e-commerce"],
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
      { label: "Agence Shopify France", href: "/agence-shopify-france" },
      { label: "Création de boutique Shopify", href: "/creation-boutique-shopify" },
      { label: "Refonte Shopify", href: "/refonte-shopify" },
      { label: "Optimisation conversion Shopify", href: "/optimisation-shopify-conversion" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    slug: "branding-arras",
    title: "Agence de branding à Arras (Hauts-de-France)",
    eyebrow: "Local / Arras",
    h1: "Un studio créatif à Arras avec une ambition internationale.",
    description:
      "42studio accompagne les marques d'Arras, des Hauts-de-France et d'ailleurs en branding, identité visuelle, graphisme, site web et direction artistique.",
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
      { label: "Branding et identité visuelle", href: "/brand" },
      { label: "Graphiste à Arras", href: "/graphiste-arras" },
      { label: "Studio créatif à Arras", href: "/studio-creatif-arras" },
      { label: "Agence web Arras", href: "/agence-web-arras" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

export function getSeoServicePage(slug: string) {
  return seoServicePages.find((page) => page.slug === slug);
}
