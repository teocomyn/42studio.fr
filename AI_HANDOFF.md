# Passation — 29 septembre 2026

## Livraison

La branche `seo-geo-studio-creatif` a été poussée sur `main` (déploiement Vercel de production). Elle contient deux commits au-dessus de `6b88821` :

1. `7c3f1d0` Reconcile local improvements with deployed main : tout le travail non commité du checkout `42studio.fr` (perf, formulaire, SEO d'entité, a11y, section StudioSystem), appliqué sur la version en ligne, lockfile Next.js 16.3.5 conservé.
2. Le lot SEO/GEO studio créatif : 7 pages de services, pages locales Arras et Lille, Journal, entité et données structurées, llms.txt et llms-full.txt, images de partage, alignement des éléments globaux. Détail et preuves : `docs/SEO-GEO-STUDIO-CREATIF.md`.

Worktree de travail : `~/Business/42/42 BUSINESS/42studio.fr-seo-geo`.

## État du checkout historique

`~/Business/42/42 BUSINESS/42studio.fr` reste sur `639e639` avec ses modifications non commitées. Leur contenu est désormais dans `main` via `7c3f1d0`. Ne pas le publier. Le réaligner sur `origin/main` seulement avec l'accord de Teo, car cela efface ses modifications locales.

## Suite

- Search Console et Bing Webmaster Tools : propriété, sitemap, inspection des pages de services.
- Vérifier la propriété des profils Instagram et LinkedIn déclarés dans `sameAs`.
- Décider du sort des pages Shopify et CRO avec les données Search Console.
- Arbitrer la grille de prix avant d'afficher des montants.
- Relire les trois guides du Journal, signés Teo Comyn.
- Réponse des emails de contact non testée depuis cette livraison : faire un envoi de test depuis le site en ligne.

## Lot acquisition, 30 septembre 2026

Branche de travail : `codex/acquisition-42studio`, à partir de `13f00ff` (main vérifié sur GitHub). Ce lot est préparé localement et n'est pas encore poussé sur main. Le checkout historique reste intact.

Réalisé : offres et page d'accompagnements, liens globaux, préremplissage et qualification du brief, conservation après erreur, tracking par offre sous consentement, FAQ contact, sitemap et llms. Les supports et fiches prospects restent dans le vault privé.

Vérifications : lint et build passent ; contrôle du HTML serveur de 82 pages (80 dans le sitemap), zéro défaut ; revue 21st, zéro défaut. La server action rejette un message trop court via appel HTTP local, avant tout envoi. Préremplissage et rendu contrôlés ; conservation après erreur implémentée mais contrôle navigateur complet restant à faire : l'outil ne déclenche pas correctement la soumission. Vérifier manuellement cette conservation et la réception réelle avant lancement commercial. La recherche d'inspiration 21st nécessite une authentification (401), aucun composant externe installé.

GitHub : `gh api user` confirme `teocomyn`. Vercel, lu depuis le checkout historique lié au projet : CONTACT_FROM, CONTACT_TO et RESEND_API_KEY présents en production (valeurs non lues). Ce worktree n'est pas lié au projet Vercel ; la publication du site reste celle de main.

À poursuivre : accord explicite pour publication, read-back public, test de réception depuis une adresse de Teo. Aucun message de prospection envoyé. Grille de prix et attribution des preuves à confirmer avec Teo.
