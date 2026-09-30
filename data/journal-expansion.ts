import type { JournalArticle } from "@/data/journal";

const date = "2026-09-30";
const cover = (name: string, alt: string) => ({
  src: `/journal/images/${name}.webp`,
  alt,
  caption: "Illustration éditoriale originale créée avec l’IA pour 42studio. Mise en scène fictive, sans attribution client."
});

export const newJournalArticles: JournalArticle[] = [
  {
    slug: "prix-identite-visuelle",
    title: "Combien coûte une identité visuelle ? Comprendre le budget et les livrables",
    metaTitle: "Prix d’une identité visuelle : périmètre et devis",
    description: "Ce qui fait varier le prix d’une identité visuelle : stratégie, logo, système graphique, applications et droits. Une grille pour comparer les devis.",
    excerpt: "Un prix n’a de sens qu’avec un périmètre. Voici comment définir ce que votre marque doit recevoir, comprendre les écarts entre devis et arbitrer sans sacrifier l’essentiel.",
    category: "Guide", datePublished: date, dateModified: date,
    keywords: ["prix identité visuelle", "budget branding", "devis identité visuelle", "coût charte graphique"],
    about: ["Identité visuelle", "Budget de marque"],
    essentials: [
      "Le prix dépend du problème à résoudre, des recherches et des supports à livrer, pas seulement du dessin d’un logo.",
      "Comparez des périmètres équivalents : phases, applications, retours, fichiers et droits.",
      "Chez 42studio, l’identité visuelle se chiffre sur devis après cadrage. Ce guide ne constitue pas une grille tarifaire."
    ],
    cover: cover("identite-budget", "Papiers d’identité, matières et échantillons monochromes disposés autour d’un signe géométrique."),
    ogImage: "/journal/images/identite-budget.webp",
    sections: [
      {
        id: "ce-que-vous-achetez", title: "Vous achetez un système de marque, pas un fichier isolé",
        paragraphs: [
          "Une identité visuelle sert à être reconnu et à présenter une entreprise de manière cohérente. Le logo en est une pièce. La typographie, les couleurs, les compositions, le traitement des images et les règles d’application font fonctionner l’ensemble. Un logo livré seul laisse souvent les décisions suivantes à chaque prestataire.",
          "Le bon point de départ est donc la liste de vos usages. Une marque de services qui lance un site et une présentation commerciale n’a pas le même besoin qu’un fabricant qui prépare des emballages, des fiches produit et un réseau de revendeurs. Même si les deux demandent une identité, le travail d’application diffère.",
          "Clarifiez aussi ce qui existe déjà : nom validé, positionnement, textes, ancien logo, supports à conserver. Le studio doit savoir s’il construit un langage visuel à partir d’une stratégie établie ou s’il faut d’abord clarifier ce que la marque veut exprimer."
        ],
        links: [{ href: "/journal/identite-visuelle-contenu", label: "Les éléments d’une identité visuelle complète", description: "Pour distinguer logo, système graphique et charte avant de demander un devis." }]
      },
      {
        id: "facteurs-budget", title: "Les six éléments qui font varier le budget",
        table: { caption: "Facteurs de périmètre à comparer dans un devis d’identité", head: ["Élément", "Question à poser", "Conséquence"], rows: [
          ["Cadrage", "Le public, la promesse et la personnalité sont-ils définis ?", "Un travail stratégique peut précéder le design."],
          ["Exploration", "Combien de directions sont présentées et à quel niveau ?", "Des recherches argumentées demandent plus qu’une variation de couleur."],
          ["Système", "Quelles règles et variantes seront documentées ?", "La marque doit fonctionner au-delà du premier visuel."],
          ["Applications", "Quels supports sont réellement produits ?", "Un exemple de carte n’équivaut pas à un fichier prêt pour l’imprimeur."],
          ["Validation", "Qui décide et combien de cycles sont inclus ?", "Des retours consolidés rendent le périmètre pilotable."],
          ["Livraison", "Quels fichiers, droits et licences sont prévus ?", "La reprise par votre équipe doit être possible dans les usages convenus."]
        ] },
        paragraphs: ["Le nombre de personnes impliquées peut aussi modifier l’organisation. Une validation par un fondateur disponible et une validation par plusieurs services ne se pilotent pas de la même manière. Signalez les décideurs, les contraintes réglementaires de votre secteur et les échéances réelles avant le chiffrage."]
      },
      {
        id: "trois-perimetres", title: "Trois périmètres à distinguer avant de comparer",
        steps: [
          { title: "Un socle pour un lancement", text: "Positionnement déjà clair, signe principal et variantes, palette, typographies, règles de composition et premières applications indispensables. La priorité est une marque utilisable, pas une bibliothèque de supports rarement employés." },
          { title: "Un système pour une marque en développement", text: "Plusieurs canaux, formats, personnes ou produits. Il faut tester la cohérence sur des situations réelles, documenter les règles et prévoir des gabarits que l’équipe peut reprendre." },
          { title: "Une évolution de marque avec déploiement", text: "Audit de l’existant, éléments à préserver, transition vers le nouveau système, remplacement des supports et accompagnement des équipes. La mise en circulation fait partie du sujet." }
        ],
        example: { title: "Exemple fictif : une marque de conseil", text: "Si ses deux usages immédiats sont un site et une présentation, elle peut concentrer la première phase sur les règles de marque, les maquettes du site et un gabarit de présentation. Une collection complète d’objets publicitaires peut attendre. Cet arbitrage réduit le périmètre, sans prétendre chiffrer la mission." }
      },
      {
        id: "comparer-devis", title: "Comment lire deux devis qui semblent très différents",
        paragraphs: [
          "Mettez les propositions côte à côte et reformulez ce qui sera disponible à la fin. Les mots « branding » et « charte » couvrent des prestations très variables. Cherchez une liste de livrables avec formats, quantités ou usages, ainsi que des étapes de validation clairement décrites.",
          "Repérez les exclusions : rédaction, naming, photographie, achat de polices, impression, intégration web ou déclinaisons supplémentaires. Une exclusion n’est pas un défaut si elle est explicite et compatible avec votre besoin. Une ligne ambiguë crée surtout un risque de mauvaise attente.",
          "Demandez enfin comment seront traitées les demandes qui changent le brief. Un retour sur une direction validée n’a pas le même effet qu’un ajustement dans cette direction. Un bon devis précise ce qui déclenche un nouveau cadrage et comment la livraison est acceptée."
        ],
        bullets: ["Même problème et même public à servir.", "Même liste de supports et de fichiers exploitables.", "Même organisation des validations et des retours.", "Même périmètre de droits, licences et accompagnement."]
      },
      {
        id: "arbitrer", title: "Réduire le périmètre sans fragiliser la marque",
        paragraphs: [
          "Commencez par séparer les supports nécessaires au lancement de ceux qui peuvent suivre. Gardez le système assez précis pour que ces nouveaux supports puissent être créés plus tard. Économiser sur les règles communes pour multiplier les maquettes ponctuelles produit une marque difficile à faire vivre.",
          "Préparez un dossier unique, nommez un décideur et regroupez les retours. Ces gestes ne garantissent pas une baisse de prix ; ils rendent les échanges plus nets et évitent des recherches sur des questions déjà tranchées. Indiquez votre enveloppe et vos priorités pour que le studio propose un périmètre réaliste."
        ],
        diagram: { caption: "L’ordre d’arbitrage proposé par 42studio", stages: [
          { title: "Usage", text: "Ce qui doit fonctionner au lancement." },
          { title: "Système", text: "Les règles communes à conserver." },
          { title: "Déploiement", text: "Les supports à produire maintenant ou ensuite." }
        ] },
        links: [{ href: "/accompagnements#brand-identity", label: "Cadrer une mission Brand Identity", description: "Voir le périmètre de l’accompagnement avant de présenter votre projet." }]
      }
    ],
    tool: { mode: "scope", title: "Composez votre périmètre d’identité", intro: "Sélectionnez les besoins réels de votre marque. Vous obtiendrez une liste de points à discuter, pas une estimation de prix.", items: [
      { id: "strategie", label: "Positionnement à clarifier", detail: "Prévoir un cadrage du public, de la promesse et des différences avant les pistes visuelles." },
      { id: "systeme", label: "Logo et système graphique", detail: "Lister les variantes, règles typographiques, palette et compositions attendues." },
      { id: "web", label: "Applications sur le site", detail: "Identifier les pages et composants sur lesquels l’identité sera testée." },
      { id: "print", label: "Supports imprimés ou packaging", detail: "Fournir formats, contraintes de production et gabarits techniques." },
      { id: "templates", label: "Gabarits pour mon équipe", detail: "Préciser les outils utilisés et qui doit pouvoir modifier les fichiers." },
      { id: "transition", label: "Remplacement d’une identité existante", detail: "Inventorier les supports à migrer et les éléments à conserver." }
    ] },
    faqs: [
      { question: "Quel est le prix d’une identité visuelle chez 42studio ?", answer: "Le projet est chiffré sur devis après définition du problème, des livrables et des usages. Présentez votre besoin et votre enveloppe : le studio pourra proposer un périmètre adapté, avec ses inclusions et exclusions." },
      { question: "Un logo seul suffit-il pour lancer une marque ?", answer: "Il peut suffire à un usage très limité, mais il ne règle ni les compositions, ni les typographies, ni les déclinaisons. Pour un site, une présentation et des réseaux sociaux, prévoyez au moins des règles communes et quelques applications testées." },
      { question: "La charte graphique inclut-elle les fichiers modifiables ?", answer: "Pas automatiquement. Le contrat doit préciser les fichiers livrés, leurs formats et leurs usages. Une charte explique les règles ; les sources et les gabarits permettent de produire ou d’adapter les supports." },
      { question: "Les licences de polices sont-elles comprises ?", answer: "Cela dépend de la proposition. Demandez qui achète les licences, pour quels usages et avec quelles restrictions. Une police présente dans une maquette n’autorise pas automatiquement son utilisation sur tous vos supports." },
      { question: "Peut-on développer l’identité en plusieurs phases ?", answer: "Oui. Définissez un socle cohérent, les applications du lancement et les extensions ultérieures. Les phases doivent partager les mêmes décisions de marque, avec un point de validation avant chaque extension." }
    ],
    relatedServices: ["brand", "graphisme"], relatedArticles: ["identite-visuelle-contenu", "brief-creatif-modele", "identite-marque-site-web-ordre"],
    cta: { title: "Définissons le bon périmètre.", text: "Présentez vos usages, votre échéance et ce qui existe déjà. Nous cadrerons la mission avant de parler devis.", label: "Parler de mon identité", href: "/contact?offer=brand-identity" }
  },
  {
    slug: "studio-agence-freelance",
    title: "Studio créatif, agence ou freelance : comment choisir pour votre marque ?",
    metaTitle: "Studio créatif, agence ou freelance : le comparatif",
    description: "Choisir un partenaire créatif selon votre besoin : interlocuteur, compétences, capacité, méthode, fichiers et accompagnement. Comparatif et questions utiles.",
    excerpt: "Le bon partenaire dépend du travail à faire et de votre organisation. Voici les critères qui comptent davantage que la taille de la structure ou l’étiquette sur sa porte.",
    category: "Guide", datePublished: date, dateModified: date,
    keywords: ["studio créatif ou agence", "agence ou freelance", "choisir studio créatif"], about: ["Studio créatif", "Choix d’un prestataire"],
    essentials: ["Commencez par le problème, les livrables et la manière dont vous pouvez piloter le projet.", "La taille d’une structure ne prouve ni sa disponibilité, ni sa compétence sur votre sujet.", "Vérifiez qui produit, qui décide, qui remplace un interlocuteur indisponible et ce que vous recevrez."],
    cover: cover("studio-agence-freelance", "Trois structures de cubes illustrant une personne, un collectif et une organisation modulaire."), ogImage: "/journal/images/studio-agence-freelance.webp",
    sections: [
      { id: "partir-du-besoin", title: "Votre besoin doit précéder le choix du partenaire", paragraphs: [
        "Si vous cherchez une compétence précise pour un brief déjà écrit, le besoin n’est pas le même que si vous lancez une marque, son site et sa première campagne. Dans le premier cas, vous pouvez piloter une production ciblée. Dans le second, les décisions doivent rester cohérentes entre plusieurs disciplines.",
        "Écrivez la situation en une phrase : « Nous avons une identité validée et devons produire une animation » ou « Nous devons clarifier notre marque puis concevoir ses premiers supports ». Ajoutez qui décide, les ressources internes et les contraintes. Cette description permet de demander une proposition utile, quelle que soit la forme de la structure.",
        "Les mots agence, studio et freelance décrivent imparfaitement la réalité. Un indépendant peut coordonner des spécialistes. Un studio peut fonctionner avec une équipe réduite et un réseau. Une agence peut proposer une organisation dédiée. Interrogez le fonctionnement concret plutôt que de supposer ce que chaque étiquette inclut."
      ], links: [{ href: "/journal/brief-creatif-modele", label: "Préparer un brief exploitable", description: "La même base permet de comparer les réponses de plusieurs partenaires." }] },
      { id: "comparatif", title: "Trois modèles, des points à vérifier", table: { caption: "Comparatif de modèles de collaboration, sans classement universel", head: ["Modèle", "Pertinent quand…", "À vérifier"], rows: [
        ["Freelance", "Le besoin est ciblé et vous pouvez coordonner le reste du projet.", "Compétence exacte, disponibilité, continuité, éventuels partenaires."],
        ["Studio créatif", "Plusieurs supports doivent partager une direction de marque.", "Disciplines couvertes, équipe réelle, niveau de production, interlocuteur."],
        ["Agence", "Le projet demande une coordination étendue ou plusieurs équipes.", "Personnes affectées, circuits de décision, périmètre de chaque spécialité."]
      ] }, paragraphs: ["Ces situations sont des repères, pas des garanties de qualité ni de prix. Une petite équipe peut traiter un projet complexe ; une grande structure peut proposer une mission courte. Seule la proposition concrète permet de juger l’adéquation."] },
      { id: "portfolio", title: "Lire un portfolio au-delà des belles images", paragraphs: [
        "Choisissez deux projets proches de votre problème et demandez le rôle précis du prestataire. A-t-il défini la direction artistique, réalisé l’identité, développé le site ou seulement produit certaines images ? Un projet collectif peut être excellent sans que chaque personne ait réalisé l’ensemble.",
        "Cherchez ensuite comment le système fonctionne : plusieurs formats, un usage sur écran, une adaptation imprimée, une contrainte réelle. Un visuel spectaculaire ne démontre pas seul que votre équipe pourra faire vivre la marque. Demandez ce qui a été livré et comment le client a repris le travail.",
        "Enfin, observez la variété des réponses. Un partenaire doit pouvoir expliquer pourquoi une direction convient à un contexte. Vous n’avez pas besoin d’un projet identique au vôtre ; vous avez besoin de décisions argumentées et de compétences adaptées."
      ] },
      { id: "questions", title: "Les questions à poser au premier échange", bullets: [
        "Qui sera mon interlocuteur et qui réalisera chaque partie ?", "Quelle étape vérifie que nous avons bien compris le problème ?", "Comment les directions sont-elles présentées et validées ?", "Quels retours sont inclus et comment sont traitées les demandes supplémentaires ?", "Quels fichiers et droits sont livrés à la fin ?", "Quelles informations attendez-vous de mon équipe pour tenir le planning ?"
      ], paragraphs: ["Écoutez aussi les questions du partenaire. Un studio qui demande vos objectifs, vos usages et vos contraintes cherche à comprendre le projet. S’il propose une solution précise avant d’avoir identifié le problème, demandez sur quelles hypothèses elle repose."] },
      { id: "organisation", title: "Choisir une organisation que vous pouvez faire fonctionner", paragraphs: [
        "Votre disponibilité compte autant que celle du prestataire. Si votre équipe ne peut pas coordonner plusieurs spécialistes, une compétence excellente mais isolée peut créer une charge de pilotage supplémentaire. Si vous avez déjà une direction créative interne, vous pouvez au contraire rechercher un renfort de production très précis.",
        "Avant de signer, convenez d’un rythme d’échange, d’un décideur et d’une méthode de retours. Confirmez les étapes, les dépendances et la passation. La qualité d’un partenariat se joue aussi dans ces moments ordinaires : recevoir les bonnes informations, prendre une décision et savoir ce qui se passe ensuite."
      ], example: { title: "Exemple fictif : lancement d’une marque de service", text: "Un fondateur qui doit lancer identité, site et présentation avec un seul circuit de validation peut chercher un partenaire coordonnant ces sujets. Une équipe possédant déjà ces bases et un responsable créatif peut préférer une mission ciblée de motion design. Le choix vient de la charge de coordination, pas du prestige d’un modèle." }, links: [{ href: "/accompagnements", label: "Les formats d’accompagnement de 42studio", description: "Comparer une mission de marque, un projet digital et un suivi créatif." }] }
    ],
    tool: { mode: "comparison", title: "Quel besoin pilote votre choix ?", intro: "Choisissez votre contrainte principale pour préparer les bonnes questions. Ce repère n’évalue pas un prestataire en particulier.", items: [
      { id: "specialite", label: "Une compétence précise", detail: "Demandez des exemples sur cette compétence, les formats livrés et la disponibilité. Un spécialiste peut convenir si vous assurez la coordination du reste." },
      { id: "coherence", label: "Une marque sur plusieurs supports", detail: "Cherchez une direction commune et un responsable de la cohérence entre identité, site et images. Vérifiez qui prend en charge chaque discipline." },
      { id: "coordination", label: "Plusieurs équipes et décideurs", detail: "Examinez le pilotage, les dépendances, la disponibilité des personnes affectées et le circuit d’arbitrage. La structure doit pouvoir fonctionner avec votre organisation." }
    ] },
    faqs: [
      { question: "Un freelance coûte-t-il forcément moins cher ?", answer: "Non. Expertise, périmètre, disponibilité et organisation influencent la proposition. Comparez les mêmes livrables et responsabilités ; la forme juridique ne permet pas de déduire un prix." },
      { question: "Un studio peut-il gérer le design et le développement ?", answer: "Certains le font directement, d’autres avec des partenaires. Demandez qui conçoit, qui développe, qui teste et qui assure la passation ou la maintenance. Chez 42studio, le périmètre digital est cadré dans la mission." },
      { question: "Faut-il choisir un partenaire proche géographiquement ?", answer: "La proximité peut faciliter des ateliers ou des tournages. Pour une collaboration à distance, vérifiez les outils, le rythme d’échange et les validations. Précisez dès le départ les moments qui nécessitent une présence." },
      { question: "Peut-on demander une piste créative avant de choisir ?", answer: "Vous pouvez demander la méthode, des références et une lecture de votre besoin. Une véritable recherche créative représente un travail à cadrer. Un premier échange doit surtout vérifier la compréhension du projet et l’adéquation du partenaire." },
      { question: "Comment savoir qui a réalisé les projets présentés ?", answer: "Demandez le rôle, les livrables et les collaborateurs impliqués. Une réponse précise permet de reconnaître le travail collectif et de vérifier que les compétences montrées seront mobilisées pour vous." }
    ], relatedServices: ["direction-artistique", "brand", "web"], relatedArticles: ["brief-creatif-modele", "prix-identite-visuelle", "accompagnement-creatif-mensuel-ou-ponctuel"],
    cta: { title: "Voyons si nous sommes le bon partenaire.", text: "Un besoin ciblé ou une marque à construire : présentez le contexte et les décisions à prendre.", label: "Échanger avec le studio", href: "/contact" }
  },
  {
    slug: "preparer-refonte-site-web",
    title: "Refonte de site web : que faut-il préparer avant de contacter un studio ?",
    metaTitle: "Préparer une refonte de site web : la checklist",
    description: "Objectifs, contenus, arborescence, accès, redirections, formulaires et validation : préparer une refonte web et télécharger sa checklist de cadrage.",
    excerpt: "Une refonte commence par des décisions, des contenus et des contraintes. Préparer ces éléments permet de concevoir un site adapté à votre marque et de planifier sa mise en ligne.",
    category: "Méthode", datePublished: date, dateModified: date,
    keywords: ["préparer refonte site web", "brief refonte site", "checklist refonte web"], about: ["Refonte web", "Design digital"],
    essentials: ["Définissez ce que le visiteur doit comprendre et faire sur le futur site.", "Inventoriez contenus, URL, outils et accès avant de dessiner les pages.", "Prévoyez les validations, les tests et la responsabilité après la mise en ligne."],
    cover: cover("refonte-web", "Maquettes papier et ordinateur noir illustrant la préparation d’une architecture de site."), ogImage: "/journal/images/refonte-web.webp",
    sections: [
      { id: "objectif", title: "Décrire le problème que la refonte doit résoudre", paragraphs: [
        "« Le site est vieux » décrit une impression, pas un objectif. Un visiteur comprend-il mal votre activité ? Les offres ont-elles changé ? Votre équipe ne peut-elle plus publier de contenu ? Les demandes arrivent-elles sans les informations nécessaires ? Réunissez les problèmes observables plutôt qu’une liste d’effets visuels souhaités.",
        "Choisissez une action principale : demander un échange, découvrir une offre, consulter des projets ou s’inscrire. Décrivez ensuite le parcours qui y mène. Le site doit répondre aux questions du visiteur dans un ordre utile, avec des pages qui ont chacune un rôle.",
        "Si vous possédez des données de fréquentation ou des retours clients, partagez-les avec leur période et leurs limites. Sinon, assumez des hypothèses à valider. Il vaut mieux une décision fondée sur un besoin clairement formulé qu’un pourcentage inventé pour justifier une refonte."
      ] },
      { id: "inventaire", title: "Faire l’inventaire avant de repartir d’une page blanche", table: { caption: "Dossier de départ pour une refonte web", head: ["À réunir", "Ce qu’il faut noter", "Pourquoi"], rows: [
        ["Pages et URL", "Pages à conserver, modifier, fusionner ou retirer.", "Préparer les nouvelles destinations et les redirections nécessaires."],
        ["Contenus", "Textes, images, vidéos, droits d’utilisation, versions validées.", "Concevoir avec la matière réelle et identifier ce qui manque."],
        ["Fonctionnalités", "Formulaires, réservation, CMS, langues, outils connectés.", "Éviter de découvrir une dépendance au moment de développer."],
        ["Accès", "Domaine, hébergement, dépôt, CMS et outils de mesure.", "Identifier les responsables et organiser une transmission sécurisée."],
        ["Marque", "Charte, fichiers du logo, typographies et licences.", "Faire fonctionner le même système sur les pages et les composants."]
      ] }, paragraphs: ["Ne transmettez pas de mots de passe dans un brief public. Indiquez qui gère les comptes et comment les accès seront accordés au moment nécessaire. Notez les abonnements et les responsabilités pour éviter qu’un site dépende d’un compte personnel oublié."] },
      { id: "contenus", title: "Préparer les contenus qui structurent vraiment le site", paragraphs: [
        "Commencez par la présentation de l’activité, les offres, les projets et les réponses aux objections. Pour chaque page, écrivez son public, sa question principale, ses preuves disponibles et son action suivante. Les titres peuvent évoluer pendant la conception, mais ces éléments évitent de dessiner autour de textes factices.",
        "Pour les images, réunissez les originaux et vérifiez leur droit d’utilisation. Distinguez une photo de réalisation, une illustration et une image d’ambiance. Une image informative doit avoir une alternative textuelle pertinente ; une image purement décorative n’a pas besoin d’une description répétitive. Le W3C propose un guide utile pour ce choix.",
        "N’attendez pas d’avoir tous les textes parfaits pour contacter le studio. Montrez ce qui est prêt et ce qui reste à produire. La rédaction, la photographie et la validation des références peuvent alors être intégrées au planning au lieu de bloquer silencieusement le développement."
      ], links: [{ href: "/journal/identite-marque-site-web-ordre", label: "Dans quel ordre préparer la marque et le site ?", description: "À lire si l’identité visuelle doit elle aussi évoluer." }] },
      { id: "validation", title: "Organiser la validation avant la première maquette", steps: [
        { title: "Valider l’architecture", text: "Décider des pages, de leur rôle et des chemins vers les actions principales. Vérifier qu’aucun contenu nécessaire n’a disparu." },
        { title: "Valider une direction avec du vrai contenu", text: "Tester la hiérarchie, les images, les typographies et les composants sur une page représentative. Une jolie couverture ne suffit pas à valider tout un site." },
        { title: "Valider les comportements", text: "Vérifier navigation, clavier, mobile, formulaires, erreurs, confirmation et outils connectés. Documenter ce qui reste à corriger." },
        { title: "Valider la mise en ligne et la reprise", text: "Contrôler les URL, redirections, métadonnées, contacts et accès d’administration. Prévoir une personne responsable après publication." }
      ], paragraphs: ["Regroupez les retours dans un document et confiez l’arbitrage à une personne identifiée. Des avis contradictoires non arbitrés peuvent changer le projet à chaque étape. Un calendrier réaliste inclut le temps nécessaire à votre propre équipe pour fournir et valider la matière."] },
      { id: "qualite", title: "Prévoir des critères d’acceptation concrets", paragraphs: [
        "Écrivez une courte liste de situations à tester : un visiteur comprend l’offre depuis son téléphone, une personne peut naviguer au clavier, un formulaire refuse une saisie incorrecte et confirme un envoi, une ancienne URL importante mène à sa nouvelle destination. Ces situations sont plus utiles qu’une consigne générale de « site moderne ».",
        "La lisibilité doit également être vérifiée. Les WCAG donnent notamment des repères de contraste pour les textes. Cette vérification ponctuelle ne constitue pas à elle seule un audit complet d’accessibilité. Prévoyez le niveau d’exigence et les contrôles adaptés à votre contexte dès le cadrage.",
        "Enfin, distinguez livraison et suivi. Qui publie les prochaines pages ? Qui corrige un problème technique ? Qui renouvelle le domaine ? Une passation claire fait partie d’une refonte réussie, même quand le site reste simple."
      ], diagram: { caption: "Les quatre validations d’une refonte", stages: [ { title: "Structure", text: "Pages et parcours." }, { title: "Design", text: "Contenu et système." }, { title: "Usage", text: "Mobile, clavier, formulaires." }, { title: "Publication", text: "URL, accès et reprise." } ] }, links: [{ href: "/accompagnements#digital-experience", label: "Concevoir une Digital Experience", description: "Le format de mission pour cadrer et construire votre site." }] }
    ],
    tool: { mode: "checklist", title: "Votre dossier de refonte est-il prêt ?", intro: "Cochez uniquement les points déjà réunis. Les points restants deviennent votre liste de préparation à télécharger.", items: [
      { id: "objectif", label: "Objectif et action principale définis", detail: "Décrire le problème actuel et l’action attendue du visiteur." }, { id: "pages", label: "Inventaire des pages et URL disponible", detail: "Exporter ou lister les URL à conserver, fusionner ou rediriger." }, { id: "matiere", label: "Textes et images recensés", detail: "Identifier les versions validées, les droits et la matière manquante." }, { id: "outils", label: "Outils et responsables des accès identifiés", detail: "Lister CMS, domaine, hébergement, formulaires et intégrations." }, { id: "decideur", label: "Décideur et étapes de validation connus", detail: "Prévoir qui arbitre et quand votre équipe peut répondre." }, { id: "recette", label: "Tests de mise en ligne et reprise prévus", detail: "Définir les situations à tester et le responsable du suivi." }
    ] },
    faqs: [
      { question: "Faut-il avoir tous les textes avant de contacter un studio ?", answer: "Non. Présentez les textes disponibles et ce qui manque. Il faut toutefois une matière représentative pour valider les maquettes ; le rôle de la rédaction et ses étapes doivent être décidés dans le périmètre." },
      { question: "Peut-on conserver le CMS actuel ?", answer: "Oui si ses contraintes, son état et les besoins futurs le permettent. Évaluez l’édition, les intégrations, la maintenance et les compétences de votre équipe avant de décider de conserver ou de changer l’outil." },
      { question: "La refonte peut-elle changer les adresses des pages ?", answer: "Oui, mais les anciennes URL utiles doivent être inventoriées et leur destination planifiée. Les redirections, les liens internes et le contrôle après publication doivent faire partie de la préparation." },
      { question: "Qui fournit les photographies et illustrations ?", answer: "Cela doit être précisé dans la mission. Le studio peut travailler avec vos assets ou prévoir une production. Les droits, les formats et la validation des images doivent être définis avant leur intégration." },
      { question: "Comment éviter une refonte qui s’éternise ?", answer: "Fixez un périmètre, un décideur, des validations et les contenus nécessaires à chaque phase. Si une nouvelle demande modifie le périmètre, arbitrez-la explicitement plutôt que de l’ajouter sans ajuster l’organisation." }
    ],
    sources: [ { title: "W3C : alternatives textuelles des images", href: "https://www.w3.org/WAI/tutorials/images/", note: "Référence pour distinguer images informatives et décoratives." }, { title: "W3C : contraste minimum des textes", href: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html", note: "Un des critères à considérer lors de la vérification de lisibilité." } ],
    relatedServices: ["web", "brand"], relatedArticles: ["brief-creatif-modele", "identite-marque-site-web-ordre", "studio-agence-freelance"],
    cta: { title: "Partons d’un dossier clair.", text: "Vous pouvez venir avec un inventaire complet ou des questions ouvertes. Nous identifierons les décisions à prendre avant la conception.", label: "Préparer ma refonte", href: "/contact?offer=digital-experience" }
  },
  {
    slug: "rebranding-preserver-reconnaissance",
    title: "Rebranding : comment faire évoluer votre marque sans perdre sa reconnaissance ?",
    metaTitle: "Rebranding : évoluer sans perdre sa reconnaissance",
    description: "Conserver, faire évoluer ou remplacer : cadrer un rebranding, tester les signes de reconnaissance et organiser le déploiement de la nouvelle identité.",
    excerpt: "Une refonte de marque doit résoudre un problème précis. Avant de tout changer, identifiez ce qui crée déjà la reconnaissance et ce qui limite votre prochain chapitre.",
    category: "Méthode", datePublished: date, dateModified: date,
    keywords: ["rebranding", "refonte identité de marque", "évolution identité visuelle"], about: ["Rebranding", "Reconnaissance de marque"],
    essentials: ["La lassitude interne ne suffit pas à justifier une rupture visuelle.", "Inventoriez les signes reconnaissables et les usages qui fonctionnent mal.", "Testez l’évolution sur des supports réels et préparez la transition avant d’annoncer la marque."],
    cover: cover("rebranding", "Deux signes circulaires proches reliés par une bande de papier, métaphore d’une évolution de marque."), ogImage: "/journal/images/rebranding.webp",
    sections: [
      { id: "declencheur", title: "Commencer par la raison du changement", paragraphs: [
        "Une marque peut changer parce que son offre évolue, qu’elle s’adresse à un nouveau public ou qu’un système graphique ne tient plus sur ses supports. Ces situations ne demandent pas forcément la même réponse. Le mot rebranding peut couvrir un changement de positionnement, un nouveau nom, une refonte visuelle ou une combinaison de ces sujets.",
        "Écrivez ce qui doit être différent après la mission. « Notre offre est devenue plus large et notre site la présente toujours comme un seul produit » décrit un problème concret. « Nous avons envie de nouveauté » peut être une envie légitime, mais elle ne dit pas encore ce que le public doit comprendre.",
        "Distinguez la familiarité des clients de la lassitude des équipes. Vous voyez votre marque chaque jour ; votre public la rencontre dans d’autres conditions. Recueillez des exemples et des retours avant de conclure que tous les signes existants sont à remplacer."
      ] },
      { id: "inventaire", title: "Ce qu’il faut conserver, faire évoluer ou remplacer", table: { caption: "Matrice de décision pour une évolution de marque", head: ["Décision", "Quand l’envisager", "Comment vérifier"], rows: [
        ["Conserver", "Le signe est identifié et sert encore le positionnement.", "Observer son usage et demander ce que des clients reconnaissent."],
        ["Faire évoluer", "La base fonctionne mais certaines applications sont limitées.", "Tester lisibilité, hiérarchie et adaptation aux nouveaux formats."],
        ["Remplacer", "L’élément exprime une offre ou une personnalité devenues inexactes.", "Vérifier que la nouvelle direction résout le problème sans effacer un repère utile."]
      ] }, paragraphs: ["Passez en revue nom, symbole, couleur dominante, style typographique, ton, images et codes de composition. N’attribuez pas automatiquement la reconnaissance au logo. Elle peut venir d’une couleur, d’une façon de titrer, d’un motif ou d’un ensemble d’éléments."] },
      { id: "tester", title: "Tester la reconnaissance sur des situations réelles", paragraphs: [
        "Préparez quelques applications représentatives : une page de site, un message court, un document commercial et, si nécessaire, un emballage. Comparez les versions sur la même matière. Cela permet de juger la différence de hiérarchie et de personnalité plutôt que de comparer une ancienne image peu soignée à une nouvelle présentation avantageuse.",
        "Interrogez des personnes proches du public visé avec des questions ouvertes : que comprend-on, à quelle entreprise cela fait-il penser, qu’est-ce qui semble avoir changé ? Un petit échange qualitatif peut révéler une confusion. Il ne constitue pas une mesure statistique de notoriété et ne permet pas d’annoncer un gain de reconnaissance.",
        "Testez aussi les contraintes ordinaires : petit format, écran mobile, document partagé, fond clair et fond sombre. Si la nouvelle identité ne fonctionne que dans un grand poster, elle n’a pas encore répondu au problème du quotidien."
      ], example: { title: "Exemple fictif : une entreprise élargit son offre", text: "Elle peut conserver son symbole et sa couleur, mais modifier ses titres, son vocabulaire et ses compositions pour mieux présenter plusieurs services. Si ces changements résolvent la confusion, remplacer le nom et le logo n’est pas nécessairement la prochaine décision." } },
      { id: "deployer", title: "La transition fait partie de la création", steps: [
        { title: "Cartographier les supports", text: "Lister le site, les profils, les documents, les signatures, les produits et les partenaires. Associer un responsable et une date à chaque mise à jour." },
        { title: "Définir les exceptions", text: "Préciser quels stocks imprimés restent en circulation et pendant combien de temps. Une transition physique ne suit pas toujours le rythme du digital." },
        { title: "Former les personnes qui produisent", text: "Livrer des règles et des exemples, puis montrer comment les appliquer dans les outils réellement utilisés." },
        { title: "Expliquer le changement", text: "Dire ce qui évolue dans l’entreprise et ce qui reste stable. Une annonce visuelle gagne à être reliée à une raison compréhensible." }
      ], links: [{ href: "/journal/direction-artistique-campagne-coherence", label: "Garder la même marque sur tous les supports", description: "Pour préparer les applications et éviter les écarts entre prestataires." }] },
      { id: "pieges", title: "Les erreurs qui rendent une évolution difficile à vivre", paragraphs: [
        "Changer tous les codes en même temps sans expliquer le besoin rend la transition difficile à interpréter. À l’inverse, ne changer qu’un logo sans mettre à jour les contenus peut maintenir exactement la même confusion sur l’offre. Le bon niveau d’évolution vient du problème initial.",
        "Un autre piège consiste à lancer publiquement l’identité avant que l’équipe ait les bons fichiers. Les premiers supports recréent alors des versions approximatives. Préparez le kit de livraison, archivez clairement l’ancien système et organisez le remplacement avant l’annonce.",
        "La réussite ne se juge pas uniquement le jour de la révélation. Vérifiez ensuite la cohérence des supports, la compréhension de l’offre et la capacité de l’équipe à produire avec les nouvelles règles. Ces observations peuvent guider des ajustements sans rouvrir toute l’identité."
      ], diagram: { caption: "Un rebranding se prépare en quatre mouvements", stages: [ { title: "Observer", text: "Reconnaissance et problèmes." }, { title: "Arbitrer", text: "Conserver, évoluer, remplacer." }, { title: "Tester", text: "Applications et compréhension." }, { title: "Déployer", text: "Équipe, supports et annonce." } ] } }
    ], tool: { mode: "checklist", title: "Votre évolution de marque est-elle cadrée ?", intro: "Les points non cochés indiquent ce qu’il reste à clarifier avant de choisir une direction.", items: [
      { id: "raison", label: "Raison du changement formulée", detail: "Écrire ce que le public doit comprendre autrement après le projet." }, { id: "reperes", label: "Signes de reconnaissance inventoriés", detail: "Recenser les éléments reconnus et les preuves disponibles, sans supposer leur valeur." }, { id: "usages", label: "Applications problématiques identifiées", detail: "Réunir les situations réelles où l’ancien système ne fonctionne plus." }, { id: "test", label: "Supports et public du test définis", detail: "Comparer les directions sur une matière équivalente avec des questions ouvertes." }, { id: "transition", label: "Plan de transition établi", detail: "Lister supports, responsables, exceptions et dates de remplacement." }, { id: "equipe", label: "Kit et transmission prévus", detail: "Préparer sources, règles et exemples avant l’annonce publique." }
    ] }, faqs: [
      { question: "Faut-il changer le logo pour faire un rebranding ?", answer: "Non. L’évolution peut concerner le positionnement, les textes, les images ou les règles graphiques. Changez le logo si cela sert le problème à résoudre, après avoir examiné les repères de reconnaissance utiles." },
      { question: "Comment savoir quels éléments garder ?", answer: "Rassemblez les usages et les retours disponibles, puis testez ce que le public identifie. Les impressions internes sont un point de départ ; elles ne suffisent pas à prouver quels signes créent la reconnaissance." },
      { question: "Peut-on déployer la marque progressivement ?", answer: "Oui, avec des règles de transition. Définissez les supports prioritaires, les exceptions et la fin de coexistence des versions. Évitez que plusieurs identités restent actives sans personne responsable de leur remplacement." },
      { question: "Le nouveau nom est-il inclus dans une refonte visuelle ?", answer: "Pas automatiquement. Le naming a son propre périmètre et ses vérifications. Si le nom doit évoluer, prévoyez cette décision avant de concevoir les applications de l’identité." },
      { question: "Comment présenter le changement aux clients ?", answer: "Reliez-le à une évolution de l’entreprise compréhensible. Expliquez ce qui change et ce qui reste stable, puis mettez les supports en cohérence. La justification doit correspondre à la réalité du projet." }
    ], relatedServices: ["brand", "direction-artistique"], relatedArticles: ["identite-visuelle-contenu", "prix-identite-visuelle", "direction-artistique-campagne-coherence"],
    cta: { title: "Faisons évoluer ce qui doit changer.", text: "Présentez votre marque actuelle, ses limites et ses repères. Nous cadrerons le niveau d’évolution utile.", label: "Cadrer mon rebranding", href: "/contact?offer=brand-identity" }
  },
  {
    slug: "identite-marque-site-web-ordre",
    title: "Identité de marque et site web : dans quel ordre construire votre projet ?",
    metaTitle: "Identité de marque et site web : dans quel ordre ?",
    description: "Coordonner branding et site web : positionnement, contenu, système visuel, maquettes et développement. Les décisions à valider et ce qui peut avancer ensemble.",
    excerpt: "Il ne faut ni attendre une charte figée pour réfléchir au site, ni développer des pages sur une marque indécise. Voici comment faire avancer les deux avec les bons points de validation.",
    category: "Méthode", datePublished: date, dateModified: date,
    keywords: ["branding et site web", "identité avant site web", "projet brand digital"], about: ["Identité de marque", "Expérience digitale"],
    essentials: ["Positionnement et contenu principal viennent avant la validation des pages.", "L’architecture web et les recherches de marque peuvent s’éclairer mutuellement.", "Stabilisez les règles partagées avant de généraliser les maquettes et de développer."],
    cover: cover("brand-digital", "Un support imprimé et un écran partageant le même motif géométrique noir et blanc."), ogImage: "/journal/images/brand-digital.webp",
    sections: [
      { id: "dependances", title: "Le vrai sujet : les décisions qui dépendent les unes des autres", paragraphs: [
        "Un site rend une marque visible dans des usages concrets. Ses titres, ses images, sa navigation et ses appels à l’action expriment la même entreprise que ses documents imprimés. Séparer complètement les deux projets risque de laisser des décisions communes sans responsable.",
        "Pour concevoir une page, il faut comprendre l’offre et ce que le visiteur vient chercher. Pour choisir des typographies, il faut savoir si elles fonctionneront dans les titres, les textes, les boutons et les petits formats. Les questions se croisent, mais elles n’imposent pas de produire tout en même temps.",
        "Le bon ordre distingue les décisions stables des explorations. On peut réfléchir à l’arborescence pendant que le langage visuel se cherche. On évite en revanche de développer tout un système de pages si le nom, la hiérarchie des offres ou la typographie principale sont encore susceptibles de changer."
      ] },
      { id: "ordre", title: "Un ordre de travail qui limite les reprises", steps: [
        { title: "Clarifier la marque et les objectifs", text: "Définir le public, l’offre, la promesse et le rôle du site. Identifier ce qui existe déjà, les incertitudes et les contraintes de lancement." },
        { title: "Structurer les contenus et explorer l’identité", text: "Préparer les pages et leur matière pendant les recherches de marque. Tester les premières pistes sur un titre, une page et un support représentatif." },
        { title: "Valider le système commun", text: "Arrêter les règles typographiques, la palette, les compositions, les images et le ton. Vérifier les applications réelles avant de décliner toutes les pages." },
        { title: "Concevoir, développer et tester le site", text: "Généraliser les composants, intégrer les contenus et vérifier les parcours. Livrer ensemble les règles de marque et les moyens de faire évoluer le site." }
      ], diagram: { caption: "Ce qui avance ensemble, ce qui attend une validation", stages: [ { title: "Cadrage", text: "Marque et objectif web." }, { title: "Exploration", text: "Identité + architecture." }, { title: "Validation", text: "Règles partagées." }, { title: "Production", text: "Pages + développement." } ] } },
      { id: "cas", title: "Votre point de départ change le déroulé", table: { caption: "Trois points de départ pour une mission de marque et de site", head: ["Situation", "À commencer", "À éviter"], rows: [
        ["Marque nouvelle", "Positionnement, offre et premiers usages.", "Finaliser des pages avant de connaître la promesse."],
        ["Identité existante solide", "Audit de ses usages web et architecture du site.", "Refaire la marque sans raison liée au projet."],
        ["Repositionnement", "Ce qui change dans l’offre et ce qui doit rester reconnaissable.", "Habiller les anciens contenus avec de nouveaux codes sans les revoir."]
      ] }, paragraphs: ["Une identité existante peut fournir une base sans être directement prête pour le web. Vérifiez les licences de polices, les tailles de texte, les contrastes et les usages sur écran. Adapter ces règles n’oblige pas à ouvrir une refonte complète de marque."] },
      { id: "coherence", title: "Tester la marque là où elle sera vraiment utilisée", paragraphs: [
        "Une planche d’identité peut sembler cohérente tandis qu’une page de service devient illisible. Testez les titres longs, les textes, les boutons, les images disponibles et les contenus qui n’ont pas de photographie parfaite. C’est dans ces situations que les règles deviennent un système exploitable.",
        "Réciproquement, le site peut révéler une question de marque : une offre difficile à nommer, des projets sans récit clair ou une promesse qui reste vague. Faites remonter ces points avant d’approuver les maquettes. Un nouveau composant ne résoudra pas une décision de positionnement non prise.",
        "Utilisez un petit ensemble d’applications communes pour valider les deux : page d’accueil, page d’offre et document de présentation, par exemple. Les choix doivent être cohérents sans imposer le même agencement partout. La marque fixe un langage, chaque support l’utilise selon son rôle."
      ], links: [{ href: "/journal/preparer-refonte-site-web", label: "Préparer les contenus et contraintes du site", description: "Pour constituer le dossier qui rend les tests représentatifs." }] },
      { id: "pilotage", title: "Un responsable de la cohérence, des validations explicites", paragraphs: [
        "Si plusieurs partenaires interviennent, nommez la personne qui arbitre les règles communes. Précisez quand un changement de marque entraîne une reprise des pages, et quand un besoin web justifie une adaptation du système graphique. Sans ce point d’arbitrage, chacun peut optimiser son support tout en fragilisant l’ensemble.",
        "La passation doit réunir les fichiers, les règles et les composants. Votre équipe doit savoir quelle police employer, comment choisir une image, comment créer une page et quand demander une nouvelle déclinaison. Le projet se termine avec une marque utilisable et un site qui peut continuer à vivre."
      ], example: { title: "Exemple fictif : une offre encore mouvante", text: "Si une entreprise hésite entre une offre unique et trois offres séparées, cette décision modifie les messages et l’architecture. On peut explorer des codes visuels et préparer les contenus, mais mieux vaut arbitrer l’offre avant de développer les pages correspondantes." }, links: [{ href: "/accompagnements#brand-digital", label: "Construire la marque et le site ensemble", description: "Un cadre commun avec l’accompagnement Brand × Digital." }] }
    ], tool: { mode: "comparison", title: "Par quoi commencer dans votre situation ?", intro: "Sélectionnez le point qui décrit le mieux l’état du projet.", items: [
      { id: "positionnement", label: "L’offre ou le public reste flou", detail: "Commencez par clarifier positionnement et promesse. L’inventaire des contenus peut avancer, mais les pages finales doivent attendre ces décisions." },
      { id: "identite", label: "L’offre est claire, l’identité reste à construire", detail: "Faites avancer architecture et exploration visuelle ensemble. Validez le système sur des pages représentatives avant le développement complet." },
      { id: "solide", label: "La marque existe et fonctionne déjà", detail: "Commencez par l’audit des usages web, les contenus et l’architecture. Adaptez les règles nécessaires plutôt que d’ouvrir automatiquement un rebranding." }
    ] }, faqs: [
      { question: "Faut-il finir toute la charte avant le site ?", answer: "Non. L’architecture et les contenus peuvent avancer pendant l’exploration de marque. Les règles partagées doivent cependant être stabilisées avant de décliner et de développer l’ensemble des pages." },
      { question: "Peut-on refaire le site sans changer l’identité ?", answer: "Oui, si la marque sert encore le positionnement. Vérifiez ses usages digitaux et adaptez les règles qui en ont besoin. Une refonte web n’impose pas de changer le logo." },
      { question: "Qui écrit les textes dans un projet Brand × Digital ?", answer: "Le rôle de la rédaction est défini au cadrage. Il faut identifier qui fournit, qui rédige et qui valide les contenus. Les textes représentatifs doivent arriver assez tôt pour guider la hiérarchie des pages." },
      { question: "Deux prestataires peuvent-ils travailler ensemble ?", answer: "Oui, avec des responsabilités et un circuit de décision communs. Désignez un responsable de la cohérence, partagez les règles et définissez les points de validation entre marque, design web et développement." },
      { question: "Peut-on lancer une première version puis l’enrichir ?", answer: "Oui. Définissez les pages indispensables, les règles stables et les extensions prévues. La première version doit déjà permettre le parcours principal et rester cohérente avec la marque." }
    ], relatedServices: ["brand", "web"], relatedArticles: ["preparer-refonte-site-web", "branding-startup-lancement", "rebranding-preserver-reconnaissance"],
    cta: { title: "Une marque, un site, un cap commun.", text: "Voyons ce qui est déjà décidé et ce qui doit avancer ensemble pour construire votre prochain lancement.", label: "Cadrer mon projet Brand × Digital", href: "/contact?offer=brand-digital" }
  },
  {
    slug: "branding-startup-lancement",
    title: "Branding de startup : que faut-il vraiment préparer avant le lancement ?",
    metaTitle: "Branding startup : les indispensables avant le lancement",
    description: "Prioriser le branding d’une startup : promesse, identité, site, présentation et premiers supports. Un kit de lancement cohérent avec les usages réels.",
    excerpt: "Vous n’avez pas besoin de tous les supports possibles. Vous avez besoin d’une promesse claire, d’une identité utilisable et des bons outils pour présenter ce que vous lancez.",
    category: "Guide", datePublished: date, dateModified: date,
    keywords: ["branding startup", "identité startup", "kit de marque lancement"], about: ["Lancement de marque", "Branding de startup"],
    essentials: ["Expliquez le problème, le public et la solution avant de chercher un style.", "Priorisez les supports nécessaires à vos premiers échanges réels.", "Construisez un socle stable et des gabarits que votre équipe sait utiliser."],
    cover: cover("startup-branding", "Un kit de lancement monochrome réunissant présentation, papeterie et écran avec un signe commun."), ogImage: "/journal/images/startup-branding.webp",
    sections: [
      { id: "promesse", title: "Avant le logo : une offre que l’on peut expliquer", paragraphs: [
        "Une jeune entreprise peut avoir un produit complexe et un récit simple. Qui rencontre le problème ? Que fait votre solution ? Qu’est-ce qui change pour cette personne ? Écrivez une première réponse en termes concrets, sans empiler les fonctionnalités ni les mots de votre secteur.",
        "Séparez ce qui existe, ce qui est en test et ce qui relève de la feuille de route. La marque peut exprimer une ambition, mais le site et la présentation doivent permettre de comprendre ce qui est disponible aujourd’hui. Une promesse trop large oblige ensuite chaque support à corriger les attentes.",
        "Rassemblez les éléments de preuve autorisés : produit utilisable, démonstration, témoignage validé, équipe, méthode ou premiers retours avec leur contexte. Si vous n’avez pas encore de références, montrez clairement le fonctionnement et l’état du projet. N’inventez pas de clients pour remplir une section."
      ] },
      { id: "kit", title: "Le kit de lancement part de vos premiers usages", table: { caption: "Choisir les livrables d’un lancement de startup", head: ["Usage", "Support à prévoir", "Décision préalable"], rows: [
        ["Présenter l’activité", "Une page claire ou un site centré sur l’offre.", "Public, promesse et action suivante."],
        ["Conduire un échange", "Une présentation courte et un exemple du produit.", "Questions du public et niveau de détail utile."],
        ["Être reconnu", "Identité, règles et quelques applications testées.", "Personnalité et contraintes des formats."],
        ["Publier régulièrement", "Quelques gabarits et une méthode de reprise.", "Canaux réellement utilisés et responsable."],
        ["Expliquer un produit", "Une démonstration ou un scénario visuel.", "Un problème, une action et un résultat observable."]
      ] }, paragraphs: ["Le kit dépend du lancement. Une entreprise qui présente un service lors de rendez-vous n’a pas nécessairement les mêmes supports qu’un produit vendu en ligne. Priorisez selon les situations prévues, plutôt que selon une liste standard de livrables de marque."] },
      { id: "socle", title: "Une identité assez précise pour être reprise", paragraphs: [
        "Un système de départ doit préciser le signe, les typographies, la palette, les compositions et les usages d’images. Il doit aussi montrer comment ces choix s’appliquent aux supports prioritaires. La cohérence apparaît quand plusieurs personnes produisent avec les mêmes règles, pas seulement quand un premier poster est réussi.",
        "Prévoyez des gabarits dans les outils que l’équipe utilise réellement. Une présentation modifiable et quelques exemples de titres peuvent être plus utiles au lancement qu’un document volumineux que personne ne consulte. Les fichiers doivent être rangés et leurs licences connues.",
        "Gardez une marge pour les évolutions normales du produit. Il est possible d’étendre des pages ou des supports sans changer le signe à chaque nouvelle fonctionnalité. Le socle visuel doit exprimer l’entreprise au bon niveau, sans se limiter à une fonctionnalité susceptible d’évoluer rapidement."
      ], links: [{ href: "/journal/identite-visuelle-contenu", label: "Ce que l’identité doit contenir", description: "Pour préparer un système utilisable par l’équipe." }] },
      { id: "ordre", title: "Prioriser en trois phases", steps: [
        { title: "Avant les premiers échanges", text: "Clarifier le récit, réunir les preuves disponibles et construire les supports indispensables pour expliquer le projet. Vérifier qu’ils disent tous la même chose." },
        { title: "Avant le lancement public", text: "Tester le site, la prise de contact, les présentations et les fichiers de diffusion. Désigner qui valide, publie et corrige." },
        { title: "Après les premiers retours", text: "Observer les incompréhensions et les supports réellement demandés. Étendre le kit selon ces besoins, sans tout refaire sur la base d’un avis isolé." }
      ], example: { title: "Exemple fictif : un logiciel pour les équipes de terrain", text: "Une page d’offre, une démonstration d’un scénario réel et une présentation peuvent constituer un premier ensemble. Un catalogue complet de tous les cas d’usage peut attendre que les premiers échanges montrent lesquels méritent une page dédiée." } },
      { id: "pieges", title: "Ce qui peut attendre, ce qui doit être vérifié", paragraphs: [
        "Les supports sans usage défini peuvent attendre : collection de goodies, multiples déclinaisons de campagne ou bibliothèque de pages destinées à des publics encore hypothétiques. En revanche, la clarté de l’offre, le parcours principal et les fichiers exploitables ne devraient pas être reportés à une phase vague.",
        "Vérifiez les éléments qui conditionnent la diffusion : nom et disponibilité des domaines, droits sur les images, licences, accès aux outils et validation des affirmations publiques. Le travail de design ne remplace pas les vérifications juridiques ou sectorielles nécessaires à votre projet.",
        "Enfin, choisissez un responsable du kit. Une startup peut produire vite tout en gardant une seule version des fichiers, des règles et des messages. Cette organisation réduit les écarts entre une présentation commerciale, le site et les supports publiés."
      ], diagram: { caption: "Le socle du lancement", stages: [ { title: "Promesse", text: "Un public et un problème." }, { title: "Preuve", text: "Ce qui existe et se montre." }, { title: "Système", text: "Les règles de marque." }, { title: "Usage", text: "Les supports du lancement." } ] }, links: [{ href: "/accompagnements#brand-digital", label: "Un lancement Brand × Digital", description: "Coordonner identité, contenu et site dans une même mission." }] }
    ], tool: { mode: "scope", title: "Composez votre kit de lancement", intro: "Sélectionnez les situations prévues au lancement. La liste produite vous aide à cadrer des livrables utiles.", items: [
      { id: "site", label: "Présenter l’offre sur le web", detail: "Prévoir une page ou un site, sa matière réelle et une action principale testable." }, { id: "pitch", label: "Présenter le projet en rendez-vous", detail: "Prévoir un récit court, une présentation modifiable et les preuves disponibles." }, { id: "demo", label: "Montrer le fonctionnement du produit", detail: "Choisir un scénario réel et prévoir une démonstration claire." }, { id: "social", label: "Publier sur des canaux identifiés", detail: "Lister les formats nécessaires et créer des gabarits adaptés à l’équipe." }, { id: "print", label: "Participer à un événement physique", detail: "Prévoir uniquement les supports nécessaires, avec leurs contraintes d’impression." }, { id: "equipe", label: "Permettre à plusieurs personnes de produire", detail: "Préparer règles, fichiers et session de transmission pour garder la cohérence." }
    ] }, faqs: [
      { question: "Peut-on lancer sans une charte très complète ?", answer: "Oui, avec un socle clair et des applications testées. Le niveau de documentation doit permettre à votre équipe de produire les premiers supports ; il pourra s’étendre avec les usages." },
      { question: "Faut-il un grand site dès le lancement ?", answer: "Pas nécessairement. Une version centrée sur une offre et une action principale peut convenir. Elle doit expliquer ce qui existe, montrer les preuves disponibles et permettre le parcours attendu." },
      { question: "La présentation et le site peuvent-ils reprendre le même récit ?", answer: "Oui, avec une hiérarchie adaptée à chaque usage. Le site doit pouvoir se comprendre sans présentateur ; le support de rendez-vous peut accompagner une explication orale." },
      { question: "Comment montrer sa crédibilité sans références clients ?", answer: "Montrez l’équipe, une démonstration, la méthode ou l’état réel du produit. Distinguez clairement les concepts, les tests et les réalisations. Ne présentez pas une mise en scène fictive comme une mission client." },
      { question: "Quand faire évoluer la marque après le lancement ?", answer: "Quand un problème récurrent ou une évolution réelle de l’offre le justifie. Les retours peuvent conduire à améliorer les textes ou les supports sans remettre en cause toute l’identité." }
    ], relatedServices: ["brand", "web", "motion-design"], relatedArticles: ["identite-marque-site-web-ordre", "demo-saas-scenario", "prix-identite-visuelle"],
    cta: { title: "Construisons les bons supports pour votre lancement.", text: "Présentez votre offre, son état actuel et les premiers usages prévus. Nous cadrerons le kit utile.", label: "Préparer mon lancement", href: "/contact?offer=brand-digital" }
  },
  {
    slug: "direction-artistique-campagne-coherence",
    title: "Direction artistique de campagne : garder la même marque sur tous les supports",
    metaTitle: "Direction artistique de campagne : cohérence et formats",
    description: "Du concept aux formats web, print, motion et vidéo : organiser la direction artistique d’une campagne avec règles communes, variantes et validations.",
    excerpt: "La cohérence ne consiste pas à recopier le même visuel partout. Elle vient d’un concept, de règles communes et d’adaptations qui respectent le rôle de chaque support.",
    category: "Méthode", datePublished: date, dateModified: date,
    keywords: ["direction artistique campagne", "cohérence marque supports", "concept créatif campagne"], about: ["Direction artistique", "Campagne créative"],
    essentials: ["Le concept doit pouvoir se formuler avant d’être décliné.", "Distinguez les éléments invariants des adaptations propres à chaque format.", "Validez un ensemble de supports représentatifs avant la production complète."],
    cover: cover("campagne-direction-artistique", "Une même sculpture géométrique présentée dans trois compositions de campagne, verticale, horizontale et carrée."), ogImage: "/journal/images/campagne-direction-artistique.webp",
    sections: [
      { id: "concept", title: "Une campagne commence par une idée claire", paragraphs: [
        "Une direction artistique donne une forme à un message. Avant de choisir les images, définissez ce que la campagne doit faire comprendre, à qui elle s’adresse et dans quel contexte elle sera vue. Le lancement d’un produit, l’annonce d’une nouvelle offre et la présentation d’une marque ne demandent pas le même récit.",
        "Formulez le concept en une phrase et décrivez les moyens visuels qui le portent. Cette phrase doit permettre de décider si une nouvelle proposition appartient à la campagne. Un dossier d’inspirations montre un goût ; il ne remplace pas la décision sur ce que les images doivent exprimer.",
        "Le concept doit aussi rester compatible avec la marque. Identifiez les codes déjà établis et les marges de liberté de la campagne. Une variation de ton ou d’image peut être utile sans rendre l’entreprise méconnaissable à chaque nouvelle prise de parole."
      ] },
      { id: "invariants", title: "Fixer les invariants, laisser respirer les formats", table: { caption: "Règles communes et adaptations d’une campagne", head: ["À garder commun", "À adapter", "À vérifier"], rows: [
        ["Message principal", "Longueur et niveau de détail.", "La promesse reste compréhensible dans chaque version."],
        ["Langage typographique", "Taille, nombre de lignes, hiérarchie.", "Les titres restent lisibles dans le format de diffusion."],
        ["Traitement d’image", "Cadrage, placement, profondeur.", "Le sujet utile ne disparaît pas au recadrage."],
        ["Palette et motif", "Proportions et rôle dans la composition.", "Les éléments distinctifs restent présents sans saturer le support."],
        ["Rythme de marque", "Durée et séquence si le support bouge.", "Le mouvement sert la compréhension du message."]
      ] }, paragraphs: ["Un poster, une animation et une page n’ont pas la même surface ni le même temps de lecture. Produire une seule image puis la recadrer mécaniquement ne garantit pas la cohérence. Il faut concevoir les variantes dès la direction initiale."] },
      { id: "matrice", title: "Construire une matrice de diffusion avant la production", paragraphs: [
        "Listez chaque support avec son objectif, ses dimensions, son contenu, sa langue et son responsable. Distinguez les variantes de message des simples exports. Un changement de promesse ou de public peut demander une nouvelle composition, pas seulement un nouveau fichier.",
        "Pour les formats animés, précisez ce qui doit se comprendre sans le son, les sous-titres et les versions attendues. Pour l’impression, obtenez les contraintes du prestataire avant de préparer les fichiers. Pour le web, demandez les surfaces et les règles d’intégration à l’équipe qui publie.",
        "Indiquez aussi les dépendances : texte validé, produit photographié, modèle 3D, témoignage autorisé. Une matrice rend visibles les informations manquantes et permet de choisir l’ordre de production."
      ], links: [{ href: "/journal/motion-design-3d-ou-tournage-video", label: "Choisir entre motion, 3D et tournage", description: "Pour décider des moyens de production adaptés au message." }] },
      { id: "validation", title: "Valider une famille de supports, pas seulement le visuel phare", steps: [
        { title: "Valider l’idée et les règles", text: "Présenter le concept, les choix d’image et les invariants. Vérifier leur cohérence avec le message et la marque." },
        { title: "Tester les formats difficiles", text: "Inclure un petit format, une composition verticale et un usage animé si nécessaire. Identifier ce qui doit être adapté avant la déclinaison complète." },
        { title: "Produire les variantes", text: "Travailler depuis les règles validées, avec une nomenclature de fichiers et un tableau de suivi." },
        { title: "Contrôler les fichiers de diffusion", text: "Vérifier texte, cadrage, lisibilité, droits, versions, sous-titres et contraintes techniques avant publication." }
      ], example: { title: "Exemple fictif : une campagne de lancement produit", text: "Le concept peut reposer sur une matière et un geste. Le poster montre le geste dans une composition forte ; le film en révèle le mouvement ; la page apporte le contexte. Les supports racontent la même idée avec des niveaux d’information différents." } },
      { id: "pilotage", title: "Faire travailler plusieurs spécialistes dans la même direction", paragraphs: [
        "Donnez à chaque intervenant les mêmes références validées, les règles et la matrice. Précisez qui arbitre les adaptations. Un photographe, un motion designer et un développeur peuvent proposer des solutions différentes au même problème ; la direction artistique doit maintenir l’intention commune.",
        "Consolidez les retours par étape. Un changement de concept après validation des images n’a pas le même impact qu’un ajustement de taille de titre. Signalez ces changements et arbitrez le périmètre plutôt que de laisser chaque production repartir séparément.",
        "Après la campagne, rangez les sources autorisées, les exports et les règles utiles. Certaines décisions pourront nourrir les prochaines prises de parole de la marque. Une campagne devient alors un ensemble réutilisable, dans les limites des droits prévus."
      ], diagram: { caption: "Du concept à la diffusion", stages: [ { title: "Idée", text: "Message et intention." }, { title: "Règles", text: "Codes communs." }, { title: "Variantes", text: "Usages et formats." }, { title: "Contrôle", text: "Fichiers prêts à diffuser." } ] }, links: [{ href: "/accompagnements#creative-campaign", label: "Cadrer une Creative Campaign", description: "Un accompagnement pour coordonner concept, production et applications." }] }
    ], tool: { mode: "checklist", title: "Votre campagne est-elle prête à décliner ?", intro: "Cochez les éléments validés. Les points restants deviennent les sujets à résoudre avant la production.", items: [
      { id: "message", label: "Message, public et concept validés", detail: "Écrire l’idée commune et ce que le public doit comprendre." }, { id: "codes", label: "Codes invariants définis", detail: "Fixer typographie, traitement d’image, palette et rôle des signes de marque." }, { id: "formats", label: "Matrice de formats complète", detail: "Lister supports, objectifs, langues, textes, dimensions et responsables." }, { id: "tests", label: "Formats difficiles testés", detail: "Vérifier au moins les usages qui demandent de vrais changements de composition." }, { id: "matiere", label: "Matière et droits disponibles", detail: "Confirmer textes, images, musiques et autorisations nécessaires." }, { id: "exports", label: "Contrôle des exports organisé", detail: "Identifier le responsable de la vérification avant diffusion." }
    ] }, faqs: [
      { question: "Quelle différence entre direction artistique et production graphique ?", answer: "La direction artistique définit l’intention et les règles visuelles. La production applique et adapte ces décisions aux supports. Les deux peuvent être réalisés dans la même mission, avec des validations distinctes." },
      { question: "Faut-il le même visuel sur tous les supports ?", answer: "Pas nécessairement. La reconnaissance vient de codes communs et d’un message cohérent. Les cadrages, les compositions et les niveaux d’information peuvent varier selon l’usage." },
      { question: "Quand faut-il fournir la liste des formats ?", answer: "Dès le cadrage, autant que possible. Les formats difficiles doivent être testés avant de valider la direction complète ; une liste tardive peut imposer de reprendre les compositions." },
      { question: "Une campagne doit-elle modifier la charte de marque ?", answer: "Pas automatiquement. Elle peut utiliser une marge créative temporaire tout en gardant les repères de marque. Si de nouvelles règles deviennent permanentes, documentez-les dans le système commun." },
      { question: "Le studio peut-il coordonner motion, 3D et vidéo ?", answer: "Le périmètre est défini selon le projet. Précisez le message, la diffusion et les moyens de production envisagés ; la mission doit indiquer qui réalise chaque partie et qui valide la cohérence." }
    ], relatedServices: ["direction-artistique", "graphisme", "motion-design", "realisation-video"], relatedArticles: ["motion-design-3d-ou-tournage-video", "rendu-3d-fichiers-validations", "accompagnement-creatif-mensuel-ou-ponctuel"],
    cta: { title: "Une idée forte, des supports cohérents.", text: "Présentez le message et les formats prévus. Nous cadrerons la direction et l’organisation de production.", label: "Parler de ma campagne", href: "/contact?offer=creative-campaign" }
  },
  {
    slug: "demo-saas-scenario",
    title: "Vidéo de démonstration SaaS : montrer le produit sans lister ses fonctionnalités",
    metaTitle: "Vidéo démo SaaS : construire un scénario clair",
    description: "Écrire une vidéo de démonstration SaaS autour d’un problème, d’une action et d’un résultat visible. Script, storyboard interactif, interface et validation.",
    excerpt: "Une bonne démo aide une personne à comprendre ce qu’elle peut faire avec votre produit. Commencez par une situation, montrez l’action utile et rendez son résultat visible.",
    category: "Méthode", datePublished: date, dateModified: date,
    keywords: ["vidéo démonstration SaaS", "vidéo démo logiciel", "script vidéo SaaS", "motion design SaaS"], about: ["Démonstration produit", "Motion design"],
    essentials: ["Une démo répond à un scénario d’usage précis plutôt qu’à toutes les fonctionnalités.", "Le parcours montré doit correspondre à un produit disponible ou être explicitement identifié comme concept.", "Validez script et storyboard avant la finition de l’animation."],
    cover: cover("demo-saas", "Trois écrans logiciels conceptuels monochromes reliés pour représenter un scénario de démonstration."), ogImage: "/journal/images/demo-saas.webp",
    sections: [
      { id: "scenario", title: "Choisir une situation que le public reconnaît", paragraphs: [
        "« Notre outil possède des tableaux, des filtres et des notifications » décrit des fonctions. « Une équipe doit repérer les demandes bloquées avant sa réunion » décrit une situation. La seconde phrase donne au spectateur une raison de regarder la démonstration et un critère pour comprendre la suite.",
        "Choisissez un public et une tâche. Une vidéo d’accueil, une démonstration commerciale et un tutoriel n’ont pas le même rôle. La première peut expliquer rapidement le principe ; le second peut montrer un parcours ; le troisième doit aider à reproduire une action. Ne demandez pas à une seule vidéo de remplacer tous ces usages.",
        "Repérez la question qui empêche le public de comprendre le produit. Est-ce l’entrée des données, la collaboration, le résultat ou la prise en main ? Le scénario doit répondre à cette question avec une séquence visible, sans réclamer une connaissance préalable de tous les menus."
      ] },
      { id: "structure", title: "Le récit : problème, action, résultat", steps: [
        { title: "Montrer le contexte", text: "Présenter la tâche et ce qui la rend difficile. Utiliser une situation concrète, sans dramatisation artificielle ni chiffre non vérifié." },
        { title: "Suivre l’action utile", text: "Montrer la manipulation qui résout le problème, avec une hiérarchie visuelle lisible. Écarter les clics qui n’apportent rien à la compréhension." },
        { title: "Rendre le résultat observable", text: "Montrer ce qui a changé à l’écran : document créé, demande assignée ou information organisée. Ne pas transformer ce résultat en promesse de performance non mesurée." },
        { title: "Proposer une suite cohérente", text: "Diriger vers un essai, un rendez-vous ou un tutoriel selon l’usage de la vidéo. L’appel à l’action doit correspondre au niveau d’information donné." }
      ], example: { title: "Exemple fictif : suivi de demandes", text: "Problème : plusieurs demandes restent sans responsable. Action : l’utilisateur filtre les demandes ouvertes et les assigne depuis une vue partagée. Résultat : chaque demande affichée possède un responsable. Cette scène montre une conséquence du produit, sans annoncer un gain de temps non démontré." } },
      { id: "interface", title: "Rester fidèle au produit en rendant l’interface lisible", paragraphs: [
        "Une capture réelle peut servir de base. Une reconstruction animée permet parfois de clarifier le regard et de montrer les étapes sans bruit visuel. Dans les deux cas, vérifiez que les noms, l’ordre des actions et les résultats correspondent au produit présenté. Une simplification graphique ne doit pas inventer une capacité.",
        "Préparez un environnement de démonstration avec des données fictives cohérentes. Évitez les comptes réels, les informations personnelles et les contenus confidentiels. Préférez un petit jeu de données compréhensible à un écran vide ou à une accumulation de lignes illisibles.",
        "La lisibilité se juge dans le contexte de diffusion : petit lecteur sur une page, téléphone ou présentation projetée. Le texte le plus important doit être lisible à la taille réelle. Un zoom peut guider le regard, mais un mouvement permanent peut rendre l’action plus difficile à suivre."
      ] },
      { id: "formats", title: "Préparer les formats et l’accès au contenu", table: { caption: "Différencier les usages d’une vidéo produit", head: ["Usage", "Ce qui doit être compris", "À prévoir"], rows: [
        ["Page d’offre", "Principe du produit et exemple d’usage.", "Affiche, lecteur, sous-titres et texte d’accompagnement."],
        ["Rendez-vous", "Parcours et réponses aux objections du public.", "Version adaptée à la présentation et possibilité de s’arrêter."],
        ["Tutoriel", "Action reproductible dans le produit.", "Étapes exactes, version de l’interface et support textuel."],
        ["Extrait court", "Une seule idée ou un moment utile.", "Composition et textes adaptés au format, pas seulement recadrés."]
      ] }, paragraphs: ["Prévoyez les sous-titres et, selon le contenu, une transcription ou une description des informations visuelles utiles. Le W3C détaille ces besoins. Des sous-titres seuls ne remplacent pas systématiquement tous les moyens nécessaires pour rendre une vidéo accessible."] },
      { id: "validation", title: "Valider dans l’ordre qui évite de refaire l’animation", paragraphs: [
        "Commencez par le scénario et le texte. Faites confirmer le parcours par une personne qui connaît le produit et le message par une personne qui connaît le public. Passez ensuite au storyboard : chaque plan doit avoir une intention, une matière disponible et un résultat attendu.",
        "Validez une séquence représentative pour le style, puis l’animation complète pour le rythme et la compréhension. Gardez une vérification finale des captures et des termes avant l’export. Si le produit change, décidez ce qui doit être mis à jour plutôt que de laisser une démonstration obsolète en ligne.",
        "Préparez la reprise : fichiers convenus, versions, sous-titres et liste des éléments sensibles aux évolutions du logiciel. Le format doit être défini par le scénario et les contraintes de diffusion, pas par une durée universelle présentée comme idéale."
      ], links: [{ href: "/journal/motion-design-3d-ou-tournage-video", label: "Quand choisir le motion design ?", description: "Pour distinguer l’explication graphique, la 3D et les images tournées." }, { href: "/motion-design", label: "Le motion design chez 42studio", description: "Explorer le cadre d’une production animée pour votre produit." }] }
    ], tool: { mode: "storyboard", title: "Écrivez votre première scène de démo", intro: "Décrivez la situation, l’action et le résultat. L’aperçu se construit avec vos mots ; vous pouvez télécharger ce brouillon pour le reprendre avec votre équipe.", items: [
      { id: "probleme", label: "Quel problème rencontre votre utilisateur ?", detail: "Exemple : des demandes restent sans responsable avant la réunion." }, { id: "action", label: "Quelle action fait-il dans le produit ?", detail: "Exemple : il filtre les demandes et les assigne dans une vue partagée." }, { id: "resultat", label: "Quel résultat peut-on montrer à l’écran ?", detail: "Exemple : chaque demande possède désormais un responsable visible." }
    ] }, faqs: [
      { question: "Quelle durée choisir pour une démo SaaS ?", answer: "La durée dépend du scénario, du public et du support. Écrivez la tâche utile, puis ajustez le rythme et le niveau de détail. Une vidéo courte et un tutoriel complet peuvent répondre à des besoins différents." },
      { question: "Faut-il filmer l’interface ou la reconstruire ?", answer: "Les deux sont possibles. Une capture montre directement le produit ; une reconstruction peut guider la lecture. Dans tous les cas, validez la fidélité des actions et du résultat à la version présentée." },
      { question: "Peut-on montrer une fonctionnalité prévue mais non disponible ?", answer: "Seulement en l’identifiant clairement comme concept ou évolution prévue, avec un message exact sur son état. Une vidéo de démonstration ne doit pas faire passer un scénario fictif pour une capacité déjà livrée." },
      { question: "La voix off est-elle indispensable ?", answer: "Non. Le scénario peut fonctionner avec une voix, des textes ou une combinaison. Décidez selon la diffusion et prévoyez l’accès aux informations importantes pour les personnes qui ne peuvent pas entendre ou voir la vidéo." },
      { question: "Quels éléments fournir au studio ?", answer: "Le public, le scénario, un accès de démonstration ou des captures autorisées, les règles de marque, les données fictives et les formats attendus. N’envoyez pas de données clients ou de secrets dans les captures." }
    ], sources: [{ title: "W3C : préparer l’accessibilité des médias", href: "https://www.w3.org/WAI/media/av/planning/", note: "Pour anticiper sous-titres, transcription et description selon la vidéo." }],
    relatedServices: ["motion-design", "realisation-video"], relatedArticles: ["motion-design-3d-ou-tournage-video", "branding-startup-lancement", "brief-creatif-modele"],
    cta: { title: "Montrons ce que votre produit permet de faire.", text: "Envoyez le scénario, l’état de l’interface et le contexte de diffusion. Nous cadrerons la démonstration.", label: "Parler de ma démo SaaS", href: "/contact?type=motion-design" }
  },
  {
    slug: "rendu-3d-fichiers-validations",
    title: "Rendu 3D de produit : quels fichiers fournir et quelles étapes valider ?",
    metaTitle: "Rendu 3D produit : fichiers, brief et validations",
    description: "Préparer un rendu 3D de produit : géométrie, dimensions, matières, textures, cadrages et exports. Les étapes à valider avant le rendu final.",
    excerpt: "Un modèle 3D ne contient pas toujours tout ce qu’il faut pour produire une bonne image. Voici la matière à réunir et les validations qui évitent les reprises tardives.",
    category: "Guide", datePublished: date, dateModified: date,
    keywords: ["rendu 3D produit", "fichiers rendu 3D", "brief packshot 3D", "validation animation 3D"], about: ["Visualisation 3D", "Production d’images produit"],
    essentials: ["Confirmez l’échelle, la version et les pièces du modèle avant de travailler son apparence.", "Réunissez des références de matières et les fichiers graphiques utilisés sur le produit.", "Validez forme, cadrage, matière et lumière avant les rendus et les exports finaux."],
    cover: cover("rendu-3d", "Flacon fictif noir présenté entre maillage filaire et rendu réaliste pour illustrer les étapes de la 3D."), ogImage: "/journal/images/rendu-3d.webp",
    sections: [
      { id: "usage", title: "Définir l’image attendue avant de transmettre les fichiers", paragraphs: [
        "Une image de fiche produit, un visuel de campagne et une animation explicative peuvent partir du même objet, mais ils ne demandent pas le même travail. Précisez ce que l’image doit montrer : forme, matière, détail, mouvement ou fonctionnement. Ajoutez les supports de diffusion et la liste des variantes.",
        "Distinguez le rendu descriptif du concept visuel. Si l’image doit représenter fidèlement un produit vendu, il faut valider son apparence avec des références fiables. Si le produit est encore en conception, signalez les éléments provisoires et le statut des images produites.",
        "Une référence d’ambiance ne remplace pas une référence technique. La première indique une lumière ou une composition ; la seconde confirme la géométrie, la couleur et la matière de votre produit. Fournissez les deux en expliquant leur rôle."
      ] },
      { id: "fichiers", title: "Le dossier technique à préparer", table: { caption: "Matière utile pour une production d’images 3D", head: ["Élément", "À fournir", "À confirmer"], rows: [
        ["Géométrie", "Modèle disponible, format, version, pièces séparées si nécessaire.", "Compatibilité avec le pipeline du studio ; import test avant engagement."],
        ["Dimensions", "Unités, mesures principales, plan ou dessin coté.", "Échelle et proportions, même si un modèle est fourni."],
        ["Matières", "Photos détaillées, références de finition, échantillons si disponibles.", "Rugosité, transparence, reflets et variations utiles."],
        ["Graphisme", "Étiquettes, logos, motifs et gabarits autorisés.", "Version validée, placement, taille et droits."],
        ["Diffusion", "Nombre de vues, variantes, résolutions, fonds et formats.", "Usages fixes, animés ou éventuellement interactifs."]
      ] }, paragraphs: ["Les formats tels qu’OBJ, FBX ou glTF font partie de nombreux échanges 3D, mais le choix dépend du logiciel et de ce qui doit être conservé. La documentation officielle de Blender donne des exemples de formats pris en charge. Leur présence dans cette liste ne garantit pas l’import fidèle de vos matériaux ou animations dans un autre pipeline."] },
      { id: "sans-modele", title: "Si vous n’avez pas encore de modèle 3D", paragraphs: [
        "Le studio peut envisager une modélisation à partir de plans, de mesures et de photographies. La précision nécessaire dépend de l’usage : une image stylisée et une représentation détaillée ne demandent pas le même niveau de reconstruction. Le temps de modélisation doit être identifié dans le périmètre.",
        "Réunissez des vues de face, de côté, de dessus et des détails de fabrication. Les mesures permettent de lever les ambiguïtés que les photographies laissent. Pour les matières délicates, un échantillon ou des prises de vue de référence peuvent aider à comprendre les reflets et la transparence.",
        "Précisez qui valide la forme. Une personne responsable du produit peut repérer une erreur que l’équipe de communication ne connaît pas. Une validation technique précoce évite de travailler l’éclairage d’un objet dont les proportions doivent encore changer."
      ] },
      { id: "validations", title: "Les validations à faire avant le rendu final", steps: [
        { title: "Forme et échelle", text: "Vérifier le modèle dans une présentation simple : proportions, pièces, angles, détails et état du produit." },
        { title: "Cadrage et composition", text: "Choisir les vues, le placement et les éventuels mouvements. Vérifier les contraintes des formats avant de finaliser l’apparence." },
        { title: "Matières et lumière", text: "Confirmer la finition, les reflets, les couleurs et la lisibilité des détails avec des références validées." },
        { title: "Rendu et livraison", text: "Contrôler la résolution, les variantes, les fonds, les exports et les usages convenus. Pour l’animation, vérifier aussi le rythme et l’ensemble de la séquence." }
      ], diagram: { caption: "La chaîne de validation 3D", stages: [ { title: "Modèle", text: "Forme et proportions." }, { title: "Caméra", text: "Vues et mouvement." }, { title: "Apparence", text: "Matières et lumière." }, { title: "Exports", text: "Images et variantes." } ] } },
      { id: "variantes", title: "Définir les variantes et les fichiers livrés", paragraphs: [
        "Une nouvelle couleur, un autre bouchon ou une nouvelle étiquette peut représenter une variante distincte. Listez ces combinaisons avant de chiffrer la production. Précisez celles qui doivent partager la même lumière et le même cadrage pour constituer une série cohérente.",
        "Un rendu fixe, une vidéo et un objet 3D interactif ne sont pas des livrables interchangeables. Un objet destiné au web peut nécessiter des contraintes spécifiques de poids, de géométrie et de matériaux. Demandez explicitement ce qui sera livré et ce qui sera testé sur le support final.",
        "Les sources et le modèle ne sont pas automatiquement inclus dans la livraison d’images. Définissez leur remise et leurs usages dans la mission. Prévoyez aussi la façon de reprendre la production si le produit ou son graphisme évolue."
      ], example: { title: "Exemple fictif : trois finitions d’un flacon", text: "Le modèle peut être commun, mais le verre transparent, le verre dépoli et un habillage opaque ne demandent pas le même réglage de matière. La liste des variantes permet de préparer la série, puis de valider chaque finition avec le responsable produit." }, links: [{ href: "/3d", label: "La production 3D chez 42studio", description: "Cadrer des images produit, une animation ou une série de visuels." }, { href: "/journal/motion-design-3d-ou-tournage-video", label: "Quand choisir la 3D plutôt qu’un tournage ?", description: "Comparer les moyens selon le produit et le message." }] }
    ], tool: { mode: "checklist", title: "Votre dossier produit est-il prêt pour la 3D ?", intro: "Cochez la matière confirmée. La liste restante vous aide à préparer les fichiers avec votre équipe produit.", items: [
      { id: "modele", label: "Modèle ou références de reconstruction disponibles", detail: "Indiquer format, version et état du modèle ; sinon préparer plans et photos." }, { id: "echelle", label: "Dimensions et unités confirmées", detail: "Fournir des mesures principales et la personne qui peut valider la forme." }, { id: "materiaux", label: "Matières et finitions documentées", detail: "Réunir des photos de détail, échantillons ou références validées." }, { id: "graphics", label: "Graphismes du produit validés", detail: "Transmettre les étiquettes et motifs à jour, avec leur placement." }, { id: "vues", label: "Vues et variantes listées", detail: "Définir cadrages, couleurs, accessoires et éventuels mouvements." }, { id: "livraison", label: "Usages et exports définis", detail: "Préciser formats, résolutions, fonds et besoin éventuel d’objet interactif." }
    ] }, faqs: [
      { question: "Quel format 3D faut-il envoyer ?", answer: "Demandez au studio le format adapté à son pipeline. Fournissez le format natif si disponible et précisez ce qui doit être conservé. Un import test peut vérifier la géométrie, l’échelle, les matériaux et les animations." },
      { question: "Peut-on produire un rendu à partir de photos ?", answer: "Oui selon la forme, les mesures disponibles et la précision attendue. Le studio doit évaluer la reconstruction et prévoir la modélisation dans le périmètre. Des plans ou des cotes aident à éviter les approximations." },
      { question: "Le modèle contient-il déjà les matières ?", answer: "Parfois, mais leur transfert dépend du format et des logiciels. Il faut vérifier l’import et comparer l’apparence aux références du produit. Une matière présente dans un fichier n’est pas nécessairement prête pour le rendu attendu." },
      { question: "Peut-on réutiliser le rendu pour un configurateur web ?", answer: "Une image seule ne fournit pas un objet interactif. Un configurateur demande des assets et une intégration adaptés au web. Si cet usage est prévu, cadrez-le séparément dès le début." },
      { question: "Quand demander une modification du produit ?", answer: "Le plus tôt possible, idéalement lors de la validation de forme. Un changement de géométrie ou d’étiquette après les rendus peut imposer une nouvelle production. Son traitement doit être explicite dans la mission." }
    ], sources: [{ title: "Blender : formats et échanges de production", href: "https://www.blender.org/features/pipeline/", note: "Exemples de formats d’échange. La compatibilité réelle reste à vérifier sur les fichiers du projet." }],
    relatedServices: ["3d", "direction-artistique"], relatedArticles: ["motion-design-3d-ou-tournage-video", "direction-artistique-campagne-coherence", "brief-creatif-modele"],
    cta: { title: "Préparons votre produit pour l’image.", text: "Présentez l’objet, les fichiers disponibles et les usages prévus. Nous définirons les vues et les étapes de validation.", label: "Cadrer mon projet 3D", href: "/contact?type=3d" }
  },
  {
    slug: "accompagnement-creatif-mensuel-ou-ponctuel",
    title: "Accompagnement créatif mensuel ou mission ponctuelle : comment choisir ?",
    metaTitle: "Accompagnement créatif mensuel ou mission ponctuelle ?",
    description: "Choisir entre projet ponctuel et suivi créatif mensuel selon la récurrence, la capacité, les priorités et les validations. Comparatif et questions de cadrage.",
    excerpt: "Un projet à livrer et un flux de créations à organiser demandent deux cadres différents. Voici comment choisir sans confondre suivi régulier et production illimitée.",
    category: "Guide", datePublished: date, dateModified: date,
    keywords: ["accompagnement créatif mensuel", "studio créatif abonnement", "creative partner", "mission créative ponctuelle"], about: ["Collaboration créative", "Organisation de production"],
    essentials: ["Une mission ponctuelle convient à un objectif délimité avec une livraison identifiable.", "Un suivi régulier convient à des besoins récurrents que votre équipe peut prioriser.", "Le cadre mensuel doit préciser capacité, types de demandes, validations et exclusions."],
    cover: cover("creative-partner", "Dossiers, feuilles et contact sheets organisés en séquence sur une table noire, rythme de production créative."), ogImage: "/journal/images/creative-partner.webp",
    sections: [
      { id: "nature", title: "Projet fini ou besoin récurrent ?", paragraphs: [
        "Une identité, un nouveau site ou une campagne de lancement peut se définir par des étapes et une livraison. Une mission ponctuelle permet de cadrer ce résultat, ses dépendances et son acceptation. Le travail peut durer plusieurs semaines sans devenir pour autant un accompagnement récurrent.",
        "Un suivi mensuel répond à un autre besoin : une entreprise doit régulièrement préparer des présentations, produire des visuels, faire évoluer des supports ou garder sa marque cohérente. Les demandes reviennent, mais leur ordre et leur volume peuvent varier. Il faut alors organiser une capacité et des priorités.",
        "La première question n’est donc pas « quel abonnement acheter ? » mais « quel travail revient, qui le prépare et comment décide-t-on de ce qui passe en premier ? ». Sans réponse, un cadre mensuel peut rester sous-utilisé ou créer des attentes impossibles à tenir."
      ] },
      { id: "comparatif", title: "Comparer les deux cadres de collaboration", table: { caption: "Projet ponctuel et accompagnement créatif régulier", head: ["Critère", "Mission ponctuelle", "Accompagnement régulier"], rows: [
        ["Objectif", "Un résultat défini, avec des étapes.", "Un flux de besoins créatifs à prioriser."],
        ["Périmètre", "Livrables et exclusions de la mission.", "Types de demandes et capacité convenus."],
        ["Pilotage", "Validations aux étapes du projet.", "File de demandes, arbitrages et points réguliers."],
        ["Matière", "Contenus nécessaires à chaque phase.", "Briefs et assets préparés au fil des demandes."],
        ["Fin ou reprise", "Livraison, acceptation et passation.", "Règles de renouvellement, de sortie et de transmission."]
      ] }, paragraphs: ["Aucun cadre n’est universellement plus économique. Comparez le travail nécessaire, le pilotage et les conditions de la proposition. Un forfait ne signifie pas que toutes les productions ou tous les volumes sont inclus."] },
      { id: "capacite", title: "Le mensuel doit préciser une capacité, pas promettre l’infini", paragraphs: [
        "Définissez les demandes recevables : adaptation graphique, présentation, évolution de pages ou direction artistique, par exemple. Précisez celles qui nécessitent un cadrage séparé : nouveau site complet, tournage, production 3D complexe ou changement de stratégie. La frontière dépend de la mission proposée.",
        "Décidez du nombre de sujets qui peuvent avancer en parallèle, des règles de priorité et des délais de prise en charge. Un délai ne peut être interprété sans connaître la complexité, la matière disponible et les validations attendues. Les urgences doivent avoir un mode de traitement explicite.",
        "Précisez enfin les retours, les demandes bloquées, les éventuels reports et les conditions d’arrêt. Ces règles rendent la collaboration utilisable. Elles évitent d’assimiler une liste de demandes possible à une capacité de réalisation illimitée."
      ] },
      { id: "preparation", title: "Ce que votre équipe doit pouvoir fournir", bullets: [
        "Un responsable qui prépare et priorise les demandes.", "Un brief court : objectif, public, support, matière et échéance.", "Des contenus et droits disponibles avant la production.", "Un circuit de validation qui regroupe les retours.", "Une liste des demandes en cours avec leur état et leur prochaine action."
      ], paragraphs: ["Si votre équipe manque de ces bases, commencez par les construire. Un suivi créatif peut aider à les organiser si cela fait partie du périmètre, mais il ne remplace pas les décisions que seule l’entreprise peut prendre. La disponibilité d’un studio ne suffit pas à débloquer un contenu jamais validé."] },
      { id: "combiner", title: "Les deux formats peuvent se succéder", paragraphs: [
        "Une première mission peut construire l’identité et les gabarits. Un accompagnement régulier peut ensuite faire vivre ce système sur les nouveaux supports. Cette succession permet de distinguer le travail de fond de la production courante, tout en gardant un interlocuteur qui connaît la marque.",
        "À l’inverse, un suivi peut révéler un projet plus large qui mérite un cadrage séparé. Si les petites adaptations ne résolvent plus le problème, définissez une mission dédiée plutôt que d’étendre indéfiniment la file mensuelle. Le choix de format doit pouvoir évoluer avec le besoin.",
        "Pour choisir, observez un échantillon représentatif de vos demandes passées ou prévues. Classez-les par fréquence, complexité, matière disponible et importance. Vous pourrez discuter d’une capacité réaliste et d’une organisation précise sans inventer un volume de production."
      ], example: { title: "Exemple fictif : une marque après sa refonte", text: "Elle dispose d’un système et publie régulièrement des présentations et des visuels. Un suivi peut couvrir leur production et la cohérence. Si elle prépare une campagne avec tournage et nouveaux concepts, cette campagne peut rester une mission distincte." }, diagram: { caption: "Choisir le cadre selon le besoin", stages: [ { title: "Inventorier", text: "Demandes réelles ou prévues." }, { title: "Distinguer", text: "Projet fini ou récurrence." }, { title: "Cadrer", text: "Capacité et validations." }, { title: "Réévaluer", text: "Le cadre suit le besoin." } ] }, links: [{ href: "/accompagnements#creative-partner", label: "L’accompagnement Creative Partner", description: "Explorer le cadre de suivi créatif mensuel proposé par 42studio." }] }
    ], tool: { mode: "comparison", title: "Quel cadre explorer pour votre besoin ?", intro: "Sélectionnez la situation dominante. La proposition finale dépendra du périmètre et de la capacité à convenir.", items: [
      { id: "projet", label: "Un projet défini à livrer", detail: "Explorez une mission ponctuelle : objectif, livrables, étapes, retours et passation. Un lancement important mérite son propre cadrage." },
      { id: "recurrence", label: "Des demandes fréquentes et priorisables", detail: "Explorez un suivi régulier : capacité, file de demandes, responsable, retours et exclusions. Préparez des exemples représentatifs avant l’échange." },
      { id: "mixte", label: "Un socle à construire puis des besoins réguliers", detail: "Envisagez une mission initiale pour les règles et gabarits, puis un suivi adapté. Séparez les responsabilités et les validations de ces deux phases." }
    ] }, faqs: [
      { question: "L’accompagnement mensuel inclut-il des demandes illimitées ?", answer: "Le périmètre et la capacité sont définis dans la proposition. Une liste de demandes n’équivaut pas à une production sans limite. Types de sujets, simultanéité, délais et exclusions doivent être explicites." },
      { question: "Peut-on commencer par une mission ponctuelle ?", answer: "Oui. Une mission peut construire l’identité, les gabarits ou un premier ensemble de supports. Le suivi régulier peut ensuite prendre le relais si vous avez des besoins récurrents." },
      { question: "Le mensuel est-il adapté à une seule grosse campagne ?", answer: "Une campagne définie avec concept, productions et date de livraison se cadre souvent comme un projet. Un suivi peut l’accompagner si cela correspond à sa capacité, mais il ne faut pas supposer que tout y est inclus." },
      { question: "Comment préparer le premier échange pour un suivi ?", answer: "Réunissez des exemples de demandes, leur fréquence, les supports, vos délais et votre circuit de validation. Indiquez qui peut prioriser les sujets et fournir la matière nécessaire." },
      { question: "Que se passe-t-il si un besoin dépasse le cadre ?", answer: "Il doit être signalé et arbitré : ajustement de priorité, nouveau périmètre ou mission distincte selon les conditions convenues. La collaboration doit rendre ces limites compréhensibles avant qu’une urgence apparaisse." }
    ], relatedServices: ["direction-artistique", "graphisme", "web"], relatedArticles: ["studio-agence-freelance", "direction-artistique-campagne-coherence", "brief-creatif-modele"],
    cta: { title: "Trouvons le rythme qui convient à votre marque.", text: "Présentez vos projets et les demandes qui reviennent. Nous cadrerons un projet ou un suivi avec des responsabilités claires.", label: "Parler de mon besoin récurrent", href: "/contact?offer=creative-partner" }
  }
];
