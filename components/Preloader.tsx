"use client";

import { AnimatePresence, m } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { easeOut, prefersReducedMotion } from "@/lib/motion";
import { isMobileViewport } from "@/lib/media";
import { MotionProvider } from "@/components/MotionProvider";

const VISITED_KEY = "42studio:visited";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(true);

  // useLayoutEffect : bascule AVANT le premier paint → pas de frame de flash
  // du site sous l'overlay, et pas de mismatch d'hydratation (SSR = done).
  useLayoutEffect(() => {
    let skip = true;
    try {
      skip =
        prefersReducedMotion() ||
        isMobileViewport() ||
        sessionStorage.getItem(VISITED_KEY) === "1";
      sessionStorage.setItem(VISITED_KEY, "1");
    } catch {
      skip = true;
    }
    if (skip) return;

    // The layout effect must reveal this overlay before paint, after checking sessionStorage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDone(false);

    const duration = 480;
    let frame = 0;
    let timeout = 0;
    const startedAt = performance.now();

    const tick = () => {
      const progress = Math.min(1, (performance.now() - startedAt) / duration);
      setCount(Math.round(progress * 42));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        timeout = window.setTimeout(() => setDone(true), 120);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    // Le Preloader est monté hors de SiteChrome : il lui faut son propre MotionProvider
    // pour que les composants `m.*` disposent des features LazyMotion.
    <MotionProvider>
      <AnimatePresence>
        {!done && (
        <m.div
          role="status"
          aria-live="polite"
          aria-label="Chargement du site"
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[var(--bg)] p-6 text-[var(--ink)] md:p-10"
          exit={{
            y: "-100%",
            transition: { duration: 0.55, ease: easeOut }
          }}
        >
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
            <span>42studio</span>
            <span>{String(count).padStart(2, "0")} / 42</span>
          </div>
          <div className="grid place-items-center">
            <span className="text-5xl font-black tracking-[-0.08em] text-white md:text-7xl">42</span>
          </div>
          <div className="h-px w-full overflow-hidden bg-white/10">
            <m.div className="h-full bg-[var(--ink)]" style={{ width: `${(count / 42) * 100}%` }} />
          </div>
          </m.div>
        )}
      </AnimatePresence>
    </MotionProvider>
  );
}
