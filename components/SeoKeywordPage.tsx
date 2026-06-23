import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import { SiteChrome } from "@/components/SiteChrome";
import type { SeoKeywordPage as SeoKeywordPageData } from "@/data/seo-keywords";
import { seoKeywordPages } from "@/data/seo-keywords";
import { projects } from "@/data/projects";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/seo";

type SeoKeywordPageProps = {
  page: SeoKeywordPageData;
};

function CaseStudyGrid({ slugs }: { slugs?: string[] }) {
  if (!slugs?.length) return null;

  const items = slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project && project.image));

  if (!items.length) return null;

  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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

export function SeoKeywordPage({ page }: SeoKeywordPageProps) {
  const path = `/${page.slug}`;
  const siblings = seoKeywordPages.filter((item) => item.slug !== page.slug && item.cluster === page.cluster).slice(0, 4);

  return (
    <SiteChrome>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Expertises", path: "/services" },
          { name: page.keyword, path }
        ])}
      />
      <JsonLd data={serviceJsonLd({ name: page.serviceName, description: page.description, path })} />
      {page.showLocalBusiness ? <JsonLd data={localBusinessJsonLd()} /> : null}
      <JsonLd data={faqJsonLd(page.faqs)} />

      <section className="section-pad border-b border-white/10 pt-36">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <div>
            <span className="mono-label">{page.eyebrow}</span>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,7vw,4.35rem)] font-black leading-[0.92] tracking-[-0.05em]">
              {page.h1}
            </h1>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white/55">
              Mot-clé cible : {page.keyword}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">{page.intro}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {page.proofPoints.map((point) => (
                <span
                  key={point}
                  className="border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70"
                >
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={page.primaryCta.href}
                className="inline-flex h-14 items-center gap-3 bg-white px-6 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/90"
              >
                {page.primaryCta.label} <span aria-hidden>↗</span>
              </Link>
              <Link
                href="/work"
                className="inline-flex h-14 items-center gap-3 border border-white/20 px-6 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
              >
                Voir les réalisations
              </Link>
            </div>
          </div>
          <aside className="border border-white/10 bg-white/[0.03] p-6 lg:sticky lg:top-28">
            <span className="mono-label">Focus SEO</span>
            <p className="mt-4 text-3xl font-light tracking-[-0.05em] text-white md:text-4xl">{page.keyword}</p>
            <div className="mt-6 h-px w-full bg-white/10" />
            <p className="mt-6 text-sm leading-7 text-[var(--muted)]">{page.description}</p>
            <nav aria-label="Sommaire de la page" className="mt-8 border-t border-white/10 pt-6">
              <span className="mono-label">Sommaire</span>
              <ol className="mt-4 space-y-2">
                {page.sections.map((section) => (
                  <li key={section.title}>
                    <a
                      href={`#${section.id}`}
                      className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/55 transition hover:text-white"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#methode"
                    className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/55 transition hover:text-white"
                  >
                    Méthode
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/55 transition hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
              </ol>
            </nav>
          </aside>
        </div>
      </section>

      <section className="section-pad border-b border-white/10">
        <Reveal>
          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-4">
            {page.stats.map(([value, label]) => (
              <div key={label} className="bg-[var(--bg)] p-6 md:p-8">
                <p className="text-4xl font-light tracking-[-0.05em]">{value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {page.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="section-pad scroll-mt-28 border-b border-white/10"
        >
          <Reveal className={`grid gap-10 lg:grid-cols-12 lg:items-start ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
            <div className={`lg:col-span-8 ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
              <span className="mono-label">{section.kicker}</span>
              <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.6rem)] font-light leading-[1.05] tracking-[-0.04em]">
                {section.title}
              </h2>
              <div className="mt-6 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="max-w-3xl text-base leading-8 text-[var(--muted)]">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-8 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-white/72">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {section.highlight ? (
              <aside
                className={`lg:col-span-4 ${index % 2 === 1 ? "lg:[direction:ltr]" : ""} border border-white/10 bg-white/[0.02] p-6 md:p-8`}
              >
                <span className="mono-label">Point clé</span>
                <p className="mt-4 text-sm leading-7 text-white/70">{section.highlight}</p>
              </aside>
            ) : null}
          </Reveal>
        </section>
      ))}

      <section id="methode" className="section-pad scroll-mt-28 border-b border-white/10">
        <Reveal>
          <span className="mono-label">Méthode 42studio</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-light tracking-[-0.04em]">
            Comment nous abordons {page.keyword.toLowerCase()}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {page.process.map((step) => (
              <article key={step.step} className="border border-white/10 bg-white/[0.02] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">{step.step}</p>
                <h3 className="mt-3 text-xl font-light tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-pad border-b border-white/10">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_22rem]">
          <div>
            <span className="mono-label">Livrables</span>
            <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.4rem)] font-light tracking-[-0.04em]">
              Ce que vous recevez concrètement
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.deliverables.map((item) => (
                <li
                  key={item}
                  className="border border-white/10 bg-white/[0.02] px-4 py-3 text-sm leading-7 text-white/72"
                >
                  {item}
                </li>
              ))}
            </ul>
            <CaseStudyGrid slugs={page.caseSlugs} />
          </div>
          <aside className="border border-white/10 bg-white/[0.03] p-6 lg:sticky lg:top-28 lg:self-start">
            <span className="mono-label">Pourquoi 42studio</span>
            <ul className="mt-5 space-y-4">
              {page.whyUs.map((item) => (
                <li key={item} className="border-t border-white/10 pt-4 text-sm leading-7 text-[var(--muted)]">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </section>

      <section className="section-pad border-b border-white/10">
        <Reveal className="flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.03] p-7 md:flex-row md:items-center md:p-10">
          <p className="max-w-2xl text-xl font-light tracking-[-0.03em] md:text-2xl">{page.ctaBand}</p>
          <Link
            href="/contact"
            className="inline-flex h-14 shrink-0 items-center gap-4 bg-white px-6 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/85"
          >
            Lancer un projet <span aria-hidden>↗</span>
          </Link>
        </Reveal>
      </section>

      <section id="faq" className="section-pad scroll-mt-28 border-b border-white/10">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_24rem]">
          <div>
            <span className="mono-label">Questions fréquentes</span>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Réponses autour de <strong className="font-normal text-white/80">{page.keyword}</strong> et de la
              manière dont 42studio accompagne ce type de projet.
            </p>
            <div className="mt-8 space-y-8">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="border-t border-white/10 pt-6">
                  <h2 className="text-xl font-light tracking-[-0.03em] md:text-2xl">{faq.question}</h2>
                  <p className="mt-4 leading-7 text-[var(--muted)]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {siblings.length ? (
              <div className="border border-white/10 bg-white/[0.02] p-6">
                <span className="mono-label">Pages liées</span>
                <div className="mt-5 grid gap-3">
                  {siblings.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="border-b border-white/10 pb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 transition hover:text-white"
                    >
                      {item.keyword} <span aria-hidden>↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <span className="mono-label">Expertises</span>
              <div className="mt-5 grid gap-3">
                {page.related.map((item) => (
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
    </SiteChrome>
  );
}
