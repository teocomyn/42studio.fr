import type { Metadata } from "next";
import { SeoKeywordPage } from "@/components/SeoKeywordPage";
import { getSeoKeywordPage } from "@/data/seo-keywords";
import { createMetadata } from "@/lib/seo";

const page = getSeoKeywordPage("branding-arras")!;

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/branding-arras",
  keywords: [page.keyword, ...page.keywords]
});

export default function BrandingArrasPage() {
  return <SeoKeywordPage page={page} />;
}
