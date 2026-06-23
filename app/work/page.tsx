import type { Metadata } from "next";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { WorkGallery } from "@/components/WorkGallery";
import { projects } from "@/data/projects";
import { breadcrumbJsonLd, createMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projets",
  description:
    "Découvrez une sélection de sites Shopify et sites vitrines réalisés ou optimisés par 42studio pour plus de 60 marques accompagnées.",
  path: "/work",
  keywords: ["portfolio Shopify", "réalisations web", "création site Shopify", "sites vitrines", "42studio"]
});

export default function WorkPage() {
  return (
    <SiteChrome mainClassName="relative z-10 pt-24">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Projets", path: "/work" }
        ])}
      />
      <JsonLd
        data={itemListJsonLd(
          projects.map((project) => ({
            name: project.title,
            path: `/work/${project.slug}`
          }))
        )}
      />
      <WorkGallery headingAs="h1" showFilters />
      <ContactCta />
    </SiteChrome>
  );
}
