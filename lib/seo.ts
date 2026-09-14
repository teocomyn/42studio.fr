import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const siteUrl = "https://42studio.fr";
export const siteName = "42studio";
export const defaultOgImage = "/opengraph-image";

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

  // Si le title contient déjà la marque, on neutralise le template du layout
  // (sinon rendu "… | 42studio - 42studio", tronqué en SERP).
  const hasBrand = title.toLowerCase().includes(siteName.toLowerCase());
  const socialTitle = hasBrand ? title : `${title} - ${siteName}`;

  return {
    title: hasBrand ? { absolute: title } : title,
    description,
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
      description,
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
      description,
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

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  legalName: siteConfig.legal.companyName,
  url: siteUrl,
  // ≥112×112 exigé par Google pour le logo (l'icône 32px ne suffit pas).
  logo: absoluteUrl("/apple-icon"),
  image: absoluteUrl(defaultOgImage),
  email: siteConfig.email,
  slogan: "Brand, Web, Produit. Du symbole au code.",
  priceRange: "€€€",
  knowsAbout: [
    "branding",
    "identité de marque",
    "design system",
    "développement web Next.js",
    "e-commerce Shopify",
    "design produit",
    "UX/UI"
  ],
  address: entityAddress,
  areaServed: [
    { "@type": "City", name: "Arras" },
    { "@type": "AdministrativeArea", name: "Hauts-de-France" },
    { "@type": "Country", name: "France" }
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "new business",
      email: siteConfig.email,
      availableLanguage: ["fr", "en"]
    }
  ],
  // ⚠️ Vérifie que ces profils existent et appartiennent bien au studio (sinon retire-les).
  sameAs: [siteConfig.socials.instagram, siteConfig.socials.linkedin],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
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
  areaServed = "France"
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    areaServed,
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
    description:
      "Studio créatif à Arras : branding, identité de marque, sites web et e-commerce Shopify pour marques ambitieuses.",
    url: siteUrl,
    email,
    image: absoluteUrl(defaultOgImage),
    priceRange: "€€€",
    address: entityAddress,
    areaServed: [
      { "@type": "City", name: "Arras" },
      { "@type": "AdministrativeArea", name: "Hauts-de-France" },
      { "@type": "Country", name: "France" }
    ],
    sameAs: [socials.instagram, socials.linkedin]
  };
}
