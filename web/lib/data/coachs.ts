/**
 * L'équipe réelle de l'association — informations communiquées par le CBAC
 * (juillet 2026). Règle : ne rien inventer (ni parcours, ni diplômes) ;
 * si une information manque, on ne met rien.
 */
export type Coach = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  founder?: boolean;
};

export const coachs: Coach[] = [
  {
    slug: "soungui-gomis",
    name: "Soungui Gomis",
    role: "Président fondateur",
    founder: true,
    bio: "Président de l'association, Soungui porte le projet du CBAC : créer du lien social à travers le sport, et particulièrement la boxe anglaise. Il pilote le projet associatif, la recherche de partenariats et l'organisation des actions de l'association.",
    image: "/images/coach-soungui.svg",
  },
  {
    slug: "younes",
    name: "Younes",
    role: "Coach & boxeur amateur",
    bio: "Jeune boxeur amateur et coach, Younes anime les temps forts de l'association.",
    image: "/images/coach-younes.svg",
  },
  {
    slug: "zinedine-meftah",
    name: "Zinedine Meftah",
    role: "Boxeur amateur",
    bio: "Jeune boxeur amateur, avec un passif de coach.",
    image: "/images/coach-zinedine.svg",
  },
];

export const getCoach = (slug: string) => coachs.find((c) => c.slug === slug);
export const fondateur = coachs.find((c) => c.founder)!;
