# 42studio.fr

Site public Next.js App Router déployé sur Vercel depuis `main` du dépôt `teocomyn/42studio.fr`.

Le lot SEO/GEO du 14 septembre 2026 est documenté dans `docs/SEO-GEO-RELEASE.md`. Le contenu doit rester présent dans le HTML serveur, même lorsque les animations et le défilement enrichi ne sont pas chargés.

Vérifications avant livraison : `npm run build`, `npm run lint`, puis `python3 scripts/check_seo.py BASE_URL`. Les vérifications locales et l'état READY du déploiement ne prouvent pas la réception des emails ni l'indexation Google.

Ne jamais ajouter de dates, avis, données d'entreprise ou résultats clients non vérifiés aux données structurées. Préserver les modifications locales non commitées et vérifier la branche avant tout déploiement.
