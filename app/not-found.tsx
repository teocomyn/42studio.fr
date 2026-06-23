import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

const links = [
  ["Accueil", "/"],
  ["Services", "/services"],
  ["Projets", "/work"],
  ["Contact", "/contact"]
] as const;

export default function NotFound() {
  return (
    <SiteChrome mainClassName="relative z-10 flex min-h-screen flex-col justify-center px-5 pt-36 md:px-10">
      <span className="mono-label">Erreur 404</span>
      <h1 className="mt-6 text-[clamp(2.4rem,7vw,4.35rem)] font-black leading-[0.92] tracking-[-0.05em]">
        Hors champ.
      </h1>
      <p className="mt-8 max-w-md text-lg leading-8 text-white/70">
        Cette page n&apos;existe pas ou a été déplacée. Reprenons le signal là où il porte.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="inline-flex h-12 items-center gap-3 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
          >
            {label}
          </Link>
        ))}
      </div>
    </SiteChrome>
  );
}
