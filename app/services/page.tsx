import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { SectionHead } from "@/components/SectionHead";
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
      <section className="section-pad pt-36">
        <SectionHead
          as="h1"
          eyebrow="Services"
          title="Quatre expertises, une seule logique de bout en bout."
          body="Brand, web, Shopify et produit : pensés et exécutés par un seul studio, sans rupture entre direction artistique et code."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {offers.map((offer) => (
            <Link
              key={offer.slug}
              href={`/${offer.slug}`}
              className="group flex min-h-[16rem] flex-col justify-between border border-white/10 bg-[var(--bg)] p-7 transition hover:border-white/35 md:p-9"
            >
              <span className="mono-label">{offer.eyebrow}</span>
              <div>
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-[0.95] tracking-[-0.04em]">
                  {offer.serviceName}
                </h2>
                <p className="mt-5 max-w-md leading-7 text-[var(--muted)]">{offer.description}</p>
                <span className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70 transition group-hover:text-white">
                  Découvrir <span aria-hidden>↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactCta />
    </SiteChrome>
  );
}
