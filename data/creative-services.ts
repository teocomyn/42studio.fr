// Services créatifs 42studio : source unique des 7 pages de services
// (branding, graphisme, site web, direction artistique, motion design, 3D, vidéo).
// Règles éditoriales : voix 42STUDIO (court, concret), aucun chiffre de résultat,
// aucun prix non arbitré, pas de vocabulaire growth/SEO/CRO (réservé à EXPERAISE).
// Les durées citées viennent des portes d'entrée validées (Brand Sprint, Digital
// Experience, Brand × Digital).

export type CreativePillarId = "brand" | "digital" | "creative-direction" | "visual-production";

export type CreativeService = {
  slug: string;
  pillar: CreativePillarId;
  navLabel: string;
  name: string;
  serviceType: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  definition: string;
  keywords: string[];
  formats: Array<{ name: string; text: string }>;
  useCases: Array<{ title: string; text: string }>;
  process: Array<{ step: string; title: string; text: string }>;
  deliverables: string[];
  budgetFactors: string[];
  offer: { name: string; text: string };
  faqs: Array<{ question: string; answer: string }>;
  caseSlugs?: string[];
  relatedServices: string[];
  furtherReading: Array<{ label: string; href: string }>;
  contactType: string;
  ogImage: string;
};

export type CreativePillar = {
  id: CreativePillarId;
  index: string;
  title: string;
  output: string;
  text: string;
  services: string[];
};

export const creativePillars: CreativePillar[] = [
  {
    id: "brand",
    index: "01",
    title: "Brand",
    output: "Une marque reconnaissable",
    text: "Stratégie, naming, logo, identité visuelle, typographie, couleurs, guidelines et supports graphiques.",
    services: ["brand", "graphisme"]
  },
  {
    id: "digital",
    index: "02",
    title: "Digital",
    output: "Une expérience digitale mémorable",
    text: "Sites de marque, portfolios, sites de campagne, e-commerce premium, UI, creative development et motion.",
    services: ["web"]
  },
  {
    id: "creative-direction",
    index: "03",
    title: "Creative Direction",
    output: "Un langage visuel cohérent",
    text: "Concepts de campagne, lancements, identité social et éditoriale, direction photo, vidéo, motion et 3D.",
    services: ["direction-artistique"]
  },
  {
    id: "visual-production",
    index: "04",
    title: "Visual Production",
    output: "Les assets, produits par le réseau",
    text: "Motion design, 3D, CGI, réalisation vidéo, photo et assets de campagne pour tous les formats.",
    services: ["motion-design", "3d", "realisation-video"]
  }
];

// Paragraphe commun : le modèle du studio (positionnement validé).
export const studioModel =
  "42studio est un studio créatif indépendant. Une seule direction créative porte chaque projet, du brief à la livraison, et l'équipe se compose selon le besoin avec un réseau sélectionné de designers, développeurs, motion designers, artistes 3D, réalisateurs et photographes. Un interlocuteur, la bonne équipe pour chaque projet.";

