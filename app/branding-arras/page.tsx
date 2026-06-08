import type { Metadata } from "next";
import { SeoServicePage } from "@/components/SeoServicePage";
import { getSeoServicePage } from "@/data/seo-pages";
import { createMetadata } from "@/lib/seo";

const page = getSeoServicePage("branding-arras")!;

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/branding-arras",
  keywords: page.keywords
});

export default function BrandingArrasPage() {
  return <SeoServicePage page={page} />;
}
