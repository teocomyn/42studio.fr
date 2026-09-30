import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalArticlePage } from "@/components/JournalArticlePage";
import { getJournalArticle, journalArticles } from "@/data/journal";
import { absoluteUrl, createMetadata } from "@/lib/seo";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalArticle(slug);
  if (!article) return {};

  const base = createMetadata({
    title: article.metaTitle,
    description: article.description,
    path: `/journal/${article.slug}`,
    keywords: article.keywords,
    type: "article",
    ogImage: article.ogImage
  });

  return {
    ...base,
    authors: [{ name: "Teo Comyn", url: "https://42studio.fr/studio" }],
    openGraph: {
      ...base.openGraph,
      ...(article.cover ? { images: [{ url: absoluteUrl(article.cover.src), width: 1536, height: 1024, alt: article.cover.alt }] } : {}),
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: ["Teo Comyn"]
    }
  };
}

export default async function JournalArticleRoute({ params }: PageProps) {
  const { slug } = await params;
  const article = getJournalArticle(slug);
  if (!article) notFound();
  return <JournalArticlePage article={article} />;
}
