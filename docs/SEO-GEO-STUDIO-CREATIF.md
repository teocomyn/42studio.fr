# SEO / GEO · Studio créatif (septembre 2026)

Livraison du 29 septembre 2026, branche `seo-geo-studio-creatif` poussée sur `main`.
Objectif : que Google et les moteurs de réponse IA comprennent 42studio comme un **studio créatif** (branding, graphisme, site web, direction artistique, motion design, 3D, vidéo) et non comme une agence Shopify/CRO. Aligné sur la décision validée « 42STUDIO et EXPERAISE sont séparés » (vault 42STUDIO).

## Ce qui a été livré

| Bloc | Détail |
|---|---|
| 7 pages de services | `/brand`, `/graphisme`, `/web`, `/direction-artistique`, `/motion-design`, `/3d`, `/realisation-video`. Source unique : `data/creative-services.ts`. Gabarit : `components/CreativeServicePage.tsx`. |
| Structure de chaque page | Fil d'Ariane visible, H1, encadré « En bref » (définition courte, réponse directe pour les moteurs IA), formats, cas d'usage, méthode, livrables, facteurs de budget, format d'intervention conseillé, réalisations réelles, modèle du studio, FAQ, services liés, CTA suivis dans GA4. |
| Données structurées | `Service` enrichi, `FAQPage`, `BreadcrumbList` par page ; `Organization`/`ProfessionalService` avec `alternateName`, `description`, `knowsAbout` créatif, `hasOfferCatalog` des 7 services ; `Person` fondateur ; `Article` pour le Journal. Témoignages retirés du schéma (avis auto-déclarés non éligibles, et orientés CRO). `foundingDate` retiré : non vérifié. |
| Pages locales | `/studio-creatif-arras` réécrite, `/studio-creatif-lille` et `/graphiste-arras` créées (`data/seo-keywords/index.ts`, cluster `local`). La page Lille dit explicitement que le studio est basé à Arras. |
| Journal | `/journal` + 3 guides (`data/journal.ts`) : motion design / 3D / tournage, modèle de brief créatif, contenu d'une identité visuelle. Auteur affiché : Teo Comyn. |
| Fichiers IA | `/llms.txt` réécrit autour du studio créatif ; `/llms-full.txt` expose le contenu complet des services et du Journal. |
| Images de partage | `public/og/*.jpg` (1200×630, DA 42STUDIO), générées par `42STUDIO-CREATIVES/src/og.mjs`. L'ancienne image dynamique « Brand. Web. Produit. » est supprimée. |
| Signaux globaux | Titre et description de l'accueil, hero, section piliers, manifeste, témoignages, galerie, pied de page, menu (+ Journal), page Services par piliers, formulaire de contact (types créatifs, option « Audit express » retirée), FAQ contact. |
| Technique | Descriptions bornées à 155 caractères par `clampDescription` (dont les 43 fiches projet), 9 titres trop longs corrigés, questions de FAQ en `h3`, sitemap avec `lastModified` vérifiés. |
| Intégré depuis le checkout local | Vidéo de pied de page chargée seulement à proximité et sur desktop, hero animé en CSS, CSP sans `unsafe-eval` en production, formulaire durci, et le reste du travail local non publié (commit `7c3f1d0`). |

## Carte des requêtes cibles

Sans volumes : le quota Ubersuggest était épuisé, le forfait Ahrefs ne donne pas l'API et le compte Semrush n'avait plus d'unités API. Les requêtes viennent des suggestions Google (FR) et de l'analyse des pages de résultats. À confirmer avec Search Console.

| Page | Requête principale | Requêtes secondaires |
|---|---|---|
| `/brand` | branding, identité visuelle | agence branding, création identité visuelle, plateforme de marque |
| `/graphisme` | graphisme, design graphique | studio graphique, graphiste, création affiche |
| `/web` | création site web sur mesure | webdesign, site vitrine, site de marque |
| `/direction-artistique` | direction artistique | directeur artistique, concept de campagne |
| `/motion-design` | motion design | studio motion design, animation de logo, vidéo explicative |
| `/3d` | studio 3D | packshot 3D, animation 3D produit, CGI publicité |
| `/realisation-video` | réalisation vidéo | film de marque, production vidéo, vidéo publicitaire |
| `/studio-creatif-arras` | studio créatif Arras | agence créative Arras, motion design Arras |
| `/studio-creatif-lille` | studio créatif Lille | agence créative Lille, motion design Lille, studio 3D Lille |
| `/graphiste-arras` | graphiste Arras | graphisme Arras, création logo Arras |
| Journal | motion design ou tournage, brief créatif, que contient une identité visuelle | questions « quoi / comment / combien » |

