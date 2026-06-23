"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { useMagnetic } from "@/lib/useMagnetic";
import { siteConfig } from "@/lib/site";
import { currentYear } from "@/lib/year";

const internalLinks = [
  ["Brand", "/brand"],
  ["Web", "/web"],
  ["Shopify", "/shopify"],
  ["Produit", "/produit"],
  ["Studio", "/studio"]
] as const;

const legalLinks = [
  ["Mentions légales", "/mentions-legales"],
  ["Confidentialité", "/confidentialite"]
] as const;

export function ContactCta() {
  const ref = useMagnetic<HTMLAnchorElement>();
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden border-t border-white/10 bg-[var(--bg)] px-5 py-24 md:px-10 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_74%_28%,rgba(255,255,255,.10),transparent_22rem),linear-gradient(90deg,rgba(7,7,8,.94)_0%,rgba(7,7,8,.72)_48%,rgba(7,7,8,.88)_100%)]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-[var(--bg)] to-transparent" />
      <motion.div
        className="relative z-10 grid gap-10 md:grid-cols-[1fr_22rem] md:items-end"
        initial={reduce ? false : { y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: easeOut }}
      >
        <div>
          <span className="mono-label">Contact</span>
          <Link
            ref={ref}
            href="/contact"
            className="magnetic mt-6 block w-fit text-[clamp(2.4rem,7vw,4.35rem)] font-black leading-[0.92] tracking-[-0.05em] transition hover:text-white/55"
          >
            Parlons-en.
          </Link>
          <p className="mt-6 max-w-md font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-[var(--muted)]">
            +60 marques accompagnées · Réponse sous 24&nbsp;h · Premier échange sans engagement
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-3 bg-white px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/85"
          >
            Lancer un projet <span aria-hidden>↗</span>
          </Link>
          {siteConfig.bookingUrl ? (
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-3 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
            >
              Réserver un créneau <span aria-hidden>↗</span>
            </a>
          ) : null}
        </div>
      </motion.div>

      <div className="relative z-10 mt-16 flex flex-col gap-6 border-t border-white/10 pt-7 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)] md:mt-24 md:flex-row md:items-start md:justify-between">
        <a className="transition hover:text-white" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        <span>© {currentYear()} 42studio, Arras, FR</span>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {internalLinks.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-white">
              {label}
            </Link>
          ))}
          <a
            className="transition hover:text-white"
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram <span aria-hidden>↗</span>
            <span className="sr-only"> (Instagram, nouvel onglet)</span>
          </a>
          <a
            className="transition hover:text-white"
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span aria-hidden>↗</span>
            <span className="sr-only"> (LinkedIn, nouvel onglet)</span>
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/40">
        {legalLinks.map(([label, href]) => (
          <Link key={href} href={href} className="transition hover:text-white/80">
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
