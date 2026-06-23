"use client";

import { trackCtaClick } from "@/lib/gtag-analytics";
import { siteConfig } from "@/lib/site";

type BookingLinkProps = {
  location: string;
  className?: string;
  label?: string;
};

export function BookingLink({
  location,
  className,
  label = "Réserver un appel découverte"
}: BookingLinkProps) {
  if (!siteConfig.bookingUrl) return null;

  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCtaClick("reserver_appel", location)}
      className={className}
    >
      {label} <span aria-hidden>↗</span>
    </a>
  );
}
