export type SeoKeywordCluster = "shopify" | "web" | "brand" | "local";

export type SeoKeywordPage = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  eyebrow: string;
  cluster: SeoKeywordCluster;
  keywords: string[];
  serviceName: string;
  proofPoints: string[];
  stats: Array<[string, string]>;
  sections: Array<{
    id: string;
    kicker: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    highlight?: string;
  }>;
  process: Array<{ step: string; title: string; text: string }>;
  deliverables: string[];
  whyUs: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
  caseSlugs?: string[];
  primaryCta: { label: string; href: string };
  ctaBand: string;
  showLocalBusiness?: boolean;
};

export const seoKeywordPages: SeoKeywordPage[] = [
  {
    slug: "agence-shopify-france",
    keyword: "agence Shopify France",
    title: "Agence Shopify France | 42studio, boutique premium",
    description:
      "42studio, agence Shopify France basée à Arras. Boutiques sur mesure, thèmes 2.0, CRO et branding intégré pour marques D2C. +60 marques accompagnées.",
    h1: "Agence Shopify France pour marques qui refusent le générique.",
    intro:
      "42studio conçoit des boutiques Shopify premium pour des marques françaises qui veulent un canal e-commerce à la hauteur de leur produit. Direction artistique, UX conversion, sections Liquid sur mesure et SEO technique dans le même studio, depuis Arras, partout en France.",
    eyebrow: "Shopify · E-commerce premium",
    cluster: "shopify",
    keywords: [
      "agence Shopify France",
      "agence e-commerce Shopify",
      "boutique Shopify sur mesure",
      "développement Shopify France",
      "thème Shopify custom",
      "Shopify Plus France"
    ],
    serviceName: "Agence Shopify France",
    proofPoints: ["+60 marques", "Shopify 2.0", "CRO intégré", "Arras · France"],
    stats: [
      ["+60", "Marques accompagnées"],
      ["100%", "Sur mesure"],
      ["24 h", "Réponse au brief"],
      ["Shopify", "Expertise certifiée"]
    ],
    sections: [
      {
        id: "positionnement",
        kicker: "Positionnement",
        title: "Une agence Shopify France orientée marque, pas template",
        paragraphs: [
          "Choisir une agence Shopify France, ce n'est pas seulement installer un thème et remplir des fiches produit. C'est structurer un canal de croissance cohérent avec votre positionnement, votre offre et vos ambitions commerciales. Chez 42studio, chaque boutique part d'un cadrage stratégique : qui achète, pourquoi maintenant, quelles preuves rassurent, quel parcours mène au panier.",
          "Nous refusons l'approche catalogue où toutes les boutiques se ressemblent. Nutripure, Nussa Cosmetics, Second Step ou Sublife Store illustrent une même exigence : un Shopify qui porte l'ADN de la marque, pas un habillage générique. Direction front-end, storytelling produit, merchandising et fondations SEO sont pensés ensemble dès le brief.",
          "Basés à Arras, nous accompagnons des marques dans toute la France et à l'international. La proximité locale quand vous en avez besoin, une exécution digitale sans compromis sur la qualité, où que vous soyez."
        ],
        bullets: [
          "Thèmes Shopify 2.0 entièrement customisés",
          "Sections Liquid paramétrables pour vos équipes marketing",
          "Shopify Markets et déploiement multi-pays",
          "Intégrations CRM, ERP et outils marketing"
        ],
        highlight:
          "Une agence Shopify France efficace aligne identité visuelle, parcours d'achat et performance technique. C'est exactement le modèle 42studio : brand, web et Shopify dans le même flux créatif."
      },
      {
        id: "expertise",
        kicker: "Expertise",
        title: "Liquid, UX e-commerce et CRO au cœur de chaque projet",
        paragraphs: [
          "Notre expertise Shopify couvre l'ensemble de la chaîne : audit UX, wireframes orientés conversion, design haute fidélité, développement Liquid, optimisation mobile, Core Web Vitals et itérations CRO post-lancement. Nous maîtrisons Shopify 2.0, les sections dynamiques, les metafields, les apps tierces et les contraintes SEO propres aux boutiques en ligne.",
          "Sur Nutripure, la boutique devient le centre névralgique d'une marque D2C en croissance : fiches produit éditorialisées, preuves scientifiques mises en avant, parcours subscription fluide. Sur Nussa Cosmetics, l'univers premium se traduit en expérience tactile, avec des animations subtiles et une hiérarchie visuelle qui guide l'achat sans agressivité commerciale.",
          "Nous intervenons aussi bien sur des lancements que sur des refontes de boutiques existantes, en préservant le trafic organique et en modernisant l'expérience sans repartir de zéro."
        ],
        bullets: [
          "Audit CRO home → collection → produit → checkout",
          "Optimisation mobile-first et temps de chargement",
          "A/B testing et itérations data-driven",
          "Formation équipes à la prise en main Shopify"
        ]
      },
      {
        id: "accompagnement",
        kicker: "Accompagnement",
        title: "Un interlocuteur senior du brief au déploiement",
        paragraphs: [
          "Travailler avec 42studio, c'est éviter les couches agence où le brief disparaît entre commercial, chef de projet junior et développeur externalisé. Vous échangez directement avec un profil senior qui comprend le branding, le code Liquid et les enjeux business de votre boutique.",
          "Notre méthode privilégie des livraisons itératives : maquettes validées, développement par sections, recette sur devices réels, puis déploiement progressif. Chaque étape est documentée pour que vos équipes marketing puissent faire évoluer la boutique en autonomie.",
          "Nous collaborons naturellement avec vos équipes internes, agences media, photographes ou logisticiens. Le Shopify n'est jamais isolé du reste de l'écosystème marque."
        ],
        highlight:
          "Réponse sous 24 h à chaque brief. Pas de devis standardisé : chaque projet Shopify est chiffré après un échange sur vos objectifs, votre stack et votre calendrier."
      },
      {
        id: "resultats",
        kicker: "Résultats",
        title: "Des boutiques Shopify pensées pour convertir et scaler",
        paragraphs: [
          "Le succès d'une agence Shopify France se mesure en conversion, panier moyen, taux de rebond mobile et facilité de mise à jour quotidienne. Nos boutiques sont construites pour performer dès le lancement, avec des fondations techniques solides qui supportent la croissance : trafic paid, SEO organique, expansion internationale.",
          "Studio Boucle Paris, Apoticari, Second Step : autant de projets où le Shopify accompagne une montée en gamme visuelle et commerciale. Chaque réalisation prouve qu'une boutique premium peut être rapide, indexable et simple à administrer.",
          "Au-delà du go-live, nous restons disponibles pour des optimisations CRO, des sections saisonnières ou des évolutions de charte. Votre boutique vit, nous l'accompagnons."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Cadrage stratégique",
        text: "Audit de l'existant, analyse concurrentielle, définition des objectifs conversion et mapping du parcours client idéal."
      },
      {
        step: "02",
        title: "Architecture UX",
        text: "Wireframes des pages clés, structure merchandising, hiérarchie des preuves et scénarios mobile-first."
      },
      {
        step: "03",
        title: "Design & direction artistique",
        text: "Maquettes haute fidélité alignées avec votre identité, composants réutilisables et guidelines d'animation."
      },
      {
        step: "04",
        title: "Développement Liquid",
        text: "Intégration Shopify 2.0, sections custom, metafields, apps tierces et recette multi-devices."
      },
      {
        step: "05",
        title: "Lancement & CRO",
        text: "Mise en production, redirections SEO, formation équipes et plan d'optimisation conversion post-lancement."
      }
    ],
    deliverables: [
      "Audit UX et recommandations CRO priorisées",
      "Wireframes des pages stratégiques (home, collection, produit, panier)",
      "Maquettes desktop et mobile haute fidélité",
      "Thème Shopify 2.0 sur mesure avec sections paramétrables",
      "Fiches produit éditorialisées et templates collection",
      "Intégration apps marketing et tracking analytics",
      "Documentation technique et guide d'administration",
      "Formation à la prise en main Shopify pour vos équipes"
    ],
    whyUs: [
      "Un seul studio pour brand, web et Shopify : cohérence visuelle garantie de la charte à la boutique.",
      "Profil senior unique : pas de junior caché, pas de sous-traitance opaque.",
      "+60 marques accompagnées, dont des références D2C reconnues en France.",
      "Basés à Arras, réactifs partout en France avec une exigence internationale."
    ],
    faqs: [
      {
        question: "Pourquoi choisir une agence Shopify France plutôt qu'un thème premium ?",
        answer:
          "Un thème premium impose sa structure, ses limitations et son esthétique générique. Une agence Shopify France comme 42studio construit une boutique autour de votre marque, votre merchandising et vos objectifs conversion. Le sur-mesure coûte plus au départ, mais évite les refontes prématurées et les compromis visuels qui freinent la croissance."
      },
      {
        question: "42studio intervient-elle uniquement à Arras ou dans toute la France ?",
        answer:
          "42studio est basée à Arras et accompagne des marques dans toute la France et à l'international. La majorité de nos projets Shopify se déroulent en remote avec des points réguliers en visio. Les clients locaux des Hauts-de-France bénéficient aussi de rencontres en présentiel quand c'est pertinent."
      },
      {
        question: "Quel budget prévoir pour une boutique Shopify sur mesure ?",
        answer:
          "Le budget dépend de la complexité : nombre de templates, intégrations tierces, volume de produits, multilingue, subscription. Comptez généralement entre 8 000 et 35 000 € HT pour un projet complet brand + Shopify chez 42studio. Nous chiffrons après un échange sur vos objectifs, sans devis automatique."
      },
      {
        question: "Pouvez-vous reprendre une boutique Shopify existante ?",
        answer:
          "Oui. Nous réalisons des refontes Shopify en préservant le SEO, les redirections 301 et l'historique de la boutique. L'audit initial identifie ce qui doit être conservé, modernisé ou reconstruit pour maximiser l'impact sans perdre le trafic organique."
      },
      {
        question: "Travaillez-vous avec Shopify Plus ?",
        answer:
          "Nous accompagnons des boutiques Shopify standard et Shopify Plus, notamment pour les marques en forte croissance ou avec des besoins checkout avancés. La stack Liquid et UX reste la même, avec une attention particulière aux workflows B2B, wholesale et international."
      },
      {
        question: "Combien de temps dure un projet agence Shopify France chez 42studio ?",
        answer:
          "Comptez 6 à 12 semaines pour un lancement complet, 4 à 8 semaines pour une refonte ciblée. Le calendrier dépend du volume de pages, de la disponibilité des contenus et des validations client. Nous livrons de manière itérative pour accélérer la mise en ligne des sections prioritaires."
      }
    ],
    related: [
      { label: "Expertise Shopify", href: "/shopify" },
      { label: "Refonte Shopify", href: "/refonte-shopify" },
      { label: "Branding e-commerce", href: "/branding-e-commerce" },
      { label: "Pilier agence Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Nos réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["nutripure", "nussa-cosmetics", "sublife-store"],
    primaryCta: { label: "Parler de votre boutique Shopify", href: "/contact" },
    ctaBand: "Votre marque mérite une boutique Shopify à sa mesure. Discutons de votre projet e-commerce."
  },
  {
    slug: "refonte-shopify",
    keyword: "refonte Shopify",
    title: "Refonte Shopify sans perdre trafic ni ADN",
    description:
      "Refonte Shopify par 42studio : audit UX, préservation du référencement, thème sur mesure et CRO. Moderniser la boutique sans repartir de zéro.",
    h1: "Refonte Shopify : moderniser votre boutique sans tout casser.",
    intro:
      "Une refonte Shopify réussie préserve votre trafic organique, clarifie le parcours d'achat et modernise l'image de marque sans repartir de zéro. 42studio audite, priorise et reconstruit section par section pour un impact visible dès les premières semaines.",
    eyebrow: "Shopify · Modernisation",
    cluster: "shopify",
    keywords: [
      "refonte Shopify",
      "refonte boutique Shopify",
      "migration thème Shopify",
      "modernisation e-commerce Shopify",
      "redesign Shopify",
      "refonte UX Shopify"
    ],
    serviceName: "Refonte Shopify",
    proofPoints: ["SEO préservé", "Audit CRO", "Itératif", "Liquid custom"],
    stats: [
      ["301", "Redirections gérées"],
      ["0", "Perte de trafic visée"],
      ["+40%", "Gain UX moyen"],
      ["2.0", "Shopify natif"]
    ],
    sections: [
      {
        id: "diagnostic",
        kicker: "Diagnostic",
        title: "Auditer avant de refondre : le piège des refontes précipitées",
        paragraphs: [
          "Beaucoup de refontes Shopify échouent parce qu'elles partent d'une envie esthétique sans diagnostic préalable. Taux de rebond mobile, pages produit qui ne convertissent pas, checkout friction, lenteur de chargement : autant de signaux que nous cartographions avant de toucher une ligne de code.",
          "Notre audit couvre trois axes : technique (thème, apps, Core Web Vitals), UX (parcours, preuves, merchandising) et SEO (URLs indexées, contenus structurés, maillage interne). Chaque recommandation est priorisée par impact business et effort de mise en œuvre.",
          "Sur Studio Boucle Paris, la refonte Shopify a permis de moderniser l'univers capillaire premium tout en conservant les pages qui généraient du trafic organique. Sur Nutripure, l'objectif était d'aligner la boutique avec une montée en gamme produit sans interrompre les ventes."
        ],
        bullets: [
          "Audit complet UX, CRO et SEO",
          "Cartographie des URLs et plan de redirections 301",
          "Inventaire apps et dépendances techniques",
          "Benchmark concurrentiel et best practices sectorielles"
        ],
        highlight:
          "Une refonte Shopify n'est pas une migration vers un nouveau thème. C'est une opportunité de corriger ce qui freine la conversion depuis des mois."
      },
      {
        id: "strategie",
        kicker: "Stratégie",
        title: "Refonte progressive ou refonte totale : choisir la bonne approche",
        paragraphs: [
          "Toutes les boutiques ne nécessitent pas une reconstruction complète. Parfois, restructurer la home, refondre les fiches produit et optimiser le checkout suffit à débloquer la croissance. Nous proposons des refontes ciblées quand le diagnostic le justifie, et des reconstructions complètes quand le thème actuel limite trop l'évolution.",
          "La refonte progressive limite les risques : sections livrées une par une, A/B testing possible, retours utilisateurs intégrés en cours de route. La refonte totale convient aux boutiques dont le thème est obsolète, non responsive ou impossible à maintenir.",
          "Dans les deux cas, nous planifions un calendrier de déploiement qui minimise l'impact sur les ventes en cours, avec des fenêtres de maintenance communiquées à l'avance."
        ]
      },
      {
        id: "execution",
        kicker: "Exécution",
        title: "Liquid sur mesure, sections modulaires, équipes autonomes",
        paragraphs: [
          "Chaque refonte Shopify aboutit à un thème 2.0 structuré en sections paramétrables. Vos équipes marketing peuvent modifier les blocs, lancer des campagnes saisonnières et tester de nouveaux merchandisings sans solliciter un développeur à chaque changement.",
          "Nous reconstruisons les templates clés : home, collection, produit, panier, pages éditoriales. Chaque template est pensé mobile-first, avec des animations subtiles qui renforcent la perception premium sans pénaliser la performance.",
          "Les intégrations existantes (Klaviyo, Recharge, Judge.me, ERP) sont reprises ou optimisées. Nous nettoyons les apps obsolètes qui alourdissent la boutique sans apporter de valeur."
        ],
        bullets: [
          "Templates home, collection, produit, panier refondus",
          "Sections Liquid réutilisables et documentées",
          "Optimisation images, lazy-loading et fonts",
          "Recette cross-browser et cross-device complète"
        ]
      },
      {
        id: "seo-cro",
        kicker: "SEO & CRO",
        title: "Préserver le SEO et booster la conversion en même temps",
        paragraphs: [
          "La refonte Shopify est le moment idéal pour renforcer le référencement naturel : balises title et meta optimisées, données structurées produit, fil d'Ariane, contenus éditoriaux indexables. Nous implémentons les redirections 301 avant le go-live et monitorons l'indexation post-déploiement.",
          "Côté conversion, nous retravaillons les preuves sociales, les appels à l'action, la hiérarchie des informations produit et la fluidité du checkout. Chaque modification est justifiée par un objectif mesurable : taux d'ajout au panier, abandon checkout, panier moyen.",
          "Post-lancement, nous proposons un plan d'itérations CRO sur 90 jours pour capitaliser sur les données réelles de la nouvelle boutique."
        ],
        highlight:
          "Objectif zéro perte de trafic organique. Nos refontes Shopify incluent systématiquement un plan de redirections et un suivi Search Console post-déploiement."
      }
    ],
    process: [
      {
        step: "01",
        title: "Audit complet",
        text: "Analyse UX, CRO, SEO, performance technique et inventaire des apps. Livrable : rapport priorisé avec quick wins et chantiers structurants."
      },
      {
        step: "02",
        title: "Architecture cible",
        text: "Wireframes des pages à refondre, plan de redirections URL et calendrier de déploiement par phases."
      },
      {
        step: "03",
        title: "Design refonte",
        text: "Maquettes alignées avec l'identité actuelle ou la nouvelle charte. Validation desktop et mobile avant développement."
      },
      {
        step: "04",
        title: "Développement & recette",
        text: "Intégration Liquid, migration contenus, tests multi-devices et préparation des redirections 301."
      },
      {
        step: "05",
        title: "Go-live & suivi",
        text: "Mise en production, monitoring SEO, formation équipes et plan d'optimisation CRO post-lancement."
      }
    ],
    deliverables: [
      "Rapport d'audit UX, CRO, SEO et performance",
      "Plan de redirections 301 et mapping URLs",
      "Wireframes des pages refondues",
      "Maquettes desktop et mobile validées",
      "Thème Shopify 2.0 reconstruit ou modernisé",
      "Migration contenus et metafields",
      "Recette cross-device et documentation",
      "Suivi SEO post-déploiement (30 jours)"
    ],
    whyUs: [
      "Expérience refonte sur des boutiques à fort trafic organique : Nutripure, Studio Boucle Paris.",
      "Approche SEO-first : aucune refonte sans plan de redirections et suivi indexation.",
      "Livraisons itératives pour limiter les risques et accélérer les gains CRO.",
      "Un interlocuteur senior qui comprend Liquid, UX et enjeux business."
    ],
    faqs: [
      {
        question: "Une refonte Shopify va-t-elle faire chuter mon référencement ?",
        answer:
          "Pas si elle est bien menée. 42studio cartographie toutes les URLs indexées, implémente les redirections 301 avant le go-live et monitorise Search Console après déploiement. Une refonte Shopify bien planifiée peut même améliorer le SEO grâce à une meilleure structure, des temps de chargement réduits et des contenus optimisés."
      },
      {
        question: "Combien de temps dure une refonte Shopify ?",
        answer:
          "Une refonte ciblée (home + fiches produit) prend 4 à 6 semaines. Une refonte complète avec rebranding prend 8 à 12 semaines. Le calendrier dépend du volume de pages, des intégrations tierces et de la disponibilité des contenus."
      },
      {
        question: "Puis-je garder mon thème actuel et améliorer seulement certaines pages ?",
        answer:
          "Oui, si le thème le permet techniquement. Nous évaluons la faisabilité lors de l'audit. Parfois, des sections custom suffisent. D'autres fois, le thème limite trop les évolutions et une reconstruction est plus rentable à moyen terme."
      },
      {
        question: "Que se passe-t-il pour mes abonnements et apps existantes ?",
        answer:
          "Nous auditons chaque app installée, identifions celles qui sont utiles, redondantes ou obsolètes. Les intégrations critiques (email, subscription, avis clients) sont reprises et testées sur la boutique refondue avant le go-live."
      },
      {
        question: "42studio peut-il refondre ma boutique pendant que je continue à vendre ?",
        answer:
          "Absolument. Nous travaillons sur un environnement de staging Shopify, puis basculons en production lors d'une fenêtre planifiée. Vos ventes ne sont pas interrompues pendant le développement."
      },
      {
        question: "Proposez-vous un accompagnement CRO après la refonte Shopify ?",
        answer:
          "Oui. Nous proposons des plans d'itérations CRO post-lancement : analyse des heatmaps, tests A/B sur les CTA, optimisation checkout et ajustements merchandising basés sur les données réelles de la nouvelle boutique."
      }
    ],
    related: [
      { label: "Expertise Shopify", href: "/shopify" },
      { label: "Agence Shopify France", href: "/agence-shopify-france" },
      { label: "Optimisation conversion", href: "/optimisation-shopify-conversion" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["studio-boucle-paris", "nutripure"],
    primaryCta: { label: "Auditer ma boutique Shopify", href: "/contact" },
    ctaBand: "Votre boutique mérite une refonte qui convertit mieux, pas seulement un nouveau look."
  },
  {
    slug: "creation-boutique-shopify",
    keyword: "création boutique Shopify",
    title: "Création boutique Shopify sur mesure | 42studio Arras",
    description:
      "Création boutique Shopify clé en main par 42studio. Lancement D2C, UX conversion, branding intégré et formation. Boutiques prêtes à vendre dès le jour 1.",
    h1: "Création boutique Shopify prête à convertir dès le jour 1.",
    intro:
      "Lancer une boutique Shopify, ce n'est pas remplir un template et attendre les ventes. 42studio structure votre lancement D2C de A à Z : positionnement, identité, architecture merchandising, fiches produit éditorialisées et parcours checkout optimisé.",
    eyebrow: "Shopify · Lancement",
    cluster: "shopify",
    keywords: [
      "création boutique Shopify",
      "lancer boutique Shopify",
      "boutique Shopify clé en main",
      "création e-commerce Shopify",
      "ouvrir boutique en ligne Shopify",
      "Shopify D2C France"
    ],
    serviceName: "Création boutique Shopify",
    proofPoints: ["Lancement D2C", "Brand intégré", "Mobile-first", "Formation incluse"],
    stats: [
      ["J1", "Prête à vendre"],
      ["100%", "Sur mesure"],
      ["Mobile", "First design"],
      ["SEO", "Intégré dès le départ"]
    ],
    sections: [
      {
        id: "lancement",
        kicker: "Lancement",
        title: "Structurer un lancement D2C qui ne ressemble à aucun autre",
        paragraphs: [
          "La création boutique Shopify chez 42studio commence par une question simple : pourquoi un client achèterait chez vous plutôt qu'ailleurs ? Cette réponse guide le positionnement, le ton éditorial, la direction artistique et l'architecture de la boutique.",
          "Nussa Cosmetics, Apoticari, Second Step : chaque lancement illustre une approche différente. Cosmétique premium, bien-être holistique, mode responsable. Le Shopify s'adapte au territoire de marque, jamais l'inverse.",
          "Nous pensons le lancement comme un système : boutique, contenus, emails de bienvenue, visuels social, fiches produit. Tout est cohérent dès le premier jour."
        ],
        bullets: [
          "Cadrage positionnement et personas acheteurs",
          "Architecture merchandising et collections",
          "Storytelling produit et preuves de crédibilité",
          "Setup technique : domaine, paiements, livraisons"
        ],
        highlight:
          "Une boutique Shopify bien lancée convertit dès la première semaine. Le secret : des fondations UX solides, pas un thème générique rempli à la va-vite."
      },
      {
        id: "fiches-produit",
        kicker: "Fiches produit",
        title: "Des fiches produit qui vendent, pas qui listent des specs",
        paragraphs: [
          "La fiche produit est le cœur de la conversion Shopify. Nous la structurons en blocs narratifs : promesse en une phrase, bénéfices émotionnels, preuves (avis, certifications, before/after), détails techniques accessibles, cross-sell intelligent.",
          "Chaque fiche est pensée mobile-first : le client scroll, comprend, ajoute au panier en moins de 30 secondes. Les visuels sont optimisés (WebP, lazy-loading), les vidéos produit intégrées nativement, les variantes clairement présentées.",
          "Nous créons des templates produit paramétrables : vos équipes dupliquent la structure pour chaque nouvelle référence sans repartir de zéro."
        ]
      },
      {
        id: "checkout",
        kicker: "Checkout",
        title: "Un parcours d'achat fluide du premier clic au paiement",
        paragraphs: [
          "Home, collections, fiches produit, panier, checkout : chaque étape est optimisée pour réduire la friction. Navigation intuitive, filtres pertinents, preuves sociales visibles, upsell discret, checkout Shopify natif ou custom selon vos besoins.",
          "Nous configurons les moyens de paiement (CB, Apple Pay, PayPal, Klarna), les règles de livraison, les seuils de livraison gratuite et les emails transactionnels. Rien n'est laissé au hasard.",
          "Le résultat : un parcours d'achat qui inspire confiance, même pour une marque inconnue du grand public."
        ],
        bullets: [
          "Panier drawer ou page panier optimisée",
          "Cross-sell et upsell contextuels",
          "Checkout Shopify natif ou personnalisé",
          "Emails transactionnels brandés"
        ]
      },
      {
        id: "autonomie",
        kicker: "Autonomie",
        title: "Former vos équipes pour piloter la boutique en autonomie",
        paragraphs: [
          "La création boutique Shopify inclut une formation à la prise en main : ajout de produits, gestion des collections, modification des sections, lancement de promotions, lecture des analytics. Vous repartez autonome, pas dépendant d'une agence pour chaque modification.",
          "Nous livrons une documentation claire, des vidéos de prise en main et restons disponibles pour les questions post-lancement. L'objectif : que votre boutique évolue avec votre activité.",
          "Pour les marques qui préfèrent un accompagnement continu, nous proposons aussi des forfaits de maintenance et d'optimisation CRO mensuelle."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Brief & positionnement",
        text: "Définition du territoire de marque, personas, concurrence et objectifs commerciaux du lancement."
      },
      {
        step: "02",
        title: "Identité & design",
        text: "Direction artistique, maquettes boutique complètes et validation des templates clés."
      },
      {
        step: "03",
        title: "Développement Shopify",
        text: "Intégration thème 2.0, sections custom, setup technique et import produits."
      },
      {
        step: "04",
        title: "Contenus & recette",
        text: "Rédaction fiches produit, intégration visuels, tests parcours complet et corrections."
      },
      {
        step: "05",
        title: "Lancement & formation",
        text: "Mise en ligne, configuration analytics, formation équipes et plan de croissance post-lancement."
      }
    ],
    deliverables: [
      "Plateforme de marque et direction artistique",
      "Maquettes boutique complètes (desktop + mobile)",
      "Thème Shopify 2.0 sur mesure",
      "Templates home, collection, produit, panier, pages éditoriales",
      "Setup technique : domaine, paiements, livraisons, taxes",
      "Import et structuration catalogue produits",
      "Configuration analytics et pixels tracking",
      "Formation et documentation administration Shopify"
    ],
    whyUs: [
      "Lancements D2C réussis : Nussa Cosmetics, Apoticari, Second Step, Sublife Store.",
      "Brand et Shopify dans le même studio : cohérence visuelle garantie.",
      "Boutiques mobile-first, rapides et SEO-ready dès le jour 1.",
      "Formation incluse : vous pilotez votre boutique en autonomie."
    ],
    faqs: [
      {
        question: "Combien coûte la création d'une boutique Shopify sur mesure ?",
        answer:
          "Le budget varie selon la complexité : branding inclus ou non, nombre de templates, volume produits, multilingue, subscription. Comptez entre 8 000 et 25 000 € HT pour un lancement complet chez 42studio. Nous chiffrons après un échange sur vos objectifs et votre calendrier."
      },
      {
        question: "Faut-il déjà avoir une identité visuelle pour lancer une boutique Shopify ?",
        answer:
          "Non. 42studio peut créer l'identité de marque et la boutique Shopify dans le même projet. C'est même notre spécialité : brand et e-commerce pensés ensemble, sans rupture entre la charte et la boutique live."
      },
      {
        question: "Combien de temps faut-il pour créer une boutique Shopify ?",
        answer:
          "Comptez 6 à 10 semaines pour un lancement complet avec branding. 4 à 6 semaines si l'identité existe déjà. Le calendrier dépend du volume de produits, des contenus disponibles et du rythme de validation."
      },
      {
        question: "Pouvez-vous importer mon catalogue depuis une autre plateforme ?",
        answer:
          "Oui. Nous migrons des catalogues depuis WooCommerce, PrestaShop, Wix, Squarespace ou fichiers CSV. L'import inclut produits, variantes, images, metafields et redirections SEO si vous aviez un site existant."
      },
      {
        question: "La création boutique Shopify inclut-elle le référencement ?",
        answer:
          "Oui. SEO technique intégré dès la structure : URLs propres, balises title et meta, données structurées produit, sitemap, robots.txt, contenus indexables. Le SEO éditorial (blog, guides) peut être ajouté en option."
      },
      {
        question: "Proposez-vous un accompagnement post-lancement pour la création boutique Shopify ?",
        answer:
          "Oui. Forfaits maintenance, optimisations CRO, sections saisonnières et évolutions de catalogue. La plupart de nos clients restent en relation après le lancement pour faire évoluer leur boutique avec leur croissance."
      }
    ],
    related: [
      { label: "Expertise Shopify", href: "/shopify" },
      { label: "Agence Shopify France", href: "/agence-shopify-france" },
      { label: "Branding e-commerce", href: "/branding-e-commerce" },
      { label: "Pilier agence Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["nussa-cosmetics", "apoticari", "second-step"],
    primaryCta: { label: "Lancer ma boutique Shopify", href: "/contact" },
    ctaBand: "Prêt à lancer votre boutique D2C ? Construisons ensemble un Shopify qui convertit."
  },
  {
    slug: "expert-shopify-freelance",
    keyword: "expert Shopify freelance",
    title: "Expert Shopify freelance, Liquid et exécution",
    description:
      "Expert Shopify freelance senior chez 42studio : Liquid sur mesure, refontes urgentes et sections custom. Interlocuteur unique, réponse sous 24 h.",
    h1: "Expert Shopify freelance : senior, direct, opérationnel.",
    intro:
      "Pas de junior caché derrière un compte agence. Chez 42studio, vous travaillez avec un expert Shopify freelance senior qui maîtrise Liquid, UX e-commerce, SEO technique et CRO. Idéal pour les refontes urgentes, les sections sur mesure et les projets où la réactivité compte.",
    eyebrow: "Shopify · Expert senior",
    cluster: "shopify",
    keywords: [
      "expert Shopify freelance",
      "développeur Shopify freelance",
      "freelance Shopify Liquid",
      "consultant Shopify France",
      "expert Shopify senior",
      "Shopify freelance Arras"
    ],
    serviceName: "Expert Shopify freelance",
    proofPoints: ["Senior direct", "Liquid expert", "Réactif", "Sans intermédiaire"],
    stats: [
      ["24 h", "Réponse garantie"],
      ["1", "Interlocuteur unique"],
      ["Liquid", "Expertise native"],
      ["+60", "Projets Shopify"]
    ],
    sections: [
      {
        id: "profil",
        kicker: "Profil",
        title: "Un expert Shopify freelance qui parle brand, UX et business",
        paragraphs: [
          "La plupart des profils Shopify freelance maîtrisent le code Liquid mais ignorent le branding, le CRO ou le SEO. Chez 42studio, l'expertise Shopify s'inscrit dans une culture design et stratégie : chaque section développée sert un objectif conversion ou de mémorisation de marque.",
          "Vous échangez directement avec le profil qui code, design et déploie. Pas de chef de projet intermédiaire, pas de traduction du brief, pas de délais allongés par des allers-retours inutiles.",
          "Cette approche convient aux marques qui ont déjà une direction artistique, aux agences qui cherchent un renfort senior, ou aux e-commerçants qui ont besoin d'une intervention rapide sur un point précis."
        ],
        bullets: [
          "Développement Liquid et Shopify 2.0",
          "Sections custom et templates sur mesure",
          "Intégrations apps tierces et APIs",
          "Audit CRO et recommandations actionnables"
        ],
        highlight:
          "Expert Shopify freelance ne veut pas dire bricolage. C'est un profil senior avec +60 projets e-commerce, capable de livrer du sur-mesure en autonomie."
      },
      {
        id: "missions",
        kicker: "Missions",
        title: "Refontes urgentes, sections custom, optimisations CRO",
        paragraphs: [
          "Nos missions freelance Shopify couvrent un spectre large : développement d'une section homepage pour une campagne saisonnière, refonte complète d'un template produit, migration thème, optimisation checkout, intégration subscription ou wholesale.",
          "Sur Studio Boucle Paris, l'intervention a porté sur la modernisation du parcours capillaire premium. Sur Nutripure, sur l'optimisation des fiches produit D2C et la structure subscription. Chaque mission est cadrée avec des livrables et un calendrier clairs.",
          "Nous pouvons intervenir en one-shot ou en régie mensuelle pour les marques qui ont besoin d'un expert Shopify disponible en continu."
        ]
      },
      {
        id: "collaboration",
        kicker: "Collaboration",
        title: "Intégration fluide avec vos équipes marketing et produit",
        paragraphs: [
          "L'expert Shopify freelance 42studio s'intègre naturellement dans vos workflows existants : Slack, Notion, Figma, Git. Nous livrons du code propre, commenté et documenté pour que votre équipe technique puisse reprendre le relais si nécessaire.",
          "Nous collaborons aussi avec des agences media, des photographes, des intégrateurs ERP. Le Shopify n'est jamais une île : nous synchronisons avec votre écosystème digital.",
          "Transparence totale sur le temps passé, les priorités et les blockers. Pas de surprise en fin de mission."
        ],
        bullets: [
          "Communication directe Slack, email ou visio",
          "Livraisons Git avec branches et PR documentées",
          "Documentation technique pour chaque section livrée",
          "Disponibilité régie ou forfait mission"
        ]
      },
      {
        id: "reactivite",
        kicker: "Réactivité",
        title: "Quand le délai compte, l'expertise senior fait la différence",
        paragraphs: [
          "Campagne qui se lance dans 10 jours, bug critique en production, section urgente pour un lancement presse : nos délais de réponse (24 h) et notre capacité d'exécution rapide sont un avantage compétitif pour les marques en mouvement.",
          "Le profil senior évite les allers-retours : le brief est compris du premier coup, les contraintes techniques anticipées, les livrables conformes dès la première itération.",
          "Pour les projets récurrents, nous proposons des créneaux réservés garantissant une disponibilité mensuelle."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Brief express",
        text: "Échange sur le besoin, les contraintes techniques, le calendrier et le budget. Réponse sous 24 h."
      },
      {
        step: "02",
        title: "Cadrage mission",
        text: "Périmètre précis, livrables listés, planning et devis forfaitaire ou régie."
      },
      {
        step: "03",
        title: "Exécution",
        text: "Développement Liquid, design si nécessaire, intégrations et tests sur staging."
      },
      {
        step: "04",
        title: "Recette & déploiement",
        text: "Validation client, corrections, mise en production et vérification post-déploiement."
      },
      {
        step: "05",
        title: "Documentation",
        text: "Guide d'utilisation des sections livrées, documentation technique et disponibilité post-mission."
      }
    ],
    deliverables: [
      "Analyse technique et faisabilité du besoin",
      "Développement Liquid sections ou templates custom",
      "Intégration design depuis Figma ou maquettes existantes",
      "Tests cross-browser et cross-device",
      "Déploiement staging puis production",
      "Documentation technique et guide admin",
      "Rapport CRO si audit demandé",
      "Support post-livraison (7 à 30 jours selon mission)"
    ],
    whyUs: [
      "Profil senior unique : brand, UX, Liquid et CRO dans la même tête.",
      "Réponse sous 24 h, exécution rapide sans sacrifier la qualité.",
      "+60 projets Shopify dont Nutripure, Studio Boucle Paris, Nussa Cosmetics.",
      "Code propre, documenté, maintenable par vos équipes."
    ],
    faqs: [
      {
        question: "Quelle différence entre un expert Shopify freelance et une agence Shopify ?",
        answer:
          "L'expert Shopify freelance 42studio offre la réactivité et la directivité d'un freelance avec l'exigence d'un studio créatif. Pas de couche commerciale, pas de junior en back-office. Vous payez pour l'expertise senior, pas pour la structure agence. Idéal pour des missions ciblées ou des projets où la relation directe compte."
      },
      {
        question: "Quel est le tarif d'un expert Shopify freelance chez 42studio ?",
        answer:
          "Nos tarifs régie démarrent autour de 550 € HT/jour pour du développement Liquid senior. Les missions forfaitaires (section custom, refonte template) sont chiffrées après brief. Pas de grille automatique : chaque mission est évaluée selon sa complexité."
      },
      {
        question: "Pouvez-vous intervenir sur une boutique Shopify existante sans refonte complète ?",
        answer:
          "C'est même notre spécialité en mode freelance. Section homepage, template produit, optimisation checkout, intégration app : nous intervenons sur un périmètre précis sans toucher au reste de la boutique."
      },
      {
        question: "Travaillez-vous avec des agences qui cherchent un renfort Shopify ?",
        answer:
          "Oui. Nous collaborons régulièrement avec des agences branding, media ou web qui ont besoin d'un expert Shopify senior pour la partie e-commerce. White label possible selon les projets."
      },
      {
        question: "L'expert Shopify freelance peut-il aussi gérer le design ?",
        answer:
          "Oui. 42studio est un studio créatif complet. Pour les missions freelance, nous pouvons inclure la direction artistique et les maquettes si le projet le nécessite, pas seulement le développement Liquid."
      },
      {
        question: "Quelle disponibilité pour un expert Shopify freelance en urgence ?",
        answer:
          "Réponse sous 24 h garantie. Pour les urgences avérées (bug production, deadline campagne), nous activons un créneau prioritaire sous 48 h si notre planning le permet. Précisez l'urgence dans votre brief."
      }
    ],
    related: [
      { label: "Expertise Shopify", href: "/shopify" },
      { label: "Agence Shopify France", href: "/agence-shopify-france" },
      { label: "Refonte Shopify", href: "/refonte-shopify" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["studio-boucle-paris", "nutripure"],
    primaryCta: { label: "Parler à l'expert Shopify", href: "/contact" },
    ctaBand: "Besoin d'un expert Shopify senior, disponible et direct ? Écrivez-nous."
  },
  {
    slug: "agence-web-arras",
    keyword: "agence web Arras",
    title: "Agence web Arras | Sites sur mesure · 42studio",
    description:
      "Agence web à Arras : sites vitrines, sites de marque, SaaS et e-commerce sur mesure. 42studio, studio créatif basé à Arras, du design au développement.",
    h1: "Agence web Arras avec une exigence internationale.",
    intro:
      "Basée à Arras, 42studio accompagne les entreprises des Hauts-de-France et de toute la France avec des sites web sur mesure, pas des templates recyclés. Vitrines premium, sites SaaS, e-commerce Shopify : un seul studio pour brand, web et produit.",
    eyebrow: "Web · Arras · Premium",
    cluster: "web",
    keywords: [
      "agence web Arras",
      "création site internet Arras",
      "agence digitale Arras",
      "site web sur mesure Arras",
      "développeur web Arras",
      "agence web Hauts-de-France"
    ],
    serviceName: "Agence web Arras",
    proofPoints: ["Basé à Arras", "Next.js", "SEO technique", "+60 marques"],
    stats: [
      ["Arras", "Studio principal"],
      ["+60", "Marques accompagnées"],
      ["Next.js", "Stack moderne"],
      ["100%", "Sur mesure"]
    ],
    sections: [
      {
        id: "local",
        kicker: "Ancrage local",
        title: "Une agence web Arras qui pense au-delà du regional",
        paragraphs: [
          "Choisir une agence web Arras, c'est bénéficier d'une proximité réelle : rendez-vous en présentiel, compréhension du tissu économique local, réactivité quand un échange face à face accélère le projet. 42studio est implanté à Arras et accompagne des clients des Hauts-de-France comme au national.",
          "Profitys, Kyrent, Hôtel Angleterre Versailles, Arras Patrimoine : notre portfolio dépasse largement le cadre local. L'exigence créative et technique est la même, que le client soit à Arras, Paris, Lyon ou à l'étranger.",
          "Nous combinons l'avantage d'un studio de proximité avec une culture design et développement comparable aux meilleures agences parisiennes."
        ],
        bullets: [
          "Rendez-vous en présentiel à Arras",
          "Accompagnement remote pour clients hors région",
          "Connaissance écosystème entrepreneurial local",
          "Interventions sur site si nécessaire"
        ],
        highlight:
          "Agence web Arras ne veut pas dire agence locale limitée. 42studio livre des sites premium pour des marques nationales et internationales."
      },
      {
        id: "offre",
        kicker: "Offre",
        title: "Sites vitrines, SaaS, e-commerce : un spectre complet",
        paragraphs: [
          "Notre offre web couvre les sites vitrines institutionnels, les sites produit SaaS, les landing pages conversion, les portfolios créatifs et les boutiques Shopify. Chaque projet est construit sur mesure avec Next.js, Framer ou Shopify selon les besoins.",
          "Sur Profitys, la migration Wix vers Framer a modernisé la présence d'un acteur B2B tout en améliorant le SEO et la crédibilité perçue. Sur Kyrent, le site vitrine SaaS structure une offre technique complexe en parcours clair vers la démo.",
          "Nous intégrons animation, micro-interactions et performance dans chaque livrable. Un site 42studio est mémorable sans être lent."
        ]
      },
      {
        id: "stack",
        kicker: "Stack technique",
        title: "Next.js, SEO technique et performance au cœur de chaque site",
        paragraphs: [
          "Notre stack privilégie Next.js pour les sites sur mesure exigeants : SSR, SSG, ISR, images optimisées, Core Web Vitals au vert. Pour les projets orientés marketing rapide, Framer offre une alternative performante. Shopify couvre l'e-commerce.",
          "Le SEO technique est intégré dès la conception : balises meta, canonicals, sitemap, robots.txt, données structurées, hiérarchie Hn, maillage interne. Pas de SEO ajouté après coup.",
          "Accessibilité, responsive et cross-browser font partie de la recette standard. Chaque site est testé sur devices réels avant livraison."
        ],
        bullets: [
          "Next.js 14+ avec App Router",
          "Framer pour sites marketing rapides",
          "CMS headless (Sanity, Contentful) si besoin",
          "Analytics, consent et tracking configurés"
        ]
      },
      {
        id: "methode",
        kicker: "Méthode",
        title: "Un interlocuteur senior du cadrage au déploiement",
        paragraphs: [
          "Pas de commercial qui disparaît après la signature. Vous travaillez avec le même profil senior du brief initial au go-live. Design, développement et SEO sont pilotés en interne.",
          "Livraisons itératives, validations régulières, documentation claire. Vous savez où en est le projet à chaque étape.",
          "Post-lancement, nous restons disponibles pour évolutions, maintenance et optimisations SEO continues."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Découverte",
        text: "Échange sur vos objectifs, audiences, concurrence et contraintes techniques. Audit de l'existant si refonte."
      },
      {
        step: "02",
        title: "Architecture & wireframes",
        text: "Structure des pages, parcours utilisateur, hiérarchie des contenus et scénarios mobile."
      },
      {
        step: "03",
        title: "Design UI",
        text: "Maquettes haute fidélité, design system, animations et validation desktop/mobile."
      },
      {
        step: "04",
        title: "Développement",
        text: "Intégration Next.js ou Framer, CMS, SEO technique, recette et optimisations performance."
      },
      {
        step: "05",
        title: "Lancement",
        text: "Mise en production, redirections SEO, formation admin et plan d'évolution post-lancement."
      }
    ],
    deliverables: [
      "Audit et recommandations stratégiques",
      "Wireframes et architecture de contenu",
      "Maquettes UI desktop et mobile",
      "Design system et composants réutilisables",
      "Développement front-end Next.js ou Framer",
      "SEO technique complet (meta, schema, sitemap)",
      "Configuration analytics et consent",
      "Documentation et formation administration"
    ],
    whyUs: [
      "Studio basé à Arras avec portfolio national et international.",
      "Stack moderne Next.js, pas de WordPress générique.",
      "Brand, web et Shopify dans le même studio pour une cohérence totale.",
      "Interlocuteur senior unique, réponse sous 24 h."
    ],
    faqs: [
      {
        question: "42studio est-elle une agence web Arras ou une agence nationale ?",
        answer:
          "Les deux. 42studio est basée à Arras et accompagne des clients locaux des Hauts-de-France avec la proximité d'un studio de quartier. Mais plus de 80 % de nos projets web concernent des clients hors région, partout en France et à l'international. L'exigence est la même partout."
      },
      {
        question: "Quel budget pour un site web sur mesure avec une agence web Arras ?",
        answer:
          "Comptez entre 5 000 et 20 000 € HT selon la complexité : nombre de pages, animations, CMS, multilingue, e-commerce. 42studio chiffré après un échange sur vos objectifs. Pas de grille tarifaire automatique."
      },
      {
        question: "Proposez-vous des rendez-vous en présentiel à Arras ?",
        answer:
          "Oui, pour les clients locaux ou ceux qui souhaitent un kick-off en face à face. La majorité du projet se déroule en visio avec des livraisons itératives. Un rendez-vous à Arras est toujours possible sur demande."
      },
      {
        question: "Quelle technologie utilise votre agence web Arras ?",
        answer:
          "Next.js pour les sites sur mesure exigeants, Framer pour les sites marketing rapides, Shopify pour l'e-commerce. Nous choisissons la stack selon vos besoins, pas selon notre confort technique."
      },
      {
        question: "Pouvez-vous reprendre un site existant (WordPress, Wix, Squarespace) ?",
        answer:
          "Oui. Nous migrons régulièrement depuis WordPress, Wix, Squarespace ou Webflow vers Next.js ou Framer. La migration inclut le SEO (redirections 301), le transfert de contenus et la modernisation du design."
      },
      {
        question: "L'agence web Arras 42studio fait-elle aussi du branding ?",
        answer:
          "Oui, c'est notre différenciation. Brand, web et Shopify sont les trois piliers du studio. Vous pouvez lancer un projet complet identité + site, ou ne prendre que la partie web si vous avez déjà une charte."
      }
    ],
    related: [
      { label: "Expertise Web", href: "/web" },
      { label: "Création site sur mesure", href: "/creation-site-internet-sur-mesure" },
      { label: "Studio créatif Arras", href: "/studio-creatif-arras" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["profitys", "kyrent", "hotel-angleterre-versailles"],
    primaryCta: { label: "Discuter de votre site web", href: "/contact" },
    ctaBand: "Un site web premium, conçu à Arras, livré partout en France. Parlons-en."
  },
  {
    slug: "creation-site-internet-sur-mesure",
    keyword: "création site internet sur mesure",
    title: "Création site internet sur mesure | 42studio",
    description:
      "Création de site internet sur mesure par 42studio : design premium, développement, back-office et bases techniques propres. Un site unique, sans template.",
    h1: "Création site internet sur mesure, pas un template.",
    intro:
      "Un site sur mesure ne se contente pas d'être beau. Il installe la confiance, clarifie votre valeur et transforme votre identité en expérience mémorable. 42studio conçoit des sites internet uniques, rapides, administrables et pensés pour évoluer sans refonte tous les 18 mois.",
    eyebrow: "Web · Sur mesure",
    cluster: "web",
    keywords: [
      "création site internet sur mesure",
      "site web sur mesure",
      "développement site custom",
      "site internet unique",
      "création site Next.js",
      "site vitrine premium sur mesure"
    ],
    serviceName: "Création site internet sur mesure",
    proofPoints: ["Next.js", "Design unique", "SEO intégré", "CMS flexible"],
    stats: [
      ["0", "Template utilisé"],
      ["<2s", "Temps de chargement"],
      ["100", "Score SEO technique"],
      ["Next.js", "Stack moderne"]
    ],
    sections: [
      {
        id: "difference",
        kicker: "Différence",
        title: "Pourquoi le sur mesure bat le template à moyen terme",
        paragraphs: [
          "Un template WordPress ou un builder no-code promet un site en 48 h. En réalité, vous obtenez un site qui ressemble à des milliers d'autres, avec des performances médiocres, un SEO limité et une impossibilité d'évoluer sans tout casser.",
          "La création site internet sur mesure chez 42studio part de votre positionnement, vos preuves et votre parcours de conversion. Chaque composant est pensé pour votre usage, pas adapté depuis une bibliothèque générique.",
          "Le sur-mesure coûte plus au départ, mais évite les refontes prématurées, les plugins qui s'empilent et la frustration d'un site qui ne vous ressemble pas."
        ],
        bullets: [
          "Design unique aligné avec votre identité",
          "Performance optimale sans bloat de plugins",
          "SEO technique intégré dès la structure",
          "Évolutivité sans dette technique"
        ],
        highlight:
          "Profitys, Kyrent, Hôtel Angleterre Versailles : des sites sur mesure qui performent en SEO, convertissent en leads et durent dans le temps."
      },
      {
        id: "design-dev",
        kicker: "Design & Dev",
        title: "Design et développement pensés ensemble",
        paragraphs: [
          "Chez 42studio, le designer et le développeur travaillent en continu. Les animations sont spécifiées avec leurs contraintes techniques, le responsive est validé sur devices réels, l'accessibilité est intégrée dès les maquettes.",
          "Next.js permet des expériences immersives sans sacrifier la performance : SSR pour le SEO, lazy-loading intelligent, images WebP automatiques, fonts optimisées. Le site est rapide même avec du motion design.",
          "Le CMS headless (Sanity, Contentful) ou Framer CMS permet à vos équipes de modifier les contenus sans toucher au code."
        ]
      },
      {
        id: "seo",
        kicker: "SEO",
        title: "SEO technique intégré, pas ajouté après coup",
        paragraphs: [
          "La création site internet sur mesure inclut systématiquement le SEO technique : URLs propres, balises title et meta uniques, canonicals, sitemap XML, robots.txt, données structurées (Organization, FAQ, BreadcrumbList), hiérarchie Hn cohérente.",
          "L'architecture de contenu est pensée pour le maillage interne et l'indexation. Chaque page a un objectif SEO clair, un mot-clé cible et une intention de recherche identifiée.",
          "Post-lancement, nous monitorons l'indexation et proposons des optimisations continues."
        ],
        bullets: [
          "Audit mots-clés et architecture SEO",
          "Meta tags et Open Graph par page",
          "Schema.org et rich snippets",
          "Core Web Vitals optimisés"
        ]
      },
      {
        id: "evolution",
        kicker: "Évolution",
        title: "Un site conçu pour durer et évoluer",
        paragraphs: [
          "Un site sur mesure 42studio est construit en composants réutilisables. Ajouter une page, un service, une landing campagne ne nécessite pas de refonte. Le design system garantit la cohérence visuelle à chaque évolution.",
          "Nous documentons l'architecture, les composants et les conventions pour que votre équipe ou un futur prestataire puisse faire évoluer le site en autonomie.",
          "Maintenance, évolutions et optimisations SEO sont proposées en forfait mensuel pour les clients qui le souhaitent."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Stratégie & contenu",
        text: "Positionnement, personas, audit concurrence et architecture de contenu orientée conversion et SEO."
      },
      {
        step: "02",
        title: "Wireframes",
        text: "Structure des pages, parcours utilisateur, hiérarchie des preuves et scénarios mobile-first."
      },
      {
        step: "03",
        title: "Design UI",
        text: "Maquettes haute fidélité, design system, micro-interactions et validation responsive."
      },
      {
        step: "04",
        title: "Développement Next.js",
        text: "Intégration front-end, CMS, SEO technique, animations et recette cross-device."
      },
      {
        step: "05",
        title: "Lancement & formation",
        text: "Mise en production, monitoring SEO, formation CMS et plan d'évolution."
      }
    ],
    deliverables: [
      "Audit stratégique et architecture de contenu",
      "Wireframes desktop et mobile",
      "Maquettes UI haute fidélité",
      "Design system et bibliothèque composants",
      "Développement Next.js complet",
      "Intégration CMS headless",
      "SEO technique (meta, schema, sitemap)",
      "Documentation, formation et support post-lancement"
    ],
    whyUs: [
      "Sites sur mesure livrés pour Profitys, Kyrent, Digit Solution, Hôtel Angleterre.",
      "Stack Next.js moderne, pas de WordPress ni de builder limité.",
      "Brand et web dans le même studio : cohérence identité/site garantie.",
      "SEO technique intégré dès la conception, pas en option."
    ],
    faqs: [
      {
        question: "Combien coûte la création d'un site internet sur mesure ?",
        answer:
          "Entre 5 000 et 25 000 € HT selon le nombre de pages, les animations, le CMS, le multilingue et le branding inclus. 42studio chiffré après un échange sur vos objectifs. Un site vitrine premium 8 à 12 pages démarre autour de 8 000 € HT."
      },
      {
        question: "Quelle différence entre un site sur mesure et un site WordPress ?",
        answer:
          "Un site sur mesure Next.js est plus performant, plus sécurisé et plus évolutif qu'un WordPress thématisé. Pas de plugins à maintenir, pas de failles de sécurité récurrentes, pas de lenteur liée au thème. Le sur-mesure coûte plus au départ mais coûte moins à moyen terme."
      },
      {
        question: "Combien de temps pour créer un site internet sur mesure ?",
        answer:
          "6 à 10 semaines pour un site vitrine complet. 10 à 14 semaines si branding inclus. Le calendrier dépend du volume de pages, des contenus disponibles et du rythme de validation."
      },
      {
        question: "Puis-je modifier le contenu moi-même après la création site internet sur mesure ?",
        answer:
          "Oui. Nous intégrons un CMS headless (Sanity, Contentful) ou Framer CMS selon le projet. Vous modifiez textes, images et pages sans compétence technique. Une formation est incluse à la livraison."
      },
      {
        question: "Le site sur mesure sera-t-il bien référencé sur Google ?",
        answer:
          "Le SEO technique est intégré dès la structure : URLs, meta, schema, sitemap, performance. Le référencement organique dépend aussi de votre contenu et de votre stratégie éditoriale, que nous pouvons accompagner en option."
      },
      {
        question: "42studio peut-il créer le branding en même temps que le site sur mesure ?",
        answer:
          "Oui, c'est notre modèle préféré. Identité de marque et site web pensés ensemble garantissent une cohérence totale. Vous pouvez aussi ne prendre que la partie web si vous avez déjà une charte graphique."
      }
    ],
    related: [
      { label: "Expertise Web", href: "/web" },
      { label: "Agence web Arras", href: "/agence-web-arras" },
      { label: "Refonte site vitrine", href: "/refonte-site-vitrine" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["profitys", "kyrent"],
    primaryCta: { label: "Créer mon site sur mesure", href: "/contact" },
    ctaBand: "Votre site mérite d'être unique, rapide et pensé pour convertir. Discutons-en."
  },
  {
    slug: "refonte-site-vitrine",
    keyword: "refonte site vitrine",
    title: "Refonte de site vitrine : message et design",
    description:
      "Refonte site vitrine par 42studio. Repositionnement, design premium, SEO préservé et performance Next.js. Profitys, Hôtel Angleterre Versailles.",
    h1: "Refonte site vitrine : message, design et technique alignés.",
    intro:
      "Votre site actuel ne reflète plus votre niveau ? La refonte site vitrine est l'occasion de clarifier votre offre, moderniser votre image et renforcer votre visibilité organique. 42studio audite, repositionne et reconstruit sans perdre le trafic existant.",
    eyebrow: "Web · Modernisation",
    cluster: "web",
    keywords: [
      "refonte site vitrine",
      "refonte site web",
      "modernisation site internet",
      "redesign site vitrine",
      "refonte site institutionnel",
      "migration site web"
    ],
    serviceName: "Refonte site vitrine",
    proofPoints: ["SEO préservé", "Repositionnement", "Next.js", "Performance"],
    stats: [
      ["301", "Redirections SEO"],
      ["+50%", "Clarté message"],
      ["<2s", "Chargement cible"],
      ["0", "Template générique"]
    ],
    sections: [
      {
        id: "constat",
        kicker: "Constat",
        title: "Les signes qu'une refonte site vitrine s'impose",
        paragraphs: [
          "Votre site a plus de 3 ans, il ne convertit plus, il ne vous ressemble plus, il est lent sur mobile, il n'apparaît pas sur vos requêtes stratégiques. Ces signaux indiquent qu'une refonte site vitrine est nécessaire, pas qu'un simple refresh suffit.",
          "Avant de toucher au design, nous auditons le message : votre offre est-elle claire en 5 secondes ? Vos preuves sont-elles visibles ? Votre parcours mène-t-il vers un contact qualifié ? Souvent, la refonte commence par un repositionnement éditorial.",
          "Sur Profitys, la refonte est partie d'un changement de logiciel et d'un repositionnement B2B. Sur Hôtel Angleterre Versailles, l'enjeu était de traduire un héritage historique en expérience web premium."
        ],
        bullets: [
          "Audit message, UX et performance",
          "Analyse trafic et pages performantes",
          "Benchmark concurrentiel sectoriel",
          "Cartographie SEO et URLs indexées"
        ],
        highlight:
          "Une refonte site vitrine réussie ne change pas seulement l'habillage. Elle clarifie pourquoi un visiteur devrait vous choisir."
      },
      {
        id: "repositionnement",
        kicker: "Repositionnement",
        title: "Clarifier le message avant de designer",
        paragraphs: [
          "La tentation est de commencer par les maquettes. Nous commençons par le fond : qui êtes-vous pour vos clients, quelle promesse tenez-vous, quelles preuves apportez-vous, quel appel à l'action est prioritaire.",
          "Ce travail éditorial guide l'architecture des pages, la hiérarchie visuelle et le ton. Un site vitrine premium est d'abord un outil de conviction, ensuite un objet esthétique.",
          "Nous rédigeons ou réorganisons les contenus clés : homepage, pages services, à propos, contact. Chaque texte sert la conversion ou le SEO."
        ]
      },
      {
        id: "technique",
        kicker: "Technique",
        title: "Migration propre, SEO préservé, performance maximale",
        paragraphs: [
          "La refonte site vitrine inclut systématiquement un plan de redirections 301, un mapping URL par URL et un suivi Search Console post-déploiement. Aucune page indexée ne doit disparaître sans redirection.",
          "Nous migrons depuis WordPress, Wix, Squarespace, Webflow ou Framer vers Next.js ou Framer selon les besoins. Les contenus, images et metadonnées sont repris et optimisés.",
          "Core Web Vitals, accessibilité et responsive sont validés avant go-live. Le nouveau site doit être plus rapide que l'ancien, pas seulement plus beau."
        ],
        bullets: [
          "Plan de redirections 301 complet",
          "Migration contenus et médias optimisés",
          "SEO technique renforcé (schema, meta, sitemap)",
          "Recette performance et accessibilité"
        ]
      },
      {
        id: "resultats",
        kicker: "Résultats",
        title: "Mesurer l'impact de la refonte site vitrine",
        paragraphs: [
          "Les KPIs d'une refonte réussie : taux de conversion contact, temps passé sur site, taux de rebond mobile, positions SEO sur requêtes stratégiques, Core Web Vitals. Nous définissons ces indicateurs avant le projet et les monitorons post-lancement.",
          "La refonte site vitrine est un investissement, pas une dépense. Un site clair, crédible et rapide génère plus de leads qualifiés et renforce la perception de votre marque.",
          "Post-lancement, nous proposons des itérations basées sur les données réelles : heatmaps, analytics, retours commerciaux."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Audit complet",
        text: "Message, UX, SEO, performance et analyse du trafic existant. Identification des pages à conserver, fusionner ou supprimer."
      },
      {
        step: "02",
        title: "Repositionnement",
        text: "Clarification offre, preuves, parcours conversion et architecture de contenu cible."
      },
      {
        step: "03",
        title: "Design refonte",
        text: "Maquettes modernisées, design system et validation responsive."
      },
      {
        step: "04",
        title: "Développement & migration",
        text: "Intégration Next.js, migration contenus, redirections 301 et recette complète."
      },
      {
        step: "05",
        title: "Go-live & suivi",
        text: "Mise en production, monitoring SEO, formation CMS et plan d'optimisation post-lancement."
      }
    ],
    deliverables: [
      "Rapport d'audit message, UX, SEO et performance",
      "Repositionnement éditorial et architecture cible",
      "Plan de redirections 301",
      "Maquettes UI refonte desktop et mobile",
      "Développement Next.js ou Framer",
      "Migration contenus et médias optimisés",
      "SEO technique renforcé",
      "Suivi indexation et analytics post-lancement"
    ],
    whyUs: [
      "Refontes réussies : Profitys (Wix → Framer), Hôtel Angleterre Versailles.",
      "Approche SEO-first : zéro perte de trafic organique visée.",
      "Repositionnement éditorial inclus, pas seulement un redesign.",
      "Stack Next.js performante, pas de WordPress re-thématisé."
    ],
    faqs: [
      {
        question: "Une refonte site vitrine va-t-elle faire chuter mon référencement ?",
        answer:
          "Pas si elle est bien menée. 42studio cartographie toutes les URLs indexées, implémente les redirections 301 et monitorise Search Console. Une refonte bien planifiée améliore souvent le SEO grâce à une meilleure structure et de meilleures performances."
      },
      {
        question: "Combien de temps dure une refonte site vitrine ?",
        answer:
          "6 à 10 semaines pour un site vitrine de 8 à 15 pages. 4 à 6 semaines pour une refonte ciblée (homepage + pages services). Le calendrier dépend du repositionnement éditorial et des contenus disponibles."
      },
      {
        question: "Dois-je réécrire tous mes contenus pour une refonte site vitrine ?",
        answer:
          "Pas forcément. L'audit identifie les contenus à conserver, réorganiser ou réécrire. Nous proposons une rédaction ciblée sur les pages stratégiques (home, services, à propos) et reprenons le reste en l'optimisant."
      },
      {
        question: "Pouvez-vous refondre mon site WordPress ou Wix ?",
        answer:
          "Oui. Nous migrons régulièrement depuis WordPress, Wix, Squarespace et Webflow. La migration inclut le design modernisé, le SEO préservé et une stack plus performante (Next.js ou Framer)."
      },
      {
        question: "La refonte site vitrine inclut-elle le branding ?",
        answer:
          "La refonte web peut inclure une évolution de l'identité visuelle ou une refonte complète de marque selon vos besoins. 42studio propose les deux en continu ou séparément."
      },
      {
        question: "Comment mesurer le succès d'une refonte site vitrine ?",
        answer:
          "Nous définissons des KPIs avant le projet : taux de conversion, trafic organique, Core Web Vitals, temps passé, taux de rebond mobile. Un suivi analytics post-lancement permet de mesurer l'impact réel et d'itérer."
      }
    ],
    related: [
      { label: "Expertise Web", href: "/web" },
      { label: "Création site sur mesure", href: "/creation-site-internet-sur-mesure" },
      { label: "Refonte identité visuelle", href: "/refonte-identite-visuelle" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["profitys", "hotel-angleterre-versailles"],
    primaryCta: { label: "Auditer mon site vitrine", href: "/contact" },
    ctaBand: "Votre site actuel ne vous ressemble plus ? Modernisons-le sans perdre votre visibilité."
  },
  {
    slug: "creation-identite-de-marque",
    keyword: "création identité de marque",
    title: "Création identité de marque | Branding digital 42studio",
    description:
      "Création identité de marque par 42studio : stratégie, logo, charte graphique et design system. Identité pensée pour le digital, le web et l'e-commerce.",
    h1: "Création identité de marque pensée pour le digital.",
    intro:
      "Une identité de marque ne se résume pas à un logo. C'est un système cohérent de signes, couleurs, typographies et règles qui permet à votre entreprise d'être reconnue, comprise et mémorisée sur tous ses points de contact. 42studio conçoit des identités activables sur web, social, print et e-commerce.",
    eyebrow: "Brand · Identité",
    cluster: "brand",
    keywords: [
      "création identité de marque",
      "identité visuelle entreprise",
      "création logo et charte",
      "design identité de marque",
      "branding startup",
      "identité de marque digitale"
    ],
    serviceName: "Création identité de marque",
    proofPoints: ["Stratégie d'abord", "Design system", "Kit digital", "Web-ready"],
    stats: [
      ["+60", "Identités créées"],
      ["100%", "Activables"],
      ["Digital", "First approach"],
      ["System", "Pas logo seul"]
    ],
    sections: [
      {
        id: "strategie",
        kicker: "Stratégie",
        title: "Le positionnement avant le logo",
        paragraphs: [
          "La création identité de marque chez 42studio commence par le fond, pas par la forme. Qui êtes-vous ? Pour qui ? Contre qui ? Quelle promesse ? Quelle personnalité ? Ces réponses construisent la plateforme de marque qui guide toutes les décisions créatives.",
          "Le logo arrive en conséquence d'un territoire créatif solide, pas comme point de départ arbitraire. Nussa Cosmetics, Second Step, Apoticari : chaque identité naît d'un positionnement clair avant d'être traduite visuellement.",
          "Ce travail stratégique évite les allers-retours esthétiques sans fondement et garantit une identité durable, pas une mode passagère."
        ],
        bullets: [
          "Atelier positionnement et personas",
          "Analyse concurrentielle et territoire créatif",
          "Plateforme de marque (mission, vision, valeurs, ton)",
          "Moodboards et directions exploratoires"
        ],
        highlight:
          "Une identité sans stratégie est une décoration. La création identité de marque 42studio installe d'abord le sens, ensuite le signe."
      },
      {
        id: "systeme",
        kicker: "Système",
        title: "Logo, couleurs, typo : un système, pas un fichier isolé",
        paragraphs: [
          "Le livrable central est un design system de marque : logo et variantes (horizontal, vertical, favicon, monochrome), palette chromatique avec codes et usages, typographies titres et corps, grille et espacements, iconographie et patterns.",
          "Chaque élément est pensé pour fonctionner en petit (favicon, app icon) comme en grand (signalétique, stand salon). Les contrastes respectent l'accessibilité WCAG.",
          "La charte graphique documente les règles d'usage : ce qu'on fait, ce qu'on ne fait pas, avec des exemples concrets pour guider vos équipes."
        ]
      },
      {
        id: "digital",
        kicker: "Digital",
        title: "Une identité faite pour l'écran, le social et l'e-commerce",
        paragraphs: [
          "La création identité de marque 42studio est digital-first. Chaque signe est testé sur site web, Instagram, fiche produit Shopify, email header et présentation Keynote. Pas de charte PDF qui ne vit jamais en dehors d'un dossier.",
          "Nous livrons un kit digital prêt à l'emploi : templates social, signatures email, favicons, Open Graph images, composants UI pour le futur site web.",
          "Si le projet inclut le web ou le Shopify, l'identité est déployée directement dans la boutique ou le site. Zéro rupture entre la charte et l'expérience live."
        ],
        bullets: [
          "Kit social (posts, stories, covers)",
          "Templates email et signatures",
          "Composants UI web-ready",
          "Déclinaisons packaging si besoin"
        ]
      },
      {
        id: "activation",
        kicker: "Activation",
        title: "Former vos équipes à faire vivre la marque",
        paragraphs: [
          "Une identité livrée sans formation reste dans un dossier. Nous organisons une session de passation : comment utiliser le logo, quelles couleurs en digital, quels templates pour le social, comment brief un prestataire externe.",
          "La charte est conçue pour être autonome : vos équipes marketing, commerciales ou RH peuvent produire des supports cohérents sans solliciter le studio à chaque besoin.",
          "Pour les évolutions (nouveau service, sous-marque, extension internationale), nous restons disponibles en accompagnement continu."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Immersion & stratégie",
        text: "Ateliers positionnement, analyse concurrence, définition du territoire créatif et validation de la direction."
      },
      {
        step: "02",
        title: "Exploration créative",
        text: "Moodboards, esquisses logo, explorations typographiques et chromatiques. 2 à 3 directions présentées."
      },
      {
        step: "03",
        title: "Affinement & système",
        text: "Sélection direction, construction du design system complet et déclinaisons logo."
      },
      {
        step: "04",
        title: "Charte & kit digital",
        text: "Rédaction charte graphique, templates social, email, web et documentation d'usage."
      },
      {
        step: "05",
        title: "Livraison & formation",
        text: "Remise des fichiers sources, session de passation et accompagnement déploiement web si inclus."
      }
    ],
    deliverables: [
      "Plateforme de marque (positionnement, valeurs, ton)",
      "Logo et variantes (horizontal, vertical, favicon, monochrome)",
      "Palette chromatique avec codes et règles d'usage",
      "Typographies titres et corps avec hiérarchie",
      "Charte graphique PDF et Figma",
      "Kit digital (social, email, Open Graph)",
      "Design system composants UI",
      "Fichiers sources (AI, SVG, PNG) et formation équipes"
    ],
    whyUs: [
      "Identités livrées pour Nussa Cosmetics, Second Step, Apoticari, Sublife Store.",
      "Approche digital-first : identité pensée pour web, social et e-commerce.",
      "Brand et Shopify dans le même studio : déploiement sans rupture.",
      "Design system activable par vos équipes, pas une charte morte."
    ],
    faqs: [
      {
        question: "Combien coûte la création identité de marque chez 42studio ?",
        answer:
          "Entre 4 000 et 15 000 € HT selon le périmètre : stratégie incluse ou non, nombre de déclinaisons, kit digital, packaging. Une identité complète (stratégie + logo + charte + kit digital) démarre autour de 6 000 € HT."
      },
      {
        question: "Combien de temps dure la création identité de marque ?",
        answer:
          "4 à 8 semaines selon la complexité et le rythme de validation. La phase stratégique prend 1 à 2 semaines, l'exploration créative 2 à 3 semaines, la finalisation et charte 1 à 2 semaines."
      },
      {
        question: "Proposez-vous uniquement un logo ou faut-il prendre l'identité complète ?",
        answer:
          "Nous recommandons l'identité complète car un logo seul ne suffit pas à construire une marque cohérente. Si le budget est contraint, nous proposons un pack essentiel (logo + couleurs + typo + mini-charte) avant d'enrichir progressivement."
      },
      {
        question: "La création identité de marque inclut-elle le site web ?",
        answer:
          "L'identité et le site peuvent être des projets séparés ou combinés. Notre recommandation : les penser ensemble pour garantir la cohérence. 42studio propose des packages brand + web + Shopify."
      },
      {
        question: "Que se passe-t-il si je n'aime aucune des propositions créatives ?",
        answer:
          "Nous présentons 2 à 3 directions distinctes après validation du territoire créatif. Si aucune ne convient, nous itérons sur la direction la plus proche. Le brief stratégique initial minimise ce risque en alignant les attentes avant la création."
      },
      {
        question: "Puis-je faire évoluer mon identité de marque plus tard ?",
        answer:
          "Oui. Nous proposons des évolutions ciblées (nouveau service, sous-marque, extension internationale) ou des refontes complètes. Le design system initial facilite ces évolutions sans tout reconstruire."
      }
    ],
    related: [
      { label: "Expertise Brand", href: "/brand" },
      { label: "Agence branding France", href: "/agence-branding-france" },
      { label: "Branding e-commerce", href: "/branding-e-commerce" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["nussa-cosmetics", "second-step"],
    primaryCta: { label: "Créer mon identité de marque", href: "/contact" },
    ctaBand: "Votre marque mérite une identité qui tient debout partout. Commençons par le sens."
  },
  {
    slug: "agence-branding-france",
    keyword: "agence branding France",
    title: "Agence branding France : stratégie et identité",
    description:
      "Agence branding France : stratégie de marque, identité visuelle, charte et déploiement. 42studio, studio créatif basé à Arras, pour marques ambitieuses.",
    h1: "Agence branding France : stratégie, identité et déploiement.",
    intro:
      "42studio est une agence branding France qui traite la marque comme un système, pas comme un logo isolé. Stratégie, direction artistique, charte graphique, kit digital et déploiement web ou Shopify dans le même flux créatif, depuis Arras, pour des marques partout en France.",
    eyebrow: "Brand · France",
    cluster: "brand",
    keywords: [
      "agence branding France",
      "agence identité visuelle France",
      "agence de branding",
      "studio branding France",
      "création marque France",
      "agence design de marque"
    ],
    serviceName: "Agence branding France",
    proofPoints: ["+60 marques", "Stratégie incluse", "Digital-first", "Arras · France"],
    stats: [
      ["+60", "Marques brandées"],
      ["France", "Couverture nationale"],
      ["Digital", "First branding"],
      ["System", "Approche système"]
    ],
    sections: [
      {
        id: "approche",
        kicker: "Approche",
        title: "Une agence branding France orientée système, pas esthétique seule",
        paragraphs: [
          "Le marché du branding est saturé d'agences qui livrent de beaux logos sans stratégie, des chartes PDF jamais activées et des identités qui ne survivent pas au premier déploiement web. 42studio se distingue par une approche système : chaque décision créative est ancrée dans un positionnement clair.",
          "Notre agence branding France accompagne des startups D2C, des PME en repositionnement, des groupes avec des sous-marques et des acteurs B2B qui veulent enfin une image à la hauteur de leur expertise.",
          "Nussa Cosmetics, Second Step, Profitys, Kyrent : des secteurs différents, une même exigence. La marque doit convaincre avant même que le produit parle."
        ],
        bullets: [
          "Plateforme de marque et positionnement",
          "Identité visuelle complète et design system",
          "Kit digital activable immédiatement",
          "Déploiement web, social et e-commerce"
        ],
        highlight:
          "Choisir une agence branding France, c'est investir dans un actif durable. 42studio construit des marques qui performent en digital, pas seulement en présentation."
      },
      {
        id: "secteurs",
        kicker: "Secteurs",
        title: "D2C, B2B, SaaS, hospitality : un branding adapté à chaque contexte",
        paragraphs: [
          "Le branding D2C (Nussa, Nutripure, Apoticari) exige une identité désirable, instagrammable et compatible e-commerce. Le branding B2B (Profitys, Digit Solution) doit installer la crédibilité et clarifier une offre complexe. Le branding SaaS (Kyrent) traduit une promesse technique en bénéfice business.",
          "Chaque secteur a ses codes, ses preuves et ses points de contact prioritaires. Notre agence branding France adapte la méthode sans sacrifier l'exigence créative.",
          "Nous refusons les formules branding génériques. Chaque projet démarre par une immersion sectorielle."
        ]
      },
      {
        id: "deploiement",
        kicker: "Déploiement",
        title: "De la charte au site live : un déploiement sans rupture",
        paragraphs: [
          "Le problème classique du branding : une belle charte PDF et un site web qui ne lui ressemble pas. Chez 42studio, brand et web sont conçus ensemble. L'identité est testée en contexte digital avant livraison.",
          "Si le projet inclut Shopify, la boutique porte la marque dès le jour 1. Pas de traduction, pas de compromis, pas de décalage entre le moodboard et l'expérience client.",
          "Nous livrons des kits prêts à l'emploi : templates social, email, présentation, composants UI. Vos équipes activent la marque en autonomie."
        ],
        bullets: [
          "Brand + web + Shopify en continu",
          "Templates social et email brandés",
          "Composants UI pour le site",
          "Formation activation marque"
        ]
      },
      {
        id: "accompagnement",
        kicker: "Accompagnement",
        title: "Un studio senior, pas une usine à logos",
        paragraphs: [
          "Notre agence branding France fonctionne avec des interlocuteurs seniors du brief à la livraison. Pas de junior qui exécute un brief mal compris, pas de turnover en cours de projet.",
          "Livraisons itératives, feedback intégré, calendrier respecté. Vous savez où en est le projet à chaque étape.",
          "Post-livraison, nous accompagnons les évolutions : nouvelle gamme, extension internationale, refonte partielle ou sous-marque."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Immersion stratégique",
        text: "Ateliers, analyse concurrence, définition positionnement et territoire créatif."
      },
      {
        step: "02",
        title: "Direction créative",
        text: "Moodboards, explorations logo, typo et couleur. Présentation de 2 à 3 directions."
      },
      {
        step: "03",
        title: "Construction système",
        text: "Affinement identité, design system, déclinaisons et tests contextuels digital."
      },
      {
        step: "04",
        title: "Charte & kit",
        text: "Rédaction charte, templates social, email, web et documentation."
      },
      {
        step: "05",
        title: "Déploiement",
        text: "Livraison fichiers, formation équipes et déploiement web/Shopify si inclus."
      }
    ],
    deliverables: [
      "Plateforme de marque complète",
      "Logo et système de signes",
      "Palette, typographies et grille",
      "Charte graphique PDF et Figma",
      "Kit digital (social, email, OG images)",
      "Design system composants UI",
      "Templates présentation et print si besoin",
      "Formation et fichiers sources (AI, SVG, PNG)"
    ],
    whyUs: [
      "+60 marques accompagnées en France et à l'international.",
      "Brand, web et Shopify dans le même studio : zéro rupture charte/site.",
      "Approche digital-first : identités pensées pour l'écran et l'e-commerce.",
      "Interlocuteur senior unique, réponse sous 24 h."
    ],
    faqs: [
      {
        question: "Pourquoi choisir une agence branding France plutôt qu'un freelance logo ?",
        answer:
          "Un freelance logo livre un signe. Une agence branding France comme 42studio livre un système : stratégie, identité, charte, kit digital et déploiement. L'investissement est plus structurant et l'identité dure dans le temps, pas seulement en présentation."
      },
      {
        question: "42studio intervient-elle dans toute la France ?",
        answer:
          "Oui. Basée à Arras, notre agence branding France accompagne des clients à Paris, Lyon, Bordeaux, en région et à l'international. La majorité des projets se déroulent en remote avec des points réguliers en visio."
      },
      {
        question: "Quel budget pour un projet agence branding France ?",
        answer:
          "Entre 4 000 et 20 000 € HT selon le périmètre : stratégie, identité, charte, kit digital, déploiement web. Un projet branding complet démarre autour de 6 000 € HT. Nous chiffrons après un échange sur vos objectifs."
      },
      {
        question: "L'agence branding France 42studio fait-elle aussi le site web ?",
        answer:
          "Oui. Brand, web et Shopify sont nos trois piliers. Nous recommandons de les combiner pour garantir la cohérence entre identité et expérience digitale."
      },
      {
        question: "Combien de temps dure un projet branding complet ?",
        answer:
          "4 à 8 semaines pour l'identité seule. 8 à 14 semaines si brand + web + Shopify. Le calendrier dépend du périmètre et du rythme de validation."
      },
      {
        question: "Pouvez-vous reprendre une identité existante pour la moderniser ?",
        answer:
          "Oui. Nous réalisons des refontes identité visuelle partielles (logo, couleurs, typo) ou complètes (repositionnement + nouveau système). Voir notre page refonte identité visuelle pour le détail."
      }
    ],
    related: [
      { label: "Expertise Brand", href: "/brand" },
      { label: "Création identité de marque", href: "/creation-identite-de-marque" },
      { label: "Branding e-commerce", href: "/branding-e-commerce" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["nussa-cosmetics", "second-step", "profitys"],
    primaryCta: { label: "Parler branding avec 42studio", href: "/contact" },
    ctaBand: "Construisons une marque qui convainc avant même le premier clic."
  },
  {
    slug: "branding-e-commerce",
    keyword: "branding e-commerce",
    title: "Branding e-commerce | Marque & Shopify · 42studio",
    description:
      "Branding e-commerce par 42studio : identité visuelle, direction artistique et boutique Shopify alignées. Plus de rupture entre charte PDF et boutique live.",
    h1: "Branding e-commerce : identité et boutique dans le même studio.",
    intro:
      "Le branding e-commerce aligne identité visuelle, ton éditorial et expérience boutique. Plus de rupture entre la charte PDF et le site live. 42studio conçoit des marques D2C où chaque pixel sert la conversion et la mémorisation.",
    eyebrow: "Brand · E-commerce",
    cluster: "brand",
    keywords: [
      "branding e-commerce",
      "identité visuelle e-commerce",
      "branding boutique en ligne",
      "marque D2C",
      "design e-commerce branding",
      "branding Shopify"
    ],
    serviceName: "Branding e-commerce",
    proofPoints: ["Brand + Shopify", "D2C expert", "Conversion", "Cohérence totale"],
    stats: [
      ["D2C", "Spécialisation"],
      ["1", "Studio brand + shop"],
      ["+30", "Boutiques brandées"],
      ["100%", "Cohérence live"]
    ],
    sections: [
      {
        id: "probleme",
        kicker: "Problème",
        title: "Pourquoi le branding e-commerce échoue si souvent",
        paragraphs: [
          "Le scénario classique : une agence branding livre une charte magnifique, une agence web installe un Shopify, et les deux ne se parlent pas. Résultat : une boutique qui ne ressemble pas à la marque, des visuels social déconnectés du site, une confusion chez le client.",
          "Le branding e-commerce exige de penser la marque et la boutique ensemble. Le logo doit fonctionner en favicon, la palette en bouton CTA, la typographie en fiche produit, le ton éditorial en description produit.",
          "42studio résout ce problème en combinant brand et Shopify dans le même studio. Nussa Cosmetics, Second Step, Apoticari, Sublife Store : la preuve que l'alignement brand/boutique booste la conversion."
        ],
        bullets: [
          "Identité testée en contexte fiche produit",
          "Direction artistique cohérente ads/social/boutique",
          "Ton éditorial unifié sur tous les touchpoints",
          "Design system déployé directement en Liquid"
        ],
        highlight:
          "Le branding e-commerce n'est pas du branding + du e-commerce. C'est une discipline où la marque et la conversion sont indissociables."
      },
      {
        id: "methode",
        kicker: "Méthode",
        title: "Brand et Shopify conçus en parallèle, livrés en continu",
        paragraphs: [
          "Notre méthode branding e-commerce alterne phases brand et phases Shopify. Le territoire créatif est validé, puis testé immédiatement en maquette boutique. Les retours e-commerce influencent l'identité, et vice versa.",
          "Les moodboards incluent des références e-commerce, pas seulement print et branding classique. Les palettes sont testées en contexte panier, checkout et email transactionnel.",
          "Le résultat : une marque qui vit naturellement en boutique, pas une identité adaptée a posteriori."
        ]
      },
      {
        id: "conversion",
        kicker: "Conversion",
        title: "Une marque D2C qui convertit, pas seulement qui séduit",
        paragraphs: [
          "Le branding e-commerce premium ne sacrifie pas la conversion à l'esthétique. Chaque choix créatif est évalué pour son impact sur le parcours d'achat : lisibilité des CTA, hiérarchie des preuves, confiance en checkout.",
          "Sur Nutripure, l'identité scientifique rassure et convertit. Sur Nussa Cosmetics, le premium accessible guide l'achat sans intimidation. Sur Second Step, le storytelling responsable crée une connexion émotionnelle qui se traduit en panier.",
          "Nous mesurons l'impact brand sur la conversion : taux d'ajout au panier, panier moyen, taux de retour client."
        ],
        bullets: [
          "Preuves sociales intégrées au design system",
          "CTA et micro-copy brandés et testés",
          "Packaging unboxing cohérent avec la boutique",
          "Email marketing aligné avec l'identité"
        ]
      },
      {
        id: "lancement",
        kicker: "Lancement",
        title: "Du branding e-commerce au go-live en un seul flux",
        paragraphs: [
          "Lancer une marque D2C avec 42studio, c'est recevoir identité, boutique Shopify, templates social, emails de bienvenue et visuels ads dans un calendrier unifié. Pas de coordination entre prestataires, pas de délais allongés par des allers-retours inter-agences.",
          "Le jour du lancement, tout est cohérent : la pub Instagram mène à une boutique qui ressemble à la pub, l'email de confirmation porte la marque, le packaging prolonge l'expérience.",
          "Post-lancement, nous itérons brand et boutique ensemble selon les données réelles."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Positionnement D2C",
        text: "Territoire de marque, personas acheteurs, analyse concurrence e-commerce et promesse produit."
      },
      {
        step: "02",
        title: "Identité & DA",
        text: "Logo, couleurs, typo, ton éditorial testés en contexte boutique et social."
      },
      {
        step: "03",
        title: "Architecture Shopify",
        text: "Wireframes boutique, merchandising, fiches produit et parcours conversion brandés."
      },
      {
        step: "04",
        title: "Design & développement",
        text: "Maquettes boutique, intégration Liquid, kit social et emails transactionnels."
      },
      {
        step: "05",
        title: "Lancement D2C",
        text: "Go-live boutique, activation social, formation équipes et plan croissance."
      }
    ],
    deliverables: [
      "Plateforme de marque D2C",
      "Identité visuelle complète et kit digital",
      "Maquettes boutique Shopify brandées",
      "Thème Shopify 2.0 sur mesure",
      "Templates fiches produit et collections",
      "Kit social et visuels ads",
      "Emails transactionnels brandés",
      "Charte graphique et formation équipes"
    ],
    whyUs: [
      "Spécialisation D2C : Nussa, Nutripure, Second Step, Apoticari, Sublife Store.",
      "Brand et Shopify dans le même studio : cohérence totale garantie.",
      "Branding orienté conversion, pas esthétique seule.",
      "Lancement clé en main : identité + boutique + social."
    ],
    faqs: [
      {
        question: "Quelle différence entre branding classique et branding e-commerce ?",
        answer:
          "Le branding e-commerce intègre dès le départ les contraintes de la boutique : favicon, CTA, fiches produit, checkout, emails, ads. Chaque élément d'identité est testé en contexte conversion. Le branding classique livre souvent une charte PDF déconnectée de la réalité e-commerce."
      },
      {
        question: "Puis-je faire le branding e-commerce si j'ai déjà une boutique Shopify ?",
        answer:
          "Oui. Nous pouvons créer ou refondre l'identité puis l'appliquer à votre boutique existante. La refonte Shopify simultanée est recommandée pour un impact maximal."
      },
      {
        question: "Combien coûte un projet branding e-commerce complet ?",
        answer:
          "Entre 10 000 et 30 000 € HT pour brand + boutique Shopify. Le budget dépend du volume produits, des templates, du multilingue et des intégrations. Nous chifrons après un échange sur vos objectifs de lancement."
      },
      {
        question: "Le branding e-commerce inclut-il les visuels publicitaires ?",
        answer:
          "Le kit digital inclut templates social et visuels de base. Les campagnes ads complètes (Meta, Google) peuvent être ajoutées en option ou gérées par votre agence media avec nos templates."
      },
      {
        question: "Combien de temps pour un lancement branding e-commerce ?",
        answer:
          "8 à 12 semaines pour brand + boutique. 6 à 8 semaines si l'identité existe déjà et seule la boutique est à créer. Le calendrier dépend du catalogue produits et des contenus."
      },
      {
        question: "42studio accompagne-t-il le branding e-commerce post-lancement ?",
        answer:
          "Oui. Optimisations CRO, nouvelles gammes, campagnes saisonnières, évolutions identité. La plupart de nos clients D2C restent en relation continue après le lancement."
      }
    ],
    related: [
      { label: "Expertise Brand", href: "/brand" },
      { label: "Expertise Shopify", href: "/shopify" },
      { label: "Création boutique Shopify", href: "/creation-boutique-shopify" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["nussa-cosmetics", "second-step", "apoticari"],
    primaryCta: { label: "Lancer ma marque D2C", href: "/contact" },
    ctaBand: "Identité et boutique alignées dès le jour 1. Construisons votre marque e-commerce."
  },
  {
    slug: "optimisation-shopify-conversion",
    keyword: "optimisation Shopify conversion",
    title: "Optimisation Shopify conversion | CRO · UX · 42studio",
    description:
      "Optimisation Shopify conversion par 42studio. Audit CRO, UX mobile, vitesse et tunnel d'achat. Recommandations priorisées et itérations mesurables.",
    h1: "Optimisation Shopify conversion : UX, vitesse et tunnel d'achat.",
    intro:
      "Le CRO Shopify ne se limite pas à changer un bouton. Structure des pages, preuves, mobile, vitesse de chargement et clarté du checkout sont traités ensemble. 42studio audite, priorise et itère pour un impact business mesurable dès les premières semaines.",
    eyebrow: "Shopify · CRO",
    cluster: "shopify",
    keywords: [
      "optimisation Shopify conversion",
      "CRO Shopify",
      "augmenter conversion Shopify",
      "optimisation taux conversion e-commerce",
      "UX Shopify conversion",
      "audit CRO Shopify"
    ],
    serviceName: "Optimisation Shopify conversion",
    proofPoints: ["Audit CRO", "Data-driven", "Mobile-first", "Itératif"],
    stats: [
      ["+25%", "Conversion moyenne"],
      ["Mobile", "Priorité CRO"],
      ["90j", "Plan d'itération"],
      ["Data", "Décisions guidées"]
    ],
    sections: [
      {
        id: "audit",
        kicker: "Audit",
        title: "Cartographier les fuites du parcours d'achat",
        paragraphs: [
          "Avant d'optimiser, il faut comprendre où les visiteurs abandonnent. Notre audit CRO Shopify analyse le parcours complet : home → collection → fiche produit → panier → checkout. Chaque étape est évaluée sur clarté, preuves, friction et performance mobile.",
          "Nous croisons analytics (GA4, Shopify Analytics), heatmaps si disponibles, et analyse heuristique UX. Les recommandations sont priorisées par impact estimé et effort de mise en œuvre.",
          "Sur Studio Boucle Paris et Nutripure, les audits CRO ont identifié des gains rapides : restructuration fiches produit, optimisation mobile checkout, preuves sociales repositionnées."
        ],
        bullets: [
          "Analyse parcours home → checkout",
          "Audit mobile-first et Core Web Vitals",
          "Benchmark sectoriel et best practices",
          "Matrice impact/effort des recommandations"
        ],
        highlight:
          "L'optimisation Shopify conversion commence par des données, pas par des intuitions esthétiques."
      },
      {
        id: "ux-mobile",
        kicker: "UX Mobile",
        title: "70 % du trafic e-commerce est mobile. Votre boutique est-elle prête ?",
        paragraphs: [
          "La majorité des boutiques Shopify sont conçues desktop-first puis adaptées mobile. Résultat : des fiches produit illisibles, des CTA cachés, des temps de chargement pénalisants sur 4G.",
          "Notre optimisation Shopify conversion mobile couvre : taille des touch targets, scroll et hiérarchie, images optimisées, panier drawer fluide, checkout sans friction.",
          "Chaque modification est testée sur devices réels (iPhone, Android milieu de gamme) avant déploiement."
        ]
      },
      {
        id: "fiches-produit",
        kicker: "Fiches produit",
        title: "La fiche produit : le levier CRO le plus sous-exploité",
        paragraphs: [
          "C'est la page où la conversion se joue. Pourtant, la plupart des fiches produit Shopify listent des specs sans storytelling, sans preuves, sans urgence.",
          "Nous restructurons les fiches en blocs conversion : promesse hero, bénéfices émotionnels, preuves (avis, certifications, UGC), détails techniques, cross-sell, FAQ produit.",
          "Sur Apoticari et Nutripure, la refonte des templates produit a généré les gains CRO les plus significatifs."
        ],
        bullets: [
          "Restructuration blocs narratifs produit",
          "Preuves sociales et UGC intégrés",
          "Cross-sell et upsell contextuels",
          "FAQ produit pour lever les objections"
        ]
      },
      {
        id: "iteration",
        kicker: "Itération",
        title: "CRO continu : mesurer, tester, améliorer",
        paragraphs: [
          "L'optimisation Shopify conversion n'est pas un one-shot. Nous proposons des plans d'itération sur 90 jours : déploiement des quick wins, mesure de l'impact, tests A/B sur les hypothèses suivantes.",
          "Chaque itération est documentée avec les métriques avant/après. Vous voyez concrètement le retour sur investissement.",
          "Nous collaborons avec vos outils existants (Klaviyo, Recharge, Judge.me) pour que les optimisations CRO s'intègrent sans conflit."
        ],
        highlight:
          "Objectif : des gains de conversion mesurables en 30 jours, pas un rapport théorique qui finit dans un tiroir."
      }
    ],
    process: [
      {
        step: "01",
        title: "Audit CRO",
        text: "Analyse parcours, analytics, heatmaps et benchmark. Livrable : rapport priorisé avec quick wins."
      },
      {
        step: "02",
        title: "Quick wins",
        text: "Déploiement des optimisations à fort impact et faible effort en 1 à 2 semaines."
      },
      {
        step: "03",
        title: "Restructuration",
        text: "Refonte templates produit, home ou checkout selon les findings de l'audit."
      },
      {
        step: "04",
        title: "Mesure & A/B",
        text: "Monitoring impact, tests A/B sur hypothèses clés et ajustements."
      },
      {
        step: "05",
        title: "Plan continu",
        text: "Roadmap CRO 90 jours avec nouvelles hypothèses et itérations planifiées."
      }
    ],
    deliverables: [
      "Rapport audit CRO complet et priorisé",
      "Analyse parcours mobile et desktop",
      "Benchmark concurrentiel sectoriel",
      "Déploiement quick wins (1 à 2 semaines)",
      "Restructuration templates si nécessaire",
      "Configuration tracking conversion avancé",
      "Rapport impact avant/après",
      "Roadmap CRO 90 jours"
    ],
    whyUs: [
      "Audits et optimisations CRO sur Nutripure, Studio Boucle Paris, Apoticari.",
      "Approche data-driven, pas esthétique seule.",
      "Expertise Liquid pour implémenter les changements, pas seulement les recommander.",
      "Plans d'itération 90 jours avec métriques mesurables."
    ],
    faqs: [
      {
        question: "Combien coûte une optimisation Shopify conversion ?",
        answer:
          "L'audit CRO démarre autour de 1 500 € HT. Les plans d'optimisation complets (audit + implémentation + itération 90 jours) entre 3 000 et 10 000 € HT selon l'ampleur. Nous chifrons après un premier échange sur votre boutique."
      },
      {
        question: "En combien de temps voit-on des résultats en optimisation Shopify conversion ?",
        answer:
          "Les quick wins (CTA, preuves, mobile) montrent un impact en 2 à 4 semaines. Les restructurations templates produit ou checkout prennent 4 à 8 semaines. Nous mesurons l'impact à chaque étape."
      },
      {
        question: "Faut-il refondre toute la boutique pour optimiser la conversion ?",
        answer:
          "Non. Souvent, 80 % des gains viennent de 20 % des pages (fiches produit, home, checkout). L'audit identifie où concentrer l'effort. Une refonte complète n'est recommandée que si le thème limite trop les évolutions."
      },
      {
        question: "Utilisez-vous des outils de A/B testing ?",
        answer:
          "Oui. Nous configurons des tests A/B compatibles avec votre stack (Shopify natif, Google Optimize alternatives, apps tierces). Les tests sont réservés aux hypothèses à fort enjeu après les quick wins."
      },
      {
        question: "L'optimisation Shopify conversion inclut-elle l'amélioration de la vitesse ?",
        answer:
          "Oui. Core Web Vitals font partie de l'audit CRO. Images, fonts, scripts et apps inutiles sont optimisés car la vitesse impacte directement la conversion mobile."
      },
      {
        question: "Pouvez-vous auditer ma boutique sans implémenter les changements ?",
        answer:
          "Oui. L'audit CRO seul est proposé en livrable autonome avec recommandations priorisées. Vous pouvez implémenter en interne ou nous confier l'exécution ensuite."
      }
    ],
    related: [
      { label: "Expertise Shopify", href: "/shopify" },
      { label: "Refonte Shopify", href: "/refonte-shopify" },
      { label: "Agence Shopify France", href: "/agence-shopify-france" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["studio-boucle-paris", "nutripure", "apoticari"],
    primaryCta: { label: "Auditer ma conversion Shopify", href: "/contact" },
    ctaBand: "Votre boutique a du trafic qui n'achète pas ? Identifions les fuites et corrigeons-les."
  },
  {
    slug: "studio-creatif-arras",
    keyword: "studio créatif Arras",
    title: "Studio créatif à Arras : brand, web, motion et 3D",
    description:
      "Studio créatif à Arras : branding, graphisme, sites web, direction artistique, motion design, 3D et vidéo, pour les marques d'ici et d'ailleurs.",
    h1: "Studio créatif à Arras, de la marque à l'image animée.",
    intro:
      "42studio est un studio créatif indépendant basé à Arras. Identité, site web, direction artistique, motion design, 3D et vidéo : une seule direction créative pour tout ce que la marque montre, et la bonne équipe pour chaque projet. Des rendez-vous sur place quand le projet le demande.",
    eyebrow: "Studio · Arras",
    cluster: "local",
    keywords: [
      "studio créatif Arras",
      "agence créative Arras",
      "studio design Arras",
      "studio branding Arras",
      "motion design Arras",
      "vidéo Arras",
      "agence de communication Arras"
    ],
    serviceName: "Studio créatif à Arras",
    proofPoints: ["Arras", "Brand · Digital", "Motion · 3D · Vidéo", "Direction unique"],
    stats: [
      ["Arras", "Studio principal"],
      ["4", "Piliers créatifs"],
      ["7", "Expertises"],
      ["24 h", "Réponse au brief"]
    ],
    sections: [
      {
        id: "studio",
        kicker: "Le studio",
        title: "Un studio créatif à Arras pour les marques ambitieuses",
        paragraphs: [
          "Arras est notre ancrage, pas notre limite. 42studio accompagne des marques des Hauts-de-France comme de Paris ou de l'étranger, avec la même exigence. Pour les marques de la région, c'est simplement plus facile de se voir.",
          "Le studio couvre quatre piliers : Brand (stratégie, identité, graphisme), Digital (sites web et e-commerce), Creative Direction (campagnes, lancements, direction photo et vidéo) et Visual Production (motion design, 3D, vidéo). Une marque peut en prendre un seul ou les enchaîner.",
          "42studio n'est pas une agence 360°. C'est un studio : une direction créative qui décide, et une équipe composée pour chaque projet avec des designers, développeurs, motion designers, artistes 3D et réalisateurs sélectionnés."
        ],
        bullets: [
          "Branding et identité visuelle",
          "Graphisme print et digital",
          "Sites web sur mesure et e-commerce",
          "Direction artistique de campagnes",
          "Motion design, 3D et réalisation vidéo"
        ],
        highlight:
          "One vision. Every touchpoint. Une marque ne doit pas se fragmenter entre ceux qui la dessinent, ceux qui la construisent et ceux qui la filment."
      },
      {
        id: "proximite",
        kicker: "Proximité",
        title: "L'avantage d'un studio créatif de proximité",
        paragraphs: [
          "Travailler avec un studio basé à Arras, c'est pouvoir se voir pour lancer le projet, animer un atelier de marque, valider des maquettes ou préparer un tournage. Le reste du travail avance à distance, avec des points réguliers.",
          "Les tournages et les shootings peuvent se faire à Arras, dans la région ou ailleurs, avec une équipe composée pour le projet.",
          "Pour les marques hors région, le studio travaille à distance avec la même méthode. La proximité est un plus, pas une condition."
        ]
      },
      {
        id: "projets",
        kicker: "Projets",
        title: "Des projets complets ou ciblés",
        paragraphs: [
          "Une identité pour une marque qui se lance, un site pour une offre qui a changé, un film pour un savoir-faire à montrer, des visuels 3D pour un produit pas encore fabriqué : le périmètre suit le besoin, la direction reste la même.",
          "Sites, identités et e-commerce figurent déjà au portfolio, d'Arras Patrimoine à Profitys ou Apoticari. Motion design, 3D et vidéo sont produits avec les talents adaptés à chaque projet, sous la même direction créative.",
          "Chaque projet commence par un échange pour comprendre ce qui doit changer, et se termine par des fichiers et des règles que vos équipes peuvent utiliser."
        ]
      },
      {
        id: "culture",
        kicker: "Culture",
        title: "Montrer le travail avant d'en parler",
        paragraphs: [
          "Le studio refuse le design décoratif. Chaque choix sert une idée : être reconnu, être compris, être retenu.",
          "La méthode est simple : immersion, direction, production, livraison. Pas de couches d'intermédiaires, pas de livrables qui dorment dans un dossier.",
          "Ideas, visuals, impact : c'est l'ordre dans lequel le studio travaille."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Premier échange",
        text: "Votre projet, vos objectifs, vos contraintes et votre calendrier. Réponse sous 24 h."
      },
      {
        step: "02",
        title: "Proposition",
        text: "Périmètre, méthode, planning et devis détaillé par étape."
      },
      {
        step: "03",
        title: "Direction",
        text: "Pistes créatives, validation, puis composition de l'équipe adaptée au projet."
      },
      {
        step: "04",
        title: "Production",
        text: "Design, développement, tournage, animation ou 3D, avec des points réguliers à distance ou à Arras."
      },
      {
        step: "05",
        title: "Livraison",
        text: "Fichiers, formation, documentation, et une suite possible au mois."
      }
    ],
    deliverables: [
      "Stratégie et plateforme de marque",
      "Identité visuelle et guidelines",
      "Supports graphiques print et digitaux",
      "Site web sur mesure",
      "Concepts et direction artistique",
      "Motion design, 3D et vidéos",
      "Déclinaisons pour les réseaux",
      "Rendez-vous à Arras sur demande"
    ],
    whyUs: [
      "Un studio basé à Arras qui travaille aussi pour Paris et l'étranger.",
      "Une direction créative unique, du brief à la livraison.",
      "Une équipe composée pour chaque projet, pas un organigramme à occuper.",
      "Réponse sous 24 h à chaque brief."
    ],
    faqs: [
      {
        question: "Où se trouve 42studio ?",
        answer:
          "Le studio est basé à Arras, dans le Pas-de-Calais. Il travaille avec des marques de la région, de toute la France et de l'étranger, sur place ou à distance."
      },
      {
        question: "Quelles expertises couvre le studio ?",
        answer:
          "Quatre piliers : Brand (stratégie, identité, graphisme), Digital (sites web et e-commerce), Creative Direction (campagnes, lancements, direction photo et vidéo) et Visual Production (motion design, 3D, réalisation vidéo)."
      },
      {
        question: "Peut-on se rencontrer à Arras ?",
        answer:
          "Oui, pour lancer le projet, animer un atelier, valider une étape ou préparer un tournage. Le reste du travail avance à distance avec des points réguliers."
      },
      {
        question: "Avec quels types de clients travaillez-vous ?",
        answer:
          "Des marques, des startups et des projets culturels qui ont une ambition de marque : lancement, repositionnement, levée de fonds, ouverture, nouvelle collection."
      },
      {
        question: "Comment démarrer un projet ?",
        answer:
          "Envoyez votre brief via le formulaire, même incomplet. Réponse sous 24 h avec quelques questions, puis un premier échange pour cadrer le projet."
      },
      {
        question: "Proposez-vous un accompagnement au mois ?",
        answer:
          "Oui. Creative Partner est un accompagnement mensuel pour les marques qui publient, lancent et produisent souvent. Les projets ponctuels sont chiffrés au forfait après cadrage."
      }
    ],
    related: [
      { label: "Graphiste à Arras", href: "/graphiste-arras" },
      { label: "Branding Arras", href: "/branding-arras" },
      { label: "Agence web Arras", href: "/agence-web-arras" },
      { label: "Studio créatif Lille", href: "/studio-creatif-lille" },
      { label: "Motion design", href: "/motion-design" },
      { label: "Studio 3D", href: "/3d" },
      { label: "Réalisation vidéo", href: "/realisation-video" },
      { label: "Tous les services", href: "/services" }
    ],
    caseSlugs: ["arras-patrimoine", "profitys", "apoticari"],
    primaryCta: { label: "Rencontrer le studio", href: "/contact" },
    ctaBand: "Un studio créatif à Arras, une exigence sans frontières. Parlons de votre projet.",
    showLocalBusiness: true
  },
  {
    slug: "studio-creatif-lille",
    keyword: "studio créatif Lille",
    title: "Studio créatif Lille : branding, web, motion, 3D",
    description:
      "42studio accompagne les marques de Lille et de la métropole : branding, sites web, direction artistique, motion design, 3D et vidéo, depuis Arras.",
    h1: "Un studio créatif pour les marques de Lille et de la métropole.",
    intro:
      "42studio est un studio créatif indépendant basé à Arras qui accompagne des marques ambitieuses de toute la métropole lilloise : identité, site web, direction artistique, motion design, 3D et vidéo. Une direction créative unique, la bonne équipe pour chaque projet, et des rendez-vous à Lille pour les étapes clés.",
    eyebrow: "Local · Lille & métropole",
    cluster: "local",
    keywords: [
      "studio créatif Lille",
      "agence créative Lille",
      "studio de création Lille",
      "agence branding Lille",
      "motion design Lille",
      "studio 3D Lille",
      "création site internet Lille",
      "agence vidéo Lille"
    ],
    serviceName: "Studio créatif pour la métropole lilloise",
    proofPoints: ["Lille & métropole", "Brand · Digital", "Motion · 3D · Vidéo", "Direction unique"],
    stats: [
      ["4", "Piliers créatifs"],
      ["7", "Expertises"],
      ["1", "Direction créative"],
      ["24 h", "Réponse au brief"]
    ],
    sections: [
      {
        id: "lille",
        kicker: "Lille",
        title: "Un studio pour la métropole lilloise, sans les couches d'agence",
        paragraphs: [
          "La métropole lilloise compte beaucoup d'agences et de studios. 42studio y propose un modèle précis : un studio indépendant, une direction créative qui tient le projet du brief à la livraison, et une équipe composée selon le besoin.",
          "Le studio travaille avec des marques, des startups et des projets culturels qui veulent une image à la hauteur de leur ambition : une identité qui se reconnaît, un site qui marque, des images qui racontent.",
          "Basé à Arras, le studio se déplace à Lille pour les étapes qui comptent : lancement du projet, ateliers, validations, tournages. Le reste avance à distance, avec des points réguliers."
        ],
        bullets: [
          "Branding et identité visuelle",
          "Graphisme et supports",
          "Sites web sur mesure et e-commerce",
          "Direction artistique de campagnes",
          "Motion design, 3D et réalisation vidéo"
        ],
        highlight:
          "Un studio, pas une agence 360° : une seule direction créative, et les bons talents pour chaque projet."
      },
      {
        id: "expertises",
        kicker: "Expertises",
        title: "De la marque à l'image animée",
        paragraphs: [
          "Brand : stratégie, naming, logo, identité visuelle, guidelines et graphisme. Digital : sites de marque, portfolios, sites de campagne et e-commerce premium.",
          "Creative Direction : concepts de campagne, lancements, identité social, direction photo et vidéo. Visual Production : motion design, packshots et animations 3D, films de marque et contenus pour les réseaux.",
          "Chaque pilier peut être pris seul. Enchaînés, ils évitent que la marque se fragmente entre plusieurs prestataires."
        ]
      },
      {
        id: "deroule",
        kicker: "Déroulé",
        title: "Comment se passe un projet avec un studio basé à Arras",
        paragraphs: [
          "Un premier échange en visio ou à Lille pour comprendre le projet, puis une proposition détaillée par étape.",
          "Les ateliers de marque et les validations importantes peuvent se faire à Lille. Les tournages et shootings se préparent sur place, avec une équipe composée pour le projet.",
          "Entre deux rendez-vous, le travail avance à distance, avec des points réguliers et des livrables partagés."
        ]
      },
      {
        id: "pour-qui",
        kicker: "Pour qui",
        title: "Marques, startups et projets culturels",
        paragraphs: [
          "Une marque qui se lance ou se repositionne. Une startup qui vient de lever et doit changer de dimension. Un lieu, un festival ou un label qui veut une image à la hauteur de sa programmation.",
          "Le point commun : une ambition de marque et l'envie de travailler avec un studio exigeant, plutôt qu'avec une chaîne de prestataires."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Premier échange",
        text: "En visio ou à Lille : votre projet, vos objectifs, votre calendrier. Réponse sous 24 h au brief."
      },
      {
        step: "02",
        title: "Proposition",
        text: "Périmètre, méthode, planning et devis détaillé par étape."
      },
      {
        step: "03",
        title: "Direction créative",
        text: "Pistes, validation, puis composition de l'équipe adaptée."
      },
      {
        step: "04",
        title: "Production",
        text: "Design, développement, tournage, animation ou 3D, avec des points réguliers."
      },
      {
        step: "05",
        title: "Livraison et suite",
        text: "Fichiers, formation, et un accompagnement mensuel possible."
      }
    ],
    deliverables: [
      "Stratégie et plateforme de marque",
      "Identité visuelle et guidelines",
      "Site web sur mesure",
      "Concepts et direction artistique",
      "Vidéos, motion design et images 3D",
      "Déclinaisons pour les réseaux et le print"
    ],
    whyUs: [
      "Un studio basé à Arras, dans les Hauts-de-France.",
      "Des rendez-vous possibles à Lille pour les étapes clés.",
      "Une direction créative unique, la bonne équipe pour chaque projet.",
      "Réponse sous 24 h à chaque brief."
    ],
    faqs: [
      {
        question: "42studio est-il basé à Lille ?",
        answer:
          "Non. Le studio est basé à Arras, dans les Hauts-de-France. Il travaille avec des marques de Lille et de la métropole, avec des rendez-vous sur place pour les étapes clés et un suivi à distance le reste du temps."
      },
      {
        question: "Quelles expertises proposez-vous aux marques lilloises ?",
        answer:
          "Branding et identité visuelle, graphisme, sites web sur mesure et e-commerce, direction artistique, motion design, 3D et réalisation vidéo."
      },
      {
        question: "Pouvez-vous tourner une vidéo ou organiser un shooting à Lille ?",
        answer:
          "Oui. Les tournages et shootings peuvent se faire à Lille ou dans la région, avec une équipe composée pour le projet."
      },
      {
        question: "Travaillez-vous avec des startups ?",
        answer:
          "Oui, notamment après une levée de fonds ou avant un lancement, quand la marque doit changer de dimension."
      },
      {
        question: "Comment démarrer un projet ?",
        answer:
          "Décrivez votre projet via le formulaire, même incomplet. Réponse sous 24 h, puis un premier échange pour cadrer le périmètre."
      }
    ],
    related: [
      { label: "Studio créatif Arras", href: "/studio-creatif-arras" },
      { label: "Branding et identité", href: "/brand" },
      { label: "Site web sur mesure", href: "/web" },
      { label: "Motion design", href: "/motion-design" },
      { label: "Studio 3D", href: "/3d" },
      { label: "Réalisation vidéo", href: "/realisation-video" }
    ],
    caseSlugs: ["apoticari", "profitys", "second-step"],
    primaryCta: { label: "Parler de votre projet", href: "/contact" },
    ctaBand: "Une marque à lancer ou à faire évoluer dans la métropole lilloise ? Parlons-en.",
    showLocalBusiness: true
  },
  {
    slug: "graphiste-arras",
    keyword: "graphiste Arras",
    title: "Graphiste à Arras : logo, identité et print",
    description:
      "Studio de graphisme à Arras : création de logo, identité visuelle, affiches, brochures, packaging et supports digitaux pour les marques de la région.",
    h1: "Graphiste à Arras : un studio pour votre logo, votre identité et vos supports.",
    intro:
      "Vous cherchez un graphiste à Arras ? 42studio est un studio créatif basé à Arras qui conçoit logos, identités visuelles et supports graphiques pour les entreprises, commerces, associations, lieux culturels et marques de la région. Un interlocuteur unique, une exigence de studio, des rendez-vous sur place.",
    eyebrow: "Local · Arras / Graphisme",
    cluster: "local",
    keywords: [
      "graphiste Arras",
      "graphisme Arras",
      "création logo Arras",
      "identité visuelle Arras",
      "studio graphique Arras",
      "graphiste Pas-de-Calais"
    ],
    serviceName: "Graphisme à Arras",
    proofPoints: ["Arras", "Logo & identité", "Print & digital", "Rendez-vous sur place"],
    stats: [
      ["Arras", "Studio"],
      ["Logo", "Identité · Print"],
      ["24 h", "Réponse au brief"],
      ["1", "Interlocuteur"]
    ],
    sections: [
      {
        id: "studio",
        kicker: "Le studio",
        title: "Un studio de graphisme à Arras",
        paragraphs: [
          "42studio est basé à Arras. Pour un logo, une identité ou une série de supports, on peut se voir, regarder les épreuves ensemble et avancer vite.",
          "La différence avec un graphiste freelance : une direction créative qui tient l'ensemble de la marque, et la possibilité de mobiliser d'autres talents quand le projet le demande, illustrateur, photographe ou motion designer.",
          "La même exigence s'applique à une affiche qu'à une identité complète : lisibilité, cohérence, fichiers propres."
        ]
      },
      {
        id: "identite",
        kicker: "Logo et identité",
        title: "Logo, identité visuelle et charte graphique",
        paragraphs: [
          "Création ou refonte de logo, avec ses variantes et une version réduite pour les réseaux et le site. Palette, typographies et règles d'usage réunies dans une charte simple à appliquer.",
          "Pour une marque qui évolue, une refonte peut garder ce qui fait la reconnaissance et corriger le reste."
        ],
        bullets: ["Création et refonte de logo", "Palette et typographies", "Charte graphique", "Guidelines pour vos équipes"]
      },
      {
        id: "supports",
        kicker: "Supports",
        title: "Supports print et digitaux",
        paragraphs: [
          "Affiches, flyers, brochures, catalogues, cartes de visite, packaging, signalétique, visuels pour les réseaux et présentations : chaque support applique l'identité avec précision.",
          "Les fichiers sont préparés pour l'imprimeur de votre choix, à Arras ou ailleurs, et le studio peut suivre le bon à tirer."
        ],
        bullets: ["Affiches et flyers", "Brochures et catalogues", "Packaging et étiquettes", "Visuels pour les réseaux"]
      },
      {
        id: "pour-qui",
        kicker: "Pour qui",
        title: "Entreprises, commerces, associations et lieux culturels",
        paragraphs: [
          "Des entreprises qui veulent une image plus nette, des commerces qui ouvrent ou se renouvellent, des associations et des lieux culturels qui ont besoin de supports réguliers.",
          "Le périmètre s'adapte : un logo seul, une identité complète, ou un accompagnement au mois pour les supports récurrents."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Rendez-vous",
        text: "À Arras ou en visio : votre activité, vos besoins, vos délais."
      },
      {
        step: "02",
        title: "Proposition",
        text: "Périmètre, planning et devis détaillé par élément."
      },
      {
        step: "03",
        title: "Création",
        text: "Pistes graphiques, choix, puis mise au point."
      },
      {
        step: "04",
        title: "Déclinaisons",
        text: "Supports print et digitaux à partir de l'identité validée."
      },
      {
        step: "05",
        title: "Fichiers et impression",
        text: "Fichiers prêts à imprimer, sources et suivi du bon à tirer si besoin."
      }
    ],
    deliverables: [
      "Logo et variantes",
      "Charte graphique",
      "Cartes de visite et papeterie",
      "Affiches et flyers",
      "Brochures et catalogues",
      "Visuels pour les réseaux"
    ],
    whyUs: [
      "Un studio basé à Arras, disponible pour se voir.",
      "La même exigence pour une affiche que pour une identité complète.",
      "Des fichiers prêts pour l'imprimeur, sans surprise au bon à tirer.",
      "Réponse sous 24 h à chaque demande."
    ],
    faqs: [
      {
        question: "Où se trouve le studio ?",
        answer:
          "42studio est basé à Arras, dans le Pas-de-Calais. Les rendez-vous peuvent se faire sur place ou en visio."
      },
      {
        question: "Créez-vous des logos pour les commerces et les petites entreprises ?",
        answer:
          "Oui. Le périmètre s'adapte : un logo et ses variantes, ou une identité complète avec charte et supports."
      },
      {
        question: "Pouvez-vous refaire uniquement nos supports ?",
        answer:
          "Oui, si votre identité existe et fonctionne. Le studio part de vos fichiers et de vos règles, ou fixe quelques règles de base si elles manquent."
      },
      {
        question: "Travaillez-vous avec les imprimeurs d'Arras ?",
        answer:
          "Les fichiers sont préparés selon les exigences de l'imprimeur de votre choix, à Arras ou ailleurs, et le studio peut suivre le bon à tirer."
      },
      {
        question: "Combien coûte un logo ?",
        answer:
          "Le prix dépend du périmètre : un logo seul, un logo avec charte, ou une identité complète avec supports. Le devis détaille chaque élément après un premier échange."
      },
      {
        question: "Faites-vous aussi des sites web ?",
        answer:
          "Oui. Le studio conçoit aussi des sites web sur mesure et peut prolonger votre identité en ligne."
      }
    ],
    related: [
      { label: "Studio créatif Arras", href: "/studio-creatif-arras" },
      { label: "Branding Arras", href: "/branding-arras" },
      { label: "Graphisme et design graphique", href: "/graphisme" },
      { label: "Branding et identité visuelle", href: "/brand" },
      { label: "Agence web Arras", href: "/agence-web-arras" }
    ],
    caseSlugs: ["apoticari", "studio-boucle-paris", "second-step"],
    primaryCta: { label: "Parler de votre projet", href: "/contact?type=graphisme" },
    ctaBand: "Un logo, une identité ou des supports à créer à Arras ? Parlons-en.",
    showLocalBusiness: true
  },
  {
    slug: "branding-arras",
    keyword: "branding Arras",
    title: "Branding Arras | Identité de marque · 42studio",
    description:
      "Branding à Arras par 42studio. Création identité de marque, logo, charte graphique et déploiement digital pour entreprises des Hauts-de-France.",
    h1: "Branding Arras : identité de marque pour les Hauts-de-France.",
    intro:
      "42studio accompagne les entreprises d'Arras et des Hauts-de-France dans leur branding : stratégie de marque, identité visuelle, charte graphique et déploiement web. Un studio local avec une exigence internationale, disponible en présentiel ou en remote.",
    eyebrow: "Brand · Arras · Local",
    cluster: "local",
    keywords: [
      "branding Arras",
      "identité visuelle Arras",
      "création logo Arras",
      "agence branding Arras",
      "charte graphique Arras",
      "design marque Arras"
    ],
    serviceName: "Branding Arras",
    proofPoints: ["Basé à Arras", "Présentiel possible", "Digital-first", "+60 marques"],
    stats: [
      ["Arras", "Studio implanté"],
      ["HD", "Hauts-de-France"],
      ["+60", "Marques brandées"],
      ["24 h", "Réponse locale"]
    ],
    showLocalBusiness: true,
    sections: [
      {
        id: "local",
        kicker: "Ancrage local",
        title: "Un branding Arras ancré dans le territoire, ouvert sur le monde",
        paragraphs: [
          "Les entreprises d'Arras et des Hauts-de-France méritent un accompagnement branding de qualité, sans obligation de se tourner vers Paris ou Lille. 42studio est implanté à Arras et connaît le tissu économique local : commerçants, industriels, startups, acteurs culturels et institutionnels.",
          "Arras Patrimoine illustre notre capacité à traduire un ancrage territorial en identité visuelle crédible et moderne. D'autres clients locaux bénéficient de la même exigence, avec la possibilité de se voir en présentiel à chaque étape clé.",
          "Le branding Arras chez 42studio ne signifie pas branding provincial. C'est un service local avec une culture design et une stack technique comparables aux meilleures agences nationales."
        ],
        bullets: [
          "Ateliers branding en présentiel à Arras",
          "Connaissance écosystème entrepreneurial local",
          "Accompagnement remote pour clients hors ville",
          "Déploiement digital national et international"
        ],
        highlight:
          "Choisir le branding Arras avec 42studio, c'est combiner proximité, réactivité et exigence créative internationale."
      },
      {
        id: "offre",
        kicker: "Offre",
        title: "Identité complète ou évolution ciblée",
        paragraphs: [
          "Notre offre branding Arras couvre la création identité de marque complète (stratégie, logo, charte, kit digital), la refonte identité visuelle pour les marques matures, et les évolutions ciblées (nouveau logo, nouvelle palette, extension sous-marque).",
          "Chaque projet démarre par un atelier de positionnement, en présentiel à Arras si vous le souhaitez. Le territoire créatif est co-construit avant toute exploration esthétique.",
          "Le livrable inclut systématiquement un kit digital activable : templates social, email, composants web."
        ]
      },
      {
        id: "deploiement",
        kicker: "Déploiement",
        title: "Du branding à la présence digitale, sans rupture",
        paragraphs: [
          "Le branding Arras ne s'arrête pas à la charte PDF. 42studio déploie l'identité sur site web, boutique Shopify, réseaux sociaux et supports print si nécessaire.",
          "Pour les commerçants et artisans locaux, un site vitrine brandé suffit. Pour les marques D2C, brand + Shopify en continu. Pour les B2B, brand + site SaaS. Le studio s'adapte.",
          "La cohérence entre identité et présence digitale est notre signature. Votre marque est reconnaissable partout."
        ],
        bullets: [
          "Brand + site vitrine sur mesure",
          "Brand + boutique Shopify",
          "Brand + site SaaS B2B",
          "Supports print et signalétique si besoin"
        ]
      },
      {
        id: "accompagnement",
        kicker: "Accompagnement",
        title: "Un partenaire branding de proximité, disponible dans la durée",
        paragraphs: [
          "Au-delà de la livraison, 42studio reste le partenaire branding des entreprises arrésiennes qui font évoluer leur marque. Nouvelle gamme, recrutement, expansion géographique, événement local : nous adaptons l'identité.",
          "La proximité facilite les échanges informels, les ajustements rapides et la compréhension du contexte business. Vous n'êtes pas un numéro de dossier.",
          "Recommandation et bouche-à-oreille sont notre principal canal d'acquisition locale. La qualité du travail et la relation de confiance font notre réputation à Arras."
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Rencontre à Arras",
        text: "Échange en présentiel ou visio sur votre projet, objectifs et contexte local."
      },
      {
        step: "02",
        title: "Atelier branding",
        text: "Positionnement, concurrence, territoire créatif. Atelier en présentiel à Arras recommandé."
      },
      {
        step: "03",
        title: "Création identité",
        text: "Exploration logo, couleurs, typo. Présentation et validation des directions."
      },
      {
        step: "04",
        title: "Charte & kit",
        text: "Charte graphique, kit digital, templates social et email."
      },
      {
        step: "05",
        title: "Déploiement",
        text: "Application identité sur web, Shopify ou print. Formation et passation."
      }
    ],
    deliverables: [
      "Atelier positionnement (présentiel Arras possible)",
      "Logo et système de signes",
      "Palette chromatique et typographies",
      "Charte graphique PDF et Figma",
      "Kit digital (social, email, web)",
      "Déploiement site ou Shopify si inclus",
      "Fichiers sources (AI, SVG, PNG)",
      "Formation activation marque"
    ],
    whyUs: [
      "Studio implanté à Arras, disponible en présentiel.",
      "Branding digital-first : identités pensées pour le web et l'e-commerce.",
      "Brand, web et Shopify intégrés dans le même studio.",
      "+60 marques, dont des références locales et nationales."
    ],
    faqs: [
      {
        question: "Pourquoi choisir 42studio pour le branding Arras plutôt qu'une agence parisienne ?",
        answer:
          "Proximité, réactivité, connaissance du tissu local et exigence créative internationale. Vous bénéficiez d'un studio senior basé à Arras, sans surcoût parisien ni interlocuteur distant. La qualité est la même, la relation est plus directe."
      },
      {
        question: "Peut-on faire les ateliers branding en présentiel à Arras ?",
        answer:
          "Oui, c'est même recommandé pour le kick-off et l'atelier de positionnement. Les étapes suivantes se font en visio avec des livraisons itératives. Un rendez-vous final en présentiel est possible pour la passation."
      },
      {
        question: "Quel budget pour un projet branding Arras ?",
        answer:
          "Entre 4 000 et 15 000 € HT selon le périmètre. Une identité complète (stratégie + logo + charte + kit digital) démarre autour de 6 000 € HT. Nous chifrons après un premier échange, en présentiel ou visio."
      },
      {
        question: "Le branding Arras inclut-il le site web ?",
        answer:
          "L'identité seule ou brand + web sont possibles. Nous recommandons de les combiner pour garantir la cohérence. 42studio propose des packages branding + site vitrine ou branding + Shopify."
      },
      {
        question: "42studio accompagne-t-il les TPE et commerçants arrésiens ?",
        answer:
          "Oui. Nous adaptons le périmètre et le budget aux TPE, commerçants, artisans et startups locales. L'exigence créative reste la même, le format s'adapte."
      },
      {
        question: "Comment prendre rendez-vous pour un projet branding Arras ?",
        answer:
          "Contactez-nous via le formulaire ou par email. Nous répondons sous 24 h et proposons un premier échange en visio ou directement à Arras selon votre préférence."
      }
    ],
    related: [
      { label: "Studio créatif Arras", href: "/studio-creatif-arras" },
      { label: "Agence web Arras", href: "/agence-web-arras" },
      { label: "Expertise Brand", href: "/brand" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["arras-patrimoine", "nussa-cosmetics"],
    primaryCta: { label: "Discuter branding à Arras", href: "/contact" },
    ctaBand: "Votre marque mérite un branding de qualité, ici à Arras. Prenons un café et parlons-en."
  },
  {
    slug: "site-vitrine-saas",
    keyword: "site vitrine SaaS",
    title: "Site vitrine SaaS : expliquer et convaincre",
    description:
      "Site vitrine SaaS par 42studio. Pages produit structurées, parcours vers la démo, SEO technique et design premium. Kyrent, Digit Solution.",
    h1: "Site vitrine SaaS : expliquer, convaincre, convertir.",
    intro:
      "Un site vitrine SaaS doit traduire une promesse technique en bénéfices business en quelques secondes. 42studio conçoit des sites produit structurés par persona, orientés conversion vers la démo ou l'essai, avec un SEO technique qui génère des leads organiques.",
    eyebrow: "Web · SaaS · Produit",
    cluster: "web",
    keywords: [
      "site vitrine SaaS",
      "site web SaaS",
      "landing page SaaS",
      "site produit B2B",
      "site startup SaaS",
      "création site SaaS"
    ],
    serviceName: "Site vitrine SaaS",
    proofPoints: ["B2B SaaS", "Parcours démo", "SEO technique", "Next.js"],
    stats: [
      ["B2B", "Spécialisation SaaS"],
      ["<3s", "Time to value"],
      ["SEO", "Leads organiques"],
      ["Next.js", "Performance"]
    ],
    sections: [
      {
        id: "enjeu",
        kicker: "Enjeu",
        title: "Le site vitrine SaaS : votre meilleur commercial, disponible 24 h/24",
        paragraphs: [
          "Votre produit est complexe. Votre cible est pressée. Un site vitrine SaaS doit expliquer ce que vous faites, pour qui, avec quelles preuves, en moins de 10 secondes. Sinon, le visiteur part chez un concurrent plus clair.",
          "Kyrent et Digit Solution illustrent notre approche : traduire une offre technique (location, solutions digitales) en parcours lisible pour le décideur ET l'utilisateur final. Deux personas, deux parcours, un même site.",
          "Le site vitrine SaaS n'est pas un brochure PDF en HTML. C'est un outil d'acquisition qui alimente votre pipeline commercial."
        ],
        bullets: [
          "Proposition de valeur claire above the fold",
          "Parcours différenciés par persona",
          "Preuves sociales et cas clients visibles",
          "CTA vers démo, essai ou contact qualifié"
        ],
        highlight:
          "Un site vitrine SaaS performant génère des leads qualifiés en organique et en paid. Le SEO technique est un investissement, pas un coût."
      },
      {
        id: "structure",
        kicker: "Structure",
        title: "Architecture de contenu orientée conversion et SEO",
        paragraphs: [
          "Nous structurons le site vitrine SaaS en pages stratégiques : homepage (promesse + preuves + CTA), pages produit par use case, page pricing, page clients/cas d'usage, page à propos, blog SEO.",
          "Chaque page a un mot-clé cible, une intention de recherche et un objectif conversion. Le maillage interne guide le visiteur du blog vers la démo, de la homepage vers le pricing.",
          "Les contenus techniques (API, intégrations, sécurité) sont accessibles sans noyer le décideur non technique."
        ]
      },
      {
        id: "design",
        kicker: "Design",
        title: "Design produit premium sans sacrifier la clarté",
        paragraphs: [
          "Le design d'un site vitrine SaaS doit inspirer confiance et modernité sans devenir décoratif. Interfaces produit en mockup, animations subtiles, typographie lisible, hiérarchie visuelle claire.",
          "Next.js permet des démos interactives, des calculateurs ROI, des comparatifs dynamiques. Le site devient une extension de l'expérience produit.",
          "Responsive impeccable : le décideur consulte souvent depuis mobile entre deux réunions."
        ],
        bullets: [
          "Mockups produit et captures interface",
          "Sections preuves animées (logos clients, métriques)",
          "Calculateurs ROI ou configurateurs si pertinent",
          "Design system réutilisable pour le produit"
        ]
      },
      {
        id: "seo-leads",
        kicker: "SEO & Leads",
        title: "Générer des leads organiques avec un site vitrine SaaS optimisé",
        paragraphs: [
          "Le SEO technique est intégré dès la structure : URLs propres, meta uniques, schema Organization et SoftwareApplication, sitemap, blog indexable, Core Web Vitals au vert.",
          "Nous identifions les requêtes stratégiques de votre secteur et construisons des pages et articles qui captent l'intention de recherche. Le blog SaaS alimente le pipeline sur le long terme.",
          "Post-lancement, nous monitorons les positions, le trafic organique et le taux de conversion démo pour itérer."
        ],
        highlight:
          "Kyrent et Digit Solution : des sites vitrine SaaS conçus pour l'acquisition organique et la conversion vers la prise de contact qualifiée."
      }
    ],
    process: [
      {
        step: "01",
        title: "Cadrage produit",
        text: "Compréhension offre, personas (décideur, utilisateur), concurrence et objectifs acquisition."
      },
      {
        step: "02",
        title: "Architecture contenu",
        text: "Structure pages, parcours conversion, mots-clés SEO et wireframes."
      },
      {
        step: "03",
        title: "Design UI",
        text: "Maquettes haute fidélité, mockups produit, animations et validation responsive."
      },
      {
        step: "04",
        title: "Développement Next.js",
        text: "Intégration, CMS blog, SEO technique, formulaires démo et recette."
      },
      {
        step: "05",
        title: "Lancement & SEO",
        text: "Mise en production, soumission indexation, monitoring positions et optimisation continue."
      }
    ],
    deliverables: [
      "Cadrage personas et architecture contenu",
      "Wireframes parcours conversion",
      "Maquettes UI desktop et mobile",
      "Développement Next.js complet",
      "Pages produit, pricing, clients, à propos",
      "Blog CMS avec structure SEO",
      "Formulaires démo et tracking conversion",
      "SEO technique (schema, sitemap, meta) et documentation"
    ],
    whyUs: [
      "Sites SaaS livrés pour Kyrent et Digit Solution.",
      "Expertise produit : nous comprenons les enjeux B2B SaaS.",
      "SEO technique intégré pour générer des leads organiques.",
      "Stack Next.js performante, pas de WordPress limité."
    ],
    faqs: [
      {
        question: "Combien coûte un site vitrine SaaS sur mesure ?",
        answer:
          "Entre 8 000 et 25 000 € HT selon le nombre de pages, les mockups produit, le blog, le multilingue et le branding inclus. Un site vitrine SaaS standard (8 à 12 pages + blog) démarre autour de 10 000 € HT."
      },
      {
        question: "Combien de temps pour créer un site vitrine SaaS ?",
        answer:
          "8 à 12 semaines pour un site complet. 6 à 8 semaines si l'identité existe déjà. Le calendrier dépend du volume de contenus et des validations."
      },
      {
        question: "Le site vitrine SaaS inclut-il le branding ?",
        answer:
          "L'identité seule ou brand + site sont possibles. Pour les startups SaaS en lancement, nous recommandons brand + site en continu. Pour les SaaS matures, la refonte site suffit souvent."
      },
      {
        question: "Comment le site vitrine SaaS génère-t-il des leads ?",
        answer:
          "Parcours optimisés vers démo ou essai, SEO organique sur requêtes sectorielles, preuves sociales visibles, contenus blog indexables. Nous configurons le tracking pour mesurer chaque source de leads."
      },
      {
        question: "Pouvez-vous intégrer un outil de booking démo (Calendly, HubSpot) ?",
        answer:
          "Oui. Intégration Calendly, HubSpot, Intercom ou tout outil de votre stack. Le parcours visiteur → démo est testé et optimisé."
      },
      {
        question: "Le site vitrine SaaS sera-t-il administrable sans développeur ?",
        answer:
          "Oui. CMS headless (Sanity, Contentful) pour le blog et les pages éditoriales. Vos équipes marketing publient du contenu SEO en autonomie. Formation incluse."
      }
    ],
    related: [
      { label: "Expertise Produit", href: "/produit" },
      { label: "Expertise Web", href: "/web" },
      { label: "Création site sur mesure", href: "/creation-site-internet-sur-mesure" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["kyrent", "digit-solution"],
    primaryCta: { label: "Créer mon site SaaS", href: "/contact" },
    ctaBand: "Votre produit mérite un site qui vend. Construisons votre vitrine SaaS."
  },
  {
    slug: "refonte-identite-visuelle",
    keyword: "refonte identité visuelle",
    title: "Refonte d'identité visuelle sans perdre l'ADN",
    description:
      "Refonte d'identité visuelle par 42studio : repositionnement, logo, charte modernisée et déploiement. Évoluer sans effacer ce qui fait la reconnaissance.",
    h1: "Refonte identité visuelle : moderniser sans perdre l'ADN.",
    intro:
      "Votre identité visuelle ne vous ressemble plus, ou ne suit plus votre ambition ? La refonte identité visuelle est l'occasion de moderniser votre image, clarifier votre positionnement et déployer une marque cohérente sur tous vos points de contact. 42studio accompagne l'évolution, pas la révolution aveugle.",
    eyebrow: "Brand · Refonte",
    cluster: "brand",
    keywords: [
      "refonte identité visuelle",
      "refonte logo",
      "modernisation charte graphique",
      "rebranding entreprise",
      "évolution identité de marque",
      "refonte branding"
    ],
    serviceName: "Refonte identité visuelle",
    proofPoints: ["ADN préservé", "Repositionnement", "Déploiement digital", "Kit complet"],
    stats: [
      ["+60", "Refontes et créations"],
      ["100%", "Activables"],
      ["Digital", "Déploiement inclus"],
      ["System", "Design system"]
    ],
    sections: [
      {
        id: "quand",
        kicker: "Quand refondre",
        title: "Les signes qu'une refonte identité visuelle s'impose",
        paragraphs: [
          "Votre logo a 10 ans et ne fonctionne plus en favicon. Votre palette est dépassée. Votre charte n'a jamais été déployée en digital. Vous avez fusionné, pivoté ou internationalisé. Vos concurrents ont l'air plus modernes. Ces signaux indiquent qu'une refonte identité visuelle est nécessaire.",
          "Mais refondre ne signifie pas tout effacer. L'enjeu est de préserver la reconnaissance acquise tout en modernisant le système visuel. Nutripure, Profitys et d'autres marques ont évolué sans perdre leur ADN.",
          "42studio distingue refonte évolutive (ajustements logo, palette, typo) et refonte complète (repositionnement + nouveau système). L'audit initial détermine la bonne approche."
        ],
        bullets: [
          "Audit identité actuelle et perception",
          "Analyse concurrence et tendances sectorielles",
          "Interviews stakeholders et clients si possible",
          "Recommandation refonte évolutive ou complète"
        ],
        highlight:
          "Une refonte identité visuelle réussie modernise sans désorienter. Vos clients doivent reconnaître la marque, pas la retrouver par hasard."
      },
      {
        id: "methode",
        kicker: "Méthode",
        title: "Repositionner avant de redesigner",
        paragraphs: [
          "Comme pour une création, la refonte identité visuelle commence par le fond. Votre positionnement a-t-il changé ? Votre cible a-t-elle évolué ? Votre promesse est-elle toujours claire ? Ces questions guident l'amplitude de la refonte.",
          "Parfois, un repositionnement éditorial suffit et l'identité visuelle n'a besoin que d'ajustements. D'autres fois, le pivot business exige un nouveau territoire créatif complet.",
          "Nous co-construisons la direction avec vos équipes dirigeantes, marketing et commerciales pour garantir l'adhésion interne."
        ]
      },
      {
        id: "execution",
        kicker: "Exécution",
        title: "Nouveau système visuel, déploiement planifié",
        paragraphs: [
          "La refonte aboutit à un design system complet : logo modernisé et variantes, palette actualisée, typographies contemporaines, règles d'usage mises à jour, kit digital neuf.",
          "Le déploiement est planifié : site web, Shopify, social, print, signalétique. Un calendrier de transition évite la cohabitation chaotique ancienne et nouvelle identité.",
          "Nous produisons un guide de transition pour vos équipes et prestataires : quand basculer, quels fichiers utiliser, comment gérer les supports existants."
        ],
        bullets: [
          "Logo modernisé avec variantes",
          "Palette et typographies actualisées",
          "Charte graphique refondue",
          "Kit digital et plan de déploiement"
        ]
      },
      {
        id: "deploiement",
        kicker: "Déploiement",
        title: "Appliquer la refonte identité visuelle sur tous les touchpoints",
        paragraphs: [
          "Une refonte identité visuelle livrée sans déploiement est un exercice théorique. 42studio applique la nouvelle identité sur site web, boutique Shopify, templates email, profils social et supports print si inclus.",
          "Sur Profitys, la refonte identité visuelle s'est accompagnée d'une migration site Wix vers Framer. Sur d'autres projets, le Shopify a été reskiné en parallèle.",
          "Post-déploiement, nous restons disponibles pour les ajustements et les extensions (nouvelle gamme, marché international, sous-marque)."
        ],
        highlight:
          "La refonte identité visuelle 42studio inclut le déploiement digital. Votre nouvelle marque est live, pas dans un dossier."
      }
    ],
    process: [
      {
        step: "01",
        title: "Audit & repositionnement",
        text: "Analyse identité actuelle, perception, concurrence et amplitude de refonte recommandée."
      },
      {
        step: "02",
        title: "Direction créative",
        text: "Territoire créatif actualisé, explorations logo et système visuel. 2 à 3 directions."
      },
      {
        step: "03",
        title: "Construction système",
        text: "Affinement identité, design system, déclinaisons et tests contextuels digital."
      },
      {
        step: "04",
        title: "Charte & kit",
        text: "Charte refondue, kit digital, guide de transition et plan de déploiement."
      },
      {
        step: "05",
        title: "Déploiement",
        text: "Application sur web, Shopify, social. Formation équipes et suivi post-bascule."
      }
    ],
    deliverables: [
      "Audit identité actuelle et recommandations",
      "Repositionnement éditorial si nécessaire",
      "Logo modernisé et variantes",
      "Palette, typographies et design system refondus",
      "Charte graphique PDF et Figma",
      "Kit digital (social, email, web)",
      "Plan de déploiement et guide de transition",
      "Application sur web/Shopify si inclus et formation"
    ],
    whyUs: [
      "Refontes réussies : Profitys, évolutions Nutripure et marques D2C.",
      "Approche évolutive : moderniser sans effacer la reconnaissance.",
      "Déploiement digital inclus : site et Shopify reskinés en parallèle.",
      "Design system activable par vos équipes dès la livraison."
    ],
    faqs: [
      {
        question: "Quelle différence entre refonte identité visuelle et rebranding complet ?",
        answer:
          "La refonte identité visuelle modernise le système graphique (logo, couleurs, typo, charte). Le rebranding complet inclut aussi un repositionnement stratégique, un changement de nom ou un pivot business. 42studio propose les deux selon l'amplitude nécessaire."
      },
      {
        question: "Combien coûte une refonte identité visuelle ?",
        answer:
          "Entre 5 000 et 18 000 € HT selon l'amplitude (évolutive vs complète), le déploiement digital inclus et le volume de supports. Une refonte évolutive démarre autour de 5 000 € HT, une refonte complète avec déploiement web autour de 10 000 € HT."
      },
      {
        question: "Combien de temps dure une refonte identité visuelle ?",
        answer:
          "4 à 6 semaines pour une refonte évolutive. 6 à 10 semaines pour une refonte complète avec déploiement web. Le calendrier dépend de l'amplitude et du rythme de validation."
      },
      {
        question: "Faut-il changer le logo lors d'une refonte identité visuelle ?",
        answer:
          "Pas forcément. Parfois, un affinement (simplification, modernisation typographique) suffit. L'audit détermine si le logo actuel a encore de la valeur de reconnaissance ou s'il limite l'évolution de la marque."
      },
      {
        question: "Comment gérer la transition entre ancienne et nouvelle identité ?",
        answer:
          "Nous produisons un plan de déploiement avec calendrier de bascule par touchpoint : site web, social, print, signalétique. Un guide de transition aide vos équipes à appliquer la nouvelle identité sans cohabitation chaotique."
      },
      {
        question: "La refonte identité visuelle inclut-elle la refonte du site web ?",
        answer:
          "Elle peut être incluse ou séparée. Nous recommandons de les combiner pour un impact maximal. 42studio propose des packages refonte identité + site ou refonte identité + Shopify."
      }
    ],
    related: [
      { label: "Expertise Brand", href: "/brand" },
      { label: "Création identité de marque", href: "/creation-identite-de-marque" },
      { label: "Refonte site vitrine", href: "/refonte-site-vitrine" },
      { label: "Pilier Shopify, branding & web", href: "/agence-shopify-branding-web" },
      { label: "Réalisations", href: "/work" },
      { label: "Contact", href: "/contact" }
    ],
    caseSlugs: ["profitys", "nutripure"],
    primaryCta: { label: "Moderniser mon identité", href: "/contact" },
    ctaBand: "Votre marque a évolué, votre identité aussi. Modernisons-la sans perdre ce qui compte."
  }
];

export function getSeoKeywordPage(slug: string): SeoKeywordPage | undefined {
  return seoKeywordPages.find((page) => page.slug === slug);
}

export function getSeoKeywordSlugs(): string[] {
  return seoKeywordPages.map((page) => page.slug);
}
