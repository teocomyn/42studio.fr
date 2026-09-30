import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { OffersSection } from "@/components/OffersSection";
import { SiteChrome } from "@/components/SiteChrome";
import { TrackedLink } from "@/components/TrackedLink";
import { offers } from "@/data/offers";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Accompagnements : identité, site et direction créative",
  description: "Brand Identity, Digital Experience, Brand × Digital, campagne et Creative Partner : choisissez le point de départ de votre projet avec 42studio. Sur devis.",
  path: "/accompagnements"
});

export default function OffersPage() {
  const crumbs = [{ name: "Accueil", path: "/" }, { name: "Accompagnements", path: "/accompagnements" }];
  return (
    <SiteChrome>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <section className="section-pad pt-32 md:pt-36">
        <Breadcrumbs items={crumbs} />
        <span className="mono-label mt-10 block">One vision. Every touchpoint.</span>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6.5vw,5.5rem)] font-light leading-[0.95] tracking-[-0.05em]">De la première idée<br />à ce que votre marque montre.</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/65">Nous accompagnons les marques, les startups et les projets culturels sur leur identité, leur expérience digitale et leur direction créative.</p>
        <div className="mt-8 flex flex-wrap gap-5">
          <TrackedLink href="/contact" trackId="lancer_projet" trackLocation="offers_hero" className="inline-flex min-h-12 items-center gap-4 bg-white px-5 font-mono text-[11px] uppercase tracking-[0.1em] text-black hover:bg-white/85">Discuter du projet <span aria-hidden>↗</span></TrackedLink>
          <Link href="/work" className="inline-flex min-h-12 items-center gap-4 px-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 hover:text-white">Voir le travail <span aria-hidden>↗</span></Link>
        </div>
      </section>
      <OffersSection />
      <section className="section-pad border-b border-white/10">
        <span className="mono-label">Pour un lancement. Ou pour la suite.</span>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          {offers.slice(3).map((offer) => (
            <article id={offer.slug} key={offer.slug} className="scroll-mt-28 border-t border-white/15 pt-6">
              <span className="mono-label">({offer.number}) / {offer.duration}</span>
              <h2 className="mt-5 text-3xl font-light tracking-[-0.04em]">{offer.name}</h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/65">{offer.description}</p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-white/60">{offer.deliverables.map((item) => <li key={item}>↳ {item}</li>)}</ul>
              <TrackedLink href={`/contact?offer=${offer.slug}`} trackId={`offer_${offer.slug}`} trackLocation="offers_page" className="mt-7 inline-flex min-h-12 items-center gap-4 border border-white/25 px-5 font-mono text-[10px] uppercase tracking-[0.1em] transition hover:bg-white hover:text-black">Définir le périmètre <span aria-hidden>↗</span></TrackedLink>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad">
        <span className="mono-label">Le premier échange</span>
        <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight tracking-[-0.04em]">Trois choses à nous raconter.</h2>
        <ol className="my-9 grid gap-6 border-y border-white/10 py-7 md:grid-cols-3">
          <li><span className="mono-label">01 / Le contexte</span><p className="mt-3 text-white/70">Ce que fait la marque et ce qui doit évoluer.</p></li>
          <li><span className="mono-label">02 / L’ambition</span><p className="mt-3 text-white/70">Le lancement, le repositionnement ou le projet à construire.</p></li>
          <li><span className="mono-label">03 / Les contraintes</span><p className="mt-3 text-white/70">Le budget envisagé, le délai et les personnes qui valident.</p></li>
        </ol>
        <p className="max-w-xl text-base leading-7 text-white/60">Après cet échange, nous proposons le périmètre adapté, les livrables et un calendrier. Le montant est chiffré pour votre projet.</p>
        <TrackedLink href="/contact" trackId="lancer_projet" trackLocation="offers_bottom" className="mt-7 inline-flex min-h-14 items-center gap-5 bg-white px-6 font-mono text-[11px] uppercase tracking-[0.1em] text-black hover:bg-white/85">Présenter mon projet <span aria-hidden>↗</span></TrackedLink>
      </section>
    </SiteChrome>
  );
}
