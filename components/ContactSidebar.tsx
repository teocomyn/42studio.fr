import Link from "next/link";
import { BookingLink } from "@/components/BookingLink";
import { contactFaqs, contactProcessSteps } from "@/data/contact-faq";
import { getFeaturedSeoPages } from "@/data/seo-keywords-nav";
import { siteConfig } from "@/lib/site";

export function ContactSidebar() {
  const featuredPages = getFeaturedSeoPages().slice(0, 4);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
        <span className="mono-label">Méthode</span>
        <ol className="mt-6 space-y-5">
          {contactProcessSteps.map((item) => (
            <li key={item.step} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">{item.step}</p>
              <p className="mt-2 text-base font-light tracking-[-0.02em] text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
        <span className="mono-label">Réassurance</span>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-white/72">
          <li>+60 marques accompagnées depuis 2018</li>
          <li>Interlocuteur senior, sans couche agence</li>
          <li>Brand, web et Shopify dans le même studio</li>
          <li>Basé à Arras, projets France et international</li>
        </ul>
        <BookingLink
          location="contact_sidebar"
          className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
          label="Réserver un appel"
        />
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-3 inline-flex h-12 w-full items-center justify-center font-mono text-[11px] uppercase tracking-[0.1em] text-white/55 transition hover:text-white"
        >
          {siteConfig.email}
        </a>
      </div>

      <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
        <span className="mono-label">Expertises</span>
        <div className="mt-5 grid gap-2">
          {featuredPages.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="border-b border-white/10 pb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/55 transition hover:text-white"
            >
              {page.keyword} <span aria-hidden>↗</span>
            </Link>
          ))}
          <Link
            href="/work"
            className="pt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/55 transition hover:text-white"
          >
            Voir les réalisations <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>

      <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
        <span className="mono-label">Questions fréquentes</span>
        <div className="mt-5 space-y-5">
          {contactFaqs.slice(0, 3).map((faq) => (
            <article key={faq.question}>
              <h2 className="text-sm font-light tracking-[-0.02em] text-white">{faq.question}</h2>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
