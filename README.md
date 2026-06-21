# 42studio.fr

Site vitrine premium pour 42studio, construit avec **Next.js 16** (App Router), TypeScript, Tailwind CSS, React Three Fiber, GSAP, Lenis et Framer Motion.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Variables d'environnement

Copie `.env.example` en `.env.local` et renseigne les clés (voir le fichier pour le détail) :

- `RESEND_API_KEY` — active l'envoi du formulaire de contact (sinon fallback mailto).
- `CONTACT_TO` / `CONTACT_FROM` — destinataire et expéditeur des briefs.

⚠️ Avant la mise en production, compléter `lib/site.ts` : lien de prise de RDV (`bookingUrl`),
réseaux sociaux et **informations légales** (obligation LCEN).

## Scripts

- `npm run dev` — développement.
- `npm run build` — build de production.
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`).

## Structure

- `app/` : pages App Router, SEO (sitemap, robots, `llms.txt`), pages légales, 404/erreur.
- `components/` : sections, animations, curseur, preloader, WebGL, chrome partagé (`SiteChrome`), formulaire.
- `data/` : services, projets et process typés.
- `shaders/` : shader GLSL du hero chrome liquide.
- `lib/` : config site (`site.ts`), helpers SEO (`seo.ts`), motion, smooth scroll, magnetic.

## Accessibilité & performance

- Curseur custom et WebGL désactivés sous `prefers-reduced-motion` et hors pointeurs fins.
- Hero rendu immédiatement (pas de blocage LCP), WebGL en `dynamic ssr:false` + pause hors-écran.
- Skip-link, focus renforcé, ARIA sur les éléments décoratifs, navigation mobile (burger).

## Réglages rapides

- Palette : `app/globals.css`, variables `:root`.
- Config site / légal / RDV : `lib/site.ts`.
- Services : `data/services.ts`.
- Projets : `data/projects.ts` (⚠️ projets de démonstration à remplacer par de vrais cas clients).
- Process : `data/process.ts`.
- Pages SEO service : `data/seo-pages.ts`.
- Shader hero : `shaders/liquid.ts`.
