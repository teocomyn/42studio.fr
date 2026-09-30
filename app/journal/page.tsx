import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    "Les guides de 42studio pour préparer identité, site, campagne, motion et 3D. Comparatifs, exemples, FAQ et outils de cadrage sans inscription.",
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
          Les bonnes questions. Les prochaines décisions.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
          Des réponses franches aux questions que se posent les marques avant un projet d&apos;identité, de site, de
          motion design, de 3D ou de vidéo. Des exemples, des outils à essayer et des cadrages à télécharger.
        </p>
      </section>

      <section className="section-pad border-b border-white/10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {journalArticles.map((article) => (
            <Reveal key={article.slug}>
              <Link
                href={`/journal/${article.slug}`}
                className="group flex h-full flex-col border border-white/10 bg-white/[0.02] transition hover:border-white/35"
              >
                {article.cover && <Image src={article.cover.src} alt="" width={768} height={512} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="h-auto w-full border-b border-white/10" />}
                <div className="flex flex-1 flex-col justify-between p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">
                  {article.category} · <time dateTime={article.datePublished}>{formatJournalDate(article.datePublished)}</time>
                </p>
                <div className="mt-8">
                  <h2 className="text-2xl font-light leading-[1.1] tracking-[-0.035em]">{article.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/70">{article.excerpt}</p>
                  {article.tool && <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.08em] text-white/60">Outil interactif · FAQ · Cadrage téléchargeable</p>}
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70 transition group-hover:text-white">
                    Lire <span aria-hidden>↗</span>
                  </span>
                </div>
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
