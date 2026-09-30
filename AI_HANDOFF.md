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

Branche de travail : `codex/acquisition-42studio`, à partir de `13f00ff` (main vérifié sur GitHub). État avant publication : lot local `757e6d5`, puis vérification finale documentée. Publication autorisée par Teo le 30 septembre en réponse à la demande de mise en ligne. Le checkout historique reste intact.

Réalisé : offres et page d'accompagnements, liens globaux, préremplissage et qualification du brief, conservation après erreur, tracking par offre sous consentement, FAQ contact, sitemap et llms. Les supports et fiches prospects restent dans le vault privé.

Vérifications : lint et build passent ; contrôle du HTML serveur de 82 pages (80 dans le sitemap), zéro défaut ; revue 21st, zéro défaut. La server action rejette un message trop court via appel HTTP local, avant tout envoi. Le contrôle navigateur repris passe : erreur visible, champs conservés (nom, offre, délai, message, consentement), focus sur le message. La recherche d'inspiration 21st nécessite une authentification (401), aucun composant externe installé.

GitHub : `gh api user` confirme `teocomyn`. Vercel, lu depuis le checkout historique lié au projet : CONTACT_FROM, CONTACT_TO et RESEND_API_KEY présents en production (valeurs non lues). Ce worktree n'est pas lié au projet Vercel ; la publication du site reste celle de main.

À poursuivre après le push autorisé : read-back public et test de réception depuis l'adresse fournie par Teo. Le compte rendu de production et d'email est dans le vault privé, sans coordonnées dans le dépôt public. Aucun message de prospection envoyé. Grille de prix et attribution des preuves à confirmer avec Teo.

### Contrôle en production

`22e5594` publié sur main, déploiement Vercel `dpl_BWiAkKAz4pS4H2GydM25BYzCUhCG` READY et affecté à `42studio.fr`. Contrôle SEO public : 82 pages, zéro défaut. Un brief technique autorisé a été soumis via le navigateur ; succès affiché et confirmation reçue dans la boîte de réception Gmail de Teo. Notification studio acceptée par le service d'envoi ; réception dans la boîte studio à confirmer séparément.

Le test réel a montré que la confirmation pouvait rester hors écran après remplacement du formulaire. Correctif `8fb385d` publié sur main, Vercel `dpl_4gGEy8HGvgYeESKqwShEpd9WbeZF` READY. Lint et build passent. Le second test en production confirme que le conteneur de succès est focalisé et entièrement visible. Deux confirmations reçues dans la boîte de réception Gmail de Teo. Réception des notifications dans la boîte studio à confirmer séparément. Les preuves détaillées sont dans le kit privé.

### Consigne permanente GitHub

Teo demande de pousser toutes les modifications du site sur `https://github.com/teocomyn/42studio.fr` à chaque intervention. Consigne enregistrée dans `AGENTS.md` et `AI_CONTEXT.md`. Pousser les lots vérifiés sur main sans nouvelle demande systématique ; conserver les frontières du dépôt public et le travail du checkout historique.
