"use client";

import { PropsWithChildren, useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";
import { isDesktopFinePointer } from "@/lib/media";

export function LenisProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    if (prefersReducedMotion() || !isDesktopFinePointer()) return;

    let cancelled = false;
    let destroy: (() => void) | undefined;
    let rafId = 0;
    // Load only the scrolling enhancement in the browser. Children remain SSR-rendered.
    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({
        duration: 1.08,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true
      });
      destroy = () => lenis.destroy();
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }).catch(() => {
      // Native scrolling remains available if the optional chunk cannot load.
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      destroy?.();
    };
  }, []);

  return children;
}
