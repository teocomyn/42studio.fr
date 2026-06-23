"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects, type ProjectKind } from "@/data/projects";
import { easeOut } from "@/lib/motion";
import { SectionHead } from "@/components/SectionHead";

const stats = [
  ["+60", "marques accompagnees"],
  [String(projects.length), "realisations selectionnees"],
  [String(projects.filter((project) => project.category === "E-commerce Shopify").length), "projets Shopify"],
  [String(projects.filter((project) => project.category === "Site vitrine").length), "sites vitrines"]
] as const;

type Filter = "all" | ProjectKind;

const filters: Array<{ id: Filter; label: string }> = [
  { id: "all", label: "Tous" },
  { id: "E-commerce Shopify", label: "Shopify" },
  { id: "Site vitrine", label: "Sites vitrines" }
];

type WorkGalleryProps = {
  headingAs?: "h1" | "h2";
  limit?: number;
  showFilters?: boolean;
};

export function WorkGallery({ headingAs = "h2", limit, showFilters = false }: WorkGalleryProps) {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");

  const filteredProjects = useMemo(() => {
    const base = filter === "all" ? projects : projects.filter((project) => project.category === filter);
    return typeof limit === "number" ? base.slice(0, limit) : base;
  }, [filter, limit]);

  return (
    <section id="work" className="section-pad relative z-10 overflow-hidden bg-[var(--bg)]">
      <SectionHead
        as={headingAs}
        eyebrow="03 / Réalisations"
        title="+60 marques accompagnées, de Shopify aux sites vitrines."
        body="Voici une sélection non exhaustive des derniers sites créés ou optimisés : e-commerce, marques premium, SaaS, hôtels, services et expériences digitales."
      />

      <div className="mb-10 grid border border-white/10 md:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="border-b border-white/10 p-5 md:border-b-0 md:border-r md:last:border-r-0">
            <p className="text-4xl font-light tracking-[-0.05em]">{value}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">{label}</p>
          </div>
        ))}
      </div>

      {showFilters ? (
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les projets">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={
                filter === item.id
                  ? "border border-white bg-white px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-black"
                  : "border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60 transition hover:border-white/35 hover:text-white"
              }
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-12">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            className={(project.span ?? (index % 2 === 0 ? 7 : 5)) === 7 ? "md:col-span-7" : "md:col-span-5"}
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.82, delay: (index % 6) * 0.05, ease: easeOut }}
          >
            <Link
              href={`/work/${project.slug}`}
              className="group relative block min-h-[28rem] overflow-hidden border border-white/10 bg-[var(--bg-elevated)] p-5 transition hover:border-white/35 active:scale-[0.99] md:min-h-[34rem]"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `Capture du site ${project.title}`}
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                />
              ) : (
                <div className="absolute inset-0 opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-85">
                  <div className="halftone absolute inset-0" />
                </div>
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,8,.18),rgba(7,7,8,.42)_38%,#070708_100%)]" />
              <div className="absolute inset-x-5 top-5 z-10 flex justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-white/60">
                <span>({project.index})</span>
                <span>{project.category}</span>
              </div>
              {project.featured ? (
                <span className="absolute right-5 top-14 z-10 border border-white/20 bg-black/30 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
                  Case study
                </span>
              ) : null}
              <div className="relative z-10 flex h-full min-h-[25rem] flex-col justify-end md:min-h-[31rem]">
                <p className="mb-5 max-w-sm font-mono text-[11px] uppercase leading-5 tracking-[0.08em] text-white/60">
                  {project.year} · {project.category}
                </p>
                <h3 className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[0.88] tracking-[-0.05em]">
                  {project.title}
                </h3>
                <p className="mt-6 max-w-lg text-base leading-7 text-white/62">{project.summary}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.services.slice(0, 3).map((service) => (
                    <span
                      key={service}
                      className="border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {limit && limit < projects.length ? (
        <div className="mt-10 flex justify-end">
          <Link
            href="/work"
            className="inline-flex h-14 items-center gap-4 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
          >
            Voir les {projects.length} réalisations <span aria-hidden>↗</span>
          </Link>
        </div>
      ) : null}
    </section>
  );
}
