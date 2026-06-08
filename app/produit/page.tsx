import type { Metadata } from "next";
import { SeoServicePage } from "@/components/SeoServicePage";
import { getSeoServicePage } from "@/data/seo-pages";
import { createMetadata } from "@/lib/seo";

const page = getSeoServicePage("produit")!;

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/produit",
  keywords: page.keywords
});

export default function ProduitPage() {
  return <SeoServicePage page={page} />;
}
