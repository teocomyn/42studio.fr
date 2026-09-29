# 42studio.fr

Site public Next.js App Router déployé sur Vercel depuis `main` du dépôt `teocomyn/42studio.fr`.

Le lot SEO/GEO du 14 septembre 2026 est documenté dans `docs/SEO-GEO-RELEASE.md`. Le contenu doit rester présent dans le HTML serveur, même lorsque les animations et le défilement enrichi ne sont pas chargés.

Vérifications avant livraison : `npm run build`, `npm run lint`, puis `python3 scripts/check_seo.py BASE_URL`. Les vérifications locales et l'état READY du déploiement ne prouvent pas la réception des emails ni l'indexation Google.

Ne jamais ajouter de dates, avis, données d'entreprise ou résultats clients non vérifiés aux données structurées. Préserver les modifications locales non commitées et vérifier la branche avant tout déploiement.

## Mise à jour du 29 septembre 2026

`main` contient le rapprochement du travail local et le lot SEO/GEO « studio créatif » (voir AI_HANDOFF.md et docs/SEO-GEO-STUDIO-CREATIF.md). Le positionnement public du site suit désormais la décision validée du vault 42STUDIO : studio créatif (branding, graphisme, site web, direction artistique, motion design, 3D, vidéo), séparé d'EXPERAISE (CRO, ads, SEO Shopify). Les pages Shopify et CRO existantes restent en ligne en attendant une décision.

Sources de contenu : `data/creative-services.ts` (services), `data/journal.ts` (Journal), `data/seo-keywords/index.ts` (pages locales et historiques). Images de partage générées par `~/Business/42/42 BUSINESS/42STUDIO-CREATIVES/src/og.mjs` vers `public/og/`.

