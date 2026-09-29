"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackCtaClick } from "@/lib/gtag-analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  trackId: string;
  trackLocation: string;
};

// Lien interne qui remonte un événement GA4 `cta_click` (après consentement uniquement).
export function TrackedLink({ trackId, trackLocation, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackCtaClick(trackId, trackLocation);
        onClick?.(event);
      }}
    />
  );
}
