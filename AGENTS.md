# 42studio : livraison GitHub

Consigne permanente de Teo, donnée le 30 septembre 2026 : pousser les modifications du site à chaque intervention vers `https://github.com/teocomyn/42studio.fr`.

- Après chaque lot terminé et vérifié, committer puis pousser vers `origin/main`, sans redemander l'autorisation de push. Le push déclenche le déploiement Vercel existant.
- Vérifier le remote, l'état Git, les changements et le SHA distant avant d'annoncer la livraison. Ne jamais forcer le push ni écraser du travail d'un autre outil.
- Lire `AI_CONTEXT.md` et `AI_HANDOFF.md` avant une intervention substantielle. Utiliser le checkout à jour indiqué dans la passation ; le checkout historique contient du travail conservé et ne doit pas remplacer main.
- Le dépôt du site est public. Les coordonnées de prospects, le vault business, les supports privés et les secrets restent hors de ce dépôt. « Tout pousser » concerne les modifications du site.
- Exécuter les contrôles adaptés au changement. Pour le code du site : lint, build et contrôles fonctionnels pertinents. Pour les changements SEO : contrôle du HTML serveur avec `scripts/check_seo.py`.

Cette autorisation concerne les livraisons du site sur ce dépôt. Elle n'autorise pas les messages de prospection, les achats, la publication de données privées ou les actions destructives.
