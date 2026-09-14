# Livraison SEO/GEO — 14 septembre 2026

## Périmètre

Correction du rendu serveur : le contenu ne dépend plus du chargement de Lenis pour apparaître dans le HTML. Les animations utilisent les composants compatibles avec LazyMotion ; le CSS noscript rend visibles les blocs animés et la navigation sans JavaScript.

Titres sans répétition de marque, sitemap de 68 pages indexables (pages légales exclues et dates de modification non vérifiées retirées), adresse structurée cohérente avec les informations légales, identifiant stable de l'organisation, logo 180 px, correction du lien branding-e-commerce et libellés de navigation orientés visiteurs.

Le formulaire peut présélectionner le type de projet depuis son URL. Son honeypot reste compatible avec l'action serveur existante. Google Analytics se charge après consentement.

Next.js et eslint-config-next passent à 16.3.5 ; le lockfile inclut les correctifs de dépendances disponibles. Référence de sécurité : https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4.

## Validation avant publication

- Build et lint réussis sous Next.js 16.3.5.
- npm audit : 0 vulnérabilité signalée au 14 septembre 2026.
- scripts/check_seo.py : 68 URL sitemap + 2 pages légales, aucune anomalie ; contrôle de la réponse 404 inclus.
- Navigateur : accueil, formulaire avec présélection puis choix manuel, refus cookies, menu mobile et page branding-e-commerce à 390 px. Aucune erreur console observée ; aucun débordement horizontal sur la page d'expertise.
- Aucun email de test envoyé. La réception des demandes n'est pas certifiée par ces contrôles.

## Après publication

Relancer `python3 scripts/check_seo.py https://42studio.fr` et vérifier le déploiement associé au commit sur main. La réussite technique ne prouve ni l'indexation ni le classement : connecter Search Console, soumettre le sitemap, inspecter les URL prioritaires et suivre les impressions/clics/conversions.

Les travaux de refonte visuelle, performance et messagerie présents dans le checkout de travail initial ne font pas partie de ce lot. Ils doivent être rapprochés de main avant leur prochaine publication.
