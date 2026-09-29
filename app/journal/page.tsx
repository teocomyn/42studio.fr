import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SiteChrome } from "@/components/SiteChrome";
import { formatJournalDate, journalArticles } from "@/data/journal";
import { breadcrumbJsonLd, createMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Journal : guides de marque, design et vidéo",
  description:
    "Le Journal de 42studio : guides et méthodes sur l'identité visuelle, le brief créatif, le motion design, la 3D et la vidéo, écrits par le studio.",
  path: "/journal",
  keywords: ["journal studio créatif", "guide identité visuelle", "brief créatif", "motion design ou vidéo"]
});

export default function JournalPage() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Journal", path: "/journal" }
  ];

  return (
    <SiteChrome>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={itemListJsonLd(
          journalArticles.map((article) => ({ name: article.title, path: `/journal/${article.slug}` }))
        )}
      />

      <section className="section-pad border-b border-white/10 pt-32 md:pt-36">
        <Breadcrumbs items={crumbs} />
        <span className="mono-label mt-10 block">Journal</span>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,7vw,4.35rem)] font-black leading-[0.92] tracking-[-0.05em]">
          Guides, méthodes et coulisses du studio.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
          Des réponses franches aux questions que se posent les marques avant un projet d&apos;identité, de site, de
          motion design, de 3D ou de vidéo.
        </p>
      </section>

      <section className="section-pad border-b border-white/10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {journalArticles.map((article) => (
            <Reveal key={article.slug}>
              <Link
                href={`/journal/${article.slug}`}
                className="group flex h-full min-h-[18rem] flex-col justify-between border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/35"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">
                  {article.category} · <time dateTime={article.datePublished}>{formatJournalDate(article.datePublished)}</time>
                </p>
                <div className="mt-8">
                  <h2 className="text-2xl font-light leading-[1.1] tracking-[-0.035em]">{article.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{article.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70 transition group-hover:text-white">
                    Lire <span aria-hidden>↗</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCta />
    </SiteChrome>
  );
}
