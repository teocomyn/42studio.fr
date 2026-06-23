export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  focus: string[];
};

export const team: TeamMember[] = [
  {
    name: "Teo Comyn",
    role: "Fondateur · Direction créative & technique",
    bio: "Designer et développeur front-end. 60+ marques accompagnées depuis 2018 sur Shopify, branding et produits digitaux. Basé à Arras, disponible partout en France et en Europe.",
    focus: ["Brand systems", "Shopify", "Front-end", "CRO & SEO technique"]
  }
];
