"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useFormStatus } from "react-dom";
import { submitBrief, type ContactState } from "@/app/contact/actions";
import { ContactSuccess } from "@/components/ContactSuccess";
import { getOffer, offers, projectTimelines } from "@/data/offers";
import { trackCtaClick, trackGaEvent } from "@/lib/gtag-analytics";
import { siteConfig } from "@/lib/site";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/30 focus:border-white/40";
const labelClass = "font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]";

// Préremplissage via ?type=… (lu côté client : la page reste 100% statique).
const projectTypeFromQuery: Record<string, string> = {
  brand: "Brand",
  graphisme: "Graphisme",
  web: "Web",
  "direction-artistique": "Direction artistique",
  "motion-design": "Motion design",
  "3d": "3D",
  video: "Vidéo",
  shopify: "E-commerce",
  produit: "Produit"
};

function subscribeToLocation(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

function getQueryFromLocation() {
  return window.location.search;
}

function getServerProjectType() {
  return "";
}

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
  const submittedValues = useRef<FormData | null>(null);
  const [state, formAction] = useActionState(submitBrief, initialState);
  const query = useSyncExternalStore(
    subscribeToLocation,
    getQueryFromLocation,
    getServerProjectType
  );
  const params = new URLSearchParams(query);
  const suggestedOffer = getOffer(params.get("offer") ?? "")?.slug ?? "";
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
  const offerSlug = selectedOffer ?? suggestedOffer;
  const offer = getOffer(offerSlug);
  const typeFromQuery = params.get("type") ?? "";
  const suggestedType = projectTypeFromQuery[typeFromQuery.toLowerCase()] ?? "";
  const [selectedType, setProjectType] = useState<string | null>(null);
  const projectType = selectedType ?? offer?.projectType ?? suggestedType;
  const formRef = useRef<HTMLFormElement | null>(null);
  const startedRef = useRef(false);
  const errors = state.fieldErrors ?? {};

  // Événement form_start au premier focus : mesure l'abandon du formulaire.
  const handleFirstFocus = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackGaEvent("form_start", { form_location: "contact_page", offer: offerSlug || undefined });
  };

  // Au retour d'erreurs serveur, focus + scroll sur le premier champ fautif.
  useEffect(() => {
    if (state.status !== "error" || !formRef.current) return;
    // React remet les champs à zéro après une action résolue, même en cas
    // d'erreur métier. Restaurer le brief avant de placer le focus sur l'erreur.
    if (submittedValues.current) {
      for (const [key, value] of submittedValues.current.entries()) {
        const field = formRef.current.elements.namedItem(key);
        if (field instanceof HTMLInputElement && field.type === "checkbox") {
          field.checked = true;
        } else if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
          field.value = String(value);
        }
      }
    }
    if (state.fieldErrors && Object.keys(state.fieldErrors).length > 0) {
      trackGaEvent("form_error", {
        form_location: "contact_page",
        fields: Object.keys(state.fieldErrors).join(",")
      });
    }
    const firstInvalid = formRef.current.querySelector<HTMLElement>('[aria-invalid="true"]');
    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [state]);

  if (state.status === "success") {
    return <ContactSuccess message={state.message} offer={offerSlug} />;
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onFocus={handleFirstFocus}
      onSubmit={(event) => { submittedValues.current = new FormData(event.currentTarget); }}
      className="relative grid gap-6"
    >
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Ne pas remplir
          <input type="text" name="website_field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="offer" className={labelClass}>Accompagnement envisagé</label>
          <select id="offer" name="offer" value={offerSlug} onChange={(event) => { setSelectedOffer(event.target.value); setProjectType(null); }} className={fieldClass}>
            <option value="">À définir ensemble</option>
            {offers.map((item) => <option value={item.slug} key={item.slug}>{item.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>Quand souhaitez-vous commencer ?</label>
          <select id="timeline" name="timeline" defaultValue="" className={fieldClass}>
            <option value="">Sélectionner…</option>
            {projectTimelines.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="projectWebsite" className={labelClass}>Site de votre marque (facultatif)</label>
        <input id="projectWebsite" name="projectWebsite" type="url" maxLength={300} placeholder="https://votre-marque.fr" autoComplete="url" aria-invalid={Boolean(errors.projectWebsite)} aria-describedby={errors.projectWebsite ? "projectWebsite-error" : undefined} className={fieldClass} />
        {errors.projectWebsite && <p id="projectWebsite-error" className="mt-2 font-mono text-[11px] text-red-300">{errors.projectWebsite}</p>}
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
            maxLength={100}
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
            maxLength={200}
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
          <select
            id="projectType"
            name="projectType"
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
            className={fieldClass}
          >
            <option value="">Sélectionner…</option>
            <option value="Brand">Branding / Identité visuelle</option>
            <option value="Brand × Digital">Identité + site web</option>
            <option value="Graphisme">Graphisme / Supports</option>
            <option value="Web">Site web</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Direction artistique">Direction artistique / Campagne</option>
            <option value="Motion design">Motion design</option>
            <option value="3D">3D / CGI</option>
            <option value="Vidéo">Réalisation vidéo</option>
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
          maxLength={5000}
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
          onClick={() => trackCtaClick("mailto", "contact_form")}
          className="py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)] underline-offset-4 transition hover:text-white hover:underline"
        >
          ou écris-nous à {siteConfig.email}
        </a>
      </div>
    </form>
  );
}
