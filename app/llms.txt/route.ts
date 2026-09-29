import { creativePillars, creativeServices, studioModel } from "@/data/creative-services";
import { journalArticles } from "@/data/journal";
import { projects } from "@/data/projects";
import { seoKeywordPages } from "@/data/seo-keywords";
import { seoServicePages } from "@/data/seo-pages";
import { entityDescription, siteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const localSlugs = ["studio-creatif-arras", "studio-creatif-lille", "graphiste-arras", "agence-web-arras"];

export function GET() {
  const local = localSlugs
    .map((slug) => seoKeywordPages.find((page) => page.slug === slug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));
  const otherPages = seoKeywordPages.filter((page) => !localSlugs.includes(page.slug));
  const featuredProjects = projects.filter((project) => project.featured);

  const lines = [
    "# 42studio",
    "",
    `> ${entityDescription} Signature : « Creative studio for ambitious brands. »`,
    "",
    studioModel,
    "",
    "- Nom : 42studio, aussi écrit 42STUDIO. Studio français basé à Arras (Hauts-de-France), à ne pas confondre avec des studios homonymes à l'étranger.",
    "- Fondateur et directeur créatif : Teo Comyn.",
    "- Zone : Arras, Lille, Hauts-de-France, toute la France et l'international. Langues : français, anglais.",
    "- Formats d'intervention : Brand Sprint (2 à 3 semaines), Digital Experience (3 à 6 semaines), Brand × Digital (4 à 8 semaines), Creative Campaign (production, durée selon le format), Creative Partner (accompagnement mensuel).",
    "- Tarifs : chaque projet est chiffré sur devis après un premier échange. Réponse sous 24 h à chaque brief.",
    `- Contact : ${siteConfig.email} · ${siteUrl}/contact`,
    "",
    "## Services",
    ...creativeServices.map((service) => `- [${service.name}](${siteUrl}/${service.slug}): ${service.definition}`),
    `- [Tous les services](${siteUrl}/services)`,
    "",
    "## Piliers",
    ...creativePillars.map((pillar) => `- ${pillar.index} ${pillar.title} (${pillar.output}) : ${pillar.text}`),
    "",
    "## Local",
    ...local.map((page) => `- [${page.serviceName}](${siteUrl}/${page.slug}): ${page.description}`),
    "",
    "## Journal",
    ...journalArticles.map((article) => `- [${article.title}](${siteUrl}/journal/${article.slug}): ${article.description}`),
    "",
    "## Studio",
    `- [Le studio, la méthode et le fondateur](${siteUrl}/studio)`,
    `- [Réalisations](${siteUrl}/work): sites, identités et e-commerce menés par le studio.`,
    `- [Contenu complet pour les modèles de langage](${siteUrl}/llms-full.txt)`,
    "",
    "## Optional",
    ...seoServicePages.map((page) => `- [${page.serviceName}](${siteUrl}/${page.slug}): ${page.description}`),
    ...otherPages.map((page) => `- [${page.keyword}](${siteUrl}/${page.slug}): ${page.description}`),
    ...featuredProjects.map((project) => `- [${project.title}](${siteUrl}/work/${project.slug})`),
    ""
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
