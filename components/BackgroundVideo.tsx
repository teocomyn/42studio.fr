"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";
import { isDesktopFinePointer } from "@/lib/media";

type BackgroundVideoProps = {
  src: string;
  className?: string;
};

/**
 * Vidéo décorative : jamais montée sur mobile (économie réseau),
 * chargée après idle ET seulement quand la zone approche du viewport
 * (évite de télécharger une vidéo de pied de page jamais atteinte).
 */
export function BackgroundVideo({ src, className }: BackgroundVideoProps) {
  const placeholder = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || !isDesktopFinePointer()) return;
    if (!placeholder.current) return;

    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const mount = () => {
      if (cancelled) return;
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => !cancelled && setReady(true), { timeout: 2500 });
      } else {
        timeoutId = window.setTimeout(() => !cancelled && setReady(true), 800);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          mount();
        }
      },
      { rootMargin: "150% 0px" }
    );
    observer.observe(placeholder.current);

    return () => {
      cancelled = true;
      observer.disconnect();
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) {
    return <div ref={placeholder} aria-hidden className="pointer-events-none absolute inset-0" />;
  }

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
