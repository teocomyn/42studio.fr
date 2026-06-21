"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { useMagnetic } from "@/lib/useMagnetic";

const heroVideoSrc =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_084718_72a17915-4964-4059-afcd-22d59399b72e.mp4";
const titleLines = ["On dessine", "des marques", "pensées pour exister."];

export function Hero() {
  const ctaRef = useMagnetic<HTMLAnchorElement>();
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 flex min-h-[100svh] overflow-hidden px-5 pb-8 pt-28 md:px-10 md:pt-36">
      {reduce ? (
        <div className="liquid-fallback" aria-hidden />
      ) : (
        <video
          aria-hidden
          autoPlay
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-85"
          loop
          muted
          playsInline
          preload="auto"
          src={heroVideoSrc}
        />
      )}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(7,7,8,.88)_0%,rgba(7,7,8,.58)_42%,rgba(7,7,8,.18)_82%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      <div className="relative z-10 flex w-full flex-col justify-center">
        <motion.div
          className="mb-8 flex max-w-3xl flex-wrap gap-x-7 gap-y-3 font-mono text-[10px] uppercase leading-5 tracking-[0.1em] text-white/55 md:text-[11px]"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.9)]" />
            Studio créatif · Brand · Web · Produit
          </span>
          <span>+60 marques accompagnées</span>
          <span>EST. ARRAS — WORLDWIDE</span>
          <span>50.29°N / 2.78°E</span>
        </motion.div>

        <h1 className="max-w-[12ch] text-[clamp(3.4rem,13vw,14.5rem)] font-light leading-[0.86] tracking-[-0.055em] text-balance">
          {titleLines.map((line, index) => (
            <span className="mask-line" key={line}>
              <motion.span
                className={index === 2 ? "chrome-text inline-block font-black" : "inline-block"}
                initial={reduce ? false : { y: "112%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 + index * 0.08, ease: easeOut }}
              >
                {line}
              </motion.span>
              {index < titleLines.length - 1 ? " " : null}
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex flex-col gap-7 md:mt-12 md:flex-row md:items-end md:justify-between"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
        >
          <p className="max-w-md text-base leading-7 text-white/70">
            Plus de 60 marques accompagnées en Shopify, web et produit. Un seul studio pour la
            stratégie, l&apos;identité, le site et l&apos;exécution technique.
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
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="h-px w-14 animate-pulse bg-white/70" />
          Faites défiler
        </motion.div>
      </div>
    </section>
  );
}
