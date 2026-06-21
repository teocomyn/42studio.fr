"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/motion";

const words = "Le logo n'est pas une image. C'est le premier composant d'un système vivant.".split(" ");

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 overflow-hidden border-y border-white/10 bg-[var(--bg)] px-5 py-28 md:px-10 md:py-44">
      <motion.div
        className="absolute inset-0 opacity-0"
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.9, ease: easeOut }}
        style={{
          background:
            "radial-gradient(circle at 25% 40%, rgba(255,255,255,.18), transparent 18rem), radial-gradient(circle at 78% 60%, rgba(255,255,255,.11), transparent 22rem)"
        }}
      />
      <p className="relative mx-auto max-w-6xl text-center text-[clamp(2.1rem,6.2vw,6rem)] font-light leading-[1.02] tracking-[-0.045em]">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className={word === "composant" ? "chrome-text inline-block font-black" : "inline-block"}
            initial={reduce ? false : { opacity: 0.12, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: 0.7, delay: index * 0.035, ease: easeOut }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </p>
    </section>
  );
}
