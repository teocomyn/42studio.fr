"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/motion";

const lines = [
  { text: "Le logo n'est pas une image.", accent: null },
  { text: "C'est le premier composant", accent: "composant" },
  { text: "d'un système vivant.", accent: "système vivant" }
] as const;

function renderAccent(text: string, accent: string | null) {
  if (!accent || !text.includes(accent)) return text;

  const [before, after] = text.split(accent);

  return (
    <>
      {before}
      <span className="chrome-text font-black">{accent}</span>
      {after}
    </>
  );
}

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="manifesto-title"
      className="section-pad relative z-10 overflow-hidden border-y border-white/10 bg-[var(--bg)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 18% 50%, rgba(255,255,255,.07), transparent 28rem), radial-gradient(circle at 82% 42%, rgba(255,255,255,.05), transparent 24rem)"
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent md:block"
      />

      <div className="relative mx-auto grid max-w-[88rem] gap-12 md:grid-cols-[minmax(12rem,18rem)_1fr] md:items-end md:gap-16 lg:gap-24">
        <motion.div
          className="flex flex-col gap-6"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <div className="flex items-center gap-4">
            <span className="mono-label">Manifeste</span>
            <motion.span
              aria-hidden
              className="h-px flex-1 max-w-16 bg-white/15"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15, ease: easeOut }}
              style={{ transformOrigin: "left center" }}
            />
          </div>
          <p className="max-w-xs text-sm leading-7 text-[var(--muted)]">
            Une marque n&apos;est pas une collection d&apos;assets. C&apos;est une grammaire visuelle
            — cohérente, extensible, pensée pour durer.
          </p>
          <Link
            href="/studio"
            className="group inline-flex w-fit items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55 transition hover:text-white"
          >
            <span className="h-px w-8 bg-white/25 transition group-hover:w-12 group-hover:bg-white" />
            Notre méthode
          </Link>
        </motion.div>

        <div className="relative">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-3 top-2 hidden h-16 w-16 border-l border-t border-white/15 md:block lg:-left-6 lg:h-24 lg:w-24"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-2 -right-1 hidden h-16 w-16 border-b border-r border-white/15 md:block lg:-right-4 lg:h-24 lg:w-24"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35, ease: easeOut }}
          />

          <h2
            id="manifesto-title"
            className="text-[clamp(2.35rem,5.8vw,5.75rem)] font-light leading-[1.02] tracking-[-0.04em] text-balance md:leading-[0.98]"
          >
            {lines.map((line, index) => (
              <span className="mask-line block" key={line.text}>
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 0.82, delay: 0.08 + index * 0.11, ease: easeOut }}
                >
                  {renderAccent(line.text, line.accent)}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
