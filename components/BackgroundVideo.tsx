"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";
import { isDesktopFinePointer } from "@/lib/media";

type BackgroundVideoProps = {
  src: string;
  className?: string;
};

/**
 * Vidéo décorative : jamais montée sur mobile (évite ~3 Mo en réseau),
 * chargée après idle sur desktop pour ne pas impacter le LCP.
 */
export function BackgroundVideo({ src, className }: BackgroundVideoProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || !isDesktopFinePointer()) return;

    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const mount = () => {
      if (!cancelled) setReady(true);
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(mount, { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(mount, 1200);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) return null;

  return (
    <video
      aria-hidden
      autoPlay
      className={className}
      loop
      muted
      playsInline
      preload="none"
      src={src}
    />
  );
}
