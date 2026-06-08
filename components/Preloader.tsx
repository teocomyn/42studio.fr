"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut, prefersReducedMotion } from "@/lib/motion";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCount(42);
      setDone(true);
      return;
    }

    const startedAt = performance.now();
    const duration = 1500;

    const tick = () => {
      const progress = Math.min(1, (performance.now() - startedAt) / duration);
      setCount(Math.round(progress * 42));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setDone(true), 360);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[var(--bg)] p-6 text-[var(--ink)] md:p-10"
          exit={{
            y: "-100%",
            transition: { duration: 0.72, ease: easeOut }
          }}
        >
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
            <span>42studio loading field</span>
            <span>{String(count).padStart(2, "0")} / 42</span>
          </div>
          <div className="grid place-items-center">
            <motion.div
              className="relative h-44 w-44 md:h-64 md:w-64"
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute inset-0 rounded-[42%] border border-white/30 bg-white/5"
                animate={{
                  borderRadius: ["42%", "54% 46% 38% 62%", "40% 60% 55% 45%", "42%"],
                  scale: [0.92, 1.02, 0.96, 1]
                }}
                transition={{ duration: 1.6, repeat: Infinity, ease: easeOut }}
              />
              <div className="absolute inset-0 grid place-items-center text-center">
                <span className="chrome-text text-6xl font-black tracking-[-0.08em] md:text-8xl">42</span>
              </div>
            </motion.div>
          </div>
          <div className="h-px w-full overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-[var(--ink)]"
              style={{ width: `${(count / 42) * 100}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
