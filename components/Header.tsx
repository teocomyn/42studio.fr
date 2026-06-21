"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut } from "@/lib/motion";

const links = [
  ["Travail", "/work"],
  ["Studio", "/studio"],
  ["Services", "/services"],
  ["Contact", "/contact"]
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Verrouille le scroll + ferme au clavier (Escape) quand le menu mobile est ouvert.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-5 mix-blend-difference md:px-10 md:py-7"
        initial={reduce ? false : { y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
      >
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-[-0.04em] text-white">
          <span>42</span>
          <span className="font-light">studio</span>
          <span className="font-mono text-[10px] font-normal uppercase tracking-[0.12em] opacity-60">
            {"/// FR"}
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex flex-col gap-1.5 p-2 text-white md:hidden"
        >
          <span className="block h-px w-7 bg-current" />
          <span className="block h-px w-7 bg-current" />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] flex flex-col bg-[var(--bg)] px-5 pb-10 pt-5 md:hidden"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: "-4%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: "-4%" }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold tracking-[-0.04em]">
                42<span className="font-light">studio</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="p-2 text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            <nav aria-label="Navigation mobile" className="mt-16 flex flex-col gap-2">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-5 text-4xl font-light tracking-[-0.04em]"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex h-14 items-center justify-center gap-3 bg-white px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-black"
            >
              Lancer un projet <span aria-hidden>↗</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
