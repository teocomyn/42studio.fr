"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { useMagnetic } from "@/lib/useMagnetic";

export function ContactCta() {
  const ref = useMagnetic<HTMLAnchorElement>();

  return (
    <section id="contact" className="relative z-10 border-t border-white/10 bg-[var(--bg)] px-5 py-24 md:px-10 md:py-32">
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: easeOut }}
      >
        <Link
          ref={ref}
          href="mailto:hello@42studio.fr"
          className="magnetic block w-fit text-[clamp(4rem,15vw,15rem)] font-black leading-[0.82] tracking-[-0.07em] transition hover:text-white/55"
        >
          Parlons-en.
        </Link>
      </motion.div>
      <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-7 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)] md:mt-24 md:flex-row md:items-center md:justify-between">
        <a className="transition hover:text-white" href="mailto:hello@42studio.fr">
          hello@42studio.fr
        </a>
        <span>© 2026 42studio — Arras, FR</span>
        <div className="flex flex-wrap gap-6">
          <a className="transition hover:text-white" href="/brand">
            Brand
          </a>
          <a className="transition hover:text-white" href="/web">
            Web
          </a>
          <a className="transition hover:text-white" href="/shopify">
            Shopify
          </a>
          <a className="transition hover:text-white" href="https://www.instagram.com/42studio">
            Instagram ↗
          </a>
          <a className="transition hover:text-white" href="https://www.linkedin.com/company/42studio">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
