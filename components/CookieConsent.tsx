"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  applyGtagConsent,
  getCookieConsent,
  setCookieConsent,
  type CookieConsentChoice
} from "@/lib/cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const syncConsent = (choice: CookieConsentChoice | null) => {
      if (choice === "all") {
        applyGtagConsent(true);
        setVisible(false);
        setShowPreferences(false);
        return;
      }

      if (choice === "essential") {
        applyGtagConsent(false);
        setVisible(false);
        setShowPreferences(false);
        return;
      }

      setVisible(true);
    };

    syncConsent(getCookieConsent());

    const handleStorage = () => syncConsent(getCookieConsent());
    const handleCustom = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsentChoice | null>).detail ?? getCookieConsent();
      syncConsent(detail);
    };
    const handleOpenPreferences = () => {
      setShowPreferences(true);
      setVisible(true);
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("42studio:cookie-consent", handleCustom);
    window.addEventListener("42studio:open-cookie-preferences", handleOpenPreferences);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("42studio:cookie-consent", handleCustom);
      window.removeEventListener("42studio:open-cookie-preferences", handleOpenPreferences);
    };
  }, []);

  const acceptAll = () => {
    setCookieConsent("all");
    applyGtagConsent(true);
    setVisible(false);
    setShowPreferences(false);
  };

  const rejectOptional = () => {
    setCookieConsent("essential");
    applyGtagConsent(false);
    setVisible(false);
    setShowPreferences(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Paramètres des cookies"
      className="fixed inset-x-0 bottom-0 z-[9998] border-t border-white/15 bg-[#070708]/95 p-5 backdrop-blur-md md:p-6"
    >
      <div className="mx-auto flex max-w-[88rem] flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="mono-label">Cookies & confidentialité</span>
          <p className="mt-3 text-sm leading-7 text-white/72 md:text-base">
            Nous utilisons des cookies essentiels au fonctionnement du site et, avec votre accord, Google Analytics
            4 pour mesurer l&apos;audience de manière agrégée. Vous pouvez accepter, refuser ou modifier vos choix à
            tout moment.
          </p>
          {showPreferences ? (
            <div className="mt-4 space-y-3 border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-white/65">
              <p>
                <strong className="font-normal text-white/85">Essentiels</strong> : toujours actifs (sécurité,
                préférences de consentement).
              </p>
              <p>
                <strong className="font-normal text-white/85">Mesure d&apos;audience</strong> : Google Analytics 4
                (G-ZTMCPNWGL5), activé uniquement si vous acceptez.
              </p>
            </div>
          ) : null}
          <Link
            href="/confidentialite"
            className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.12em] text-white/55 transition hover:text-white"
          >
            Politique de confidentialité →
          </Link>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
          <button
            type="button"
            onClick={() => setShowPreferences((value) => !value)}
            className="inline-flex h-12 items-center justify-center border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/75 transition hover:border-white/40 hover:text-white"
          >
            Personnaliser
          </button>
          <button
            type="button"
            onClick={rejectOptional}
            className="inline-flex h-12 items-center justify-center border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/75 transition hover:border-white/40 hover:text-white"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex h-12 items-center justify-center bg-white px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/90"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("42studio:open-cookie-preferences"));
}
