import { PropsWithChildren } from "react";
import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { LenisProvider } from "@/components/LenisProvider";

type SiteChromeProps = PropsWithChildren<{
  mainClassName?: string;
}>;

/**
 * Chrome partagé à toutes les pages : smooth scroll, curseur, header,
 * grille de fond, skip-link et <main> identifiable.
 * Centralise ce qui était dupliqué dans chaque page.
 */
export function SiteChrome({ children, mainClassName }: SiteChromeProps) {
  return (
    <LenisProvider>
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>
      <Cursor />
      <div className="site-shell">
        <div className="grid-overlay" aria-hidden />
        <Header />
        <main id="main" tabIndex={-1} className={mainClassName ?? "relative z-10"}>
          {children}
        </main>
      </div>
    </LenisProvider>
  );
}
