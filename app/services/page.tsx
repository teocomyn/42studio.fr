import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SeoIntentsSection } from "@/components/SeoIntentsSection";
import { SiteChrome } from "@/components/SiteChrome";
import { TrackedLink } from "@/components/TrackedLink";
import { creativePillars, creativeServices } from "@/data/creative-services";
import { seoServicePages } from "@/data/seo-pages";
import { breadcrumbJsonLd, createMetadata, itemListJsonLd } from "@/lib/seo";

const otherExpertises = ["shopify", "produit"]
  .map((slug) => seoServicePages.find((page) => page.slug === slug))
  .filter((page): page is NonNullable<typeof page> => Boolean(page));

export const metadata: Metadata = createMetadata({
  title: "Services : branding, web, motion, 3D et vidéo",
  description:
    "Branding, graphisme, site web, direction artistique, motion design, 3D et vidéo : les quatre piliers de 42studio, sous une seule direction créative.",
  path: "/services",
  keywords: [
    "services studio créatif",
    "branding",
    "graphisme",
    "création site web",
    "direction artistique",
    "motion design",
    "studio 3D",
    "réalisation vidéo"
  ]
});

export default function ServicesPage() {
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" }
  ];

  return (
    <SiteChrome>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={itemListJsonLd(creativeServices.map((service) => ({ name: service.name, path: `/${service.slug}` })))}
      />

      <section className="section-pad border-b border-white/10 pt-32 md:pt-36">
        <Breadcrumbs items={crumbs} />
        <span className="mono-label mt-10 block">Services</span>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,7vw,4.35rem)] font-black leading-[0.92] tracking-[-0.05em]">
          Quatre piliers, une seule direction créative.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
          Brand, Digital, Creative Direction et Visual Production : sept expertises pour tout ce que la marque montre,
          de l&apos;identité au film de lancement. Chacune peut être prise seule, ou enchaînée avec les autres.
        </p>
        <TrackedLink
          href="/contact"
          trackId="lancer_projet"
          trackLocation="services_hero"
          className="mt-8 inline-flex h-12 items-center gap-3 bg-white px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/90"
        >
          Lancer un projet <span aria-hidden>↗</span>
        </TrackedLink>
      </section>

      {creativePillars.map((pillar) => {
        const pillarServices = creativeServices.filter((service) => service.pillar === pillar.id);
        return (
          <section key={pillar.id} id={pillar.id} className="section-pad scroll-mt-28 border-b border-white/10">
            <Reveal className="grid gap-10 lg:grid-cols-[minmax(14rem,24rem)_1fr]">
              <div>
                <span className="mono-label">
                  {pillar.index} / {pillar.title}
                </span>
                <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1] tracking-[-0.04em]">
                  {pillar.output}
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">{pillar.text}</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {pillarServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="group flex min-h-[16rem] flex-col justify-between border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/35"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">{service.navLabel}</span>
                    <div>
                      <h3 className="mt-6 text-[clamp(1.5rem,2.6vw,2.2rem)] font-light leading-[1] tracking-[-0.04em]">
                        {service.name}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
                      <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70 transition group-hover:text-white">
                        Découvrir <span aria-hidden>↗</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </section>
        );
      })}

      <section className="section-pad border-b border-white/10">
        <Reveal>
          <span className="mono-label">Autres expertises</span>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.6rem,3vw,2.4rem)] font-light tracking-[-0.04em]">
            E-commerce et produit digital
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {otherExpertises.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="group border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/35"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">{page.eyebrow}</span>
                <h3 className="mt-5 text-2xl font-light tracking-[-0.03em]">{page.serviceName}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{page.description}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <SeoIntentsSection />

      <section className="section-pad">
        <Reveal className="flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.03] p-7 md:flex-row md:items-center md:p-10">
          <p className="max-w-xl text-xl font-light tracking-[-0.03em] md:text-2xl">
            Pas sûr de par où commencer&nbsp;? On clarifie le bon périmètre en 30 minutes.
          </p>
          <TrackedLink
            href="/contact"
            trackId="lancer_projet"
            trackLocation="services_cta_band"
            className="inline-flex h-14 shrink-0 items-center gap-4 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
          >
            Lancer un projet <span aria-hidden>↗</span>
          </TrackedLink>
        </Reveal>
      </section>

      <ContactCta />
    </SiteChrome>
  );
}
