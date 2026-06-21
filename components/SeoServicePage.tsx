import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import { SiteChrome } from "@/components/SiteChrome";
import type { SeoServicePage as SeoServicePageData } from "@/data/seo-pages";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

type SeoServicePageProps = {
  page: SeoServicePageData;
};

export function SeoServicePage({ page }: SeoServicePageProps) {
  const path = `/${page.slug}`;

  return (
    <SiteChrome>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: page.title, path }
        ])}
      />
      <JsonLd data={serviceJsonLd({ name: page.serviceName, description: page.description, path })} />
      <JsonLd data={faqJsonLd(page.faqs)} />

      <section className="section-pad flex min-h-[88svh] flex-col justify-end pt-36">
        <span className="mono-label mb-8">{page.eyebrow}</span>
        <h1 className="max-w-6xl text-[clamp(3.4rem,11vw,12rem)] font-light leading-[0.85] tracking-[-0.06em]">
          {page.h1}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">{page.intro}</p>
        <div className="mt-10 flex flex-wrap gap-2">
          {page.proofPoints.map((point) => (
            <span
              key={point}
              className="border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70"
            >
              {point}
            </span>
          ))}
        </div>
      </section>

      <section className="section-pad border-y border-white/10">
        <Reveal className="grid gap-8 md:grid-cols-3">
          {page.sections.map((section) => (
            <article key={section.title} className="border-t border-white/10 pt-7">
              <h2 className="text-3xl font-light tracking-[-0.04em]">{section.title}</h2>
              <p className="mt-5 text-base leading-7 text-[var(--muted)]">{section.text}</p>
            </article>
          ))}
        </Reveal>
      </section>

      {/* CTA intermédiaire : capte l'intérêt sans attendre le pied de page. */}
      <section className="section-pad">
        <Reveal className="flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.03] p-7 md:flex-row md:items-center md:p-10">
          <p className="max-w-xl text-2xl font-light tracking-[-0.03em]">
            Un projet de ce type en tête&nbsp;? Parlons-en — réponse sous 24&nbsp;h, sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 shrink-0 items-center gap-4 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
          >
            Lancer un projet <span aria-hidden>↗</span>
          </Link>
        </Reveal>
      </section>

      <section className="section-pad">
        <Reveal className="grid gap-10 md:grid-cols-[1fr_28rem]">
          <div>
            <span className="mono-label">Questions fréquentes</span>
            <div className="mt-8 space-y-8">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="border-t border-white/10 pt-6">
                  <h2 className="text-2xl font-light tracking-[-0.03em]">{faq.question}</h2>
                  <p className="mt-4 leading-7 text-[var(--muted)]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="border border-white/10 bg-white/[0.03] p-6">
            <span className="mono-label">Liens utiles</span>
            <div className="mt-6 grid gap-3">
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
          </aside>
        </Reveal>
      </section>
      <ContactCta />
    </SiteChrome>
  );
}
