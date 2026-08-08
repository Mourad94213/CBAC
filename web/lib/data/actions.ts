/**
 * Les actions du CBAC — reprises du dossier de présentation de l'association.
 * En attendant ses propres locaux, l'association intervient chez ses
 * structures partenaires (foyers, centres sociaux, écoles, entreprises…).
 * Le slug sert d'ancre sur la page /actions.
 */
export type Action = {
  slug: string;
  name: string;
  short: string;
  description: string;
  /** À qui l'action s'adresse, en toutes lettres. */
  publics: string;
  /** Où l'action se déroule. */
  lieux: string;
  image: string;
  points: string[];
  faq?: { q: string; a: string }[];
};

export const actions: Action[] = [
  {
    slug: "cours-initiation",
    name: "Initiations & cours de boxe",
    short: "Mettre les gants — et prendre le temps d'échanger.",
    description:
      "C'est l'activité principale de l'association : des séances d'initiation et des cours de boxe anglaise, menés chez nos structures partenaires. Au-delà du sport — qui est déjà un enjeu de santé publique —, chaque initiation est un temps d'interaction et de discussion : on échange avec les participants, on débat, on crée du lien. La séance est un outil de sociabilisation et de transmission de valeurs positives : respect, gestion des émotions, dépassement de soi.",
    publics: "Tous publics, expérimentés en boxe comme débutants",
    lieux: "Chez nos structures partenaires",
    image: "/images/activite-initiation-decouverte.svg",
    points: [
      "L'interaction et la discussion au cœur de chaque séance",
      "Un outil de sociabilisation et de transmission de valeurs",
      "Ouvert à tous les niveaux, débutants bienvenus",
      "Plus de 30 actions déjà menées dans des structures",
    ],
    faq: [
      {
        q: "Une initiation, c'est seulement du sport ?",
        a: "Non, et c'est ce qui fait notre approche : pendant une initiation, on boxe, mais on prend aussi le temps de discuter et d'échanger avec les participants. C'est ce temps d'interaction qui crée le lien social et permet de transmettre les valeurs du sport.",
      },
      {
        q: "Faut-il déjà être sportif pour participer ?",
        a: "Pas du tout. Les séances s'adressent à tous les publics, expérimentés comme débutants ; chacun participe à son rythme.",
      },
    ],
  },
  {
    slug: "stages-vacances",
    name: "Stages",
    short: "Des stages montés avec nos structures partenaires, notamment pendant les vacances.",
    description:
      "Les partenariats développés par l'association permettent d'organiser des stages dans les structures partenaires — notamment pendant les vacances scolaires. Ils élargissent l'action de l'association et offrent au public une expérience plus riche et diversifiée que la séance ponctuelle.",
    publics: "Le public des structures partenaires et les adhérents",
    lieux: "Dans les structures partenaires",
    image: "/images/activite-stage-vacances.svg",
    points: [
      "Organisés avec et dans les structures partenaires",
      "Notamment pendant les vacances scolaires",
      "Une expérience plus riche et diversifiée",
      "Dates annoncées au fil de l'année",
    ],
    faq: [
      {
        q: "Quand ont lieu les prochains stages ?",
        a: "Les stages sont montés avec les structures partenaires, principalement pendant les vacances scolaires. Les dates sont annoncées au fil de l'année : contactez-nous ou suivez nos réseaux pour connaître les prochaines sessions.",
      },
    ],
  },
  {
    slug: "temps-echanges",
    name: "Temps d'échanges & sorties",
    short: "Rencontres, sorties aux galas, soirées boxe : le lien social au-delà des gants.",
    description:
      "Des temps conviviaux, organisés avec ou sans partenariat, pour renforcer les liens sociaux et approfondir l'immersion du public dans le monde de la boxe : rencontre avec un boxeur professionnel autour d'un thème, sorties à des galas de boxe, retransmissions de combats en soirée boxe.",
    publics: "Le public accompagné par l'association et ses partenaires",
    lieux: "Dans les structures partenaires ou en sortie",
    image: "/images/evenement-2.svg",
    points: [
      "Rencontres et échanges avec des boxeurs professionnels",
      "Sorties à des galas de boxe",
      "Retransmissions de combats (soirées boxe)",
      "Des temps conviviaux qui renforcent le lien social",
    ],
  },
  {
    slug: "galas-amicaux",
    name: "Galas amicaux",
    short: "Notre ambition : organiser nos propres galas amicaux.",
    description:
      "Le CBAC se donne l'ambition d'organiser ses propres galas amicaux : la consécration du travail fourni pendant l'année, et un temps fort où les volontaires peuvent se challenger — ou participer à l'organisation, et s'engager davantage dans les projets de l'association.",
    publics: "Participants volontaires, familles et partenaires",
    lieux: "Lieu annoncé pour chaque édition",
    image: "/images/gala-1.svg",
    points: [
      "La consécration du travail fourni pendant l'année",
      "Se challenger pour les volontaires, jamais d'obligation",
      "Participer à l'organisation, une façon de s'engager",
      "Un projet que l'association construit pas à pas",
    ],
  },
  {
    slug: "projets",
    name: "Projets",
    short: "Des projets inédits, créés avec la structure et selon ses besoins.",
    description:
      "Toutes nos actions ne rentrent pas dans une case. Quand une structure partenaire identifie un besoin ou une envie particulière, on ne se contente pas de dérouler un format existant : on monte le projet avec elle, de l'idée au jour J. C'est comme ça qu'est née l'exposition co-construite avec l'une de nos structures partenaires — un projet qui ne figurait dans aucun programme, et qui a vu le jour parce qu'il correspondait à un vrai besoin.",
    publics: "Les structures partenaires et leur public",
    lieux: "Défini avec la structure",
    image: "/images/evenement-1.svg",
    points: [
      "Un projet co-construit à partir de votre besoin",
      "Des formats inédits, hors de nos actions habituelles",
      "De l'idée à la réalisation, on avance ensemble",
      "Aucune idée n'est trop hors cadre : parlez-nous-en",
    ],
    faq: [
      {
        q: "Et si notre besoin ne correspond à aucune de vos actions ?",
        a: "C'est précisément l'objet de cette rubrique. Si le besoin de votre structure ne rentre pas dans nos formats habituels, on définit un projet ensemble : on part de votre problématique, on imagine le format, et on le construit avec vos équipes.",
      },
    ],
  },
];
