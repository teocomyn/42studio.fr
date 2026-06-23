"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { easeOut } from "@/lib/motion";
import { SectionHead } from "@/components/SectionHead";

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad relative z-10 border-y border-white/10 bg-[var(--bg)]">
      <SectionHead eyebrow="Ils en parlent" title="La confiance, au-delà des livrables." />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.company}
            className="flex min-h-72 flex-col justify-between border border-white/10 p-7 transition hover:border-white/25 md:p-8"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.75, delay: index * 0.08, ease: easeOut }}
          >
            <p className="text-base leading-7 text-white/75">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-8 border-t border-white/10 pt-5">
              <cite className="not-italic">
                <span className="block text-lg font-light tracking-[-0.02em]">{item.author}</span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
                  {item.role} · {item.company}
                </span>
              </cite>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
