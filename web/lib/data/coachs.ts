/**
 * L'équipe réelle de l'association — informations communiquées par le CBAC
 * (juillet 2026, complétées le 2026-08-09). Règle : ne rien inventer (ni
 * parcours, ni diplômes) ; si une information manque, on ne met rien.
 *
 * `metier` = la fonction ou le métier hors association, quand il éclaire le
 * rôle de la personne au CBAC (demande de l'association : montrer que
 * l'équipe est composée de profils qui dépassent la seule pratique sportive).
 */
export type Coach = {
  slug: string;
  name: string;
  role: string;
  /** Métier / fonction hors association, affiché en pastille sur la fiche. */
  metier?: string;
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
    role: "Conseiller en développement",
    metier: "Boxeur amateur & coach",
    bio: "Conseiller de l'association, Younes intervient sur les démarches pédagogiques des interventions et sur le pilotage du développement. Son expérience de la boxe amateur nourrit ce rôle de dirigeant : il anime aussi les temps forts du CBAC.",
    image: "/images/coach-younes.svg",
  },
  {
    slug: "douka",
    name: "Douka",
    role: "Psychologue",
    bio: "Psychologue, Douka apporte son regard professionnel sur la dimension éducative des actions de l'association et sur l'accompagnement des publics.",
    image: "/images/coach-douka.svg",
  },
  {
    slug: "hugo",
    name: "Hugo",
    role: "Membre de l'équipe",
    bio: "Membre de l'équipe de bénévoles du CBAC, engagé sur les actions de l'association.",
    image: "/images/coach-hugo.svg",
  },
  {
    slug: "zinedine-meftah",
    name: "Zinedine Meftah",
    role: "Boxeur",
    bio: "Boxeur amateur, avec un passif de coach.",
    image: "/images/coach-zinedine.svg",
  },
];

export const getCoach = (slug: string) => coachs.find((c) => c.slug === slug);
export const fondateur = coachs.find((c) => c.founder)!;
