"use client";

import { useEffect, useRef } from "react";
import { isDesktopFinePointer } from "@/lib/media";

export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!isDesktopFinePointer()) return;

    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      targetX = (event.clientX - rect.left - rect.width / 2) * 0.16;
      targetY = (event.clientY - rect.top - rect.height / 2) * 0.16;

      if (!frame) {
        frame = requestAnimationFrame(() => {
          node.style.setProperty("--mx", `${targetX}px`);
          node.style.setProperty("--my", `${targetY}px`);
          frame = 0;
        });
      }
    };

    const handleLeave = () => {
      node.style.setProperty("--mx", "0px");
      node.style.setProperty("--my", "0px");
    };

    node.addEventListener("mousemove", handleMove, { passive: true });
    node.addEventListener("mouseleave", handleLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return ref;
}
