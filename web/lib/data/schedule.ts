/**
 * Calendrier du mois — l'association n'a pas de gymnase attitré ni de planning
 * hebdomadaire : elle intervient ponctuellement, là où on l'accueille.
 *
 * Règle actée : aucun événement inventé. La liste reste vide tant que
 * l'association n'a pas communiqué ses vraies dates (voir A-VALIDER.md) ;
 * les pages affichent alors un état « programme en préparation ».
 */
export type EventMois = {
  date: string;
  title: string;
  lieu: string;
  type: "gala" | "stage" | "sortie" | "initiation" | "reunion";
};

export const eventsMois: EventMois[] = [];
