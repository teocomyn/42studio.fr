import { creativeServices } from "@/data/creative-services";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const siteUrl = "https://42studio.fr";
export const siteName = "42studio";
// Image de partage par défaut (1200×630), générée depuis le kit créatif 42STUDIO.
export const defaultOgImage = "/og/42studio.jpg";

// Description d'entité unique, reprise par le JSON-LD, le manifest et llms.txt.
export const entityDescription =
  "42studio est un studio créatif indépendant basé à Arras : branding et identité visuelle, graphisme, création de sites web, direction artistique, motion design, 3D et réalisation vidéo pour des marques ambitieuses.";

export type PageSeo = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  ogImage?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

// Coupe une description trop longue pour la SERP (≈155 caractères) à la dernière
// phrase complète, sinon au dernier mot, sans casser le sens.
export function clampDescription(text: string, max = 155) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max);
  const lastSentence = Math.max(slice.lastIndexOf(". "), slice.lastIndexOf(" ; "));
  if (lastSentence >= 90) return slice.slice(0, lastSentence + 1).trim();
  const lastSpace = slice.slice(0, max - 1).lastIndexOf(" ");
  return `${slice.slice(0, lastSpace).replace(/[,;:·]$/, "")}…`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  ogImage = defaultOgImage,
  noIndex = false
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);
  const metaDescription = clampDescription(description);

  // Si le title contient déjà la marque, on neutralise le template du layout
  // (sinon rendu "… | 42studio - 42studio", tronqué en SERP).
  const hasBrand = title.toLowerCase().includes(siteName.toLowerCase());
  const socialTitle = hasBrand ? title : `${title} - ${siteName}`;

  return {
    title: hasBrand ? { absolute: title } : title,
    description: metaDescription,
    keywords,
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": url,
        "x-default": url
      }
    },
    openGraph: {
      title: socialTitle,
      description: metaDescription,
      url,
      siteName,
      locale: "fr_FR",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: socialTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: metaDescription,
      images: [imageUrl]
    }
  };
}

// Adresse unique de l'entité, partagée par tous les nœuds JSON-LD (NAP cohérent).
const entityAddress = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.legal.address,
  addressLocality: siteConfig.legal.city,
  postalCode: siteConfig.legal.postalCode,
  addressRegion: "Hauts-de-France",
  addressCountry: "FR"
} as const;

const entityAreaServed = [
  { "@type": "City", name: "Arras" },
  { "@type": "City", name: "Lille" },
  { "@type": "AdministrativeArea", name: "Hauts-de-France" },
  { "@type": "Country", name: "France" }
];

// Thématiques d'expertise déclarées pour l'entité (moteurs de recherche et moteurs IA).
const entityKnowsAbout = [
  "branding",
  "identité visuelle",
  "stratégie de marque",
  "naming",
  "graphisme",
  "design graphique",
  "création de site web",
  "webdesign",
  "design system",
  "direction artistique",
  "motion design",
  "animation de logo",
  "3D",
  "packshot 3D",
  "CGI",
  "réalisation vidéo",
  "film de marque"
];

// Homonymes connus (ex. un studio web lituanien « 42studio ») : l'@id, l'adresse et
// la description servent à désambiguïser l'entité.
const entityAlternateNames = ["42STUDIO", "42 Studio", "42studio Arras"];

export const founderJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#founder`,
  name: "Teo Comyn",
  jobTitle: "Fondateur et directeur créatif",
  url: absoluteUrl("/studio"),
  worksFor: { "@id": `${siteUrl}/#organization` },
  knowsAbout: ["direction créative", "branding", "identité visuelle", "design system", "création de site web", "direction artistique"]
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  alternateName: entityAlternateNames,
  legalName: siteConfig.legal.companyName,
  description: entityDescription,
  url: siteUrl,
  // ≥112×112 exigé par Google pour le logo (l'icône 32px ne suffit pas).
  logo: absoluteUrl("/apple-icon"),
  image: absoluteUrl(defaultOgImage),
  email: siteConfig.email,
  slogan: "Creative studio for ambitious brands.",
  founder: { "@id": `${siteUrl}/#founder` },
  priceRange: "€€€",
  knowsAbout: entityKnowsAbout,
  address: entityAddress,
  areaServed: entityAreaServed,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services créatifs 42studio",
    itemListElement: creativeServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${absoluteUrl(`/${service.slug}`)}#service`,
        name: service.name,
        url: absoluteUrl(`/${service.slug}`)
      }
    }))
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "new business",
      email: siteConfig.email,
      availableLanguage: ["fr", "en"]
    }
  ],
  // ⚠️ Ne garder que des profils qui appartiennent au studio (voir docs/SEO-GEO-STUDIO-CREATIF.md).
  sameAs: [siteConfig.socials.instagram, siteConfig.socials.linkedin]
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: entityAlternateNames,
  description: entityDescription,
  url: siteUrl,
  inLanguage: "fr-FR",
  publisher: {
    "@id": `${siteUrl}/#organization`
  }
};

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function itemListJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path)
    }))
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
  category,
  keywords,
  areaServed
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  category?: string;
  keywords?: string[];
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    ...(serviceType ? { serviceType } : {}),
    ...(category ? { category } : {}),
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    areaServed: areaServed ?? entityAreaServed,
    availableLanguage: ["fr", "en"],
    provider: {
      "@id": `${siteUrl}/#organization`
    }
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
  image,
  keywords,
  about
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
  about?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "fr-FR",
    image: absoluteUrl(image ?? defaultOgImage),
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    ...(about?.length ? { about: about.map((name) => ({ "@type": "Thing", name })) } : {}),
    author: { "@id": `${siteUrl}/#founder` },
    publisher: { "@id": `${siteUrl}/#organization` }
  };
}

export function creativeWorkJsonLd({
  name,
  description,
  path,
  datePublished,
  keywords,
  about
}: {
  name: string;
  description: string;
  path: string;
  datePublished?: string;
  keywords?: string[];
  about?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: absoluteUrl(path),
    ...(datePublished ? { datePublished } : {}),
    ...(keywords && keywords.length ? { keywords: keywords.join(", ") } : {}),
    ...(about ? { about } : {}),
    inLanguage: "fr-FR",
    creator: {
      "@id": `${siteUrl}/#organization`
    },
    publisher: {
      "@id": `${siteUrl}/#organization`
    }
  };
}

export function localBusinessJsonLd() {
  const { email, socials } = siteConfig;

  // @id STABLE identique à l'Organization : toutes les injections page par page
  // fusionnent dans une seule entité au lieu de fragmenter le graphe local.
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    description: entityDescription,
    url: siteUrl,
    email,
    image: absoluteUrl(defaultOgImage),
    priceRange: "€€€",
    address: entityAddress,
    areaServed: entityAreaServed,
    sameAs: [socials.instagram, socials.linkedin]
  };
}
