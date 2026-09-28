# SEO / GEO — lot 1, 13 septembre 2026

## Périmètre

Rétablir le contenu HTML des pages, rendre le site consultable sans JavaScript,
fiabiliser le sitemap et l'identité structurée, et rendre les liens commerciaux
compréhensibles pour les visiteurs. Ce document distingue le travail local de la
publication et de l'indexation, qui demandent des vérifications séparées.

Le dossier comportait déjà des modifications non commitées avant ce lot. Elles
ont été conservées. Leur diff initial est sauvegardé dans
`/tmp/42studio-before-seo-20260913.patch` pour distinguer les interventions.

## Modifications de ce lot

- `SiteChromeClient` rend son contenu côté serveur ; seul le curseur reste sans SSR.
- `LenisProvider` importe le défilement dans un effet navigateur, avec nettoyage et
  maintien du défilement natif si le module optionnel ne charge pas.
- Un style `noscript` rend visibles les contenus animés et la navigation mobile.
- Le sitemap exclut les pages légales noindex et omet les dates éditoriales non
  vérifiées. Le retrait des pages légales était déjà préparé avant ce lot.
- L'adresse structurée et légale utilise 30 Grand Rue, 62217 Neuville-Vitasse.
  Arras reste une zone desservie. Les coordonnées géographiques approximatives
  ne sont plus publiées dans le JSON-LD.
- L'entité conserve le même identifiant ET la même URL sur toutes les pages.
- Les corrections de titres et le logo Apple de 180 px déjà préparés sont conservés.
- Les libellés de navigation décrivent les accompagnements, sans exposer les
  mots-clés cibles ou les objectifs SEO internes.
- Le lien de branding e-commerce du hub rejoint la route existante
  `/branding-e-commerce`.
- Le formulaire dérive son préremplissage depuis l'URL avec un instantané serveur
  stable ; les choix manuels du visiteur restent prioritaires.
- Analytics observe le consentement via `useSyncExternalStore` ; son script reste
  absent avant acceptation. L'exception lint du préchargement documente son
  changement d'état intentionnel avant le premier affichage.
- `scripts/check_seo.py` contrôle toutes les pages du sitemap, les métadonnées,
  le contenu serveur, les liens, l'adresse structurée et les réponses 404.

## Validation

- Build de production et TypeScript : réussite, 79 routes générées.
- ESLint et `git diff --check` : réussite.
- Crawl final : 68 pages du sitemap + 2 pages légales, aucune erreur détectée.
- Les 70 pages contiennent un H1, du texte et des liens dans le HTML initial.
- Titres et descriptions uniques, marque présente une seule fois dans les titres.
- Aucun lien vers une route interne inconnue dans les pages contrôlées.
- 24 essais navigateur : 6 pages × mobile/desktop × JavaScript activé/désactivé.
  Contenu et navigation lisibles sans JavaScript, aucun débordement horizontal.
- Menu mobile, préremplissage contact, conservation des choix manuels et
  consentement Analytics testés, sans erreur JavaScript détectée.
- Après la correction finale des liens et libellés, nouveau build, crawl complet
  et vérification navigateur de la page de refonte.

Les captures et rapports sont conservés dans `/tmp/42studio-*` ; ils ne prouvent
pas une publication. Les requêtes Google Analytics ont été interceptées pendant
les tests fonctionnels et aucun formulaire n'a envoyé d'email.

**État actualisé le 14 septembre 2026 : le lot isolé est publié au commit 6b88821. Voir SEO-GEO-PUBLICATION-20260914.md. Les autres modifications de ce checkout restent locales.**

## Étapes suivantes

1. Publier le lot vérifié en distinguant les autres travaux non commités, puis
   contrôler à nouveau le HTML, le sitemap et les pages sur le domaine public.
2. Inspecter Google Search Console et Bing Webmaster Tools : propriété, sitemap,
   rendu, indexation, requêtes et URL canoniques choisies par les moteurs.
3. Mesurer les Core Web Vitals réels ; les essais navigateur de ce lot ne sont pas
   une mesure des performances terrain.
4. Vérifier les affirmations commerciales existantes : certifications, tarifs,
   délais, nombre de missions, dates et contribution exacte aux références.
5. Clarifier les intentions des pages à partir des requêtes observées, avant toute
   fusion ou redirection éditoriale.
6. Enrichir les cas clients avec preuves et résultats documentés, puis construire
   les ressources utiles aux prospects.
7. Vérifier les profils sociaux, l'éligibilité Google Business Profile et les avis.
8. Vérifier la réception réelle des leads et le marquage des conversions dans GA4.

Aucune indexation, position, citation IA ou réception d'email ne peut être déduite
uniquement d'un build réussi.
