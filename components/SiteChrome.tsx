import { PropsWithChildren } from "react";
import { Header } from "@/components/Header";
import { SiteChromeClient } from "@/components/SiteChromeClient";

type SiteChromeProps = PropsWithChildren<{
  mainClassName?: string;
}>;

export function SiteChrome({ children, mainClassName }: SiteChromeProps) {
  return (
    <SiteChromeClient>
      <Header />
      <main id="main" tabIndex={-1} className={mainClassName ?? "relative z-10"}>
        {children}
      </main>
    </SiteChromeClient>
  );
}
