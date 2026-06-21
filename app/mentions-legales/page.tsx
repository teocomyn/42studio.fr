import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Mentions légales",
    description: "Mentions légales du site 42studio.",
    path: "/mentions-legales"
  }),
  robots: { index: false, follow: true }
};

const rows: Array<[string, string]> = [
  ["Éditeur", siteConfig.legal.companyName],
  ["Forme juridique", siteConfig.legal.legalForm],
  ["SIREN / SIRET", siteConfig.legal.siren],
  ["Adresse", `${siteConfig.legal.address}, ${siteConfig.legal.postalCode} ${siteConfig.legal.city}`],
  ["Directeur de la publication", siteConfig.legal.director],
  ["Contact", siteConfig.email],
  ["Hébergeur", siteConfig.legal.host]
];

export default function MentionsLegalesPage() {
  return (
    <SiteChrome mainClassName="relative z-10 px-5 pb-20 pt-36 md:px-10">
      <span className="mono-label">Légal</span>
      <h1 className="mt-6 text-[clamp(2.6rem,8vw,6rem)] font-light tracking-[-0.05em]">Mentions légales</h1>
      <dl className="mt-12 max-w-3xl divide-y divide-white/10 border-t border-white/10">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 py-5 md:grid-cols-[16rem_1fr]">
            <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">{label}</dt>
            <dd className="text-base leading-7 text-white/80">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-12 max-w-2xl text-sm leading-7 text-[var(--muted)]">
        L&apos;ensemble du site (textes, visuels, code, identité) est protégé par le droit d&apos;auteur. Toute
        reproduction sans autorisation est interdite.
      </p>
    </SiteChrome>
  );
}
