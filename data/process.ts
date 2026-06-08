export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Stratégie",
    description:
      "On clarifie le terrain, les audiences, la promesse, les contraintes et la tension créative utile."
  },
  {
    index: "02",
    title: "Identité",
    description:
      "On pose le langage : signe, typographie, grille, rythme, images, motion et principes d'expression."
  },
  {
    index: "03",
    title: "Systeme",
    description:
      "On transforme la direction artistique en composants, règles et patterns activables."
  },
  {
    index: "04",
    title: "Build",
    description:
      "On code le site ou le produit avec le même niveau d'exigence que la maquette."
  },
  {
    index: "05",
    title: "Déploiement",
    description:
      "On mesure, on ajuste, on livre les fichiers, la doc et les fondations pour la suite."
  }
];
