import { projects } from "@/data/projects";
import { seoServicePages } from "@/data/seo-pages";
import { siteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const services = seoServicePages.filter((page) => page.slug !== "branding-arras");

  const lines = [
    "# 42studio",
    "",
    "> Studio créatif basé à Arras (France). Brand, Web et Produit — du symbole au code, sans rupture entre direction artistique et exécution technique. Un seul studio pour la stratégie, l'identité, le site et le produit.",
    "",
    "## Services",
    ...services.map((page) => `- [${page.serviceName}](${siteUrl}/${page.slug}): ${page.description}`),
    `- [Tous les services](${siteUrl}/services)`,
    "",
    "## Studio",
    `- [Méthode et capacités](${siteUrl}/studio): stratégie, identité, système, build, déploiement.`,
    `- [Branding à Arras](${siteUrl}/branding-arras): positionnement local, Hauts-de-France.`,
    "",
    "## Projets",
    ...projects.map((project) => `- [${project.title}](${siteUrl}/work/${project.slug}): ${project.summary}`),
    `- [Tous les projets](${siteUrl}/work)`,
    "",
    "## Contact",
    `- Email: ${siteConfig.email}`,
    `- [Page contact](${siteUrl}/contact)`,
    ""
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
