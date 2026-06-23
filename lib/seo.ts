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

  return {
    title,
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
      title: `${title} - ${siteName}`,
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
          alt: `${siteName} - ${title}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${siteName}`,
      description,
      images: [imageUrl]
    }
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  legalName: "42studio · Teo Comyn",
  url: siteUrl,
  logo: absoluteUrl("/icon"),
  image: absoluteUrl(defaultOgImage),
  email: "hello@42studio.fr",
  slogan: "Brand, Web, Produit. Du symbole au code.",
  knowsAbout: [
    "branding",
    "identité de marque",
    "design system",
    "développement web Next.js",
    "e-commerce Shopify",
    "design produit",
    "UX/UI"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arras",
    addressRegion: "Hauts-de-France",
    postalCode: "62000",
    addressCountry: "FR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.29,
    longitude: 2.78
  },
  areaServed: [
    { "@type": "City", name: "Arras" },
    { "@type": "AdministrativeArea", name: "Hauts-de-France" },
    { "@type": "Country", name: "France" }
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "new business",
      email: "hello@42studio.fr",
      availableLanguage: ["fr", "en"]
    }
  ],
  // ⚠️ Vérifie que ces profils existent et appartiennent bien au studio (sinon retire-les).
  sameAs: ["https://www.instagram.com/42studio", "https://www.linkedin.com/company/42studio"]
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

export function localBusinessJsonLd(path = "/") {
  const { legal, geo, email, socials } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}${path === "/" ? "/#localbusiness" : `${path}#localbusiness`}`,
    name: siteName,
    description:
      "Studio créatif à Arras : branding, identité de marque, sites web et e-commerce Shopify pour marques ambitieuses.",
    url: absoluteUrl(path),
    email,
    image: absoluteUrl(defaultOgImage),
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: legal.address,
      addressLocality: "Arras",
      postalCode: legal.postalCode.split(" ")[0] ?? "62000",
      addressRegion: "Hauts-de-France",
      addressCountry: "FR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    areaServed: [
      { "@type": "City", name: "Arras" },
      { "@type": "AdministrativeArea", name: "Hauts-de-France" },
      { "@type": "Country", name: "France" }
    ],
    sameAs: [socials.instagram, socials.linkedin],
    parentOrganization: {
      "@id": `${siteUrl}/#organization`
    }
  };
}
