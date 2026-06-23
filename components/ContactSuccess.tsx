"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

type ContactSuccessProps = {
  message?: string;
};

export function ContactSuccess({ message }: ContactSuccessProps) {
  useEffect(() => {
    track("contact_form_submit");
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="border border-white/15 bg-white/[0.03] p-8 text-lg leading-8 text-white/80"
    >
      {message ?? "Reçu, on revient vers toi sous 24 h."}
    </div>
  );
}
