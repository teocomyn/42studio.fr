import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { seoServicePages } from "@/data/seo-pages";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/studio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/confidentialite", priority: 0.2, changeFrequency: "yearly" as const },
    ...seoServicePages.map((page) => ({
      path: `/${page.slug}`,
      priority: page.slug === "branding-arras" ? 0.78 : 0.85,
      changeFrequency: "monthly" as const
    })),
    ...projects.map((project) => ({
      path: `/work/${project.slug}`,
      priority: 0.72,
      changeFrequency: "monthly" as const
    }))
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority
  }));
}
