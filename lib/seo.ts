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
  type = "website"
}: PageSeo): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
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
          url: absoluteUrl(defaultOgImage),
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
      images: [absoluteUrl(defaultOgImage)]
    }
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  legalName: "42studio",
  url: siteUrl,
  logo: absoluteUrl("/icon"),
  image: absoluteUrl(defaultOgImage),
  email: "hello@42studio.fr",
  slogan: "Brand, Web, Produit. Du symbole au code.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arras",
    addressCountry: "FR"
  },
  areaServed: ["France", "Europe", "Worldwide"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "new business",
      email: "hello@42studio.fr",
      availableLanguage: ["fr", "en"]
    }
  ],
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
  datePublished = "2026-06-08"
}: {
  name: string;
  description: string;
  path: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: absoluteUrl(path),
    datePublished,
    inLanguage: "fr-FR",
    creator: {
      "@id": `${siteUrl}/#organization`
    },
    publisher: {
      "@id": `${siteUrl}/#organization`
    }
  };
}
