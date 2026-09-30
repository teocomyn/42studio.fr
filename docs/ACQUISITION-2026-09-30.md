# Parcours commercial du studio, 30 septembre 2026

Le site présentait les expertises mais ne donnait pas un accès clair aux formats d'accompagnement. Le parcours ajoute une page `/accompagnements` avec Brand Identity, Digital Experience, Brand × Digital, Creative Campaign et Creative Partner. Trois formats sont également présentés sur l'accueil et les services. Les montants restent sur devis, la grille du catalogue n'étant pas arbitrée.

## Comportement

- Navigation globale, responsive avec menu sous 1024 px pour conserver l'espace nécessaire aux six liens.
- Source commune des offres : `data/offers.ts`. Les contenus et délais indicatifs sont dans le HTML serveur.
- Boutons par offre vers `/contact?offer=…`. Le formulaire propose l'offre et le type de projet correspondants.
- Champs facultatifs délai de démarrage et site de la marque, inclus dans l'email du brief. Offre et délai validés par liste, URL limitée à HTTP/HTTPS, contenus échappés dans l'email HTML.
- Conservation du brief après erreur métier de la server action, puis focus sur le premier champ à corriger.
- Après envoi réussi, focus et défilement sur la confirmation : le remplacement du formulaire ne laisse pas le visiteur en bas de page sans retour visible.
- Événements `cta_click`, `form_start`, `generate_lead` avec identifiant d'offre canonique ; pas de texte libre, email ou URL de prospect dans les événements GA4. Le consentement analytique existant s'applique.
- FAQ contact alignée sur les devis par projet. Le volume non documenté de marques dans cette page est remplacé par le lien vers les réalisations.
- Sitemap et documents llms mis à jour ; aucune promesse d'indexation ou de visibilité IA.

## Vérification

`npm run lint` et `npm run build` passent. Le contrôle du HTML serveur couvre 82 pages, dont 80 du sitemap, sans défaut. Rendus desktop/mobile et préremplissage de l'offre contrôlés. Un appel HTTP local de la server action rejette un message trop court avant tout envoi. Construction de l'email testée hors réseau, y compris l'échappement HTML.

Contrôle navigateur repris et réussi le 30 septembre : après un message trop court, l'erreur serveur s'affiche, le nom, l'offre, le délai, le message et le consentement restent conservés. Le focus est sur le message à corriger. Aucun email envoyé par ce test local. La réception réelle et la confirmation au demandeur sont à tester après publication avec l'adresse fournie par Teo.

Publication de ce lot autorisée par Teo le 30 septembre, en réponse à la demande explicite de mise en ligne. Le résultat de production et le test email sont consignés séparément dans le vault privé, sans adresse personnelle dans ce dépôt.

La recherche d'inspiration 21st a renvoyé HTTP 401 ; les composants existants ont été utilisés. Le contexte de design local est explicité dans `.21st/`. La revue 21st des composants n'a pas signalé de défaut.

## Frontières

La préparation commerciale, les prospects, les PDF et le calculateur restent dans le vault privé, hors dépôt public. Aucun envoi ni publication de post dans ce lot. Les tarifs et les droits de preuve client restent à confirmer. Les variables Resend sont présentes en production, mais cela ne confirme pas la réception d'un message. Publication et test réel de délivrabilité sont des étapes distinctes.
