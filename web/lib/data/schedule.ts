/**
 * Format d'affichage d'un évènement du calendrier public.
 *
 * Les évènements eux-mêmes sont saisis par l'association dans le backoffice
 * (/admin) et persistés dans `data/events.json` — voir `lib/events/store.ts`.
 * Règle actée : aucun événement inventé ; tant que rien n'est publié, les
 * pages affichent un état « programme en préparation ».
 */
export type EventMois = {
  date: string;
  title: string;
  lieu: string;
  type: "gala" | "stage" | "sortie" | "initiation" | "reunion";
};
