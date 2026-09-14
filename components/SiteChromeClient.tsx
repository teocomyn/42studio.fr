"use client";

import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
import { MotionProvider } from "@/components/MotionProvider";
import { LenisProvider } from "@/components/LenisProvider";

const Cursor = dynamic(() => import("@/components/Cursor").then((mod) => ({ default: mod.Cursor })), {
  ssr: false
});

type SiteChromeClientProps = PropsWithChildren;

export function SiteChromeClient({ children }: SiteChromeClientProps) {
  return (
    <MotionProvider>
      <LenisProvider>
        <a href="#main" className="skip-link">
          Aller au contenu
        </a>
        <Cursor />
        <div className="site-shell">
          <div className="grid-overlay" aria-hidden />
          {children}
        </div>
      </LenisProvider>
    </MotionProvider>
  );
}
