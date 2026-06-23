"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut, prefersReducedMotion } from "@/lib/motion";

const VISITED_KEY = "42studio:visited";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const skip = prefersReducedMotion() || sessionStorage.getItem(VISITED_KEY) === "1";
    if (skip) {
      sessionStorage.setItem(VISITED_KEY, "1");
      return;
    }

    setDone(false);
    sessionStorage.setItem(VISITED_KEY, "1");

    const startedAt = performance.now();
    const duration = 480;
    let frame = 0;
    let timeout = 0;

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
    <AnimatePresence>
      {!done && (
        <motion.div
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
            <span className="chrome-text text-5xl font-black tracking-[-0.08em] md:text-7xl">42</span>
          </div>
          <div className="h-px w-full overflow-hidden bg-white/10">
            <motion.div className="h-full bg-[var(--ink)]" style={{ width: `${(count / 42) * 100}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
