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
    role: "Fondateur, président & entraîneur principal",
    founder: true,
    bio: "Ancien compétiteur amateur, Soungui fonde le CBAC il y a douze ans avec une conviction : la boxe anglaise est d'abord une école de vie. Grandi à Nanterre, il a fait du gymnase Léo-Lagrange un lieu où les jeunes du quartier apprennent à encaisser, à respecter et à se relever. Il pilote le projet associatif, entraîne le groupe loisir adultes et reste le premier au gymnase, le dernier à éteindre les projecteurs.",
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
    role: "Coach boxe éducative",
    bio: "Éducatrice sportive de formation, Awa encadre les groupes 6-11 ans et les interventions en milieu scolaire. Sa pédagogie transforme chaque séance en grand jeu : on touche, on esquive, on rit — et sans s'en rendre compte, on apprend la discipline et le respect de l'autre. Elle coordonne aussi les passages de « gants de couleur » de la Fédération.",
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
    role: "Coach compétition",
    bio: "Trente combats amateurs au compteur et un titre régional : Karim connaît le ring de l'intérieur. Il prépare le groupe compétition aux championnats départementaux et régionaux, avec une exigence simple : on ne monte sur un ring que parfaitement préparé, physiquement et mentalement. Il accompagne chaque compétiteur aux pesées et dans les coins, saison après saison.",
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
    role: "Coach cardio-boxe & remise en forme",
    bio: "Venue du fitness, Léa a trouvé dans la boxe l'énergie qui manquait à ses cours. Elle anime les créneaux boxe santé & forme — dont le créneau du midi plébiscité par les actifs — et conçoit les séances bien-être de nos interventions en entreprise. Son credo : tout l'engagement du boxeur, zéro coup reçu, et le sourire en fin de séance.",
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
