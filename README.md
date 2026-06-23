# 42studio.fr

Site vitrine premium pour 42studio, construit avec **Next.js 16** (App Router), TypeScript, Tailwind CSS, GSAP, Lenis et Framer Motion.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Variables d'environnement

Copie `.env.example` en `.env.local` :

- `RESEND_API_KEY` — envoi du formulaire de contact (obligatoire en prod)
- `CONTACT_TO` / `CONTACT_FROM` — destinataire et expéditeur des briefs
- `NEXT_PUBLIC_BOOKING_URL` — lien Cal.com / Calendly (bouton sur `/contact`)

Informations légales et contact : `lib/site.ts`.

## Scripts

- `npm run dev` — développement
- `npm run build` — build de production
- `npm run lint` — ESLint

## Structure

- `app/` — pages, SEO (sitemap, robots, `llms.txt`), légal, 404/erreur
- `components/` — sections, animations, chrome partagé
- `data/` — services, projets, enrichissement éditorial, témoignages, équipe
- `lib/` — config site, SEO, motion
- `public/realisations/` — captures portfolio (WebP)

## Accessibilité & performance

- Curseur custom désactivé sous `prefers-reduced-motion` et hors pointeurs fins
- Preloader ignoré aux visites suivantes (sessionStorage)
- Chargement différé de ProcessTimeline et ContactCta sur la home
- Skip-link, focus renforcé, focus trap menu mobile, consentement RGPD formulaire

## Réglages rapides

- Palette : `app/globals.css`
- Config site / légal : `lib/site.ts`
- Projets : `data/projects.ts` + enrichissement `data/project-enrichment.ts`
- Pages SEO service : `data/seo-pages.ts`
