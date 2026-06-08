"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { useMagnetic } from "@/lib/useMagnetic";

const HeroScene = dynamic(() => import("./HeroScene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.11),transparent_35rem)]" />
});

const titleLines = ["On dessine", "des marques", "pensées pour exister."];

export function Hero() {
  const ctaRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section className="relative z-10 flex min-h-[100svh] overflow-hidden px-5 pb-8 pt-28 md:px-10 md:pt-36">
      <HeroScene />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(7,7,8,.82)_0%,rgba(7,7,8,.48)_38%,rgba(7,7,8,.08)_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      <div className="relative z-10 flex w-full flex-col justify-center">
        <motion.div
          className="mb-8 flex max-w-3xl flex-wrap gap-x-7 gap-y-3 font-mono text-[10px] uppercase leading-5 tracking-[0.1em] text-white/48 md:text-[11px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.45, ease: easeOut }}
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.9)]" />
            Studio créatif · Brand · Web · Produit
          </span>
          <span>EST. ARRAS — WORLDWIDE</span>
          <span>50.29°N / 2.78°E</span>
        </motion.div>

        <h1 className="max-w-[12ch] text-[clamp(3.4rem,13vw,14.5rem)] font-light leading-[0.86] tracking-[-0.055em] text-balance">
          {titleLines.map((line, index) => (
            <span className="mask-line" key={line}>
              <motion.span
                className={index === 2 ? "chrome-text inline-block font-black" : "inline-block"}
                initial={{ y: "112%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.1, delay: 1.6 + index * 0.12, ease: easeOut }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex flex-col gap-7 md:mt-12 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2, ease: easeOut }}
        >
          <p className="max-w-md text-base leading-7 text-white/64">
            Un seul studio pour la stratégie, l'identité, le site et le produit. Du symbole au code,
            sans rupture. C'est ça, la différence.
          </p>
          <Link
            ref={ctaRef}
            href="/contact"
            className="magnetic inline-flex h-14 w-fit items-center gap-4 border border-white/25 px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black active:scale-[0.98]"
          >
            Lancer un projet
            <span aria-hidden>↗</span>
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-0 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2.2 }}
        >
          <span className="h-px w-14 animate-pulse bg-white/70" />
          Faites defiler
        </motion.div>
      </div>
    </section>
  );
}
