/**
 * Cibles B2B/B2A de la page /interventions. Les citations « persona »
 * proviennent des documents de cadrage (personas fictifs, présentés comme
 * tels). Les foyers et structures d'accueil sont mis en avant : c'est là
 * que l'association mène l'essentiel de ses actions.
 */
export type Cible = {
  key: "foyers" | "centres-sociaux" | "ecoles" | "insertion" | "entreprises";
  name: string;
  /** Ancre de section sur /interventions (id HTML, sans #). */
  anchor: string;
  /** Citation persona (verbatim des docs de cadrage). */
  persona: string;
  pitch: string;
  points: string[];
  image: string;
  /** Formats d'intervention possibles. */
  exemples: string[];
};

export const cibles: Cible[] = [
  {
    key: "foyers",
    name: "Foyers & structures d'accueil",
    anchor: "foyers",
    persona:
      "« Je cherche des activités qui captent l'attention des jeunes. J'ai besoin de voir rapidement que ça marche. » — persona des docs de cadrage",
    pitch:
      "C'est le cœur de notre action : en deux ans, l'association a mené plus de trente actions dans des structures — foyers en tête. Une intervention chez vous, ce n'est pas qu'une séance de sport : on boxe, puis on discute. L'interaction et l'échange avec les résidents font partie intégrante de la séance — c'est par là que passent le lien social et la transmission des valeurs.",
    points: [
      "Plus de 30 actions déjà menées dans des structures",
      "Un temps d'échange et de discussion à chaque séance",
      "Séance ponctuelle ou cycle, construit avec vos équipes",
      "Ouvert à tous les résidents, débutants bienvenus",
    ],
    image: "/images/insertion-1.svg",
    exemples: [
      "Séance d'initiation découverte dans vos locaux",
      "Cycle de plusieurs séances dans la durée",
      "Temps d'échange : rencontre avec un boxeur, soirée boxe (retransmission de combats)",
    ],
  },
  {
    key: "centres-sociaux",
    name: "Centres sociaux & structures jeunesse",
    anchor: "centres-sociaux",
    persona:
      "« Je cherche des activités qui captent l'attention des jeunes difficiles, et des preuves que ça marche. » — Sophie, persona des docs de cadrage",
    pitch:
      "La boxe capte l'attention là où beaucoup d'activités échouent. Nous construisons avec vos équipes des séances et des cycles qui accrochent les jeunes, avec un cadre clair : ici on se respecte, on s'écoute, on se dépasse — et on prend le temps de discuter à chaque séance.",
    points: [
      "Initiations ponctuelles ou cycles de plusieurs séances",
      "Objectifs définis ensemble avec vos équipes",
      "La discussion et le lien social au cœur de la démarche",
      "Une association d'éducation populaire, à but non lucratif",
    ],
    image: "/images/centre-social-1.svg",
    exemples: [
      "Séance découverte pour un groupe de jeunes",
      "Cycle d'initiation sur plusieurs semaines",
      "Stage pendant les vacances scolaires, monté ensemble",
    ],
  },
  {
    key: "ecoles",
    name: "Écoles & accueils de loisirs",
    anchor: "ecoles",
    persona:
      "« Les vacances scolaires arrivent, je cherche des stages clé en main. C'est sécurisé ? » — Fatima, persona des docs de cadrage",
    pitch:
      "De la classe au périscolaire, la boxe est un formidable support pédagogique : elle travaille la concentration, le respect des règles et la gestion des émotions. Nos interventions se construisent avec vos équipes, autour du sport et de l'échange.",
    points: [
      "Des séances pensées pour le cadre scolaire et périscolaire",
      "Valeurs travaillées : respect, écoute, gestion des émotions",
      "Formats adaptés à vos contraintes et à vos effectifs",
      "Stages possibles pendant les vacances scolaires",
    ],
    image: "/images/ecole-1.svg",
    exemples: [
      "Cycle d'initiation sur le temps scolaire",
      "Atelier périscolaire",
      "Stage vacances organisé avec l'accueil de loisirs",
    ],
  },
  {
    key: "insertion",
    name: "Insertion & structures d'encadrement",
    anchor: "insertion",
    persona:
      "« Mes jeunes ont besoin de canaliser leur énergie. Mais je dois justifier le projet auprès de ma direction. » — Thomas, persona des docs de cadrage",
    pitch:
      "Le ring est un des rares endroits où un jeune en rupture accepte un cadre. Nos interventions pour les structures d'insertion et d'encadrement s'appuient sur les valeurs du sport — respect, gestion des émotions, dépassement de soi — et sur des temps de discussion qui permettent à chacun de trouver sa place.",
    points: [
      "Un cadre clair, accepté parce qu'il vient du sport",
      "Des temps d'échange intégrés à chaque séance",
      "Objectifs co-définis avec les éducateurs",
      "Une démarche d'éducation populaire assumée",
    ],
    image: "/images/activite-boxe-educative.svg",
    exemples: [
      "Séance d'initiation avec un groupe suivi",
      "Cycle de séances en appui d'un parcours éducatif",
      "Temps d'échange autour de la boxe et de ses valeurs",
    ],
  },
  {
    key: "entreprises",
    name: "Entreprises",
    anchor: "entreprises",
    persona:
      "« Le bien-être au travail et la cohésion d'équipe m'intéressent. La boxe, c'est original pour un team building. » — Marc, persona des docs de cadrage",
    pitch:
      "Un team building qui ne ressemble à aucun autre : vos équipes enfilent les gants, apprennent à se faire confiance et repartent soudées. Et en accueillant le CBAC, vous soutenez une association d'éducation populaire qui crée du lien social par le sport.",
    points: [
      "Ateliers de boxe anglaise dans vos locaux",
      "Cohésion, confiance, gestion du stress",
      "Format construit selon vos objectifs et votre effectif",
      "Votre séance soutient les actions sociales de l'association",
    ],
    image: "/images/corporate-1.svg",
    exemples: [
      "Atelier découverte pour une équipe",
      "Séance cohésion dans le cadre d'un séminaire",
      "Temps d'échange avec un boxeur autour d'un thème (dépassement, gestion du stress…)",
    ],
  },
];
