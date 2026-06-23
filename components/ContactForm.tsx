"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitBrief, type ContactState } from "@/app/contact/actions";
import { ContactSuccess } from "@/components/ContactSuccess";
import { siteConfig } from "@/lib/site";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/30 focus:border-white/40";
const labelClass = "font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-14 items-center justify-center gap-3 bg-white px-6 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/85 disabled:opacity-50"
    >
      {pending ? "Envoi…" : "Envoyer le brief"}
      <span aria-hidden>↗</span>
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitBrief, initialState);
  const errors = state.fieldErrors ?? {};

  if (state.status === "success") {
    return <ContactSuccess message={state.message} />;
  }

  return (
    <form action={formAction} className="relative grid gap-6">
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Société
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 font-mono text-[11px] text-red-300">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 font-mono text-[11px] text-red-300">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Type de projet
          </label>
          <select id="projectType" name="projectType" defaultValue="" className={fieldClass}>
            <option value="">Sélectionner…</option>
            <option value="Brand">Brand / Identité</option>
            <option value="Web">Site web</option>
            <option value="Shopify">Shopify / E-commerce</option>
            <option value="Produit">Produit / UX UI</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget envisagé
          </label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            <option value="">Sélectionner…</option>
            <option value="< 5 k€">moins de 5 k€</option>
            <option value="5–15 k€">5 – 15 k€</option>
            <option value="15–30 k€">15 – 30 k€</option>
            <option value="30 k€ +">30 k€ et +</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Le projet en quelques lignes *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Contexte, ambition, contraintes, timing…"
          className={fieldClass}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 font-mono text-[11px] text-red-300">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-white/65">
          <input
            type="checkbox"
            name="consent"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : "consent-help"}
            className="mt-1 h-4 w-4 shrink-0 accent-white"
          />
          <span id="consent-help">
            J&apos;accepte que mes données soient utilisées pour répondre à ma demande, conformément à la{" "}
            <Link href="/confidentialite" className="underline underline-offset-4 hover:text-white">
              politique de confidentialité
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="mt-2 font-mono text-[11px] text-red-300">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div aria-live="polite" className="min-h-[1.25rem]">
        {state.status === "error" && state.message ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-red-300">{state.message}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <SubmitButton />
        <a
          href={`mailto:${siteConfig.email}?subject=Projet%20pour%2042studio`}
          className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)] underline-offset-4 transition hover:text-white hover:underline"
        >
          ou écris-nous à {siteConfig.email}
        </a>
      </div>
    </form>
  );
}
