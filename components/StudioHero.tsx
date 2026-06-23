"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/motion";

const stats = [
  { value: "+60", label: "Marques accompagnées" },
  { value: "2018", label: "Depuis" },
  { value: "ARRAS", label: "Studio · Worldwide" },
  { value: "1", label: "Interlocuteur senior" }
] as const;

export function StudioHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 overflow-hidden border-b border-white/10 px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(255,255,255,.1), transparent 24rem), radial-gradient(circle at 88% 72%, rgba(255,255,255,.06), transparent 28rem)"
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "12.5vw 12.5vw",
          maskImage: "linear-gradient(to bottom, #000 20%, transparent 95%)"
        }}
      />

      <div className="relative mx-auto max-w-[88rem]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              className="mb-6 flex flex-wrap items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: easeOut }}
            >
              <span className="mono-label">Studio / Arras — Worldwide</span>
              <span className="hidden h-px w-10 bg-white/15 md:block" aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
                Brand · Web · Produit · Shopify
              </span>
            </motion.div>

            <h1 className="max-w-[14ch] text-[clamp(2.5rem,5.5vw,4.75rem)] font-light leading-[0.98] tracking-[-0.045em]">
              <span className="mask-line block">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.78, delay: 0.1, ease: easeOut }}
                >
                  Du symbole au code,
                </motion.span>
              </span>
              <span className="mask-line block">
                <motion.span
                  className="chrome-text inline-block font-black"
                  initial={reduce ? false : { y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.78, delay: 0.18, ease: easeOut }}
                >
                  sans rupture.
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="mt-8 max-w-xl text-base leading-7 text-white/68 md:text-lg"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: easeOut }}
            >
              42studio rassemble direction artistique, stratégie digitale et exécution front-end pour
              livrer des marques cohérentes — du concept au déploiement.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36, ease: easeOut }}
            >
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-3 bg-white px-5 font-mono text-[10px] uppercase tracking-[0.14em] text-black transition hover:bg-white/90"
              >
                Parler au studio <span aria-hidden>↗</span>
              </Link>
              <Link
                href="/work"
                className="inline-flex h-12 items-center gap-3 border border-white/20 px-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/75 transition hover:border-white/40 hover:text-white"
              >
                Voir le travail
              </Link>
            </motion.div>
          </div>

          <motion.aside
            className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32, ease: easeOut }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[var(--bg)] p-5 md:p-6">
                <p className="text-2xl font-light tracking-[-0.04em] text-white md:text-3xl">{stat.value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[0.1em] text-[var(--muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
