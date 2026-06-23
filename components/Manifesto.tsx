"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/motion";

const principles = [
  {
    index: "01",
    title: "Identité",
    text: "Logo, typographie, couleur, ton : chaque détail a une fonction."
  },
  {
    index: "02",
    title: "Système",
    text: "On transforme l'intuition créative en règles claires et réutilisables."
  },
  {
    index: "03",
    title: "Déploiement",
    text: "La marque vit dans le site, les composants, les contenus et les parcours."
  }
] as const;

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="manifesto-title"
      className="relative z-10 overflow-hidden border-y border-white/10 bg-[var(--bg)] px-5 py-20 md:px-10 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 18% 22%, rgba(255,255,255,.12), transparent 22rem), radial-gradient(circle at 78% 62%, rgba(255,255,255,.08), transparent 26rem)"
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "12.5vw 12.5vw",
          maskImage: "radial-gradient(circle at 50% 50%, #000, transparent 72%)"
        }}
      />

      <div className="relative mx-auto max-w-[88rem]">
        <motion.div
          className="mb-12 flex flex-col gap-5 md:mb-16 md:grid md:grid-cols-[minmax(12rem,20rem)_1fr] md:items-end"
          initial={reduce ? false : { opacity: 0, y: 22 }}
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
          <h2
            id="manifesto-title"
            className="max-w-5xl text-[clamp(2.4rem,6vw,6.25rem)] font-light leading-[0.95] tracking-[-0.055em] text-balance"
          >
            Une marque n&apos;est pas un logo. C&apos;est un{" "}
            <span className="chrome-text font-black">système vivant</span>.
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            className="relative min-h-[30rem] overflow-hidden border border-white/10 bg-white/[0.025] p-7 md:p-10"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.8, delay: 0.08, ease: easeOut }}
          >
            <div
              aria-hidden
              className="absolute right-8 top-8 h-28 w-28 rounded-full border border-white/15 bg-white/[0.03] shadow-[0_0_80px_rgba(255,255,255,.12)] md:h-40 md:w-40"
            />
            <div
              aria-hidden
              className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/3 translate-y-1/3 rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative flex h-full min-h-[26rem] flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {["Brand", "Web", "Produit", "Shopify", "CRO"].map((item) => (
                  <span
                    key={item}
                    className="border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="max-w-3xl text-[clamp(1.55rem,3.1vw,3.2rem)] font-light leading-[1.08] tracking-[-0.04em] text-white/88">
                On ne livre pas des fichiers isolés. On construit une grammaire de marque capable de
                rester cohérente quand elle passe du pitch au site, du produit à la campagne.
              </p>

              <Link
                href="/studio"
                className="group inline-flex w-fit items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60 transition hover:text-white"
              >
                <span className="h-px w-8 bg-white/25 transition group-hover:w-12 group-hover:bg-white" />
                Voir la méthode
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.index}
                className="group grid gap-6 border border-white/10 bg-black/20 p-6 transition hover:border-white/25 hover:bg-white/[0.04] md:grid-cols-[4rem_1fr]"
                initial={reduce ? false : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.75, delay: 0.12 + index * 0.08, ease: easeOut }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/35">
                  {principle.index}
                </span>
                <div>
                  <h3 className="text-2xl font-light tracking-[-0.035em] text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">{principle.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
