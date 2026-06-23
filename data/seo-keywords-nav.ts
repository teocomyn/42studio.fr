import { seoKeywordPages, type SeoKeywordCluster } from "@/data/seo-keywords";

export const seoClusterLabels: Record<SeoKeywordCluster, string> = {
  shopify: "Shopify & e-commerce",
  web: "Web & sites vitrines",
  brand: "Branding & identité",
  local: "Arras & studio"
};

export const seoClusterOrder: SeoKeywordCluster[] = ["shopify", "web", "brand", "local"];

export function getSeoPagesByCluster(cluster: SeoKeywordCluster) {
  return seoKeywordPages.filter((page) => page.cluster === cluster);
}

export const featuredSeoSlugs = [
  "agence-shopify-france",
  "refonte-shopify",
  "creation-identite-de-marque",
  "agence-web-arras",
  "branding-e-commerce",
  "optimisation-shopify-conversion"
] as const;

export function getFeaturedSeoPages() {
  return featuredSeoSlugs
    .map((slug) => seoKeywordPages.find((page) => page.slug === slug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));
}
