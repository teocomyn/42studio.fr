"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // À brancher sur ton outil de suivi d'erreurs si besoin (Sentry, etc.).
    console.error(error);
  }, [error]);

  return (
    <div className="relative z-10 flex min-h-screen flex-col justify-center px-5 md:px-10">
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">Erreur</span>
      <h1 className="mt-6 text-[clamp(3rem,11vw,9rem)] font-black leading-[0.82] tracking-[-0.07em]">
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
    </div>
  );
}
