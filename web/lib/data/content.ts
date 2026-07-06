/**
 * Contenus éditoriaux du site. Règle actée avec l'association :
 * ne rien inventer — si une information n'est pas connue, on ne met rien.
 * Témoignages, noms de partenaires, actualités et dates de stages réels
 * seront ajoutés quand l'association les fournira (voir A-VALIDER.md).
 */

/* ── FAQ — uniquement ce que l'association sait et fait vraiment ── */

export const faqSecurite: { q: string; a: string }[] = [
  {
    q: "Comment se déroule une initiation ?",
    a: "Une initiation, ce n'est pas qu'une séance de sport : on met les gants, on apprend les bases de la boxe anglaise — et surtout on échange. L'interaction et la discussion font partie intégrante de la séance : c'est par là que passent le lien social et la transmission des valeurs (respect, gestion des émotions, dépassement de soi).",
  },
  {
    q: "Faut-il avoir déjà boxé pour participer ?",
    a: "Non. Les actions de l'association s'adressent à tous les publics, aussi bien expérimentés en boxe que débutants. Chacun participe à son rythme.",
  },
  {
    q: "Où se déroulent les séances ?",
    a: "L'association n'a pas de gymnase attitré : elle intervient directement dans les structures qui l'accueillent — foyers, centres sociaux, structures jeunesse, établissements scolaires, structures d'insertion, entreprises. Le lieu est précisé pour chaque action.",
  },
  {
    q: "Qui encadre les séances ?",
    a: "Les séances sont animées par l'équipe de bénévoles de l'association, autour de son président fondateur Soungui Gomis et de jeunes coachs issus de la boxe amateur. L'équipe est présentée à chaque structure avant l'intervention.",
  },
  {
    q: "À qui s'adressent vos actions ?",
    a: "À tous les publics : structures jeunesse, foyers, centres sociaux, établissements scolaires, structures d'encadrement et d'insertion, accueils de loisirs, associations, entreprises et particuliers.",
  },
];

/* ── Galerie photo — illustrations de maquette (scènes génériques) ── */

export const galerie: { src: string; alt: string; cat: "gala" | "cours" | "evenement" }[] = [
  { src: "/images/gala-1.svg", alt: "Assaut éducatif sous les projecteurs lors d'un gala de boxe", cat: "gala" },
  { src: "/images/gala-2.svg", alt: "Remise des récompenses aux jeunes participants", cat: "gala" },
  { src: "/images/gala-3.svg", alt: "Le public debout autour du ring", cat: "gala" },
  { src: "/images/cours-1.svg", alt: "Travail aux pattes d'ours pendant une séance d'initiation", cat: "cours" },
  { src: "/images/cours-2.svg", alt: "Groupe de jeunes en cercle autour du coach pendant une séance", cat: "cours" },
  { src: "/images/cours-3.svg", alt: "Séance d'initiation à la boxe anglaise dans une structure d'accueil", cat: "cours" },
  { src: "/images/evenement-1.svg", alt: "Atelier de boxe avec une équipe d'entreprise", cat: "evenement" },
  { src: "/images/evenement-2.svg", alt: "Sortie de l'association à un gala de boxe", cat: "evenement" },
  { src: "/images/evenement-3.svg", alt: "Temps d'échange et de discussion après une séance découverte", cat: "evenement" },
];

/* ── Quiz « Quel programme pour vous ? » ── */

