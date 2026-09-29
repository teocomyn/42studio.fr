// Journal 42studio : guides de fond, écrits pour répondre directement aux questions
// que se posent les marques (et être cités par les moteurs de réponse IA).
// Règles : aucun chiffre de résultat, aucun prix non arbitré, voix 42STUDIO.

export type JournalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: Array<{ title: string; text: string }>;
  table?: { caption: string; head: string[]; rows: string[][] };
};

export type JournalArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  category: "Guide" | "Méthode";
  datePublished: string;
  dateModified: string;
  keywords: string[];
  about: string[];
  essentials: string[];
  sections: JournalSection[];
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: string[];
  ogImage: string;
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "motion-design-3d-ou-tournage-video",
    title: "Motion design, 3D ou tournage : quel format pour votre marque ?",
    metaTitle: "Motion design, 3D ou tournage : que choisir ?",
    description:
      "Motion design, 3D ou vidéo tournée : forces, limites et usages de chaque format pour choisir la bonne approche selon votre marque et votre message.",
    excerpt:
      "Trois façons de produire des images en mouvement, trois logiques différentes. Le comparatif pour choisir sans se tromper de format.",
    category: "Guide",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    keywords: [
      "motion design ou vidéo",
      "motion design ou tournage",
      "animation 3D ou vidéo",
      "packshot 3D ou photo",
      "choisir un format vidéo"
    ],
    about: ["Motion design", "Animation 3D", "Réalisation vidéo"],
    essentials: [
      "Le motion design explique et anime une identité, sans tournage.",
      "La 3D montre un produit sous tous ses angles, même avant sa fabrication.",
      "La vidéo tournée montre des personnes, des lieux et des produits réels.",
      "Le bon format dépend du message, du produit et de la diffusion, pas de la tendance.",
      "Beaucoup de projets combinent les trois sous une même direction artistique."
    ],
    sections: [
      {
        id: "definitions",
        title: "Trois façons de produire des images en mouvement",
        paragraphs: [
          "Le motion design met en mouvement des éléments graphiques : typographies, formes, icônes, illustrations. Tout se fabrique à l'écran, sans caméra.",
          "La 3D, ou images de synthèse, modélise un objet ou une scène dans un logiciel, puis calcule des images ou des animations. Elle peut être photoréaliste ou volontairement stylisée.",
          "La vidéo tournée filme le réel : des personnes, des lieux, des gestes, des produits. Elle passe par une préparation, un tournage et une post-production."
        ]
      },
      {
        id: "comparatif",
        title: "Le comparatif",
        paragraphs: ["Aucun format n'est meilleur dans l'absolu. Chacun répond à une question différente."],
        table: {
          caption: "Motion design, 3D et vidéo tournée comparés",
          head: ["Critère", "Motion design", "3D", "Vidéo tournée"],
          rows: [
            [
              "Idéal pour",
              "Expliquer une offre, animer une identité, produire des formats pour les réseaux",
              "Montrer un produit, ses variantes, une mise en scène impossible à construire",
              "Montrer des personnes, un lieu, un savoir-faire"
            ],
            [
              "Points forts",
              "Aucune contrainte de tournage, très modulable, simple à mettre à jour",
              "Contrôle total de l'image, variantes sans nouveau shooting, possible avant le prototype",
              "Émotion, authenticité, présence humaine"
            ],
            [
              "Limites",
              "Moins incarné, peut paraître froid sans direction forte",
              "Demande un bon modèle et beaucoup de réglages pour le réalisme",
              "Dépend des lieux, des disponibilités et de la lumière, plus lourd à refaire"
            ],
            [
              "À fournir",
              "Un message clair et vos éléments d'identité",
              "Fichiers CAO, plans ou photos du produit, échantillons de matières",
              "Des lieux, des intervenants, des autorisations"
            ],
            [
              "Ce qui fait varier le budget",
              "Durée, style, voix off, nombre de formats",
              "Complexité, réalisme, nombre d'images et d'animations",
              "Jours de tournage, équipe, lieux, post-production, droits"
            ]
          ]
        }
      },
      {
        id: "objectif",
        title: "Choisir selon votre objectif",
        bullets: [
          "Faire comprendre une offre complexe : le motion design.",
          "Montrer un logiciel ou une application : le motion design, à partir des écrans réels.",
          "Lancer un produit physique pas encore fabriqué : la 3D, puis le tournage quand le produit existe.",
          "Montrer un produit aux nombreuses déclinaisons : la 3D.",
          "Donner un visage à la marque, montrer un savoir-faire : la vidéo tournée.",
          "Publier régulièrement sur les réseaux : un système de formats animés et de tournages courts."
        ]
      },
      {
        id: "hybride",
        title: "Pourquoi les meilleurs projets mélangent les formats",
        paragraphs: [
          "Un film de marque tourné gagne à être habillé en motion design : titres, transitions, informations. Une campagne produit peut associer un packshot 3D et des plans tournés avec de vraies personnes.",
          "Le risque d'un mélange, c'est l'incohérence : trois prestataires, trois styles. D'où l'intérêt d'une direction artistique unique qui fixe le ton, les couleurs, le rythme et la typographie pour tous les formats."
        ]
      },
      {
        id: "questions",
        title: "Cinq questions à se poser avant de choisir",
        steps: [
          { title: "Que doit retenir le spectateur ?", text: "Une idée, un produit, une émotion. La réponse oriente déjà le format." },
          { title: "Le produit existe-t-il ?", text: "S'il n'est pas encore fabriqué, la 3D est souvent la seule option." },
          {
            title: "Où la vidéo sera-t-elle diffusée ?",
            text: "Site, réseaux, salon, publicité : chaque canal impose ses formats et ses durées."
          },
          { title: "Faudra-t-il la mettre à jour ?", text: "Une offre qui évolue souvent se prête mieux au motion design." },
          {
            title: "Quels éléments de marque existent ?",
            text: "Une identité claire accélère tout. Sans elle, mieux vaut commencer par la poser."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "Le motion design coûte-t-il moins cher qu'un tournage ?",
        answer:
          "Pas forcément. Une animation détaillée peut demander autant de travail qu'un tournage simple. Dans les deux cas, le budget dépend surtout de la durée, du style et du nombre de formats."
      },
      {
        question: "La 3D peut-elle remplacer une séance photo ?",
        answer:
          "Pour des packshots et des produits aux nombreuses variantes, oui. Pour montrer le produit en usage, avec des personnes, la photo et la vidéo restent plus naturelles."
      },
      {
        question: "Peut-on combiner tournage, motion design et 3D dans une même vidéo ?",
        answer:
          "Oui, c'est courant. Le tout est de garder une direction artistique unique pour que l'ensemble reste cohérent."
      }
    ],
    relatedServices: ["motion-design", "3d", "realisation-video", "direction-artistique"],
    ogImage: "/og/journal-motion-3d-video.jpg"
  },
  {
    slug: "brief-creatif-modele",
    title: "Le brief créatif : le modèle pour briefer un studio",
    metaTitle: "Brief créatif : le modèle pour briefer un studio",
    description:
      "Contexte, objectif, public, livrables, budget, décision : le modèle de brief créatif de 42studio pour lancer un projet de marque, de site ou de vidéo.",
    excerpt:
      "Un bon brief fait gagner des semaines. Les dix rubriques à remplir avant d'appeler un studio, et les erreurs qui coûtent le plus cher.",
    category: "Méthode",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    keywords: [
      "brief créatif",
      "modèle de brief créatif",
      "brief agence",
      "brief design",
      "brief vidéo",
      "brief identité visuelle"
    ],
    about: ["Brief créatif", "Gestion de projet créatif"],
    essentials: [
      "Un bon brief tient sur une ou deux pages.",
      "Il décrit un problème à résoudre, pas une solution toute faite.",
      "Il donne une fourchette de budget et une date réelle.",
      "Il nomme la personne qui décide.",
      "Il liste ce qui existe déjà et ce qui ne doit pas changer."
    ],
    sections: [
      {
        id: "role",
        title: "À quoi sert un brief créatif",
        paragraphs: [
          "Le brief aligne tout le monde sur ce que le projet doit produire. Il permet au studio de proposer le bon périmètre, un planning réaliste et un devis comparable.",
          "Un brief n'a pas besoin d'être parfait. Il doit être honnête : ce que vous savez, ce que vous ne savez pas encore, ce qui vous inquiète."
        ]
      },
      {
        id: "modele",
        title: "Le modèle en dix rubriques",
        steps: [
          {
            title: "Contexte",
            text: "Qui vous êtes, ce que vous vendez, ce qui change en ce moment : lancement, levée, nouvelle offre, nouveau marché."
          },
          {
            title: "Objectif",
            text: "Ce que le projet doit produire : être reconnu, être compris, lancer un produit, recruter, rassurer."
          },
          {
            title: "Public",
            text: "À qui la marque s'adresse, avec des exemples concrets plutôt qu'un persona inventé."
          },
          {
            title: "Message",
            text: "La phrase que le public doit retenir. Si vous ne la connaissez pas encore, dites-le."
          },
          {
            title: "Livrables attendus",
            text: "Logo, site, vidéo, campagne, supports : ce que vous imaginez, sachant que le studio pourra proposer autre chose."
          },
          {
            title: "Ce qui existe déjà",
            text: "Identité, contenus, photos, site, contraintes de marque, et ce qui ne doit pas bouger."
          },
          {
            title: "Références",
            text: "Ce qui vous plaît et ce qui ne vous plaît pas, dans votre secteur et ailleurs, avec une phrase sur le pourquoi."
          },
          {
            title: "Contraintes",
            text: "Techniques, légales, calendrier, validations internes, langues."
          },
          {
            title: "Budget",
            text: "Une fourchette. Sans elle, le studio devine, et les propositions deviennent impossibles à comparer."
          },
          {
            title: "Décision",
            text: "Qui valide, à quelles étapes, et comment."
          }
        ]
      },
      {
        id: "erreurs",
        title: "Les erreurs qui coûtent le plus cher",
        bullets: [
          "Ne pas donner de budget : les propositions reçues ne sont pas comparables.",
          "Imposer la solution : « on veut un logo rouge » ferme la porte à une meilleure idée.",
          "Multiplier les décideurs : chaque avis ajouté rallonge le projet.",
          "Empiler des références contradictoires sans dire ce qui plaît dans chacune.",
          "Fixer une date de lancement sans marge pour les validations."
        ]
      },
      {
        id: "apres",
        title: "Ce que 42studio fait de votre brief",
        paragraphs: [
          "Réponse sous 24 h avec quelques questions, puis un premier échange pour compléter ce qui manque.",
          "Ensuite, une proposition détaillée : périmètre, méthode, planning et devis par étape. Si le brief pointe vers un besoin que le studio ne traite pas, il vous le dit."
        ]
      }
    ],
    faqs: [
      {
        question: "Faut-il donner son budget dans un brief ?",
        answer:
          "Oui. Une fourchette permet au studio de proposer ce qu'il y a de mieux à faire avec ce budget, plutôt que de deviner."
      },
      {
        question: "Combien de temps faut-il pour rédiger un brief ?",
        answer: "Une heure ou deux suffisent souvent. Le premier échange sert à compléter ce qui manque."
      },
      {
        question: "Brief créatif ou cahier des charges : quelle différence ?",
        answer:
          "Le cahier des charges détaille des exigences fonctionnelles et techniques, souvent pour un site ou un logiciel. Le brief créatif décrit un besoin, une ambition et un contexte. Pour un projet de marque ou de vidéo, le brief suffit pour démarrer."
      }
    ],
    relatedServices: ["brand", "web", "direction-artistique", "realisation-video"],
    ogImage: "/og/journal-brief-creatif.jpg"
  },
  {
    slug: "identite-visuelle-contenu",
    title: "Identité visuelle : ce qu'elle doit contenir pour tenir la route",
    metaTitle: "Identité visuelle : ce qu'elle doit contenir",
    description:
      "Logo, couleurs, typographies, grille, images, guidelines : ce que contient une identité visuelle complète, et cinq tests pour vérifier qu'elle tient.",
    excerpt:
      "Une identité visuelle n'est pas un logo. Ce que contient un vrai système de marque, et comment vérifier qu'il tient la route.",
    category: "Guide",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    keywords: [
      "identité visuelle",
      "que contient une identité visuelle",
      "charte graphique",
      "système de marque",
      "guidelines de marque",
      "refonte identité visuelle"
    ],
    about: ["Identité visuelle", "Branding", "Charte graphique"],
    essentials: [
      "Une identité visuelle n'est pas un logo, c'est un système.",
      "Elle comprend au minimum un logo, des couleurs, des typographies, une grille et des principes d'image.",
      "Les guidelines la rendent utilisable par d'autres que ses créateurs.",
      "Une bonne identité se reconnaît même sans le logo.",
      "Elle se teste sur de vrais supports avant d'être validée."
    ],
    sections: [
      {
        id: "niveaux",
        title: "Logo, identité visuelle, branding : trois niveaux",
        paragraphs: [
          "Le logo est un signe. L'identité visuelle est le système qui l'entoure : couleurs, typographies, grille, images, mouvement. Le branding englobe les deux, et y ajoute la stratégie, le nom, le ton et l'expérience.",
          "Confondre les trois conduit à commander un logo quand il faudrait un système, ou à attendre d'un logo qu'il porte toute une stratégie."
        ]
      },
      {
        id: "elements",
        title: "Les éléments d'un système visuel",
        steps: [
          {
            title: "Logo et variantes",
            text: "Version principale, version secondaire, monogramme, version réduite pour les petits formats."
          },
          {
            title: "Couleurs",
            text: "Une palette hiérarchisée, avec les références pour l'écran et l'impression : RVB, hexadécimal, CMJN, Pantone."
          },
          {
            title: "Typographies",
            text: "Une typographie de titrage, une de texte, leurs règles d'usage et les licences nécessaires."
          },
          {
            title: "Grille et mise en page",
            text: "Les marges, les colonnes et les proportions qui donnent un air de famille à tous les supports."
          },
          {
            title: "Iconographie et illustration",
            text: "Un style de pictogrammes et d'illustrations cohérent avec le reste du système."
          },
          {
            title: "Direction photo",
            text: "Le type d'images, la lumière, les cadrages, ce qu'on montre et ce qu'on évite."
          },
          {
            title: "Motion",
            text: "La façon dont la marque bouge : transitions, rythme, typographie animée."
          },
          {
            title: "Ton de voix",
            text: "Comment la marque écrit. Un visuel juste avec un texte faux ne fonctionne pas."
          }
        ]
      },
      {
        id: "guidelines",
        title: "Les guidelines : le mode d'emploi",
        paragraphs: [
          "Les guidelines expliquent comment utiliser l'identité : les règles, les interdits, des exemples réels, les gabarits et l'accès aux fichiers.",
          "Elles doivent être assez courtes pour être lues, et assez précises pour qu'un prestataire extérieur produise juste sans avoir à tout redemander."
        ]
      },
      {
        id: "tests",
        title: "Cinq tests pour savoir si votre identité fonctionne",
        steps: [
          { title: "Sans le logo", text: "Cachez le logo sur une publication. La marque reste-t-elle reconnaissable ?" },
          { title: "En tout petit", text: "Le monogramme tient-il en favicon, en avatar, en filigrane ?" },
          { title: "En noir et blanc", text: "Le système survit-il sans ses couleurs ?" },
          {
            title: "Sur tous les supports",
            text: "Site, packaging, réseaux, signalétique, présentation : tout a-t-il l'air de la même famille ?"
          },
          { title: "Sans vous", text: "Vos équipes et vos prestataires peuvent-ils l'utiliser sans vous appeler ?" }
        ]
      },
      {
        id: "refonte",
        title: "Faire évoluer ou tout reprendre ?",
        paragraphs: [
          "Si la marque est connue et que le problème vient de l'exécution, une évolution suffit souvent : garder le signe, clarifier le système, écrire les règles.",
          "Si la marque a changé de positionnement, de public ou d'ambition, une refonte plus profonde se justifie. Dans les deux cas, on commence par identifier ce qui fait déjà la reconnaissance."
        ]
      }
    ],
    faqs: [
      {
        question: "Combien de couleurs faut-il dans une palette ?",
        answer:
          "Peu. Une ou deux couleurs principales et quelques couleurs de soutien suffisent souvent. Ce qui compte, c'est la hiérarchie et les règles d'usage."
      },
      {
        question: "Faut-il acheter les licences des typographies ?",
        answer:
          "Oui pour les typographies commerciales : la licence dépend des usages, impression, web ou application. Les typographies sous licence libre, comme l'OFL, sont une alternative sérieuse."
      },
      {
        question: "Une identité visuelle doit-elle inclure le motion ?",
        answer:
          "De plus en plus, oui. Une marque vit sur des écrans : définir comment elle bouge évite que chaque vidéo invente ses propres règles."
      }
    ],
    relatedServices: ["brand", "graphisme", "direction-artistique"],
    ogImage: "/og/journal-identite-visuelle.jpg"
  }
];

export function getJournalArticle(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}

export function formatJournalDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(`${date}T12:00:00Z`)
  );
}
