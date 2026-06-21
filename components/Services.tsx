"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/services";
import { easeOut } from "@/lib/motion";
import { SectionHead } from "@/components/SectionHead";

const MotionLink = motion.create(Link);

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="section-pad relative z-10 bg-[var(--bg)]">
      <SectionHead eyebrow="01 / Ce qu'on fait" title="Trois disciplines. Une logique." />
      <div className="border-t border-white/10">
        {services.map((service, index) => (
          <MotionLink
            href={service.href}
            key={service.id}
            className="group relative grid overflow-hidden border-b border-white/10 py-9 focus-within:bg-white/[0.03] md:grid-cols-[5rem_1fr_22rem_3rem] md:items-center md:gap-8 md:py-12"
            initial={reduce ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: index * 0.05, ease: easeOut }}
          >
            <span aria-hidden className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full group-focus-visible:w-full" />
            <span className="relative z-10 mb-4 font-mono text-xs text-[var(--muted)] transition group-hover:text-black md:mb-0">
              ({service.index})
            </span>
            <span className="relative z-10 text-[clamp(2.4rem,5vw,5.6rem)] font-light leading-none tracking-[-0.05em] transition group-hover:translate-x-4 group-hover:text-black">
              {service.title}
            </span>
            <span className="relative z-10 mt-5 max-w-lg font-mono text-[11px] uppercase leading-6 tracking-[0.08em] text-[var(--muted)] transition group-hover:text-black/70 md:mt-0 md:text-right">
              {service.tags.join(" · ")}
            </span>
            <span aria-hidden className="relative z-10 mt-5 text-3xl opacity-0 transition group-hover:translate-x-1 group-hover:text-black group-hover:opacity-100 md:mt-0">
              ↗
            </span>
          </MotionLink>
        ))}
      </div>
    </section>
  );
}