export const quiz: { question: string; options: { label: string; scores: Record<string, number> }[] }[] = [
  {
    question: "Pour qui cherchez-vous un programme ?",
    options: [
      { label: "Mon enfant ou mon ado", scores: { enfant: 3 } },
      { label: "Moi-même", scores: { adulte: 3 } },
      { label: "Les jeunes ou résidents de ma structure", scores: { structure: 3 } },
      { label: "Mon équipe, mes collègues", scores: { entreprise: 3 } },
    ],
  },
  {
    question: "Quel est l'objectif principal ?",
    options: [
      { label: "Découvrir la boxe, gagner en confiance", scores: { enfant: 2, adulte: 2 } },
      { label: "Occuper les vacances utilement", scores: { enfant: 3 } },
      { label: "Créer du lien et poser un cadre dans un groupe", scores: { structure: 3 } },
      { label: "Souder une équipe autrement", scores: { entreprise: 3 } },
    ],
  },
  {
    question: "Quel format vous parle le plus ?",
    options: [
      { label: "Une séance découverte, pour voir", scores: { adulte: 2, enfant: 1 } },
      { label: "Un stage pendant les vacances", scores: { enfant: 3 } },
      { label: "Un cycle de plusieurs séances dans la durée", scores: { structure: 3 } },
      { label: "Un événement ponctuel, clé en main", scores: { entreprise: 2, structure: 1 } },
    ],
  },
  {
    question: "Où imaginez-vous les séances ?",
    options: [
      { label: "Près de chez moi, sur un lieu d'intervention de l'asso", scores: { enfant: 2, adulte: 2 } },
      { label: "Dans nos locaux — venez à nous", scores: { structure: 2, entreprise: 2 } },
      { label: "Peu importe, du moment que ça bouge", scores: { adulte: 1, enfant: 1 } },
      { label: "À définir ensemble selon le projet", scores: { structure: 1, entreprise: 1 } },
    ],
  },
];

export const quizProfiles: Record<string, { title: string; text: string; href: string; cta: string }> = {
  enfant: {
    title: "Initiations & stages jeunesse",
    text: "Des séances où l'on apprend les bases de la boxe anglaise et où l'on discute autant qu'on boxe : respect, gestion des émotions, confiance. Les stages sont organisés avec les structures partenaires, notamment pendant les vacances scolaires.",
    href: "/stages",
    cta: "Découvrir les stages",
  },
  adulte: {
    title: "Cours d'initiation",
    text: "Une séance pour mettre les gants, apprendre la garde et comprendre pourquoi la boxe est d'abord une école de respect — débutants bienvenus, l'échange fait partie de la séance.",
    href: "/actions#cours-initiation",
    cta: "Découvrir les initiations",
  },
  structure: {
    title: "Intervention sur mesure",
    text: "Initiation ponctuelle, cycle de séances, stage, temps d'échange : construisons ensemble l'action adaptée à votre structure — foyer, centre social, école ou dispositif d'insertion.",
    href: "/interventions",
    cta: "Créer mon intervention",
  },
  entreprise: {
    title: "Boxe en entreprise",
    text: "Vos équipes enfilent les gants, apprennent à se faire confiance et repartent soudées — et votre séance soutient les actions sociales de l'association.",
    href: "/interventions#entreprises",
    cta: "Organiser une séance",
  },
};

/* ── Flux Instagram (mock — visuels et légendes génériques de maquette) ── */

export const instaPosts: { image: string; caption: string; likes: number }[] = [
  {
    image: "/images/insta-1.svg",
    caption: "Dernière séance de la semaine — merci pour l'énergie 🔥 #CBAC #boxeanglaise",
    likes: 128,
  },
  {
    image: "/images/insta-2.svg",
    caption: "Premiers gants, premiers sourires 🥊 #boxeeducative",
    likes: 214,
  },
  {
    image: "/images/insta-3.svg",
    caption: "Après les gants, la discussion : l'initiation, c'est aussi ça. #liensocial",
    likes: 96,
  },
  {
    image: "/images/insta-4.svg",
    caption: "Le matériel est chargé, direction le foyer pour la séance du jour 🚐🥊 #onvientavous",
    likes: 342,
  },
  {
    image: "/images/insta-5.svg",
    caption: "Séance d'initiation en structure — que du respect 🙏",
    likes: 87,
  },
  {
    image: "/images/insta-6.svg",
    caption: "Merci aux jeunes pour leur accueil et leur énergie sur cette action !",
    likes: 173,
  },
];
