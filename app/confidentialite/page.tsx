import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Politique de confidentialité",
    description: "Comment 42studio traite les données personnelles collectées via le site.",
    path: "/confidentialite"
  }),
  robots: { index: false, follow: true }
};

const blocks: Array<{ title: string; text: string }> = [
  {
    title: "Données collectées",
    text: "Le formulaire de contact collecte les informations que vous fournissez (nom, email, type de projet, budget, message) dans le seul but de répondre à votre demande."
  },
  {
    title: "Finalité et base légale",
    text: "Ces données servent uniquement à traiter votre prise de contact (intérêt légitime). Elles ne sont ni revendues, ni utilisées à des fins publicitaires."
  },
  {
    title: "Durée de conservation",
    text: "Les demandes sont conservées le temps nécessaire à l'échange commercial, puis supprimées si aucune suite n'est donnée."
  },
  {
    title: "Sous-traitants",
    text: "Les emails de contact transitent via Resend (envoi transactionnel). Le site est hébergé par Vercel. La mesure d'audience est assurée par Google Analytics 4 et Vercel Analytics, de manière agrégée."
  },
  {
    title: "Mesure d'audience",
    text: "Google Analytics 4 (G-ZTMCPNWGL5) et Vercel Analytics permettent de comprendre l'usage du site : pages visitées, provenance du trafic et performance. Ces outils ne servent pas à revendre vos données."
  },
  {
    title: "Vos droits",
    text: `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, écrivez à ${siteConfig.email}.`
  }
];

export default function ConfidentialitePage() {
  return (
    <SiteChrome mainClassName="relative z-10 px-5 pb-20 pt-36 md:px-10">
      <span className="mono-label">Légal</span>
      <h1 className="mt-6 text-[clamp(2.6rem,8vw,6rem)] font-light tracking-[-0.05em]">
        Politique de confidentialité
      </h1>
      <div className="mt-12 max-w-3xl space-y-10 border-t border-white/10 pt-10">
        {blocks.map((block) => (
          <section key={block.title}>
            <h2 className="text-2xl font-light tracking-[-0.03em]">{block.title}</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">{block.text}</p>
          </section>
        ))}
      </div>
    </SiteChrome>
  );
}
