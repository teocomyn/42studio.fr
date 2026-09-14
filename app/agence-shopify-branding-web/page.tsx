import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SeoPillarPage } from "@/components/SeoPillarPage";
import { SiteChrome } from "@/components/SiteChrome";
import { seoPillarClusters, seoPillarFaqs, seoPillarKeywords, seoPillarMeta } from "@/data/seo-pillar";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, itemListJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: seoPillarMeta.title,
  description: seoPillarMeta.description,
  path: `/${seoPillarMeta.slug}`,
  keywords: [...seoPillarKeywords, "42studio", "agence digitale Arras", "studio Shopify branding web"]
});

export default function AgenceShopifyBrandingWebPage() {
  const path = `/${seoPillarMeta.slug}`;

  return (
    <SiteChrome>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Expertises", path: "/services" },
          { name: seoPillarMeta.title, path }
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Agence Shopify, branding et web sur mesure",
          description: seoPillarMeta.description,
          path
        })}
      />
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={faqJsonLd(seoPillarFaqs)} />
      <JsonLd
        data={itemListJsonLd(
          seoPillarClusters.flatMap((cluster) =>
            cluster.keywords.map((block) => ({
              name: block.keyword,
              path: `/${block.id}`
            }))
          )
        )}
      />
      <SeoPillarPage />
    </SiteChrome>
  );
}
