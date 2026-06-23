import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SiteChrome } from "@/components/SiteChrome";
import { seoServicePages } from "@/data/seo-pages";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const order = ["brand", "web", "shopify", "produit"] as const;
const offers = order
  .map((slug) => seoServicePages.find((page) => page.slug === slug))
  .filter((page): page is NonNullable<typeof page> => Boolean(page));

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Branding, sites web, Shopify et produit digital : les quatre expertises de 42studio, pensées comme une seule logique de bout en bout.",
  path: "/services",
  keywords: ["services studio créatif", "branding", "création site web", "agence Shopify", "design produit"]
});

export default function ServicesPage() {
  return (
    <SiteChrome>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" }
        ])}
      />

      <section className="section-pad border-b border-white/10 pt-36">
        <span className="mono-label">Services</span>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,7vw,4.35rem)] font-black leading-[0.92] tracking-[-0.05em]">
          Quatre expertises, une seule logique.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
          Brand, web, Shopify et produit : pensés et exécutés par un seul studio, sans rupture entre direction
          artistique et code.
        </p>
      </section>

      <section className="section-pad border-b border-white/10">
        <div className="grid gap-5 md:grid-cols-2">
          {offers.map((offer, index) => (
            <Reveal key={offer.slug}>
              <Link
                href={`/${offer.slug}`}
                className="group flex min-h-[18rem] flex-col justify-between border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/35 md:min-h-[20rem] md:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="mono-label">{offer.eyebrow}</span>
                  <span className="font-mono text-[10px] text-white/30">0{index + 1}</span>
                </div>
                <div>
                  <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[0.95] tracking-[-0.04em]">
                    {offer.serviceName}
                  </h2>
                  <p className="mt-5 max-w-md leading-7 text-[var(--muted)]">{offer.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {offer.proofPoints.slice(0, 2).map((point) => (
                      <span
                        key={point}
                        className="border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/60"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                  <span className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70 transition group-hover:text-white">
                    Découvrir <span aria-hidden>↗</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <Reveal className="flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.03] p-7 md:flex-row md:items-center md:p-10">
          <p className="max-w-xl text-xl font-light tracking-[-0.03em] md:text-2xl">
            Pas sûr de par où commencer&nbsp;? On clarifie le bon périmètre en 30 minutes.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 shrink-0 items-center gap-4 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
          >
            Lancer un projet <span aria-hidden>↗</span>
          </Link>
        </Reveal>
      </section>

      <ContactCta />
    </SiteChrome>
  );
}
