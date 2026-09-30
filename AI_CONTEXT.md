# 42studio.fr

Site public Next.js App Router déployé sur Vercel depuis `main` du dépôt `teocomyn/42studio.fr`.

Consigne de Teo du 30 septembre 2026 : après chaque intervention terminée et vérifiée, committer et pousser les modifications du site vers `origin/main` sur `https://github.com/teocomyn/42studio.fr`. Ce push déclenche le déploiement Vercel existant ; ne pas redemander systématiquement l'autorisation. Voir `AGENTS.md` pour le périmètre public et la préservation des autres travaux.

Le lot SEO/GEO du 14 septembre 2026 est documenté dans `docs/SEO-GEO-RELEASE.md`. Le contenu doit rester présent dans le HTML serveur, même lorsque les animations et le défilement enrichi ne sont pas chargés.

Vérifications avant livraison : `npm run build`, `npm run lint`, puis `python3 scripts/check_seo.py BASE_URL`. Les vérifications locales et l'état READY du déploiement ne prouvent pas la réception des emails ni l'indexation Google.

Ne jamais ajouter de dates, avis, données d'entreprise ou résultats clients non vérifiés aux données structurées. Préserver les modifications locales non commitées et vérifier la branche avant tout déploiement.

## Mise à jour du 29 septembre 2026

`main` contient le rapprochement du travail local et le lot SEO/GEO « studio créatif » (voir AI_HANDOFF.md et docs/SEO-GEO-STUDIO-CREATIF.md). Le positionnement public du site suit désormais la décision validée du vault 42STUDIO : studio créatif (branding, graphisme, site web, direction artistique, motion design, 3D, vidéo), séparé d'EXPERAISE (CRO, ads, SEO Shopify). Les pages Shopify et CRO existantes restent en ligne en attendant une décision.

Sources de contenu : `data/creative-services.ts` (services), `data/journal.ts` (Journal), `data/seo-keywords/index.ts` (pages locales et historiques). Images de partage générées par `~/Business/42/42 BUSINESS/42STUDIO-CREATIVES/src/og.mjs` vers `public/og/`.

Le Journal inclut dix nouveaux guides depuis `data/journal-expansion.ts`, importés dans la liste unique `data/journal.ts`. Les outils utilisent `components/JournalTool.tsx`, sans persistance ni transmission des réponses. Couvertures WebP dans `public/journal/images/`, prompts dans `docs/journal-image-prompts.json`. Vérification spécifique : `python3 scripts/check_journal.py BASE_URL`. Détail : `docs/JOURNAL-2026-09-30.md`.

## Préparation commerciale du 30 septembre 2026

Les offres sont centralisées dans `data/offers.ts`, présentées sur `/accompagnements` et reprises sur l'accueil et les services. Le formulaire accepte `?offer=<slug>` ; les champs de qualification alimentent l'email, sans données personnelles dans les événements GA4. Les montants du catalogue privé restent à arbitrer, les offres de ce parcours sont sur devis. Détail et état de livraison : `docs/ACQUISITION-2026-09-30.md` et AI_HANDOFF.md. Les fiches prospects et supports privés ne doivent pas entrer dans le dépôt public.
