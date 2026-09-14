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

- `RESEND_API_KEY` — clé API Resend (`re_...`), obligatoire en prod
- `CONTACT_TO` / `CONTACT_FROM` — destinataire et expéditeur des briefs (`42studio <hello@42studio.fr>`)
- `NEXT_PUBLIC_BOOKING_URL` — lien Cal.com / Calendly (bouton sur `/contact`)

### Resend (formulaire contact)

1. Crée un compte sur [resend.com](https://resend.com)
2. Ajoute le domaine `42studio.fr` et configure les enregistrements DNS (SPF, DKIM) chez Hostinger
3. Génère une clé API avec permission **Sending access**
4. Ajoute `RESEND_API_KEY` dans Vercel → Project → Settings → Environment Variables (Production + Preview)
5. Redéploie le site

Le formulaire `/contact` envoie :
- un email interne vers `CONTACT_TO`
- un email de confirmation au visiteur

Informations légales et contact : `lib/site.ts`.

## Scripts

- `npm run dev` — développement
- `npm run build` — build de production
- `npm run lint` — ESLint

### Contrôle SEO du HTML livré

Après `npm run build`, démarrer `npm run start`, puis lancer dans un autre terminal :

```bash
python3 scripts/check_seo.py http://localhost:3000
```

Le contrôle parcourt le sitemap et vérifie les réponses HTTP, le contenu rendu côté
serveur, les titres, descriptions, canoniques, liens internes et données de l'entité.
Il vérifie aussi l'exclusion des pages légales du sitemap et une vraie réponse 404.
Un second argument permet d'enregistrer un rapport JSON. Ne pas reconstruire `.next`
pendant qu'un serveur de production local l'utilise ; arrêter le serveur avant le build.

Le défilement Lenis et le curseur sont des améliorations navigateur : ne jamais placer
le contenu des pages sous un composant enveloppant chargé avec `ssr: false`.

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
