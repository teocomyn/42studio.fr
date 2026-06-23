"use client";

import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const Cursor = dynamic(() => import("@/components/Cursor").then((mod) => ({ default: mod.Cursor })), {
  ssr: false
});

const LenisProvider = dynamic(
  () => import("@/components/LenisProvider").then((mod) => ({ default: mod.LenisProvider })),
  { ssr: false }
);

type SiteChromeClientProps = PropsWithChildren;

export function SiteChromeClient({ children }: SiteChromeClientProps) {
  return (
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
  );
}
