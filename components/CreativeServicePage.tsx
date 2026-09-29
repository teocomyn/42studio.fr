import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { SiteChrome } from "@/components/SiteChrome";
import { TrackedLink } from "@/components/TrackedLink";
import {
  creativePillars,
  creativeServices,
  studioModel,
  type CreativeService
} from "@/data/creative-services";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

type CreativeServicePageProps = {
  service: CreativeService;
};

export function CreativeServicePage({ service }: CreativeServicePageProps) {
  const path = `/${service.slug}`;
  const pillar = creativePillars.find((item) => item.id === service.pillar);
  const related = service.relatedServices
    .map((slug) => creativeServices.find((item) => item.slug === slug))
    .filter((item): item is CreativeService => Boolean(item));
  const others = creativeServices.filter(
    (item) => item.slug !== service.slug && !service.relatedServices.includes(item.slug)
  );
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.navLabel, path }
  ];
  const contactHref = `/contact?type=${service.contactType}`;

  return (
    <SiteChrome>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.description,
          path,
          serviceType: service.serviceType,
          category: pillar?.title,
          keywords: service.keywords
        })}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />

      <section className="section-pad border-b border-white/10 pt-32 md:pt-36">
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <div>
            <span className="mono-label">{service.eyebrow}</span>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,7vw,4.35rem)] font-black leading-[0.92] tracking-[-0.05em] text-balance">
              {service.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">{service.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <TrackedLink
                href={contactHref}
                trackId={`service_${service.contactType}`}
                trackLocation="service_hero"
                className="inline-flex h-14 items-center gap-3 bg-white px-6 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/90"
              >
                Parler de votre projet <span aria-hidden>↗</span>
              </TrackedLink>
              <Link
                href="/work"
                className="inline-flex h-14 items-center gap-3 border border-white/20 px-6 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
              >
                Voir les réalisations
              </Link>
            </div>
          </div>
          <aside aria-label="En bref" className="border border-white/10 bg-white/[0.03] p-6 md:p-7">
            <span className="mono-label">En bref</span>
            <p className="mt-4 text-sm leading-7 text-white/78">{service.definition}</p>
            {pillar ? (
              <p className="mt-6 border-t border-white/10 pt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">
                Pilier {pillar.index} · {pillar.title} · {pillar.output}
              </p>
            ) : null}
          </aside>
        </div>
      </section>

      <section id="formats" className="section-pad scroll-mt-28 border-b border-white/10">
        <Reveal>
          <span className="mono-label">Ce qu&apos;on crée</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.02] tracking-[-0.04em]">
            {service.navLabel} : les formats que le studio produit
          </h2>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {service.formats.map((format) => (
              <article key={format.name} className="bg-[var(--bg)] p-6 md:p-8">
                <h3 className="text-xl font-light tracking-[-0.03em]">{format.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{format.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="usages" className="section-pad scroll-mt-28 border-b border-white/10">
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(12rem,22rem)_1fr]">
          <div>
            <span className="mono-label">Quand nous appeler</span>
            <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-[1.05] tracking-[-0.04em]">
              Les situations où ce travail change quelque chose
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {service.useCases.map((useCase) => (
              <article key={useCase.title} className="border-t border-white/10 pt-5">
                <h3 className="text-lg font-light tracking-[-0.02em] text-white">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{useCase.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="methode" className="section-pad scroll-mt-28 border-b border-white/10">
        <Reveal>
          <span className="mono-label">Méthode</span>
          <h2 className="mt-4 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-light tracking-[-0.04em]">
            Comment se déroule un projet de {service.navLabel.toLowerCase()}
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {service.process.map((step) => (
              <li key={step.step} className="border border-white/10 bg-white/[0.02] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">{step.step}</p>
                <h3 className="mt-3 text-xl font-light tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section id="livrables" className="section-pad scroll-mt-28 border-b border-white/10">
        <Reveal className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="mono-label">Livrables</span>
            <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.4rem)] font-light tracking-[-0.04em]">
              Ce que vous recevez
            </h2>
            <ul className="mt-8 grid gap-3">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="border border-white/10 bg-white/[0.02] px-4 py-3 text-sm leading-7 text-white/75"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="mono-label">Budget</span>
            <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.4rem)] font-light tracking-[-0.04em]">
              Ce qui fait varier le budget
            </h2>
            <ul className="mt-8 space-y-3">
              {service.budgetFactors.map((factor) => (
                <li key={factor} className="flex gap-3 text-sm leading-7 text-white/75">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                  {factor}
                </li>
              ))}
            </ul>
            <div className="mt-8 border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/55">Format conseillé</p>
              <h3 className="mt-3 text-2xl font-light tracking-[-0.03em]">{service.offer.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.offer.text}</p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Chaque projet est chiffré après un premier échange, avec une proposition détaillée par étape.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {service.caseSlugs?.length ? (
        <section id="realisations" className="section-pad scroll-mt-28 border-b border-white/10">
          <Reveal>
            <span className="mono-label">Réalisations</span>
            <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.4rem)] font-light tracking-[-0.04em]">
              Des projets menés par le studio
            </h2>
            <ProjectGrid slugs={service.caseSlugs} />
          </Reveal>
        </section>
      ) : null}

      <section className="section-pad border-b border-white/10">
        <Reveal className="grid gap-8 border border-white/10 bg-white/[0.02] p-7 md:grid-cols-[minmax(12rem,20rem)_1fr] md:p-10">
          <div>
            <span className="mono-label">Le modèle 42studio</span>
            <h2 className="mt-4 text-2xl font-light tracking-[-0.03em]">Un studio, la bonne équipe</h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">{studioModel}</p>
        </Reveal>
      </section>

      <section id="faq" className="section-pad scroll-mt-28 border-b border-white/10">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_24rem]">
          <div>
            <span className="mono-label">Questions fréquentes</span>
            <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.4rem)] font-light tracking-[-0.04em]">
              {service.navLabel} : vos questions
            </h2>
            <div className="mt-8 space-y-8">
              {service.faqs.map((faq) => (
                <article key={faq.question} className="border-t border-white/10 pt-6">
                  <h3 className="text-xl font-light tracking-[-0.03em] md:text-2xl">{faq.question}</h3>
                  <p className="mt-4 leading-7 text-[var(--muted)]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Services liés" className="border border-white/10 bg-white/[0.02] p-6">
              <span className="mono-label">Services liés</span>
              <div className="mt-5 grid gap-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="border-b border-white/10 pb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 transition hover:text-white"
                  >
                    {item.name} <span aria-hidden>↗</span>
                  </Link>
                ))}
              </div>
            </nav>
            {service.furtherReading.length ? (
              <nav aria-label="Pour aller plus loin" className="border border-white/10 bg-white/[0.02] p-6">
                <span className="mono-label">Pour aller plus loin</span>
                <div className="mt-5 grid gap-3">
                  {service.furtherReading.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="border-b border-white/10 pb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 transition hover:text-white"
                    >
                      {item.label} <span aria-hidden>↗</span>
                    </Link>
                  ))}
                </div>
              </nav>
            ) : null}
          </aside>
        </Reveal>
      </section>

      <section className="section-pad border-b border-white/10">
        <Reveal className="flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.03] p-7 md:flex-row md:items-center md:p-10">
          <div>
            <p className="max-w-2xl text-xl font-light tracking-[-0.03em] md:text-2xl">
              Un projet de {service.navLabel.toLowerCase()} en tête ? Réponse sous 24 h, premier échange sans engagement.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">
              Aussi au studio :{" "}
              {others.map((item, index) => (
                <span key={item.slug}>
                  <Link href={`/${item.slug}`} className="underline-offset-4 transition hover:text-white hover:underline">
                    {item.navLabel}
                  </Link>
                  {index < others.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </div>
          <TrackedLink
            href={contactHref}
            trackId={`service_${service.contactType}`}
            trackLocation="service_cta_band"
            className="inline-flex h-14 shrink-0 items-center gap-4 bg-white px-6 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/85"
          >
            Lancer un projet <span aria-hidden>↗</span>
          </TrackedLink>
        </Reveal>
      </section>

      <ContactCta />
    </SiteChrome>
  );
}
