import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LenisProvider } from "@/components/LenisProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { services } from "@/data/services";
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
    <LenisProvider>
      <Cursor />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Studio", path: "/studio" }
        ])}
      />
      <div className="site-shell">
        <div className="grid-overlay" />
        <Header />
        <main className="relative z-10">
          <section className="section-pad flex min-h-[82svh] flex-col justify-end pt-36">
            <span className="mono-label mb-8">Studio / Arras — Worldwide</span>
            <h1 className="max-w-6xl text-[clamp(3.4rem,11vw,12rem)] font-light leading-[0.85] tracking-[-0.06em]">
              Du symbole au code, <span className="chrome-text font-black">sans rupture.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              42studio rassemble direction artistique, stratégie digitale et exécution front-end pour
              livrer des marques qui fonctionnent vraiment dans leurs usages.
            </p>
          </section>

          <section className="section-pad border-y border-white/10">
            <SectionHead
              eyebrow="Capacites"
              title="Un studio volontairement compact, pensé pour aller vite et tenir un haut niveau."
            />
            <div className="space-y-8">
              {services.map((service) => (
                <Reveal key={service.id}>
                  <article id={service.id} className="grid gap-7 border-t border-white/10 py-10 md:grid-cols-[16rem_1fr_22rem]">
                    <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--muted)]">
                      ({service.index}) {service.title}
                    </span>
                    <div>
                      <h2 className="text-4xl font-light tracking-[-0.04em]">{service.promise}</h2>
                      <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">{service.short}</p>
                    </div>
                    <ul className="space-y-3 font-mono text-[11px] uppercase tracking-[0.08em] text-white/62">
                      {service.deliverables.map((item) => (
                        <li key={item} className="border-b border-white/10 pb-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="section-pad">
            <Reveal className="grid gap-8 md:grid-cols-[1fr_28rem] md:items-end">
              <h2 className="text-[clamp(2.4rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.055em]">
                On ne vend pas une aesthetic. On construit une logique visible.
              </h2>
              <Link
                href="/contact"
                className="inline-flex h-14 w-fit items-center gap-4 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
              >
                Parler au studio <span aria-hidden>↗</span>
              </Link>
            </Reveal>
          </section>
          <ContactCta />
        </main>
      </div>
    </LenisProvider>
  );
}
