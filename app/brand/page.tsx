import type { Metadata } from "next";
import { SeoServicePage } from "@/components/SeoServicePage";
import { getSeoServicePage } from "@/data/seo-pages";
import { createMetadata } from "@/lib/seo";

const page = getSeoServicePage("brand")!;

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/brand",
  keywords: page.keywords
});

export default function BrandPage() {
  return <SeoServicePage page={page} />;
}
