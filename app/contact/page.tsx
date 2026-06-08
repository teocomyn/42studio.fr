import type { Metadata } from "next";
import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LenisProvider } from "@/components/LenisProvider";
import { Reveal } from "@/components/Reveal";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Contactez 42studio pour un projet de marque, site web, e-commerce Shopify ou produit digital.",
  path: "/contact",
  keywords: ["contact studio branding", "brief site web", "projet Shopify", "studio créatif Arras"]
});

export default function ContactPage() {
  return (
    <LenisProvider>
      <Cursor />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" }
        ])}
      />
      <div className="site-shell">
        <div className="grid-overlay" />
        <Header />
        <main className="relative z-10 min-h-screen px-5 pb-10 pt-36 md:px-10">
          <Reveal className="grid min-h-[calc(100svh-12rem)] gap-10 md:grid-cols-[1fr_32rem] md:items-end">
            <div>
              <span className="mono-label">Contact / Brief</span>
              <h1 className="mt-8 max-w-5xl text-[clamp(4rem,13vw,14rem)] font-black leading-[0.82] tracking-[-0.07em]">
                Lancer le signal.
              </h1>
            </div>
            <div className="border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-lg leading-8 text-white/80">
                Envoyez-nous le contexte, l'ambition, les contraintes, le timing. Si le projet appelle
                une vraie direction artistique et une exécution solide, on vous répond vite.
              </p>
              <a
                href="mailto:hello@42studio.fr?subject=Projet%20pour%2042studio"
                className="mt-8 inline-flex h-14 items-center gap-4 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
              >
                hello@42studio.fr <span aria-hidden>↗</span>
              </a>
              <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
                <span>Arras, France</span>
                <span>Brand · Web · Produit</span>
                <span>Français / English</span>
              </div>
            </div>
          </Reveal>
        </main>
      </div>
    </LenisProvider>
  );
}
