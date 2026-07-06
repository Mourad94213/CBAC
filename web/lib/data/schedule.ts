/**
 * Calendrier du mois — l'association n'a pas de planning hebdomadaire :
 * elle intervient ponctuellement, là où on l'accueille. Ce calendrier
 * indique les lieux et événements prévus sur le mois à venir.
 */
export type EventMois = {
  date: string;
  title: string;
  lieu: string;
  type: "gala" | "stage" | "sortie" | "initiation" | "reunion";
};

/** Événements du mois — juillet 2026. */
export const eventsMois: EventMois[] = [
  {
    date: "Sam. 4 juillet",
    title: "Gala amical d'été — assauts éducatifs & démonstrations",
    lieu: "Salle des fêtes de Nanterre",
    type: "gala",
  },
  {
    date: "Lun. 6 → ven. 10 juillet",
    title: "Stage vacances « Premiers gants » (6-10 ans)",
    lieu: "Gymnase Anatole-France (mis à disposition par la Ville)",
    type: "stage",
  },
  {
    date: "Mer. 15 juillet",
    title: "Séance d'initiation avec le centre social Les Acacias",
    lieu: "Centre social Les Acacias, quartier du Parc",
    type: "initiation",
  },
  {
    date: "Ven. 17 juillet",
    title: "Cycle « Gants & confiance » au foyer Les Iris — séance 4/6",
    lieu: "Foyer de jeunes travailleurs Les Iris",
    type: "initiation",
  },
  {
    date: "Sam. 18 juillet",
    title: "Sortie de l'association : gala de boxe professionnel (places offertes aux jeunes)",
    lieu: "Palais des sports de Levallois",
    type: "sortie",
  },
  {
    date: "Lun. 20 → ven. 24 juillet",
    title: "Stage vacances ados « Ring d'été » (11-15 ans)",
    lieu: "Gymnase Joliot-Curie (mis à disposition par la Ville)",
    type: "stage",
  },
  {
    date: "Mar. 28 juillet",
    title: "Réunion bénévoles & préparation des actions de la rentrée",
    lieu: "Maison des associations de Nanterre",
    type: "reunion",
  },
];
