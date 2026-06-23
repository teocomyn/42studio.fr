"use client";

import Lenis from "lenis";
import { PropsWithChildren, useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";
import { isDesktopFinePointer } from "@/lib/media";

export function LenisProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    if (prefersReducedMotion() || !isDesktopFinePointer()) return;

    const lenis = new Lenis({
      duration: 1.08,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}
