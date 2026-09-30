import type { MetadataRoute } from "next";
import { creativeServices } from "@/data/creative-services";
import { journalArticles } from "@/data/journal";
import { projects } from "@/data/projects";
import { getSeoKeywordSlugs } from "@/data/seo-keywords";
import { seoServicePages } from "@/data/seo-pages";
import { siteUrl } from "@/lib/seo";

// Date éditoriale vérifiée : refonte des pages de services créatifs (28 sept. 2026).
const creativeUpdate = new Date("2026-09-28");

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified seulement quand la date éditoriale est connue.
  // /mentions-legales et /confidentialite sont noindex : ne pas les lister ici.
  const paths: Array<{
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly";
    lastModified?: Date;
  }> = [
    { path: "", priority: 1, changeFrequency: "weekly", lastModified: creativeUpdate },
    { path: "/services", priority: 0.9, changeFrequency: "monthly", lastModified: creativeUpdate },
    { path: "/accompagnements", priority: 0.85, changeFrequency: "monthly", lastModified: new Date("2026-09-30") },
    ...creativeServices.map((service) => ({
      path: `/${service.slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
      lastModified: creativeUpdate
    })),
    { path: "/studio", priority: 0.8, changeFrequency: "monthly" },
    { path: "/work", priority: 0.8, changeFrequency: "monthly" },
    { path: "/journal", priority: 0.75, changeFrequency: "weekly", lastModified: creativeUpdate },
    ...journalArticles.map((article) => ({
      path: `/journal/${article.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: new Date(article.dateModified)
    })),
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/agence-shopify-branding-web", priority: 0.75, changeFrequency: "monthly" },
    ...seoServicePages.map((page) => ({
      path: `/${page.slug}`,
      priority: page.slug === "branding-arras" ? 0.8 : 0.7,
      changeFrequency: "monthly" as const
    })),
    ...getSeoKeywordSlugs()
      .filter((slug) => !seoServicePages.some((page) => page.slug === slug))
      .map((slug) => ({
        path: `/${slug}`,
        priority: /arras|lille/.test(slug) ? 0.8 : 0.75,
        changeFrequency: "monthly" as const,
        ...(["studio-creatif-arras", "studio-creatif-lille", "graphiste-arras"].includes(slug)
          ? { lastModified: creativeUpdate }
          : {})
      })),
    ...projects.map((project) => ({
      path: `/work/${project.slug}`,
      priority: project.featured ? 0.7 : 0.6,
      changeFrequency: "monthly" as const
    }))
  ];

  return paths.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
    ...(lastModified ? { lastModified } : {})
  }));
}
