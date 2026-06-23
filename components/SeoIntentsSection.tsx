import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  getFeaturedSeoPages,
  getSeoPagesByCluster,
  seoClusterLabels,
  seoClusterOrder
} from "@/data/seo-keywords-nav";

type SeoIntentsSectionProps = {
  compact?: boolean;
};

export function SeoIntentsSection({ compact = false }: SeoIntentsSectionProps) {
  const featured = getFeaturedSeoPages();

  if (compact) {
    return (
      <section className="section-pad relative z-10 border-t border-white/10 bg-[var(--bg)]">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mono-label">Acquisition SEO</span>
              <h2 className="mt-4 max-w-xl text-[clamp(1.6rem,3vw,2.4rem)] font-light tracking-[-0.04em]">
                Expertises recherchées sur Google
              </h2>
            </div>
            <Link
              href="/agence-shopify-branding-web"
              className="inline-flex h-12 shrink-0 items-center gap-3 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
            >
              Toutes les expertises <span aria-hidden>↗</span>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {featured.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="border border-white/15 bg-white/[0.02] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/60 transition hover:border-white/35 hover:text-white"
              >
                {page.keyword}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section className="section-pad relative z-10 border-t border-white/10 bg-[var(--bg)]">
      <Reveal>
        <span className="mono-label">Pages SEO transactionnelles</span>
        <h2 className="mt-4 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-light tracking-[-0.04em]">
          15 intentions d&apos;achat couvertes sur le site
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
          Chaque page répond à une recherche précise : agence Shopify, refonte, branding, site sur mesure ou
          studio à Arras. Maillage interne optimisé pour Google et les visiteurs qualifiés.
        </p>
        <Link
          href="/agence-shopify-branding-web"
          className="mt-8 inline-flex h-12 items-center gap-3 bg-white px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/90"
        >
          Hub expertises SEO <span aria-hidden>↗</span>
        </Link>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {seoClusterOrder.map((cluster) => {
          const pages = getSeoPagesByCluster(cluster);
          return (
            <Reveal key={cluster}>
              <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                  {seoClusterLabels[cluster]}
                </h3>
                <ul className="mt-5 space-y-3">
                  {pages.map((page) => (
                    <li key={page.slug}>
                      <Link
                        href={`/${page.slug}`}
                        className="group flex items-start justify-between gap-4 border-b border-white/10 pb-3 transition hover:text-white"
                      >
                        <span className="text-sm leading-6 text-white/75 transition group-hover:text-white">
                          {page.keyword}
                        </span>
                        <span aria-hidden className="shrink-0 font-mono text-[10px] text-white/35 transition group-hover:text-white">
                          ↗
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
