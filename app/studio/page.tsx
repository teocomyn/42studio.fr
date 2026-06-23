import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { SiteChrome } from "@/components/SiteChrome";
import { StudioHero } from "@/components/StudioHero";
import { processSteps } from "@/data/process";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Studio créatif à Arras",
  description:
    "Découvrez la méthode 42studio : stratégie, identité, système, build et déploiement pour marques, sites web et produits digitaux.",
  path: "/studio",
  keywords: ["studio créatif Arras", "studio design France", "branding web produit", "direction artistique digitale"]
});

export default function StudioPage() {
  return (
    <SiteChrome>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Studio", path: "/studio" }
        ])}
      />

      <StudioHero />

      <section className="section-pad border-b border-white/10">
        <SectionHead
          eyebrow="Méthode"
          title="Cinq étapes. Une seule logique."
          body="Pas de couche agence, pas de handoff fragile : la marque reste cohérente de la stratégie au code."
        />
        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-5">
          {processSteps.map((step) => (
            <Reveal key={step.index}>
              <article className="group flex min-h-56 flex-col justify-between bg-[var(--bg)] p-6 transition hover:bg-white/[0.04] md:min-h-64 md:p-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/35">
                  {step.index}
                </span>
                <div>
                  <h2 className="text-2xl font-light tracking-[-0.035em] text-white transition group-hover:text-white">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad border-b border-white/10">
        <SectionHead eyebrow="L'équipe" title="Compact par choix. Senior par défaut." />
        {team.map((member) => (
          <Reveal key={member.name}>
            <article className="grid gap-8 border border-white/10 bg-white/[0.02] p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-end md:p-10 lg:gap-16">
              <div>
                <span className="mono-label">Fondateur</span>
                <h2 className="mt-6 text-[clamp(2.2rem,5vw,4rem)] font-light leading-[0.95] tracking-[-0.04em]">
                  {member.name}
                </h2>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
                  {member.role}
                </p>
                {member.image ? (
                  <div className="relative mt-10 hidden h-28 w-28 overflow-hidden rounded-full border border-white/15 md:block">
                    <Image src={member.image} alt={member.name} fill sizes="112px" className="object-cover" />
                  </div>
                ) : (
                  <div
                    aria-hidden
                    className="mt-10 hidden h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-4xl font-black tracking-[-0.06em] text-white/20 md:flex"
                  >
                    42
                  </div>
                )}
                {member.badges?.length ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {member.badges.map((badge) => (
                      <li
                        key={badge}
                        className="border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/55"
                      >
                        {badge}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div>
                <p className="max-w-2xl text-lg leading-8 text-white/72">{member.bio}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {member.focus.map((item) => (
                    <li
                      key={item}
                      className="border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section-pad border-b border-white/10">
        <SectionHead
          eyebrow="Capacités"
          title="Trois disciplines. Un seul standard d'exécution."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.id}>
              <article
                id={service.id}
                className="group flex min-h-[26rem] flex-col justify-between border border-white/10 bg-black/20 p-7 transition hover:border-white/25 hover:bg-white/[0.04] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
                      {service.index} / {service.title}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/25 transition group-hover:text-white/50">
                      ↗
                    </span>
                  </div>
                  <h2 className="mt-8 text-3xl font-light leading-tight tracking-[-0.035em]">
                    {service.promise}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{service.short}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-white/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <ul className="space-y-2 font-mono text-[10px] uppercase tracking-[0.08em] text-white/55">
                    {service.deliverables.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex font-mono text-[10px] uppercase tracking-[0.12em] text-white/60 transition hover:text-white"
                  >
                    En savoir plus
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <Reveal className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-8 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="mono-label">Philosophie</span>
              <h2 className="mt-6 max-w-3xl text-[clamp(1.8rem,4vw,3.5rem)] font-light leading-[1.02] tracking-[-0.04em]">
                On ne vend pas une esthétique. On construit une{" "}
                <span className="chrome-text font-black">logique visible</span>.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 w-fit items-center gap-3 border border-white/20 px-5 font-mono text-[10px] uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
            >
              Lancer un projet <span aria-hidden>↗</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <ContactCta />
    </SiteChrome>
  );
}
