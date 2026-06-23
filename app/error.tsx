"use client";

import Link from "next/link";
import { useEffect } from "react";
import { SiteChrome } from "@/components/SiteChrome";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SiteChrome mainClassName="relative z-10 flex min-h-[80svh] flex-col justify-center px-5 md:px-10">
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">Erreur</span>
      <h1 className="mt-6 max-w-2xl text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[0.95] tracking-[-0.05em]">
        Un grain dans le système.
      </h1>
      <p className="mt-8 max-w-md text-lg leading-8 text-white/70">
        Quelque chose s&apos;est mal passé pendant le rendu. Tu peux réessayer.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-12 items-center gap-3 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="inline-flex h-12 items-center gap-3 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </SiteChrome>
  );
}
