"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { easeOut } from "@/lib/motion";
import { SectionHead } from "@/components/SectionHead";

export function WorkGallery() {
  return (
    <section className="section-pad relative z-10 overflow-hidden bg-[var(--bg)]">
      <SectionHead
        eyebrow="03 / Selected work"
        title="Des posters digitaux qui prouvent le système."
        body="Chaque projet est imaginé comme une preuve : stratégie lisible, surface forte, comportement vivant."
      />
      <div className="grid gap-5 md:grid-cols-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            className={index % 3 === 0 ? "md:col-span-7" : "md:col-span-5"}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.82, delay: index * 0.05, ease: easeOut }}
          >
            <Link
              href={`/work/${project.slug}`}
              className="group relative block min-h-[28rem] overflow-hidden border border-white/10 bg-[var(--bg-elevated)] p-5 transition hover:border-white/35 active:scale-[0.99] md:min-h-[34rem]"
            >
              <div className="absolute inset-0 opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-85">
                <div className="halftone absolute inset-0" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(0,0,0,.55)_55%,#070708)]" />
              </div>
              <div className="absolute inset-x-5 top-5 z-10 flex justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-white/60">
                <span>({project.index})</span>
                <span>{project.year}</span>
              </div>
              <div className="relative z-10 flex h-full min-h-[25rem] flex-col justify-end md:min-h-[31rem]">
                <p className="mb-5 max-w-sm font-mono text-[11px] uppercase leading-5 tracking-[0.08em] text-white/60">
                  {project.category}
                </p>
                <h3 className="text-[clamp(3rem,7vw,7.8rem)] font-black leading-[0.82] tracking-[-0.07em]">
                  {project.title}
                </h3>
                <p className="mt-6 max-w-lg text-base leading-7 text-white/62">{project.summary}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.services.map((service) => (
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
    </section>
  );
}
