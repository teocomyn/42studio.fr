import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SiteChrome } from "@/components/SiteChrome";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Contactez 42studio pour un projet de marque, site web, e-commerce Shopify ou produit digital.",
  path: "/contact",
  keywords: ["contact studio branding", "brief site web", "projet Shopify", "studio créatif Arras"]
});

export default function ContactPage() {
  return (
    <SiteChrome mainClassName="relative z-10 px-5 pb-20 pt-36 md:px-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" }
        ])}
      />
      <Reveal className="grid gap-12 md:grid-cols-[1fr_34rem] md:gap-16">
        <div>
          <span className="mono-label">Contact / Brief</span>
          <h1 className="mt-8 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[0.95] tracking-[-0.05em]">
            Lancer le signal.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-8 text-white/80">
            Envoyez le contexte, l&apos;ambition, les contraintes et le timing. Si le projet appelle une
            vraie direction artistique et une exécution solide, on vous répond vite.
          </p>
          <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
            <span>Réponse sous 24&nbsp;h, sans engagement</span>
            <span>Arras, France · à distance partout</span>
            <span>Français / English</span>
          </div>
          {siteConfig.bookingUrl ? (
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-14 items-center gap-4 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
            >
              Réserver un appel découverte <span aria-hidden>↗</span>
            </a>
          ) : null}
        </div>
        <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <ContactForm />
        </div>
      </Reveal>
    </SiteChrome>
  );
}
