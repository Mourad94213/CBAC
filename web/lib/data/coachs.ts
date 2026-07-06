export type Coach = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  diplomes: string[];
  image: string;
  founder?: boolean;
};

export const coachs: Coach[] = [
  {
    slug: "soungui-gomis",
    name: "Soungui Gomis",
    role: "Fondateur, président & intervenant principal",
    founder: true,
    bio: "Ancien compétiteur amateur, Soungui fonde le CBAC il y a douze ans avec une conviction : la boxe anglaise est d'abord une école de vie. Grandi à Nanterre, il sillonne depuis les gymnases, les écoles, les foyers et les centres sociaux du territoire — partout où un groupe a besoin d'un cadre, de gants et d'un peu de confiance. Il pilote le projet associatif et anime lui-même la plupart des initiations.",
    diplomes: [
      "BPJEPS activités pugilistiques, mention boxe anglaise",
      "Prévôt fédéral FFBoxe",
      "PSC1 — premiers secours",
    ],
    image: "/images/coach-soungui.svg",
  },
  {
    slug: "awa-diallo",
    name: "Awa Diallo",
    role: "Coach boxe éducative — écoles & enfance",
    bio: "Éducatrice sportive de formation, Awa encadre les ateliers 6-11 ans : cycles en milieu scolaire, stages vacances et initiations en accueil de loisirs. Sa pédagogie transforme chaque séance en grand jeu : on touche, on esquive, on rit — et sans s'en rendre compte, on apprend la discipline et le respect de l'autre.",
    diplomes: [
      "BMF 2e degré — Brevet de moniteur fédéral FFBoxe",
      "BAFA, option activités physiques",
      "PSC1 — premiers secours",
    ],
    image: "/images/coach-awa.svg",
  },
  {
    slug: "karim-benali",
    name: "Karim Benali",
    role: "Coach interventions jeunesse & insertion",
    bio: "Trente combats amateurs au compteur et un titre régional : Karim connaît le ring de l'intérieur, et ça s'entend quand il parle aux jeunes. Il encadre les cycles menés avec les foyers, les missions locales et les services PJJ, avec une exigence simple : ici on se respecte, on s'écoute, on se dépasse. Son parcours fait souvent plus que de longs discours.",
    diplomes: [
      "DEJEPS perfectionnement sportif, boxe anglaise",
      "Juge-arbitre régional FFBoxe",
      "Diplôme fédéral de préparation physique",
    ],
    image: "/images/coach-karim.svg",
  },
  {
    slug: "lea-fontaine",
    name: "Léa Fontaine",
    role: "Coach cardio-boxe & bien-être en entreprise",
    bio: "Venue du fitness, Léa a trouvé dans la boxe l'énergie qui manquait à ses cours. Elle conçoit et anime les ateliers cardio-boxe de nos team buildings et les séances bien-être proposées aux structures. Son credo : tout l'engagement du boxeur, zéro coup reçu, et le sourire en fin de séance.",
    diplomes: [
      "BPJEPS activités de la forme (AF)",
      "Certification cardio-boxing FFBoxe",
      "PSC1 — premiers secours",
    ],
    image: "/images/coach-lea.svg",
  },
];

export const getCoach = (slug: string) => coachs.find((c) => c.slug === slug);
export const fondateur = coachs.find((c) => c.founder)!;