Lecture du marché : Arras est peu concurrentiel (freelances et annuaires), Lille très concurrentiel (agences avec une page par ville), et les annuaires comme Sortlist ainsi que les guides de prix captent une part des réponses.

## Règles éditoriales appliquées

- Voix 42STUDIO : court, concret, pas de tiret cadratin.
- Aucun chiffre de résultat, aucun prix non arbitré. Les seules durées citées viennent des portes d'entrée validées : Brand Sprint 2 à 3 semaines, Digital Experience 3 à 6 semaines, Brand × Digital 4 à 8 semaines.
- Aucun vocabulaire EXPERAISE sur les nouvelles pages (SEO, CRO, conversion, growth). La question « mon site sera-t-il bien référencé ? » renvoie vers un partenaire spécialisé.
- Motion, 3D et vidéo : présentés comme produits par le réseau sous une direction unique, sans cas client inventé.

## Encore ouvert

1. **Pages Shopify et CRO** (`/optimisation-shopify-conversion`, `/expert-shopify-freelance`, `/agence-shopify-france`, `/refonte-shopify`) : toujours en ligne, retirées du pied de page. Décision à prendre avec les données Search Console : réécrire, passer en noindex, ou rediriger vers EXPERAISE.
2. **Profils sociaux** : vérifier que `instagram.com/42studio` et `linkedin.com/company/42studio` appartiennent au studio avant de les garder dans `sameAs`. `behance.net/42studio` appartient à un studio lituanien et `x.com/42studio` n'est pas le studio.
3. **« +60 marques »** : preuve partagée avec EXPERAISE, à trancher.
4. **Prix** : les FAQ restent sans montant tant que la grille n'est pas arbitrée.
5. **Anglais** : la note site v2 prévoit un hero anglais ; non fait, décision de langue en attente.

## Mesure

- Search Console : vérifier la propriété, soumettre `https://42studio.fr/sitemap.xml`, inspecter les 7 pages de services et les 3 pages locales.
- Bing Webmaster Tools : importer depuis Search Console (l'index Bing alimente plusieurs moteurs de réponse).
- GA4 : `cta_click` avec `item_id` = `service_<type>` et `cta_location` = `service_hero`, `service_cta_band`, `services_hero`, `journal_sidebar`. Marquer `generate_lead` comme événement clé.
- Suivi IA mensuel, noté dans le vault : poser les mêmes questions à ChatGPT, Perplexity et Gemini (« studio créatif à Arras », « studio motion design Lille », « agence branding Hauts-de-France », « qui peut faire un packshot 3D en France », « réaliser un film de marque à Lille ») et noter si 42studio est cité.

## Kit présence externe (GEO)

Même nom, même description, même URL partout. N'ajouter un profil à `sameAs` qu'une fois possédé et vérifié.

- **Nom** : 42studio (aussi écrit 42STUDIO).
- **Description courte** : Studio créatif indépendant basé à Arras : branding, graphisme, sites web, direction artistique, motion design, 3D et vidéo pour des marques ambitieuses.
- **Description longue** : 42studio est un studio créatif indépendant basé à Arras, dans les Hauts-de-France. Le studio conçoit des identités de marque, des supports graphiques, des sites web sur mesure et des campagnes, et produit motion design, 3D et vidéo. Une seule direction créative porte chaque projet, et l'équipe se compose selon le besoin avec un réseau sélectionné de designers, développeurs, motion designers, artistes 3D et réalisateurs. Le studio travaille avec des marques, des startups et des projets culturels, en France et à l'international.
- **EN** : 42studio is an independent creative studio based in Arras, France. Brand identity, graphic design, websites, art direction, motion design, 3D and film for ambitious brands.
- **Profils prioritaires** : Google Business Profile (catégories : graphiste, concepteur de sites web, société de production vidéo, studio d'animation), page LinkedIn, Instagram, Behance et Dribbble (identifiant à choisir, `42studio` étant pris sur Behance), Sortlist, La Fabrique du Net, soumission Awwwards du site.

## Vérifications faites avant le push

- `tsc`, `eslint` et `next build` : OK.
- Version de production servie en local : 20 pages en 200, un seul H1, titres de 60 caractères au plus, descriptions de 155 au plus, image de partage propre à chaque service, JSON-LD valide ; 62 liens internes testés, aucun cassé.
- Rendu contrôlé en navigateur réel, desktop et mobile : pas de débordement horizontal, sections visibles au défilement, aucune erreur JavaScript hors script Vercel Analytics, absent en local.
