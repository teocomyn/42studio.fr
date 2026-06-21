"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { useMagnetic } from "@/lib/useMagnetic";
import { siteConfig } from "@/lib/site";

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
    <section id="contact" className="relative z-10 border-t border-white/10 bg-[var(--bg)] px-5 py-24 md:px-10 md:py-32">
      <motion.div
        initial={reduce ? false : { y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: easeOut }}
      >
        <Link
          ref={ref}
          href="/contact"
          className="magnetic block w-fit text-[clamp(4rem,15vw,15rem)] font-black leading-[0.82] tracking-[-0.07em] transition hover:text-white/55"
        >
          Parlons-en.
        </Link>
        <p className="mt-6 max-w-md font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-[var(--muted)]">
          +60 marques accompagnées · Réponse sous 24&nbsp;h · Premier échange sans engagement
        </p>
      </motion.div>

      <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-7 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)] md:mt-24 md:flex-row md:items-start md:justify-between">
        <a className="transition hover:text-white" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        <span>© 2026 42studio — Arras, FR</span>
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

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/40">
        {legalLinks.map(([label, href]) => (
          <Link key={href} href={href} className="transition hover:text-white/80">
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
