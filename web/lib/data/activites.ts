export type Activite = {
  slug: string;
  name: string;
  /** Accroche courte affichée sur les cartes. */
  short: string;
  description: string;
  /** Public visé, en toutes lettres. */
  audience: string;
  ages: string;
  levels: string[];
  duration: string;
  image: string;
  /** Points forts / ce qu'on y travaille. */
  points: string[];
  faq?: { q: string; a: string }[];
};

export const activites: Activite[] = [
  {
    slug: "boxe-educative",
    name: "Boxe éducative",
    short: "Toucher sans faire mal : la boxe comme jeu, dès 6 ans.",
    description:
      "La boxe éducative, c'est la boxe anglaise codifiée pour les enfants : l'assaut remplace le combat, on marque des touches légères, jamais de coups appuyés. Les enfants apprennent les déplacements, la garde et les enchaînements comme un grand jeu d'adresse, tout en travaillant le respect des règles, de l'adversaire et de l'arbitre. C'est notre cœur de métier d'éducation populaire : gérer ses émotions, gagner en confiance, apprendre à perdre et à recommencer.",
    audience: "Enfants",
    ages: "6-11 ans",
    levels: ["Découverte", "Initiés"],
    duration: "1h",
    image: "/images/activite-boxe-educative.svg",
    points: [
      "Touches légères uniquement, jamais de coups portés",
      "Motricité, coordination et confiance en soi",
      "Respect des règles, de l'autre et de l'arbitre",
      "Passage des « gants de couleur » de la Fédération",
    ],
    faq: [
      {
        q: "Mon enfant peut-il se blesser ?",
        a: "Non : en boxe éducative, les coups appuyés sont interdits et sanctionnés. Casque, gants adaptés et protège-dents sont fournis, et chaque assaut est arbitré par un coach diplômé.",
      },
      {
        q: "Faut-il déjà être sportif pour commencer ?",
        a: "Pas du tout. Les séances partent de jeux d'opposition très simples ; chaque enfant progresse à son rythme, quel que soit son gabarit.",
      },
    ],
  },
  {
    slug: "boxe-loisir",
    name: "Boxe loisir",
    short: "Technique, sac et mise de gants maîtrisée — sans compétition.",
    description:
      "Le cours pour apprendre vraiment la boxe anglaise, sans objectif de compétition. Au programme : travail technique au miroir, ateliers au sac et aux pattes d'ours, puis mise de gants encadrée pour celles et ceux qui le souhaitent. On y vient pour se dépenser, se vider la tête et progresser dans une ambiance exigeante mais bienveillante — les débutants complets sont accueillis à chaque rentrée.",
    audience: "Ados & adultes",
    ages: "12 ans et +",
    levels: ["Débutant", "Intermédiaire", "Confirmé"],
    duration: "1h30",
    image: "/images/activite-boxe-loisir.svg",
    points: [
      "Technique complète : garde, déplacements, enchaînements",
      "Cardio et renforcement à chaque séance",
      "Mise de gants toujours volontaire et encadrée",
      "Groupes ados et adultes séparés",
    ],
    faq: [
      {
        q: "Suis-je obligé·e de faire de la mise de gants ?",
        a: "Non. La mise de gants est proposée en fin de séance à celles et ceux qui le souhaitent, avec un partenaire de niveau équivalent et sous le contrôle direct du coach.",
      },
    ],
  },
  {
    slug: "boxe-competition",
    name: "Boxe compétition",
    short: "Préparation aux combats amateurs, encadrée par des coachs diplômés.",
    description:
      "Pour les boxeuses et boxeurs qui veulent monter sur le ring en compétition amateur. Préparation physique spécifique, travail tactique, sparring contrôlé et suivi individualisé jusqu'aux championnats départementaux et régionaux. L'accès se fait sur avis du coach après une saison de pratique — la compétition se mérite, et elle se prépare sérieusement.",
    audience: "Ados & adultes confirmés",
    ages: "14 ans et +",
    levels: ["Confirmé", "Compétiteur"],
    duration: "2h",
    image: "/images/activite-boxe-competition.svg",
    points: [
      "Préparation physique et tactique individualisée",
      "Sparring contrôlé entre partenaires de niveau",
      "Accompagnement aux pesées et aux compétitions",
      "Encadrement DEJEPS et prévôt fédéral",
    ],
    faq: [
      {
        q: "Comment intégrer le groupe compétition ?",
        a: "Sur avis du coach, en général après une saison complète en boxe loisir. Un passeport sportif et un examen médical approfondi sont obligatoires avant tout combat.",
      },
      {
        q: "À quel âge peut-on combattre ?",
        a: "Les premiers combats amateurs sont possibles dès 14 ans en catégorie cadet, avec l'accord des responsables légaux et du médecin fédéral.",
      },
    ],
  },
  {
    slug: "boxe-sante-forme",
    name: "Boxe santé & forme",
    short: "Cardio-boxe : tout le boxeur, sans l'opposition.",
    description:
      "Le cours cardio-boxe du CBAC : enchaînements aux pattes d'ours et au sac, circuits de renforcement, gainage et travail du souffle — sans jamais recevoir de coup. Idéal pour se remettre en forme, évacuer le stress d'une journée de travail et sculpter sa condition physique en musique. C'est aussi la porte d'entrée douce vers la boxe pour celles et ceux qui n'osent pas encore l'opposition.",
    audience: "Adultes",
    ages: "16 ans et +",
    levels: ["Tous niveaux"],
    duration: "1h",
    image: "/images/activite-boxe-sante-forme.svg",
    points: [
      "Zéro coup reçu : uniquement sac, pattes d'ours et circuits",
      "Cardio, gainage et renforcement complet",
      "Séances en musique, intensité modulable",
      "Créneau du midi pour les actifs",
    ],
  },
  {
    slug: "initiation-decouverte",
    name: "Initiation & découverte",
    short: "Une première séance pour mettre les gants — seul·e ou en groupe.",
    description:
      "La porte d'entrée du club : une séance d'essai gratuite pour les particuliers, et des séances découverte clé en main pour les structures (centres sociaux, écoles, accueils de loisirs, entreprises). En une heure, on enfile les gants, on apprend les bases de la garde et des déplacements, et on comprend pourquoi la boxe anglaise est d'abord une école de respect. Matériel intégralement fourni.",
    audience: "Tous publics & structures",
    ages: "Dès 6 ans",
    levels: ["Découverte"],
    duration: "1h à 1h30",
    image: "/images/activite-initiation-decouverte.svg",
    points: [
      "Séance d'essai gratuite pour les particuliers",
      "Formats groupe pour structures et entreprises",
      "Matériel fourni : gants, protections, plastrons",
      "Au gymnase ou dans vos locaux",
    ],
  },
  {
    slug: "stage-vacances",
    name: "Stages vacances",
    short: "Une semaine de boxe, de jeux et de sorties pendant les vacances.",
    description:
      "À chaque période de vacances scolaires, le CBAC organise des stages à la semaine pour les enfants et les ados : boxe éducative le matin, grands jeux sportifs et ateliers « vie de groupe » l'après-midi, avec une sortie ou un mini-gala en clôture. Les stages accueillent les adhérents comme les non-adhérents, en lien avec les structures jeunesse du territoire. Places limitées, encadrement diplômé.",
    audience: "Enfants & ados",
    ages: "6-15 ans selon les stages",
    levels: ["Tous niveaux"],
    duration: "5 demi-journées ou journées",
    image: "/images/activite-stage-vacances.svg",
    points: [
      "Boxe éducative + grands jeux + sortie de fin de stage",
      "Ouvert aux non-adhérents et aux groupes de structures",
      "Encadrement diplômé, groupes par âge",
      "Tarifs adaptés au quotient familial",
    ],
    faq: [
      {
        q: "Mon enfant n'a jamais boxé, peut-il s'inscrire à un stage ?",
        a: "Oui, les stages sont conçus pour les débutants comme pour les habitués : les groupes sont constitués par âge et par niveau dès le premier matin.",
      },
    ],
  },
];

export function getActivite(slug: string): Activite | undefined {
  return activites.find((a) => a.slug === slug);
}
