import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoKeywordPage } from "@/components/SeoKeywordPage";
import { getSeoKeywordPage, getSeoKeywordSlugs } from "@/data/seo-keywords";
import { createMetadata } from "@/lib/seo";

export const dynamicParams = false;

const staticSlugs = new Set(["branding-arras"]);

export function generateStaticParams() {
  return getSeoKeywordSlugs()
    .filter((slug) => !staticSlugs.has(slug))
    .map((keywordSlug) => ({ keywordSlug }));
}

type PageProps = {
  params: Promise<{ keywordSlug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { keywordSlug } = await params;
  const page = getSeoKeywordPage(keywordSlug);

  if (!page) {
    return createMetadata({
      title: "Page introuvable",
      description: "Cette page n'existe pas.",
      path: `/${keywordSlug}`,
      noIndex: true
    });
  }

  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    keywords: [page.keyword, ...page.keywords]
  });
}

export default async function KeywordLandingPage({ params }: PageProps) {
  const { keywordSlug } = await params;
  const page = getSeoKeywordPage(keywordSlug);

  if (!page) notFound();

  return <SeoKeywordPage page={page} />;
}
