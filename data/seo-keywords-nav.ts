import { seoKeywordPages, type SeoKeywordCluster } from "@/data/seo-keywords";

export const seoClusterLabels: Record<SeoKeywordCluster, string> = {
  shopify: "Shopify & e-commerce",
  web: "Web & sites vitrines",
  brand: "Branding & identité",
  local: "Arras, Lille & studio"
};

export const seoClusterOrder: SeoKeywordCluster[] = ["shopify", "web", "brand", "local"];

export function getSeoPagesByCluster(cluster: SeoKeywordCluster) {
  return seoKeywordPages.filter((page) => page.cluster === cluster);
}

export const featuredSeoSlugs = [
  "studio-creatif-arras",
  "studio-creatif-lille",
  "graphiste-arras",
  "creation-identite-de-marque",
  "creation-site-internet-sur-mesure",
  "creation-boutique-shopify"
] as const;

export function getFeaturedSeoPages() {
  return featuredSeoSlugs
    .map((slug) => seoKeywordPages.find((page) => page.slug === slug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));
}
