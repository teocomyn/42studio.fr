"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { useMagnetic } from "@/lib/useMagnetic";

const heroVideoSrc =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_084718_72a17915-4964-4059-afcd-22d59399b72e.mp4";

const titleLines = [
  { text: "On dessine des marques", accent: null },
  { text: "pensées pour exister.", accent: "exister" }
] as const;

const stats = [
  { value: "+60", label: "Marques accompagnées" },
  { value: "4", label: "Disciplines intégrées" },
  { value: "ARRAS", label: "Studio · Worldwide" }
] as const;

function renderAccent(text: string, accent: string | null) {
  if (!accent || !text.includes(accent)) return text;

  const [before, after] = text.split(accent);

  return (
    <>
      {before}
      <span className="chrome-text font-semibold">{accent}</span>
      {after}
    </>
  );
}

export function Hero() {
  const ctaRef = useMagnetic<HTMLAnchorElement>();
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 flex min-h-[92svh] items-end overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pb-14 md:pt-36 lg:min-h-[88svh]">
      {reduce ? (
        <div className="liquid-fallback" aria-hidden />
      ) : (
        <>
          <div className="liquid-fallback absolute inset-0 z-0 md:hidden" aria-hidden />
          <video
            aria-hidden
            autoPlay
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full object-cover opacity-70 md:block"
            loop
            muted
            playsInline
            preload="metadata"
            src={heroVideoSrc}
          />
        </>
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(7,7,8,.72)_0%,rgba(7,7,8,.42)_38%,rgba(7,7,8,.82)_100%),linear-gradient(90deg,rgba(7,7,8,.92)_0%,rgba(7,7,8,.55)_42%,rgba(7,7,8,.22)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-[var(--bg)] to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-[88rem]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10 xl:gap-16">
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 md:mb-8"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: easeOut }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/70 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,.85)]" />
                Studio créatif
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
                Brand · Web · Produit
              </span>
            </motion.div>

            <h1 className="max-w-[13ch] text-[clamp(2.35rem,4.8vw,4.35rem)] font-light leading-[1.02] tracking-[-0.04em] text-balance xl:max-w-[14ch]">
              {titleLines.map((line, index) => (
                <span className="mask-line block" key={line.text}>
                  <motion.span
                    className="inline-block"
                    initial={reduce ? false : { y: "108%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.78, delay: 0.12 + index * 0.1, ease: easeOut }}
                  >
                    {renderAccent(line.text, line.accent)}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: easeOut }}
            >
              <Link
                ref={ctaRef}
                href="/contact"
                className="magnetic inline-flex h-12 w-fit items-center justify-center gap-3 bg-white px-5 font-mono text-[10px] uppercase tracking-[0.14em] text-black transition hover:bg-white/90 active:scale-[0.98]"
              >
                Lancer un projet
                <span aria-hidden>↗</span>
              </Link>
              <Link
                href="/work"
                className="inline-flex h-12 w-fit items-center gap-3 border border-white/20 px-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/75 transition hover:border-white/40 hover:text-white"
              >
                Voir le travail
              </Link>
            </motion.div>
          </div>

          <motion.aside
            className="flex flex-col gap-8 border-white/10 lg:col-span-5 lg:col-start-8 lg:border-l lg:pl-8 xl:col-span-4 xl:col-start-9 xl:pl-10"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease: easeOut }}
          >
            <p className="max-w-md text-[15px] leading-7 text-white/68 md:text-base">
              Stratégie, identité, site et produit — un seul studio pour construire des marques
              cohérentes, du concept au déploiement.
            </p>

            <dl className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((stat) => (
                <div className="border-t border-white/10 pt-4" key={stat.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-light tracking-[-0.03em] text-white md:text-[1.65rem]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>

        <motion.div
          className="mt-12 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40 md:mt-16"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <span>50.29°N / 2.78°E · Arras, France</span>
          <span className="hidden items-center gap-3 sm:inline-flex">
            <span className="h-px w-10 bg-white/30" />
            Faites défiler
          </span>
        </motion.div>
      </div>
    </section>
  );
}
