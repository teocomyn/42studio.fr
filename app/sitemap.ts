import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://42studio.fr";

  return [
    "",
    "/studio",
    "/contact",
    ...projects.map((project) => `/work/${project.slug}`)
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-06-08"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.75
  }));
}