export const creativeServices: CreativeService[] = [
  {
    slug: "brand",
    pillar: "brand",
    navLabel: "Branding",
    name: "Branding et identité visuelle",
    serviceType: "Branding",
    title: "Branding et identité visuelle, du logo au système",
    description:
      "Stratégie, naming, logo, typographies, couleurs et guidelines : 42studio conçoit des identités visuelles pensées pour vivre partout, du print au digital.",
    eyebrow: "01 · Brand / Identité",
    h1: "Une marque reconnaissable, partout où elle apparaît.",
    intro:
      "Le branding, c'est tout ce qui permet de reconnaître une marque avant même de lire son nom : un positionnement clair, un signe, des typographies, des couleurs, un ton. 42studio conçoit ces identités comme des systèmes, pour qu'elles tiennent aussi bien sur un packaging que sur un site, une campagne ou une application.",
    definition:
      "Le branding désigne la construction de l'identité d'une marque : sa stratégie (positionnement, promesse, ton), son nom et son identité visuelle (logo, typographies, couleurs, grille, images), réunis dans des guidelines. Une identité visuelle réussie se reconnaît même sans le logo et reste cohérente d'un support à l'autre.",
    keywords: [
      "branding",
      "identité visuelle",
      "création identité visuelle",
      "agence branding",
      "studio branding",
      "plateforme de marque",
      "création de logo",
      "charte graphique"
    ],
    formats: [
      {
        name: "Stratégie de marque",
        text: "Positionnement, promesse, territoire et ton de voix. La base qui évite de choisir un logo parce qu'il est à la mode."
      },
      {
        name: "Naming",
        text: "Pistes de noms, critères de choix et premières vérifications de disponibilité. Le dépôt de marque reste l'affaire d'un conseil en propriété industrielle."
      },
      {
        name: "Logo et monogramme",
        text: "Un signe principal, ses variantes et une version réduite qui tient en favicon comme en avatar."
      },
      {
        name: "Système visuel",
        text: "Typographies, palette, grille, iconographie, principes photo et principes de mouvement."
      },
      {
        name: "Guidelines et design system",
        text: "Les règles d'usage, les gabarits et les composants qui permettent à vos équipes et à vos prestataires de rester cohérents."
      },
      {
        name: "Déclinaisons",
        text: "Papeterie, présentation, templates social, packaging ou signalétique, selon le périmètre du projet."
      }
    ],
    useCases: [
      {
        title: "Vous lancez une marque",
        text: "Il faut un nom, un territoire et une identité prête pour le site, les réseaux et le premier packaging."
      },
      {
        title: "Votre marque a changé plus vite que son image",
        text: "Nouvelle offre, nouveau marché, levée de fonds : l'identité actuelle ne raconte plus la bonne histoire."
      },
      {
        title: "Votre image est éclatée",
        text: "Chaque support a été fait par quelqu'un de différent. Il manque un système commun que tout le monde applique."
      },
      {
        title: "Un lancement approche",
        text: "Site, campagne, produit : mieux vaut poser l'identité avant de produire les supports, pas après."
      }
    ],
    process: [
      {
        step: "01",
        title: "Immersion",
        text: "Entretiens, lecture du marché et de la concurrence, audit de l'existant. On cherche ce qui rend la marque différente."
      },
      {
        step: "02",
        title: "Stratégie",
        text: "Positionnement, promesse et ton, réunis dans une plateforme courte et utilisable, validée avant de dessiner."
      },
      {
        step: "03",
        title: "Pistes créatives",
        text: "Des directions visuelles argumentées, montrées en situation réelle : site, packaging, réseaux, signalétique."
      },
      {
        step: "04",
        title: "Système",
        text: "La piste retenue devient un système complet : logo et variantes, typographies, couleurs, grille, iconographie."
      },
      {
        step: "05",
        title: "Guidelines et livraison",
        text: "Guidelines, fichiers sources et gabarits. Tout est prêt pour vos équipes et vos prestataires."
      }
    ],
    deliverables: [
      "Plateforme de marque",
      "Logo, variantes et monogramme",
      "Palette et typographies",
      "Grille et principes de mise en page",
      "Iconographie et principes photo",
      "Guidelines de marque",
      "Fichiers sources et exports",
      "Templates social et présentation"
    ],
    budgetFactors: [
      "Le point de départ : création, refonte ou évolution",
      "La part de stratégie et de naming",
      "Le nombre de supports à décliner",
      "Le niveau de détail des guidelines et du design system",
      "Le calendrier de lancement"
    ],
    offer: {
      name: "Brand Sprint",
      text: "Créer ou repositionner une marque en 2 à 3 semaines. Si le site suit, le format Brand × Digital enchaîne marque et site en 4 à 8 semaines."
    },
    faqs: [
      {
        question: "Quelle différence entre branding et identité visuelle ?",
        answer:
          "Le branding englobe toute la construction de la marque : positionnement, promesse, nom, ton et expérience. L'identité visuelle en est la partie visible : logo, typographies, couleurs, images. Un logo sans stratégie reste une décoration."
      },
      {
        question: "Que contient une identité visuelle complète ?",
        answer:
          "Un logo et ses variantes, une palette, des typographies, une grille, des principes d'image et d'iconographie, des exemples d'application et des guidelines qui expliquent comment tout utiliser."
      },
      {
        question: "Combien de temps faut-il pour créer une identité de marque ?",
        answer:
          "Pour une création ou un repositionnement, le Brand Sprint dure en général 2 à 3 semaines. Un projet qui enchaîne la marque et le site demande plutôt 4 à 8 semaines. Le planning exact est fixé dans la proposition."
      },
      {
        question: "Combien coûte une identité visuelle ?",
        answer:
          "Le budget dépend du point de départ, de la part de stratégie, du nombre de supports et du niveau de détail des guidelines. 42studio chiffre chaque projet après un premier échange et envoie une proposition détaillée par étape."
      },
      {
        question: "Peut-on faire évoluer une marque existante sans tout jeter ?",
        answer:
          "Oui. Une refonte peut garder ce qui fait la reconnaissance, un nom, une couleur, une forme, et corriger le reste. On commence par un audit de ce qui fonctionne déjà."
      },
      {
        question: "Travaillez-vous avec des marques hors d'Arras ?",
        answer:
          "Oui. Le studio est basé à Arras et travaille avec des marques partout en France et à l'étranger, en visio ou sur place selon les étapes du projet."
      }
    ],
    caseSlugs: ["apoticari", "second-step", "studio-boucle-paris", "nussa-cosmetics", "sublife-store", "profitys"],
    relatedServices: ["graphisme", "direction-artistique", "web"],
    furtherReading: [
      { label: "Création d'identité de marque", href: "/creation-identite-de-marque" },
      { label: "Refonte d'identité visuelle", href: "/refonte-identite-visuelle" },
      { label: "Agence branding France", href: "/agence-branding-france" },
      { label: "Branding e-commerce", href: "/branding-e-commerce" },
      { label: "Guide : que contient une identité visuelle", href: "/journal/identite-visuelle-contenu" }
    ],
    contactType: "brand",
    ogImage: "/og/brand.jpg"
  },
  {
    slug: "graphisme",
    pillar: "brand",
    navLabel: "Graphisme",
    name: "Graphisme et design graphique",
    serviceType: "Design graphique",
    title: "Graphisme et design graphique : print et digital",
    description:
      "Affiches, éditions, packaging, supports digitaux et templates social : 42studio met votre identité en page avec un graphisme précis et prêt à produire.",
    eyebrow: "01 · Brand / Graphisme",
    h1: "Du graphisme qui prolonge la marque, support après support.",
    intro:
      "Une identité ne vit que si elle est bien déclinée. Affiche, brochure, packaging, présentation, visuels pour les réseaux : 42studio conçoit des supports graphiques qui appliquent le système de la marque avec précision, prêts à imprimer ou à publier.",
    definition:
      "Le graphisme, ou design graphique, organise textes, images, typographies et couleurs pour transmettre un message sur un support donné : affiche, édition, packaging, écran. Là où l'identité visuelle fixe les règles, le graphisme les applique support par support, avec une exigence de lisibilité et de fabrication.",
    keywords: [
      "graphisme",
      "graphiste",
      "design graphique",
      "studio de graphisme",
      "studio graphique",
      "création affiche",
      "mise en page brochure",
      "création packaging"
    ],
    formats: [
      {
        name: "Édition et print",
        text: "Brochures, catalogues, rapports, magazines, cartes et papeterie. Mise en page, préparation des fichiers et suivi avec l'imprimeur."
      },
      {
        name: "Affiches et campagnes",
        text: "Affiches, kakémonos, habillages d'événements et déclinaisons grand format."
      },
      {
        name: "Packaging et étiquettes",
        text: "Mise en page produit, hiérarchie des informations et déclinaisons par gamme."
      },
      {
        name: "Supports digitaux",
        text: "Visuels pour les réseaux, bannières, newsletters, présentations et decks."
      },
      {
        name: "Illustration et iconographie",
        text: "Pictogrammes, illustrations, motifs et systèmes graphiques propres à la marque."
      },
      {
        name: "Templates",
        text: "Gabarits Figma, InDesign ou Canva pour que vos équipes produisent en autonomie sans sortir du cadre."
      }
    ],
    useCases: [
      {
        title: "L'identité existe, les supports ne suivent pas",
        text: "Chaque document réinvente sa mise en page. Il faut des supports qui appliquent enfin la marque."
      },
      {
        title: "Un événement, un lancement, une campagne",
        text: "Il faut produire vite une série de supports cohérents, du print aux réseaux."
      },
      {
        title: "Un document qui compte",
        text: "Rapport annuel, dossier de presse, deck de levée : la mise en page fait partie du message."
      },
      {
        title: "Vos équipes produisent seules",
        text: "Des gabarits propres leur évitent de repartir d'une page blanche à chaque publication."
      }
    ],
    process: [
      {
        step: "01",
        title: "Brief et inventaire",
        text: "Supports, formats, contraintes techniques, délais d'impression ou de publication."
      },
      {
        step: "02",
        title: "Pièce maîtresse",
        text: "Une première pièce pose la direction : mise en page type, hiérarchie, rythme. Elle est validée avant la série."
      },
      {
        step: "03",
        title: "Déclinaison",
        text: "La série complète est produite à partir de la pièce validée, format par format."
      },
      {
        step: "04",
        title: "Préparation",
        text: "Fichiers prêts à imprimer ou à publier : fonds perdus, profils couleur, exports aux bons formats."
      },
      {
        step: "05",
        title: "Livraison",
        text: "Sources, exports et gabarits éditables, avec des règles simples pour la suite."
      }
    ],
    deliverables: [
      "Maquettes validées",
      "Fichiers prêts à imprimer",
      "Exports web et réseaux",
      "Fichiers sources",
      "Gabarits éditables",
      "Suivi du bon à tirer si besoin"
    ],
    budgetFactors: [
      "Le nombre de supports et de formats",
      "La part de création par rapport à la déclinaison",
      "L'illustration ou la photo à produire",
      "Les contraintes de fabrication",
      "Les délais d'impression ou de lancement"
    ],
    offer: {
      name: "Creative Partner",
      text: "Pour un flux régulier de supports, un accompagnement mensuel évite de repartir de zéro à chaque commande. Les séries ponctuelles sont chiffrées au projet."
    },
    faqs: [
      {
        question: "Quelle différence entre un graphiste et un studio de graphisme ?",
        answer:
          "Un graphiste freelance travaille seul sur les supports. Un studio comme 42studio garde une direction créative unique et mobilise d'autres profils quand il le faut : illustrateur, photographe, motion designer. Pour un support isolé, un freelance suffit souvent. Pour une série cohérente liée à une identité, le studio est plus adapté."
      },
      {
        question: "Peut-on vous confier des supports sans refaire toute l'identité ?",
        answer:
          "Oui, si l'identité existe et fonctionne. On part de vos guidelines. Si elles manquent, on commence par fixer quelques règles de base pour que les supports restent cohérents."
      },
      {
        question: "Préparez-vous les fichiers pour l'imprimeur ?",
        answer:
          "Oui. Les fichiers sont livrés selon les exigences de votre imprimeur : formats, fonds perdus, profils couleur, polices vectorisées. Le studio peut aussi suivre le bon à tirer."
      },
      {
        question: "Fournissez-vous des modèles modifiables ?",
        answer:
          "Oui. Selon vos outils, les gabarits sont livrés en Figma, InDesign ou Canva, avec des règles simples pour que vos équipes restent dans le cadre."
      },
      {
        question: "Combien coûte un travail de graphisme ?",
        answer:
          "Le prix dépend du nombre de supports, de la part de création et des contraintes de fabrication. Le devis détaille chaque support. Pour un flux régulier, un accompagnement mensuel est souvent plus simple à piloter."
      },
      {
        question: "Travaillez-vous avec les entreprises d'Arras et de la région ?",
        answer:
          "Oui. Le studio est basé à Arras et travaille avec des marques des Hauts-de-France comme d'ailleurs. Les rendez-vous peuvent se faire sur place."
      }
    ],
    caseSlugs: ["apoticari", "studio-boucle-paris", "second-step"],
    relatedServices: ["brand", "direction-artistique", "motion-design"],
    furtherReading: [
      { label: "Graphiste à Arras", href: "/graphiste-arras" },
      { label: "Création d'identité de marque", href: "/creation-identite-de-marque" },
      { label: "Guide : que contient une identité visuelle", href: "/journal/identite-visuelle-contenu" }
    ],
    contactType: "graphisme",
    ogImage: "/og/graphisme.jpg"
  },
  {
    slug: "web",
    pillar: "digital",
    navLabel: "Site web",
    name: "Création de site web sur mesure",
    serviceType: "Web design",
    title: "Création de site web sur mesure : design et build",
    description:
      "Sites de marque, sites vitrines, portfolios et e-commerce premium : 42studio conçoit et développe des sites rapides, mémorables et simples à faire vivre.",
    eyebrow: "02 · Digital / Site web",
    h1: "Des sites qui ressemblent à votre marque, et qui tiennent la route.",
    intro:
      "Un site est souvent le premier vrai contact avec une marque. 42studio conçoit et développe des sites sur mesure où la direction artistique, le mouvement et la technique avancent ensemble : une expérience mémorable, rapide, accessible et facile à faire vivre par vos équipes.",
    definition:
      "Un site web sur mesure est conçu à partir de la marque et des contenus, plutôt qu'à partir d'un thème générique. Structure, design, animations et développement sont pensés ensemble. Le résultat est un site plus identifiable, plus rapide et plus simple à faire évoluer qu'un modèle adapté au forceps.",
    keywords: [
      "création site web sur mesure",
      "site internet sur mesure",
      "webdesign",
      "site vitrine",
      "site de marque",
      "site portfolio",
      "site web créatif",
      "studio web design"
    ],
    formats: [
      {
        name: "Site de marque et site vitrine",
        text: "Présenter une offre, installer la confiance et donner envie de prendre contact."
      },
      {
        name: "Portfolio",
        text: "Pour les studios, architectes, photographes et artistes : le travail au centre, rien pour le distraire."
      },
      {
        name: "Site de campagne et landing page",
        text: "Un lancement, un produit, un événement : une page qui porte un message fort, vite."
      },
      {
        name: "E-commerce premium",
        text: "Des boutiques qui gardent l'univers de la marque, sur Shopify ou en sur mesure."
      },
      {
        name: "Expériences interactives",
        text: "Motion, WebGL ou 3D temps réel quand le projet le justifie. Jamais du mouvement pour le mouvement."
      },
      {
        name: "Design system web",
        text: "Des composants et des règles pour faire évoluer le site sans le dénaturer."
      }
    ],
    useCases: [
      {
        title: "Votre site ne ressemble plus à votre marque",
        text: "L'identité a évolué, l'offre aussi. Le site raconte encore l'ancienne version."
      },
      {
        title: "Vous lancez une marque ou une offre",
        text: "Il faut un site prêt le jour du lancement, cohérent avec l'identité et les campagnes."
      },
      {
        title: "Votre site est lent ou pénible à mettre à jour",
        text: "Chaque modification passe par un prestataire, et les pages mettent trop de temps à s'afficher."
      },
      {
        title: "Vous voulez une expérience qui marque",
        text: "Un portfolio, un lancement, une marque culturelle : le site devient lui-même une pièce créative."
      }
    ],
    process: [
      {
        step: "01",
        title: "Cadrage",
        text: "Objectifs, publics, contenus et arborescence. On sait ce que chaque page doit faire avant de la dessiner."
      },
      {
        step: "02",
        title: "Structure",
        text: "Wireframes des pages clés et parcours principaux, validés sur mobile comme sur desktop."
      },
      {
        step: "03",
        title: "Design",
        text: "Maquettes haute fidélité et principes de mouvement, dans la continuité de l'identité."
      },
      {
        step: "04",
        title: "Développement",
        text: "Build, back-office, animations et tests sur appareils réels. Performance et accessibilité vérifiées."
      },
      {
        step: "05",
        title: "Mise en ligne",
        text: "Redirections, contrôles, formation de vos équipes et suivi après le lancement."
      }
    ],
    deliverables: [
      "Arborescence et wireframes",
      "Maquettes desktop et mobile",
      "Principes de mouvement",
      "Site développé et testé",
      "Back-office administrable",
      "Bases techniques propres : performance, accessibilité, balisage",
      "Formation et documentation",
      "Suivi après la mise en ligne"
    ],
    budgetFactors: [
      "Le nombre de pages et de gabarits",
      "Le niveau d'animation et d'interaction",
      "Le back-office et les intégrations : boutique, réservation, CRM",
      "Les contenus à produire : textes, photos, vidéos",
      "Le multilingue"
    ],
    offer: {
      name: "Digital Experience",
      text: "Créer un site exceptionnel en 3 à 6 semaines. Avec une identité à créer en même temps, le format Brand × Digital prend 4 à 8 semaines."
    },
    faqs: [
      {
        question: "Site sur mesure ou thème : que choisir ?",
        answer:
          "Un thème suffit pour démarrer vite avec un petit budget. Le sur mesure se justifie quand la marque doit se distinguer, quand les contenus sont spécifiques ou quand le site doit évoluer longtemps. On vous dit franchement lequel correspond à votre situation."
      },
      {
        question: "Combien de temps faut-il pour créer un site ?",
        answer:
          "Un site au format Digital Experience demande en général 3 à 6 semaines, selon le nombre de pages, les contenus et les animations. Si l'identité est créée en même temps, comptez plutôt 4 à 8 semaines."
      },
      {
        question: "Pourrai-je modifier le site moi-même ?",
        answer:
          "Oui. Le site est livré avec un back-office adapté à vos contenus et une courte formation. Les pages clés sont construites avec des blocs réutilisables."
      },
      {
        question: "Mon site sera-t-il bien référencé ?",
        answer:
          "Le site est livré avec des bases techniques propres : pages rapides, structure claire, balisage, données structurées et redirections en cas de refonte. Pour une stratégie d'acquisition dans la durée, 42studio vous oriente vers un partenaire spécialisé."
      },
      {
        question: "Créez-vous aussi des sites e-commerce ?",
        answer:
          "Oui, quand la marque a besoin d'une boutique à la hauteur de son univers : direction artistique, fiches produit, parcours et développement, sur Shopify ou en sur mesure."
      },
      {
        question: "Combien coûte un site web sur mesure ?",
        answer:
          "Le budget dépend du nombre de gabarits, des animations, du back-office et des contenus à produire. Chaque projet est chiffré après un premier échange, avec un devis détaillé par étape."
      }
    ],
    caseSlugs: ["profitys", "kyrent", "hotel-jeu-de-paume", "hotel-angleterre-versailles", "arras-patrimoine", "apoticari"],
    relatedServices: ["brand", "motion-design", "direction-artistique"],
    furtherReading: [
      { label: "Création de site internet sur mesure", href: "/creation-site-internet-sur-mesure" },
      { label: "Refonte de site vitrine", href: "/refonte-site-vitrine" },
      { label: "Site vitrine SaaS", href: "/site-vitrine-saas" },
      { label: "E-commerce Shopify premium", href: "/shopify" },
      { label: "Agence web à Arras", href: "/agence-web-arras" }
    ],
    contactType: "web",
    ogImage: "/og/web.jpg"
  },
  {
    slug: "direction-artistique",
    pillar: "creative-direction",
    navLabel: "Direction artistique",
    name: "Direction artistique",
    serviceType: "Direction artistique",
    title: "Direction artistique pour marques et campagnes",
    description:
      "Concepts de campagne, lancements, identité social, direction photo et vidéo : 42studio donne à votre marque un langage visuel cohérent, du brief à l'image.",
    eyebrow: "03 · Creative Direction",
    h1: "Un langage visuel cohérent, d'une campagne à l'autre.",
    intro:
      "Une belle identité ne suffit pas si chaque campagne, chaque shooting et chaque publication part dans une direction différente. La direction artistique fixe le cap : l'idée, le ton, les images, le rythme. 42studio l'assure de bout en bout, du concept jusqu'au dernier fichier livré.",
    definition:
      "La direction artistique définit et garantit l'univers visuel d'un projet : concept, ambiance, choix des images, typographie, couleurs, cadrage, rythme. Le directeur artistique ne produit pas tout lui-même. Il décide, briefe les talents et veille à ce que chaque élément serve la même idée.",
    keywords: [
      "direction artistique",
      "directeur artistique",
      "agence direction artistique",
      "concept de campagne",
      "direction artistique photo",
      "direction artistique réseaux sociaux",
      "direction de création"
    ],
    formats: [
      {
        name: "Concept de campagne",
        text: "Une idée forte, déclinable sur tous les canaux, présentée avec des visuels de principe."
      },
      {
        name: "Direction de lancement",
        text: "Produit, collection, ouverture, levée : un univers pensé pour le jour J et les semaines qui suivent."
      },
      {
        name: "Identité social et éditoriale",
        text: "Grille, formats, tons et règles de publication : une présence reconnaissable dans le flux."
      },
      {
        name: "Direction photo et vidéo",
        text: "Moodboard, casting, lieux, lumière, cadrage et présence sur le plateau."
      },
      {
        name: "Direction motion et 3D",
        text: "Des principes d'animation et des univers 3D cohérents avec la marque."
      },
      {
        name: "Charte créative",
        text: "Les références et les règles qui alignent tous les intervenants, internes comme externes."
      }
    ],
    useCases: [
      {
        title: "Un lancement approche",
        text: "Il faut une idée, un univers et des images prêtes pour tous les canaux, au même moment."
      },
      {
        title: "Vos visuels manquent de cohérence",
        text: "Chaque shooting, chaque campagne et chaque post raconte une histoire un peu différente."
      },
      {
        title: "Vous travaillez avec plusieurs prestataires",
        text: "Photographe, vidéaste, agence social : il faut quelqu'un qui tienne le fil pour tous."
      },
      {
        title: "Votre marque veut changer de registre",
        text: "Monter en gamme, toucher un nouveau public, entrer dans la culture : l'image doit suivre."
      }
    ],
    process: [
      {
        step: "01",
        title: "Intention",
        text: "Ce que la campagne doit faire ressentir et faire faire. Une note d'intention courte et partagée."
      },
      {
        step: "02",
        title: "Territoire",
        text: "Moodboards, références et pistes. On choisit un univers avant de produire la moindre image."
      },
      {
        step: "03",
        title: "Concept",
        text: "L'idée, ses déclinaisons de principe et le plan de production."
      },
      {
        step: "04",
        title: "Production",
        text: "Brief des talents, présence en production et arbitrages pour que chaque image serve l'idée."
      },
      {
        step: "05",
        title: "Livraison et règles",
        text: "Assets finaux et règles créatives pour que la suite reste dans le même registre."
      }
    ],
    deliverables: [
      "Note d'intention",
      "Moodboards et références",
      "Concept et déclinaisons de principe",
      "Plan de production et briefs talents",
      "Direction sur le plateau ou à distance",
      "Charte créative pour la suite"
    ],
    budgetFactors: [
      "La durée de la campagne et le nombre de canaux",
      "La production à diriger : photo, vidéo, motion, 3D",
      "Le nombre de déclinaisons",
      "Les droits d'utilisation des images",
      "La présence en production"
    ],
    offer: {
      name: "Creative Campaign · Creative Partner",
      text: "Une campagne se chiffre au projet, avec une durée qui dépend du format. Pour les marques qui publient et lancent souvent, Creative Partner est un accompagnement mensuel."
    },
    faqs: [
      {
        question: "Qu'est-ce que la direction artistique ?",
        answer:
          "C'est la discipline qui définit l'univers visuel d'un projet et veille à ce que chaque image, chaque typographie et chaque cadrage serve la même idée. Elle s'applique à une identité, une campagne, un shooting, une vidéo ou un site."
      },
      {
        question: "Quelle différence entre direction artistique et direction de création ?",
        answer:
          "Dans les agences, la direction de création porte l'idée et le message, la direction artistique porte l'image. Chez 42studio, les deux sont réunies : la même personne tient l'idée et sa forme, ce qui évite les pertes entre le concept et l'exécution."
      },
      {
        question: "Faut-il une direction artistique pour un shooting ?",
        answer:
          "Pas toujours. Pour des photos produit simples, un bon photographe suffit. Dès que les images doivent porter une campagne, un lancement ou un univers de marque, une direction artistique évite les images justes mais interchangeables."
      },
      {
        question: "Pouvez-vous diriger nos prestataires actuels ?",
        answer:
          "Oui. La direction artistique peut s'appuyer sur vos photographes, vidéastes ou agences, ou sur des talents du réseau 42studio quand il le faut."
      },
      {
        question: "Proposez-vous une direction artistique au mois ?",
        answer:
          "Oui. Creative Partner est un accompagnement mensuel pour les marques qui publient et lancent souvent : un même regard sur toutes les productions."
      },
      {
        question: "Combien coûte une direction artistique ?",
        answer:
          "Elle se chiffre selon la durée, la production à diriger et le nombre de déclinaisons. Sur une campagne, elle fait partie du budget de production. Au mois, elle prend la forme d'un forfait."
      }
    ],
    caseSlugs: ["apoticari", "second-step", "nussa-cosmetics"],
    relatedServices: ["brand", "realisation-video", "3d"],
    furtherReading: [
      { label: "Guide : briefer un studio créatif", href: "/journal/brief-creatif-modele" },
      { label: "Guide : motion design, 3D ou tournage", href: "/journal/motion-design-3d-ou-tournage-video" }
    ],
    contactType: "direction-artistique",
    ogImage: "/og/direction-artistique.jpg"
  },
  {
    slug: "motion-design",
    pillar: "visual-production",
    navLabel: "Motion design",
    name: "Motion design",
    serviceType: "Motion design",
    title: "Motion design : vidéos animées, logos et réseaux",
    description:
      "Vidéos explicatives, animation de logo, formats pour les réseaux : 42studio conçoit du motion design au service de la marque, du script à l'export.",
    eyebrow: "04 · Visual Production / Motion",
    h1: "Du motion design qui raconte la marque, pas seulement qui bouge.",
    intro:
      "Le mouvement capte l'attention en une seconde, et la perd aussi vite s'il ne sert rien. 42studio conçoit des animations qui prolongent l'identité : une typographie qui respire, un logo qui s'anime avec intention, une vidéo qui explique en une minute ce qu'une page peine à dire.",
    definition:
      "Le motion design, ou design graphique animé, met en mouvement des éléments graphiques : typographies, formes, icônes, illustrations, parfois de la 3D. Il sert à expliquer une offre, à animer une identité ou à produire des formats courts pour les réseaux, sans tournage.",
    keywords: [
      "motion design",
      "studio motion design",
      "agence motion design",
      "vidéo motion design",
      "animation de logo",
      "vidéo explicative",
      "animation 2D",
      "motion design réseaux sociaux"
    ],
    formats: [
      {
        name: "Vidéo explicative",
        text: "Présenter un produit, un service ou une méthode en quelques dizaines de secondes, avec un script clair."
      },
      {
        name: "Animation de logo",
        text: "Un logo qui s'anime pour les ouvertures de vidéo, le site, les réseaux et les présentations."
      },
      {
        name: "Formats réseaux",
        text: "Stories, reels et posts animés, déclinés dans les bons ratios."
      },
      {
        name: "Motion d'identité",
        text: "Les principes d'animation de la marque : transitions, rythme, typographie cinétique."
      },
      {
        name: "Habillage et titrages",
        text: "Génériques, titrages, habillages d'événements et de vidéos."
      },
      {
        name: "Animations d'interface",
        text: "Micro-interactions et animations pour le site et le produit."
      }
    ],
    useCases: [
      {
        title: "Votre offre est difficile à expliquer",
        text: "Une vidéo animée montre en quelques secondes ce qu'un texte met trois paragraphes à dire."
      },
      {
        title: "Vous lancez un produit",
        text: "Des formats courts pour le site, les réseaux et la publicité, dans un même style."
      },
      {
        title: "Votre identité est figée",
        text: "Le motion lui donne une façon de bouger reconnaissable, de l'écran d'accueil au dernier post."
      },
      {
        title: "Le tournage n'est pas possible",
        text: "Logiciel, service, concept abstrait : l'animation remplace l'image filmée."
      }
    ],
    process: [
      {
        step: "01",
        title: "Brief et message",
        text: "Ce que le spectateur doit retenir, où la vidéo sera diffusée, dans quels formats."
      },
      {
        step: "02",
        title: "Script et son",
        text: "Script, voix off et intentions musicales, validés avant toute image."
      },
      {
        step: "03",
        title: "Storyboard et styleframes",
        text: "Les images clés fixent le style. On valide le rendu avant d'animer."
      },
      {
        step: "04",
        title: "Animation",
        text: "Animation, sound design et allers-retours cadrés jusqu'à la version finale."
      },
      {
        step: "05",
        title: "Exports et déclinaisons",
        text: "Formats, ratios, sous-titres et versions courtes pour chaque canal."
      }
    ],
    deliverables: [
      "Script et storyboard",
      "Styleframes validées",
      "Animation finale",
      "Sound design et musique sous licence",
      "Déclinaisons 16:9, 9:16, 1:1 et 4:5",
      "Sous-titres",
      "Fichiers sources sur demande"
    ],
    budgetFactors: [
      "La durée de la vidéo",
      "Le style : typographique, 2D, illustration ou 3D",
      "La voix off, la musique et le sound design",
      "Le nombre de formats et de langues",
      "Le nombre d'allers-retours prévus"
    ],
    offer: {
      name: "Creative Campaign",
      text: "Chaque production est chiffrée au projet, avec un planning qui dépend de la durée et du style. Pour un flux régulier de contenus animés, Creative Partner prend le relais au mois."
    },
    faqs: [
      {
        question: "Qu'est-ce que le motion design ?",
        answer:
          "C'est l'art de mettre en mouvement des éléments graphiques : typographies, formes, icônes, illustrations. Il sert à expliquer, à animer une identité ou à produire des formats courts, sans avoir besoin de filmer."
      },
      {
        question: "Motion design ou vidéo tournée : que choisir ?",
        answer:
          "Le motion design est idéal pour expliquer un concept, montrer un logiciel ou animer une identité, sans contrainte de tournage. La vidéo tournée montre des personnes, des lieux et des produits réels. Beaucoup de projets mélangent les deux."
      },
      {
        question: "Quelle durée pour une vidéo en motion design ?",
        answer:
          "Le script fixe la durée : quelques secondes pour une publicité sur les réseaux, une à deux minutes pour une vidéo explicative. Plus le message est clair, plus la vidéo peut être courte."
      },
      {
        question: "Combien coûte une vidéo en motion design ?",
        answer:
          "Le prix dépend de la durée, du style, de la voix off et du nombre de formats. 42studio chiffre chaque vidéo après le brief, avec un devis détaillé par étape : script, design, animation, son."
      },
      {
        question: "Quels logiciels utilisez-vous ?",
        answer:
          "Les outils standards du métier : After Effects pour l'animation 2D, Cinema 4D ou Blender pour la 3D, et les outils de montage courants. Les fichiers sources peuvent vous être remis."
      },
      {
        question: "Pouvez-vous animer notre logo existant ?",
        answer:
          "Oui. On part de vos fichiers et de vos guidelines, puis on propose une animation fidèle à la marque, déclinée pour la vidéo, le web et les réseaux."
      }
    ],
    relatedServices: ["3d", "realisation-video", "direction-artistique"],
    furtherReading: [
      { label: "Guide : motion design, 3D ou tournage", href: "/journal/motion-design-3d-ou-tournage-video" },
      { label: "Guide : briefer un studio créatif", href: "/journal/brief-creatif-modele" }
    ],
    contactType: "motion-design",
    ogImage: "/og/motion-design.jpg"
  },
  {
    slug: "3d",
    pillar: "visual-production",
    navLabel: "3D",
    name: "3D, CGI et packshot 3D",
    serviceType: "Animation 3D",
    title: "Studio 3D : packshot, animation produit et CGI",
    description:
      "Packshots 3D, animations produit et visuels CGI : 42studio dirige des images 3D réalistes ou stylisées pour vos campagnes, même avant le prototype.",
    eyebrow: "04 · Visual Production / 3D",
    h1: "Des images 3D qui montrent le produit mieux qu'une photo.",
    intro:
      "La 3D permet de montrer un produit qui n'existe pas encore, de le faire tourner, de l'ouvrir, de le décliner dans toutes ses couleurs ou de le placer dans un décor impossible à construire. 42studio dirige ces images et les intègre à l'univers de la marque, du packshot au film de lancement.",
    definition:
      "La 3D, ou CGI pour images de synthèse, consiste à modéliser un objet ou une scène dans un logiciel, puis à en calculer des images ou des animations. Pour une marque, elle produit des packshots, des vues éclatées, des animations produit et des visuels de campagne, souvent avant même la fabrication.",
    keywords: [
      "studio 3D",
      "packshot 3D",
      "animation 3D produit",
      "vidéo 3D produit",
      "CGI publicité",
      "modélisation 3D produit",
      "rendu 3D produit",
      "agence 3D"
    ],
    formats: [
      {
        name: "Packshot 3D",
        text: "Le produit sur fond neutre ou en situation, avec des variantes de couleurs et de matières sans nouveau shooting."
      },
      {
        name: "Animation produit",
        text: "Rotations, vues éclatées et mises en situation pour le site, la publicité et les réseaux."
      },
      {
        name: "Visuels de campagne CGI",
        text: "Des décors et des mises en scène impossibles à photographier."
      },
      {
        name: "Vues 360° et configurateurs",
        text: "Pour les fiches produit et les expériences web interactives."
      },
      {
        name: "Modélisation",
        text: "À partir de vos fichiers CAO, de plans cotés ou de photos de référence."
      },
      {
        name: "3D pour le web",
        text: "Des objets 3D en temps réel intégrés au site, quand l'expérience le justifie."
      }
    ],
    useCases: [
      {
        title: "Le produit n'est pas encore fabriqué",
        text: "La communication peut démarrer avant l'arrivée des prototypes."
      },
      {
        title: "Beaucoup de déclinaisons",
        text: "Couleurs, finitions, packagings : une fois le modèle créé, chaque variante se produit sans nouveau shooting."
      },
      {
        title: "Un produit difficile à photographier",
        text: "Reflets, transparence, mécanismes internes, très petits objets : la 3D contrôle chaque détail."
      },
      {
        title: "Une campagne ambitieuse",
        text: "Des univers impossibles à construire en vrai, cohérents avec l'identité de la marque."
      }
    ],
    process: [
      {
        step: "01",
        title: "Brief et références",
        text: "Fichiers CAO, plans, photos, matières et ambiance recherchée."
      },
      {
        step: "02",
        title: "Modélisation",
        text: "Un modèle validé sous tous les angles avant de travailler l'image."
      },
      {
        step: "03",
        title: "Matières et lumière",
        text: "Textures, éclairage et cadrages validés sur des images fixes."
      },
      {
        step: "04",
        title: "Rendu ou animation",
        text: "Calcul des images, animation, montage et sound design si besoin."
      },
      {
        step: "05",
        title: "Déclinaisons et livraison",
        text: "Variantes, formats web, réseaux et print, et fichiers 3D sur demande."
      }
    ],
    deliverables: [
      "Modèle 3D validé",
      "Packshots haute définition",
      "Variantes de couleurs et de matières",
      "Animations produit",
      "Formats web, réseaux et print",
      "Fichiers 3D sur demande"
    ],
    budgetFactors: [
      "La complexité du produit et la qualité des fichiers de départ",
      "Le niveau de réalisme attendu",
      "Le nombre d'images, d'angles et de variantes",
      "L'animation et sa durée",
      "Les décors et les mises en scène"
    ],
    offer: {
      name: "Creative Campaign",
      text: "Packshots, animations et visuels de campagne sont chiffrés au projet, selon le nombre d'images et le niveau de réalisme. Le planning dépend surtout des fichiers de départ."
    },
    faqs: [
      {
        question: "Qu'est-ce qu'un packshot 3D ?",
        answer:
          "C'est une image de produit calculée à partir d'un modèle 3D au lieu d'être photographiée. Elle montre le produit sous tous les angles et dans toutes ses variantes, avec un rendu réaliste ou stylisé."
      },
      {
        question: "Packshot 3D ou shooting photo : que choisir ?",
        answer:
          "La photo reste idéale pour un produit fini, simple, en peu de variantes. La 3D prend l'avantage quand le produit n'existe pas encore, quand il a beaucoup de déclinaisons ou quand la mise en scène est impossible à construire."
      },
      {
        question: "De quoi avez-vous besoin pour modéliser un produit ?",
        answer:
          "Idéalement des fichiers CAO ou des plans cotés. À défaut, des photos sous plusieurs angles, les dimensions et des échantillons de matières."
      },
      {
        question: "La 3D peut-elle être photoréaliste ?",
        answer:
          "Oui. Le réalisme dépend de la qualité du modèle, des matières et de la lumière. Le niveau attendu se fixe au brief, car un rendu stylisé sert parfois mieux la marque."
      },
      {
        question: "Combien coûte une animation 3D produit ?",
        answer:
          "Le prix dépend de la complexité du produit, du niveau de réalisme, de la durée et des décors. Chaque projet est chiffré après réception des fichiers et du brief, avec un devis détaillé."
      },
      {
        question: "Peut-on utiliser les images 3D en print ?",
        answer:
          "Oui. Les images sont calculées à la résolution nécessaire, pour l'écran comme pour l'impression grand format."
      }
    ],
    relatedServices: ["motion-design", "realisation-video", "web"],
    furtherReading: [
      { label: "Guide : motion design, 3D ou tournage", href: "/journal/motion-design-3d-ou-tournage-video" },
      { label: "Direction artistique", href: "/direction-artistique" }
    ],
    contactType: "3d",
    ogImage: "/og/3d.jpg"
  },
  {
    slug: "realisation-video",
    pillar: "visual-production",
    navLabel: "Vidéo",
    name: "Réalisation vidéo et film de marque",
    serviceType: "Production vidéo",
    title: "Réalisation vidéo : film de marque, pub, contenus",
    description:
      "Films de marque, vidéos de lancement, publicités et contenus réseaux : 42studio écrit, dirige et produit des vidéos qui portent l'univers de la marque.",
    eyebrow: "04 · Visual Production / Vidéo",
    h1: "Des films qui donnent un visage et une voix à la marque.",
    intro:
      "Une vidéo réussie ne se juge pas à la caméra utilisée, mais à la clarté de l'idée et à sa cohérence avec la marque. 42studio prend en charge l'écriture, la direction et la production, et compose pour chaque film l'équipe adaptée : réalisateur, chef opérateur, monteur, étalonneur, motion designer.",
    definition:
      "La réalisation vidéo couvre toutes les étapes d'un film : l'écriture (idée, script, découpage), la préparation (casting, lieux, planning), le tournage, puis la post-production (montage, étalonnage, son, habillage). Pour une marque, elle produit des films de marque, des vidéos de lancement, des publicités et des contenus pour les réseaux.",
    keywords: [
      "réalisation vidéo",
      "production vidéo",
      "film de marque",
      "vidéo de marque",
      "vidéo publicitaire",
      "vidéo corporate",
      "agence vidéo",
      "tournage vidéo entreprise"
    ],
    formats: [
      {
        name: "Film de marque",
        text: "Raconter ce qui fait la marque : ses gens, son savoir-faire, sa vision."
      },
      {
        name: "Vidéo de lancement",
        text: "Un produit, une collection, une ouverture : un film pensé pour le jour J."
      },
      {
        name: "Publicité et spots",
        text: "Des formats courts pour les réseaux et les plateformes vidéo."
      },
      {
        name: "Contenus réseaux",
        text: "Des séries de formats verticaux, pensées pour être tournées efficacement et publiées dans la durée."
      },
      {
        name: "Portraits et témoignages",
        text: "Fondateurs, équipes, clients, artisans : des personnes réelles, bien filmées."
      },
      {
        name: "Captation et making-of",
        text: "Événements, coulisses, fabrication, à monter en film ou en série de formats courts."
      }
    ],
    useCases: [
      {
        title: "Votre marque a une histoire à montrer",
        text: "Un savoir-faire, un lieu, des personnes : certaines choses ne passent qu'à l'image."
      },
      {
        title: "Un lancement à porter",
        text: "Un film principal et ses versions courtes, prêts pour tous les canaux le même jour."
      },
      {
        title: "Des contenus réguliers",
        text: "Une journée de tournage bien préparée peut nourrir plusieurs semaines de publications."
      },
      {
        title: "Vos vidéos ne ressemblent pas à votre marque",
        text: "Chaque film a été fait par un prestataire différent, sans ligne commune."
      }
    ],
    process: [
      {
        step: "01",
        title: "Écriture",
        text: "Intention, concept, script et découpage technique."
      },
      {
        step: "02",
        title: "Préparation",
        text: "Casting, repérages, planning, équipe et matériel."
      },
      {
        step: "03",
        title: "Tournage",
        text: "Réalisation, image, son et direction artistique sur le plateau."
      },
      {
        step: "04",
        title: "Post-production",
        text: "Montage, étalonnage, mixage, habillage et motion design."
      },
      {
        step: "05",
        title: "Livraison et déclinaisons",
        text: "Film principal, versions courtes, formats par canal et sous-titres."
      }
    ],
    deliverables: [
      "Note d'intention et script",
      "Découpage technique",
      "Film principal",
      "Versions courtes et formats réseaux",
      "Sous-titres",
      "Musique sous licence",
      "Photos de plateau sur demande"
    ],
    budgetFactors: [
      "Le nombre de jours de tournage",
      "La taille de l'équipe et le matériel",
      "Les lieux, les décors et les comédiens",
      "La post-production : étalonnage, motion, effets",
      "Les droits musicaux et les droits de diffusion"
    ],
    offer: {
      name: "Creative Campaign",
      text: "Chaque film est chiffré au projet, de l'écriture à la livraison des déclinaisons. Le planning dépend surtout des jours de tournage et de la post-production."
    },
    faqs: [
      {
        question: "Quelles sont les étapes d'une réalisation vidéo ?",
        answer:
          "L'écriture (intention, script, découpage), la préparation (casting, lieux, planning), le tournage, puis la post-production (montage, étalonnage, son, habillage) et la livraison des versions."
      },
      {
        question: "Film de marque ou vidéo corporate : quelle différence ?",
        answer:
          "La vidéo corporate présente une entreprise de façon informative. Le film de marque cherche à faire ressentir ce qu'est la marque : son univers, son ton, ses valeurs. Il se regarde comme un film, pas comme une plaquette."
      },
      {
        question: "Combien coûte la réalisation d'une vidéo ?",
        answer:
          "Le prix dépend surtout des jours de tournage, de la taille de l'équipe, des lieux et de la post-production. Les droits musicaux et de diffusion comptent aussi. Chaque film est chiffré après le brief, avec un devis détaillé."
      },
      {
        question: "Pouvez-vous tourner à Arras, à Lille ou ailleurs ?",
        answer:
          "Oui. Le studio est basé à Arras et peut organiser des tournages dans les Hauts-de-France, à Paris ou ailleurs, avec une équipe composée pour le projet."
      },
      {
        question: "Qui détient les droits de la vidéo ?",
        answer:
          "Les droits de diffusion sont définis dans la proposition : durée, supports, territoires. Les droits musicaux et ceux des intervenants en dépendent. Tout est clarifié avant le tournage."
      },
      {
        question: "Faut-il un tournage, de l'animation ou de la 3D ?",
        answer:
          "Cela dépend du message et du produit. Le tournage montre le réel, le motion design explique, la 3D montre un produit sous tous ses angles. Le guide du Journal compare les trois approches."
      }
    ],
    relatedServices: ["motion-design", "3d", "direction-artistique"],
    furtherReading: [
      { label: "Guide : motion design, 3D ou tournage", href: "/journal/motion-design-3d-ou-tournage-video" },
      { label: "Guide : briefer un studio créatif", href: "/journal/brief-creatif-modele" }
    ],
    contactType: "video",
    ogImage: "/og/realisation-video.jpg"
  }
];

export function getCreativeService(slug: string) {
  return creativeServices.find((service) => service.slug === slug);
}

export function getCreativeServicesByPillar(pillar: CreativePillarId) {
  return creativeServices.filter((service) => service.pillar === pillar);
}
