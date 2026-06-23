import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import {
  seoPillarClusters,
  seoPillarFaqs,
  seoPillarKeywords,
  seoPillarMeta,
  seoPillarRelated,
  type SeoKeywordBlock
} from "@/data/seo-pillar";
import { projects } from "@/data/projects";

function KeywordPill({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex border border-white/15 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/60 transition hover:border-white/35 hover:bg-white/[0.06] hover:text-white"
    >
      {label}
    </a>
  );
}

function CaseStudyLinks({ slugs }: { slugs?: string[] }) {
  if (!slugs?.length) return null;

  const items = slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project && project.image));

  if (!items.length) return null;

  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      {items.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="group overflow-hidden border border-white/10 bg-[var(--bg-elevated)] transition hover:border-white/30"
        >
          <div className="relative aspect-[16/10]">
            <Image
              src={project.image!}
              alt={project.imageAlt ?? project.title}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
            />
          </div>
          <div className="p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/45">{project.year}</p>
            <p className="mt-1 text-sm font-light tracking-[-0.02em] text-white">{project.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function KeywordSection({ block, index }: { block: SeoKeywordBlock; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <article
      id={block.id}
      className="scroll-mt-28 border-t border-white/10 pt-12 first:border-t-0 first:pt-0 md:pt-16"
    >
      <div className={`grid gap-10 lg:grid-cols-12 lg:items-start ${reversed ? "lg:[direction:rtl]" : ""}`}>
        <div className={`lg:col-span-7 ${reversed ? "lg:[direction:ltr]" : ""}`}>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">{block.kicker}</p>
          <h3 className="mt-4 text-[clamp(1.5rem,3.5vw,2.4rem)] font-light leading-[1.05] tracking-[-0.04em]">
            {block.title}
          </h3>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white/55">
            Mot-clé : {block.keyword}
          </p>
          <div className="mt-6 space-y-4">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="max-w-2xl text-base leading-8 text-[var(--muted)]">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {block.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-7 text-white/72">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                {bullet}
              </li>
            ))}
          </ul>
          <Link
            href={`/${block.id}`}
            className="mt-8 inline-flex h-12 items-center gap-3 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
          >
            Page dédiée : {block.keyword} <span aria-hidden>↗</span>
          </Link>
          <CaseStudyLinks slugs={block.caseSlugs} />
        </div>

        <aside
          className={`lg:col-span-5 ${reversed ? "lg:[direction:ltr]" : ""} lg:sticky lg:top-28 lg:self-start`}
        >
          <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <span className="mono-label">Focus SEO</span>
            <p className="mt-4 text-4xl font-light tracking-[-0.05em] text-white md:text-5xl">{block.keyword}</p>
            <div className="mt-6 h-px w-full bg-white/10" />
            <p className="mt-6 text-sm leading-7 text-white/55">
              Page optimisée pour les recherches transactionnelles autour de{" "}
              <strong className="font-normal text-white/80">{block.keyword}</strong>. 42studio intervient en direct,
              sans intermédiaire.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}

export function SeoPillarPage() {
  const allKeywords = seoPillarClusters.flatMap((cluster) => cluster.keywords);

  return (
    <>
      <section className="relative z-10 overflow-hidden border-b border-white/10 px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 18% 20%, rgba(255,255,255,.11), transparent 22rem), radial-gradient(circle at 82% 68%, rgba(255,255,255,.07), transparent 26rem)"
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "10vw 10vw",
            maskImage: "linear-gradient(to bottom, #000 15%, transparent 92%)"
          }}
        />

        <div className="relative mx-auto max-w-[88rem]">
          <p className="mono-label">Expertises · SEO transactionnel</p>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.4rem,7vw,4.35rem)] font-black leading-[0.92] tracking-[-0.05em]">
            {seoPillarMeta.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-lg">{seoPillarMeta.intro}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {seoPillarMeta.proofPoints.map((point) => (
              <span
                key={point}
                className="border border-white/15 bg-black/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70 backdrop-blur-sm"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center gap-3 bg-white px-6 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/90"
            >
              Demander un devis <span aria-hidden>↗</span>
            </Link>
            <Link
              href="/work"
              className="inline-flex h-14 items-center gap-3 border border-white/20 px-6 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
            >
              Voir les réalisations
            </Link>
          </div>

          <nav aria-label="Index des mots-clés SEO" className="mt-14 border-t border-white/10 pt-8">
            <span className="mono-label">15 mots-clés transactionnels</span>
            <div className="mt-5 flex flex-wrap gap-2">
              {seoPillarKeywords.map((keyword) => {
                const block = allKeywords.find((item) => item.keyword === keyword);
                return (
                  <KeywordPill
                    key={keyword}
                    label={keyword}
                    href={block ? `/${block.id}` : "/agence-shopify-branding-web"}
                  />
                );
              })}
            </div>
          </nav>
        </div>
      </section>

      <section className="section-pad border-b border-white/10">
        <Reveal>
          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-4">
            {[
              ["+60", "Marques accompagnées"],
              ["4", "Expertises intégrées"],
              ["15", "Intentions SEO couvertes"],
              ["24 h", "Réponse au brief"]
            ].map(([value, label]) => (
              <div key={label} className="bg-[var(--bg)] p-6 md:p-8">
                <p className="text-4xl font-light tracking-[-0.05em]">{value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {seoPillarClusters.map((cluster) => (
        <section key={cluster.id} id={cluster.id} className="section-pad scroll-mt-28 border-b border-white/10">
          <Reveal>
            <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
              <div>
                <span className="mono-label">{cluster.label}</span>
                <h2 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-light tracking-[-0.04em]">
                  {cluster.label}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">{cluster.intro}</p>
              </div>
              <aside className="border border-white/10 bg-white/[0.02] p-6">
                <span className="mono-label">Sommaire</span>
                <ol className="mt-4 space-y-2">
                  {cluster.keywords.map((block) => (
                    <li key={block.id}>
                      <a
                        href={`#${block.id}`}
                        className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/55 transition hover:text-white"
                      >
                        {block.keyword}
                      </a>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>

            <div className="space-y-16 md:space-y-20">
              {cluster.keywords.map((block, index) => (
                <KeywordSection key={block.id} block={block} index={index} />
              ))}
            </div>
          </Reveal>
        </section>
      ))}

      <section className="section-pad border-b border-white/10">
        <Reveal className="flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.03] p-7 md:flex-row md:items-center md:p-10">
          <p className="max-w-2xl text-xl font-light tracking-[-0.03em] md:text-2xl">
            Un projet Shopify, branding ou web en tête&nbsp;? Premier échange sous 24&nbsp;h, sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 shrink-0 items-center gap-4 bg-white px-6 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/85"
          >
            Lancer un projet <span aria-hidden>↗</span>
          </Link>
        </Reveal>
      </section>

      <section className="section-pad border-b border-white/10">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_24rem]">
          <div>
            <span className="mono-label">Questions fréquentes</span>
            <div className="mt-8 space-y-8">
              {seoPillarFaqs.map((faq) => (
                <article key={faq.question} className="border-t border-white/10 pt-6">
                  <h2 className="text-xl font-light tracking-[-0.03em] md:text-2xl">{faq.question}</h2>
                  <p className="mt-4 leading-7 text-[var(--muted)]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <span className="mono-label">Pages liées</span>
              <div className="mt-5 grid gap-3">
                {seoPillarRelated.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-white/10 pb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 transition hover:text-white"
                  >
                    {item.label} <span aria-hidden>↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </Reveal>
      </section>

      <ContactCta />
    </>
  );
}
