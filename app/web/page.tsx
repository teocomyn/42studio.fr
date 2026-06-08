import type { Metadata } from "next";
import { SeoServicePage } from "@/components/SeoServicePage";
import { getSeoServicePage } from "@/data/seo-pages";
import { createMetadata } from "@/lib/seo";

const page = getSeoServicePage("web")!;

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/web",
  keywords: page.keywords
});

export default function WebPage() {
  return <SeoServicePage page={page} />;
}
