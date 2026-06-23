import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactSidebar } from "@/components/ContactSidebar";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SiteChrome } from "@/components/SiteChrome";
import { contactFaqs } from "@/data/contact-faq";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact · Brief projet branding, web ou Shopify",
  description:
    "Contactez 42studio à Arras pour un projet de marque, site web sur mesure, e-commerce Shopify ou produit digital. Réponse sous 24 h.",
  path: "/contact",
  keywords: [
    "contact studio branding",
    "brief site web",
    "projet Shopify",
    "studio créatif Arras",
    "agence web Arras contact",
    "devis Shopify France"
  ]
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
      <JsonLd data={localBusinessJsonLd("/contact")} />
      <JsonLd data={faqJsonLd([...contactFaqs])} />

      <Reveal className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
        <div>
          <span className="mono-label">Contact / Brief</span>
          <h1 className="mt-8 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[0.95] tracking-[-0.05em]">
            Lancer le signal.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
            Projet Shopify, identité de marque, site vitrine ou refonte e-commerce : décrivez votre ambition.
            Si le brief appelle une vraie direction artistique et une exécution solide, on revient vers vous sous
            24&nbsp;h.
          </p>
          <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
            <span>Réponse sous 24&nbsp;h, sans engagement</span>
            <span>Arras, France · à distance partout</span>
            <span>Français / English</span>
          </div>
        </div>
        <div className="border border-white/10 bg-white/[0.02] p-6 lg:sticky lg:top-28 lg:p-8">
          <ContactForm />
        </div>
      </Reveal>

      <div className="mt-16">
        <ContactSidebar />
      </div>
    </SiteChrome>
  );
}
