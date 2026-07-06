export type Cible = {
  key: "entreprises" | "centres-sociaux" | "ecoles" | "insertion";
  name: string;
  /** Ancre de section sur /interventions (id HTML, sans #). */
  anchor: string;
  /** Citation persona (verbatim de cadrage) avec attribution. */
  persona: string;
  pitch: string;
  points: string[];
  image: string;
  /** Exemples de séances / formats déjà réalisés. */
  exemples: string[];
};

export const cibles: Cible[] = [
  {
    key: "entreprises",
    name: "Entreprises & team building",
    anchor: "entreprises",
    persona:
      "« Le bien-être au travail et la cohésion d'équipe m'intéressent. La boxe, c'est original pour un team building. » — Marc, DRH d'une PME",
    pitch:
      "Un team building qui ne ressemble à aucun autre : vos équipes enfilent les gants, apprennent à se faire confiance et repartent soudées. Zéro coup reçu, 100 % d'adrénaline partagée — et chaque séance finance nos actions auprès des jeunes du territoire.",
    points: [
      "Formats de 1h30 à la journée, dans vos locaux ou au gymnase",
      "Aucun coup porté : ateliers pattes d'ours, sac et défis d'équipe",
      "Matériel fourni, encadrement diplômé, jusqu'à 40 participants",
      "Votre séance finance l'accès à la boxe des jeunes de Nanterre",
    ],
    image: "/images/corporate-1.svg",
    exemples: [
      "Atelier « Cohésion & garde haute » — 2h, 18 collaborateurs d'une PME du numérique",
      "Matinée QVT « Boxe & souffle » — cardio-boxe + gestion du stress, 25 participants",
      "Challenge inter-services au gymnase — 3 équipes, ateliers tournants et mini-gala amical",
    ],
  },
  {
    key: "centres-sociaux",
    name: "Centres sociaux, foyers & structures jeunesse",
    anchor: "centres-sociaux",
    persona:
      "« Je cherche des activités qui captent l'attention des jeunes difficiles. J'ai besoin de voir rapidement : tarifs, disponibilités, et surtout des preuves que ça marche. » — Sophie, directrice de centre social",
    pitch:
      "La boxe capte l'attention là où beaucoup d'activités échouent. Nous co-construisons avec vos équipes des cycles d'initiation qui accrochent les jeunes dès la première séance, avec un cadre clair : ici on se respecte, on s'écoute, on se dépasse. Bilan écrit à chaque fin de cycle pour vos financeurs.",
    points: [
      "Cycles de 5 à 12 séances, en vos murs ou dans un gymnase mis à disposition",
      "Objectifs éducatifs définis ensemble (assiduité, gestion des émotions, mixité)",
      "Bilan de cycle transmis pour vos dossiers CAF et Ville",
      "Tarifs associatifs, conventions annuelles possibles",
    ],
    image: "/images/centre-social-1.svg",
    exemples: [
      "Cycle « Gants & émotions » — 10 séances avec le centre social Les Acacias, 14 jeunes de 11 à 14 ans",
      "Initiation vacances — 4 séances pendant les vacances de printemps, groupe 8-12 ans",
      "Soirée parents-ados — séance partagée pour renouer le dialogue par le sport",
    ],
  },
  {
    key: "ecoles",
    name: "Écoles & périscolaire",
    anchor: "ecoles",
    persona:
      "« Les vacances scolaires arrivent, je cherche des stages clé en main. Quel âge minimum ? C'est sécurisé ? » — Fatima, responsable d'accueil de loisirs",
    pitch:
      "De la classe au périscolaire, la boxe éducative est un formidable support pédagogique : sans aucun coup porté, elle travaille la motricité, la concentration et le respect des règles. Nos interventions sont clé en main : matériel, encadrement diplômé, fiches pédagogiques pour les enseignants et bilan de fin de cycle.",
    points: [
      "Boxe éducative uniquement : touches légères, aucun coup porté",
      "Dès 6 ans, groupes de 12 à 16 enfants",
      "Cycles EPS, ateliers périscolaires, stages vacances clé en main",
      "Coachs diplômés d'État, matériel adapté fourni",
    ],
    image: "/images/ecole-1.svg",
    exemples: [
      "Cycle EPS de 8 séances — deux classes de CM1-CM2, école Jules-Ferry",
      "Atelier périscolaire hebdomadaire — 45 min le mardi, groupe de 14 enfants",
      "Stage « Petits gants » vacances d'automne — semaine complète pour un accueil de loisirs",
    ],
  },
  {
    key: "insertion",
    name: "Insertion & PJJ",
    anchor: "insertion",
    persona:
      "« Mes jeunes ont besoin de canaliser leur énergie. Mais je dois justifier le projet auprès de ma direction. » — Thomas, éducateur PJJ",
    pitch:
      "Douze ans de terrain nous l'ont appris : le ring est un des rares endroits où un jeune en rupture accepte un cadre. Nos cycles pour structures d'insertion et services PJJ s'appuient sur un projet pédagogique écrit, des objectifs individualisés et des points d'étape réguliers avec vos éducateurs — de quoi documenter le projet auprès de votre direction et de vos financeurs.",
    points: [
      "Projet pédagogique CBAC téléchargeable pour monter votre dossier",
      "Objectifs individualisés co-définis avec les éducateurs",
      "Points d'étape et bilan final écrits",
      "Possibilité de passerelle vers l'adhésion à l'association (tarif solidaire)",
    ],
    image: "/images/insertion-1.svg",
    exemples: [
      "Cycle « Remise en jeu » — 12 séances avec une unité éducative PJJ, 8 jeunes suivis",
      "Module boxe & savoir-être — 6 séances avec une mission locale, en appui d'un parcours emploi",
      "Accompagnement individuel — 2 jeunes devenus adhérents de l'association après leur cycle, adhésion financée",
    ],
  },
];
