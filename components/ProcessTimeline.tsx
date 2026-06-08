"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/process";
import { SectionHead } from "@/components/SectionHead";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export function ProcessTimeline() {
  const section = useRef<HTMLElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !section.current || !track.current) return;

    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth + 80;
      gsap.to(track.current, {
        x: () => -Math.max(0, distance),
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: () => `+=${Math.max(900, distance)}`
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="section-pad relative z-10 overflow-hidden border-y border-white/10 bg-[var(--bg)]">
      <SectionHead
        eyebrow="04 / Facon de travailler"
        title="Une trajectoire claire, du signal au lancement."
      />
      <div ref={track} className="flex w-max gap-0 pr-10">
        {processSteps.map((step) => (
          <article
            key={step.index}
            className="relative flex h-[24rem] w-[82vw] max-w-[34rem] flex-col justify-between border-l border-white/10 p-7 md:w-[34rem] md:p-9"
          >
            <div className="absolute left-0 top-24 h-px w-full bg-white/10" />
            <div className="relative z-10 flex items-center gap-5">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-[var(--bg)] font-mono text-xs">
                {step.index}
              </span>
              <span className="h-px w-24 bg-white/35" />
            </div>
            <div>
              <h3 className="text-5xl font-light tracking-[-0.05em]">{step.title}</h3>
              <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--muted)]">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
