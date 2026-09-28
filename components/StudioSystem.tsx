"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { SectionHead } from "@/components/SectionHead";
import { easeOut } from "@/lib/motion";

const capabilities = [
  {
    index: "01",
    title: "Brand",
    detail: "Positionner · Signer",
    href: "/brand",
    position: "left-[20%] top-[16%]",
    path: "M 330 238 H 244 Q 226 238 226 220 V 120 Q 226 100 206 100 H 138"
  },
  {
    index: "02",
    title: "Web",
    detail: "Raconter · Convertir",
    href: "/web",
    position: "left-[80%] top-[16%]",
    path: "M 390 238 H 476 Q 494 238 494 220 V 120 Q 494 100 514 100 H 584"
  },
  {
    index: "03",
    title: "Shopify",
    detail: "Vendre · Optimiser",
    href: "/shopify",
    position: "left-[20%] top-[84%]",
    path: "M 330 282 H 244 Q 226 282 226 300 V 400 Q 226 420 206 420 H 138"
  },
  {
    index: "04",
    title: "Produit",
    detail: "Simplifier · Faire adopter",
    href: "/produit",
    position: "left-[80%] top-[84%]",
    path: "M 390 282 H 476 Q 494 282 494 300 V 400 Q 494 420 514 420 H 584"
  }
] as const;

export function StudioSystem() {
  const reduce = useReducedMotion();

  return (
    <section
      id="systeme"
      aria-label="Système intégré 42studio"
      className="section-pad relative z-10 overflow-hidden border-y border-white/10 bg-[var(--bg)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.09) 1px, transparent 1px)",
          backgroundSize: "4.5rem 4.5rem",
          maskImage: "linear-gradient(90deg, transparent, #000 18%, #000 82%, transparent)"
        }}
      />

      <div className="relative mx-auto max-w-[88rem]">
        <SectionHead
          eyebrow="02 / Système intégré"
          title="Tout se répond. Rien ne se perd."
          body="La stratégie donne la direction. Le design crée le langage. Le web, Shopify et le produit le mettent à l’épreuve du réel. Une seule équipe garde le fil jusqu’au lancement."
        />

        <div className="grid border border-white/10 bg-black/30 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(36rem,1.28fr)]">
          <m.div
            className="relative flex flex-col justify-between border-b border-white/10 p-7 md:p-10 lg:min-h-[42rem] lg:border-b-0 lg:border-r"
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                  Signal entrant
                </span>
                <span aria-hidden className="h-2 w-2 bg-white shadow-[0_0_24px_rgba(255,255,255,.8)]" />
              </div>
              <p className="mt-9 max-w-md text-[clamp(1.65rem,3vw,3.1rem)] font-light leading-[1.05] tracking-[-0.045em] text-white/90">
                Une idée forte devient un système de marque prêt à vivre, vendre et évoluer.
              </p>
            </div>

            <div className="mt-14">
              <dl className="grid grid-cols-3 border-y border-white/10">
                {[
                  ["01", "Direction"],
                  ["01", "Équipe"],
                  ["01", "Système"]
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-white/10 py-5 last:border-r-0">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">{label}</dt>
                    <dd className="mt-2 text-2xl font-light tracking-[-0.04em]">{value}</dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/contact"
                className="group mt-8 inline-flex h-14 items-center gap-4 border border-white/20 px-5 font-mono text-[10px] uppercase tracking-[0.14em] transition hover:bg-white hover:text-black"
              >
                Composer votre système
                <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            </div>
          </m.div>

          <m.div
            className="relative min-h-[34rem] overflow-hidden md:min-h-[42rem]"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: 0.12, ease: easeOut }}
          >
            <div className="absolute left-5 top-5 z-20 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35 md:left-8 md:top-8">
              <span className="h-px w-8 bg-white/20" />
              Architecture 42
            </div>
            <div className="absolute bottom-5 right-5 z-20 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35 md:bottom-8 md:right-8">
              Du signal au déploiement
            </div>

            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 720 520"
              fill="none"
              preserveAspectRatio="none"
            >
              {capabilities.map((capability, index) => (
                <g key={capability.title}>
                  <path d={capability.path} stroke="rgba(244,243,239,.18)" strokeWidth="1" />
                  <m.path
                    d={capability.path}
                    stroke="rgba(244,243,239,.92)"
                    strokeWidth="1.5"
                    strokeDasharray="28 180"
                    initial={reduce ? false : { strokeDashoffset: 180 }}
                    animate={reduce ? undefined : { strokeDashoffset: -236 }}
                    transition={{
                      duration: 4.8,
                      delay: index * 0.45,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </g>
              ))}
            </svg>

            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.055] blur-3xl md:h-[24rem] md:w-[24rem]"
            />

            <m.div
              className="absolute left-1/2 top-1/2 z-10 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center border border-white/35 bg-[var(--bg)] shadow-[0_0_80px_rgba(255,255,255,.1)] md:h-40 md:w-40"
              initial={reduce ? false : { scale: 0.88, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease: easeOut }}
            >
              <m.span
                aria-hidden
                className="absolute inset-[-1px] border border-white/20"
                animate={reduce ? undefined : { scale: [1, 1.14, 1], opacity: [0.45, 0, 0.45] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="text-center">
                <span className="chrome-text block text-4xl font-black tracking-[-0.08em] md:text-5xl">42</span>
                <span className="mt-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-white/45">
                  Direction + Build
                </span>
              </div>
            </m.div>

            <ul className="absolute inset-0">
              {capabilities.map((capability, index) => (
                <m.li
                  key={capability.title}
                  className={`absolute z-20 w-[7.2rem] -translate-x-1/2 -translate-y-1/2 md:w-[10.5rem] ${capability.position}`}
                  initial={reduce ? false : { opacity: 0, scale: 0.86 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.2 + index * 0.08, ease: easeOut }}
                >
                  <Link
                    href={capability.href}
                    className="group block border border-white/15 bg-[#09090b]/95 p-3 transition duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white hover:text-black focus-visible:-translate-y-1 md:p-5"
                  >
                    <span className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.14em] text-current opacity-40">
                      {capability.index}
                      <span aria-hidden>↗</span>
                    </span>
                    <strong className="mt-5 block text-lg font-light tracking-[-0.04em] md:text-2xl">
                      {capability.title}
                    </strong>
                    <span className="mt-2 hidden font-mono text-[8px] uppercase leading-4 tracking-[0.1em] opacity-50 md:block">
                      {capability.detail}
                    </span>
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>
        </div>
      </div>
    </section>
  );
}
