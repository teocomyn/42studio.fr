"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const INTERACTIVE = "a, button, [data-cursor]";

export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Curseur custom réservé aux pointeurs fins, hors reduced-motion.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer || prefersReducedMotion()) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame = 0;

    const move = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    // Délégation : robuste au contenu monté/démonté dynamiquement.
    const over = (event: Event) => {
      if ((event.target as Element)?.closest?.(INTERACTIVE)) {
        ring.current?.classList.add("is-hovering");
      }
    };
    const out = (event: Event) => {
      if ((event.target as Element)?.closest?.(INTERACTIVE)) {
        ring.current?.classList.remove("is-hovering");
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      frame = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <div aria-hidden>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference md:block"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 transition-[height,width,border-color,background] duration-300 md:block [&.is-hovering]:h-16 [&.is-hovering]:w-16 [&.is-hovering]:border-white [&.is-hovering]:bg-white/10"
      />
    </div>
  );
}
