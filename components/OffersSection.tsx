import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { offers } from "@/data/offers";

export function OffersSection({ compact = false, location = "offers_page" }: { compact?: boolean; location?: string }) {
  return (
    <section id="accompagnements" aria-labelledby="offers-title" className="section-pad relative z-10 border-y border-white/10 bg-[var(--bg)]">
      <div className="mb-12 grid gap-6 md:grid-cols-[minmax(12rem,24rem)_1fr] md:gap-10">
        <span className="mono-label">42 / Accompagnements</span>
        <div>
          <h2 id="offers-title" className="max-w-3xl text-[clamp(2rem,4.8vw,4.4rem)] font-light leading-[1] tracking-[-0.045em]">
            Votre ambition.<br />Un point de départ clair.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
            Une identité, un site ou les deux. On définit le périmètre, les livrables et le calendrier avant de commencer.
          </p>
        </div>
      </div>
      <div className="grid border-t border-white/15 lg:grid-cols-3">
        {offers.slice(0, 3).map((offer) => (
          <article key={offer.slug} id={offer.slug} className="flex scroll-mt-28 flex-col border-b border-white/15 py-8 lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:pr-0 lg:[&:not(:last-child)]:border-r">
            <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.12em] text-white/50">
              <span>({offer.number})</span><span>{offer.duration}</span>
            </div>
            <h3 className="mt-8 text-[clamp(1.7rem,2.7vw,2.6rem)] font-light leading-tight tracking-[-0.04em]">{offer.name}</h3>
            <p className="mt-4 max-w-sm text-lg leading-7 text-white/85">{offer.need}</p>
            {!compact && <p className="mt-4 text-sm leading-7 text-white/60">{offer.description}</p>}
            <ul className="my-7 grid gap-3 text-sm leading-6 text-white/65">
              {offer.deliverables.map((item) => <li key={item} className="flex gap-3"><span aria-hidden className="text-white/30">↳</span><span>{item}</span></li>)}
            </ul>
            <div className="mt-auto">
              {!compact && <p className="mb-6 border-t border-white/10 pt-5 text-sm leading-6">{offer.outcome}</p>}
              <TrackedLink href={`/contact?offer=${offer.slug}`} trackId={`offer_${offer.slug}`} trackLocation={location} className="inline-flex min-h-12 items-center gap-4 border border-white/25 px-5 font-mono text-[10px] uppercase tracking-[0.1em] transition hover:bg-white hover:text-black">
                Parlons de ce projet <span aria-hidden>↗</span>
              </TrackedLink>
              {!compact && <Link href={offer.servicePath} className="mt-4 block w-fit py-2 text-sm text-white/55 underline underline-offset-4 hover:text-white">Explorer l’expertise</Link>}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 text-sm leading-6 text-white/55 sm:flex-row">
        <p className="max-w-xl">Sur devis. Délais indicatifs, selon le périmètre et les validations.</p>
        {compact && <TrackedLink href="/accompagnements" trackId="voir_accompagnements" trackLocation={location} className="py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white underline underline-offset-4">Tous les accompagnements ↗</TrackedLink>}
      </div>
    </section>
  );
}
