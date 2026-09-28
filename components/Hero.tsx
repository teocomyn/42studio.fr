"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { trackCtaClick } from "@/lib/gtag-analytics";
import { useMagnetic } from "@/lib/useMagnetic";
import { siteConfig } from "@/lib/site";

const heroVideoSrc =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_084718_72a17915-4964-4059-afcd-22d59399b72e.mp4";

const titleLines = [
  { text: "On dessine des marques", accent: null },
  { text: "pensées pour exister.", accent: "exister" }
] as const;

const stats = [
  { value: "+60", label: "Marques accompagnées" },
  // Compté depuis data/projects.ts (category === "E-commerce Shopify").
  { value: "36", label: "Boutiques Shopify" },
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
      <div className="liquid-fallback absolute inset-0 z-0" aria-hidden />
      {!reduce ? (
        <BackgroundVideo
          src={heroVideoSrc}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-70"
        />
      ) : null}

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
            <div
              className="hero-rise mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 md:mb-8"
              style={{ animationDelay: "0.08s" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/70 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,.85)]" />
                Studio créatif
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">
                Brand · Web · Produit
              </span>
            </div>

            <h1 className="max-w-[13ch] text-[clamp(2.35rem,4.8vw,4.35rem)] font-light leading-[1.02] tracking-[-0.04em] text-balance xl:max-w-[14ch]">
              {titleLines.map((line, index) => (
                <span className="mask-line block" key={line.text}>
                  <span
                    className="hero-slide-up inline-block"
                    style={{ animationDelay: `${0.05 + index * 0.1}s` }}
                  >
                    {renderAccent(line.text, line.accent)}
                  </span>
                </span>
              ))}
            </h1>

            <div
              className="hero-rise mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                ref={ctaRef}
                href="/contact"
                onClick={() => trackCtaClick("lancer_projet", "hero")}
                className="magnetic inline-flex h-12 w-fit items-center justify-center gap-3 bg-white px-5 font-mono text-[10px] uppercase tracking-[0.14em] text-black transition hover:bg-white/90 active:scale-[0.98]"
              >
                Lancer un projet
                <span aria-hidden>↗</span>
              </Link>
              {siteConfig.bookingUrl ? (
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick("reserver_creneau", "hero")}
                  className="inline-flex h-12 w-fit items-center gap-3 border border-white/20 px-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/75 transition hover:border-white/40 hover:text-white"
                >
                  Réserver un appel
                </a>
              ) : (
                <Link
                  href="/work"
                  onClick={() => trackCtaClick("voir_travail", "hero")}
                  className="inline-flex h-12 w-fit items-center gap-3 border border-white/20 px-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/75 transition hover:border-white/40 hover:text-white"
                >
                  Voir le travail
                </Link>
              )}
            </div>
          </div>

          <aside
            className="hero-rise flex flex-col gap-8 border-white/10 lg:col-span-5 lg:col-start-8 lg:border-l lg:pl-8 xl:col-span-4 xl:col-start-9 xl:pl-10"
            style={{ animationDelay: "0.24s" }}
          >
            <h2 className="max-w-md text-[15px] font-normal leading-7 text-white/70 md:text-base">
              Studio créatif à Arras&nbsp;: sites Shopify, branding et sites web sur mesure qui
              transforment l&apos;identité en conversion — de la stratégie au déploiement.
            </h2>

            <dl className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((stat) => (
                <div className="border-t border-white/10 pt-4" key={stat.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-light tracking-[-0.03em] text-white md:text-[1.65rem]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div
          className="hero-rise mt-12 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55 md:mt-16"
          style={{ animationDelay: "0.5s" }}
        >
          <span>50.29°N / 2.78°E · Arras, France</span>
          <span className="hidden items-center gap-3 sm:inline-flex">
            <span className="h-px w-10 bg-white/30" />
            Faites défiler
          </span>
        </div>
      </div>
    </section>
  );
}
