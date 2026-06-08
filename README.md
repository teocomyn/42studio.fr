# 42studio.fr

Site vitrine premium pour 42studio, construit avec Next.js 14, TypeScript, Tailwind CSS, React Three Fiber, GSAP, Lenis et Motion.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Structure

- `app/` : pages App Router, SEO, sitemap et robots.
- `components/` : sections, animations, curseur, preloader, WebGL.
- `data/` : services, projets et process typés.
- `shaders/` : shader GLSL du hero chrome liquide.
- `lib/` : helpers motion, smooth scroll et magnetic interactions.

## Effets intégrés

- Preloader 0 -> 42 avec morph organique.
- Hero WebGL plein écran avec shader chrome liquide réactif à la souris.
- Champ de particules 3D.
- Curseur custom inertiel.
- Reveal mot par mot du manifeste.
- Services avec wipe plein écran au hover.
- Posters halftone animables pour la galerie.
- Timeline horizontale pinnée avec GSAP ScrollTrigger.
- Boutons magnétiques.
- Fallback `prefers-reduced-motion`.

## Réglages rapides

- Palette : `app/globals.css`, variables `:root`.
- Services : `data/services.ts`.
- Projets : `data/projects.ts`.
- Process : `data/process.ts`.
- Shader hero : `shaders/liquid.ts`.
