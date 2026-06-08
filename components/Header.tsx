"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

const links = [
  ["Travail", "/#work"],
  ["Studio", "/studio"],
  ["Approche", "/#approche"],
  ["Contact", "/contact"]
] as const;

export function Header() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-5 mix-blend-difference md:px-10 md:py-7"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: easeOut, delay: 1.2 }}
    >
      <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-[-0.04em] text-white">
        <span>42</span>
        <span className="font-light">studio</span>
        <span className="font-mono text-[10px] font-normal uppercase tracking-[0.12em] opacity-60">/// FR</span>
      </Link>
      <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 md:flex">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="transition hover:text-white">
            {label}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
