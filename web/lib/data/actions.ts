/**
 * Les actions du CBAC — l'association n'a ni salle attitrée ni créneaux
 * hebdomadaires : elle se déplace là où on l'accueille (gymnases mis à
 * disposition, foyers, centres sociaux, écoles, locaux d'entreprise).
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
    name: "Cours d'initiation",
    short: "Une séance pour mettre les gants — on vient à vous, matériel compris.",
    description:
      "C'est le cœur de notre activité : des séances d'initiation à la boxe anglaise, organisées là où on nous invite — un gymnase prêté par la ville, la salle d'activités d'un foyer, la cour d'une école, un local d'entreprise. En une heure, on enfile les gants, on apprend la garde et les déplacements, et on comprend pourquoi la boxe est d'abord une école de respect. Aucun coup porté en initiation : uniquement de la boxe éducative, des ateliers et du jeu.",
    publics: "Tous publics dès 6 ans — particuliers, groupes et structures",
    lieux: "Dans vos locaux ou dans un gymnase mis à disposition",
    image: "/images/activite-initiation-decouverte.svg",
    points: [
      "Séance découverte gratuite pour les particuliers",
      "Aucun coup porté : boxe éducative, ateliers et jeux d'opposition",
      "Matériel intégralement fourni et désinfecté",
      "Encadrement diplômé d'État et fédéral",
    ],
    faq: [
      {
        q: "Où ont lieu les initiations pour les particuliers ?",
        a: "Le lieu change selon les périodes : gymnases mis à disposition par la ville, centres sociaux partenaires, événements de quartier. Consultez le calendrier du mois ou appelez-nous — on vous indique la prochaine séance près de chez vous.",
      },
      {
        q: "Faut-il déjà être sportif pour participer ?",
        a: "Pas du tout. Les séances partent de jeux d'opposition très simples ; chacun progresse à son rythme, quel que soit son âge ou son gabarit.",
      },
    ],
  },
  {
    slug: "stages-vacances",
    name: "Stages vacances",
    short: "Une semaine de boxe, de jeux et de sorties à chaque période de vacances.",
    description:
      "À chaque période de vacances scolaires, le CBAC monte un stage à la semaine pour les enfants et les ados, dans un gymnase mis à disposition par la ville : boxe éducative le matin, grands jeux sportifs et ateliers « vie de groupe » l'après-midi, avec une sortie ou un mini-gala en clôture. Les stages sont ouverts à tous, en lien avec les accueils de loisirs et structures jeunesse du territoire.",
    publics: "Enfants & ados, 6-15 ans selon les stages",
    lieux: "Gymnase mis à disposition par la Ville (précisé à l'inscription)",
    image: "/images/activite-stage-vacances.svg",
    points: [
      "Dates et tranches d'âge publiées à chaque période de vacances",
      "Boxe éducative + grands jeux + sortie de fin de stage",
      "Ouvert aux particuliers comme aux groupes de structures",
      "Tarifs solidaires selon quotient familial, Pass'Sport accepté",
    ],
    faq: [
      {
        q: "Mon enfant n'a jamais boxé, peut-il s'inscrire à un stage ?",
        a: "Oui, les stages sont conçus pour les débutants comme pour les habitués : les groupes sont constitués par âge et par niveau dès le premier matin.",
      },
    ],
  },
  {
    slug: "galas-amicaux",
    name: "Galas amicaux",
    short: "La grande fête de l'association — assauts éducatifs, démos et remises de récompenses.",
    description:
      "Deux fois par an, le CBAC organise un gala amical dans une salle municipale : assauts éducatifs des enfants, démonstrations des ados et des coachs, remise des récompenses de l'année — le tout devant les familles, les partenaires et le quartier. Entrée libre, buvette associative, et une règle d'or : ici, on s'affronte à la touche, jamais pour faire mal.",
    publics: "Ouvert à tous — participants, familles, curieux",
    lieux: "Salles municipales de Nanterre (annoncé au calendrier)",
    image: "/images/gala-1.svg",
    points: [
      "Entrée libre, ambiance familiale",
      "Assauts éducatifs à la touche, encadrés et arbitrés",
      "Le rendez-vous des jeunes accompagnés pendant l'année",
      "Partenaires et bénévoles mis à l'honneur",
    ],
  },
  {
    slug: "sorties-evenements",
    name: "Sorties & événements boxe",
    short: "Galas professionnels, événements de quartier : la boxe au-delà des gants.",
    description:
      "Voir de vrais boxeurs monter sur le ring, ça change une trajectoire. Le CBAC emmène régulièrement les jeunes qu'il accompagne à des galas professionnels et amateurs de la région — places offertes grâce à nos partenaires — et participe aux événements de quartier : fêtes de la ville, forums des associations, animations d'été. C'est souvent là que tout commence.",
    publics: "En priorité les jeunes accompagnés et leurs familles",
    lieux: "Palais des sports, salles de gala, événements de quartier",
    image: "/images/evenement-2.svg",
    points: [
      "Places de gala offertes grâce aux partenaires",
      "Encadrement et transport organisés par l'association",
      "Présence aux fêtes de quartier et forums associatifs",
      "Des rencontres qui donnent envie de s'y mettre",
    ],
  },
];
