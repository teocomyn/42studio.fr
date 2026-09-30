"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { track } from "@vercel/analytics";
import { trackCtaClick, trackGenerateLead } from "@/lib/gtag-analytics";
import { siteConfig } from "@/lib/site";

type ContactSuccessProps = {
  message?: string;
  offer?: string;
};

export function ContactSuccess({ message, offer }: ContactSuccessProps) {
  const statusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Le formulaire disparaît après envoi : montrer sa confirmation même
    // lorsque le visiteur est descendu jusqu'au bouton de soumission.
    statusRef.current?.focus({ preventScroll: true });
    statusRef.current?.scrollIntoView({ block: "center", behavior: "auto" });
    track("contact_form_submit");
    trackGenerateLead("contact_form", "contact_page", offer);
  }, [offer]);

  return (
    <div
      ref={statusRef}
      tabIndex={-1}
      role="status"
      aria-live="polite"
      className="border border-white/15 bg-white/[0.03] p-8"
    >
      <p className="text-lg leading-8 text-white/85">
        {message ?? "Reçu, on revient vers toi sous 24 h."}
      </p>

      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
          En attendant
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {siteConfig.bookingUrl ? (
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick("reserver_creneau", "contact_success")}
              className="inline-flex h-12 items-center justify-center gap-3 bg-white px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/85"
            >
              Choisir directement un créneau d&apos;appel <span aria-hidden>↗</span>
            </a>
          ) : null}
          <Link
            href="/work"
            onClick={() => trackCtaClick("voir_realisations", "contact_success")}
            className="inline-flex h-12 items-center justify-center gap-3 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
          >
            Parcourir les réalisations
          </Link>
        </div>
      </div>
    </div>
  );
}
