export const days: string[] = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

export type Creneau = {
  /** Jour en toutes lettres, l'une des valeurs de `days`. */
  day: string;
  start: string;
  end: string;
  /** Slug de l'activité (lib/data/activites). */
  activite: string;
  lieu: string;
  audience: string;
};

export const creneaux: Creneau[] = [
  // ── Lundi ────────────────────────────────────────────────
  { day: "Lundi", start: "17h30", end: "18h30", activite: "boxe-educative", lieu: "Gymnase Léo-Lagrange", audience: "6-11 ans" },
  { day: "Lundi", start: "19h", end: "20h30", activite: "boxe-loisir", lieu: "Gymnase Léo-Lagrange", audience: "Adultes" },

  // ── Mardi ────────────────────────────────────────────────
  { day: "Mardi", start: "18h", end: "19h", activite: "boxe-sante-forme", lieu: "Gymnase Léo-Lagrange", audience: "Adultes, dès 16 ans" },
  { day: "Mardi", start: "19h15", end: "21h15", activite: "boxe-competition", lieu: "Gymnase Léo-Lagrange", audience: "Ados & adultes confirmés" },

  // ── Mercredi ─────────────────────────────────────────────
  { day: "Mercredi", start: "14h", end: "15h", activite: "boxe-educative", lieu: "Gymnase Léo-Lagrange", audience: "6-8 ans" },
  { day: "Mercredi", start: "15h15", end: "16h15", activite: "boxe-educative", lieu: "Gymnase Léo-Lagrange", audience: "9-11 ans" },
  { day: "Mercredi", start: "18h30", end: "20h", activite: "boxe-loisir", lieu: "Gymnase Léo-Lagrange", audience: "Ados 12-17 ans" },

  // ── Jeudi ────────────────────────────────────────────────
  { day: "Jeudi", start: "12h15", end: "13h15", activite: "boxe-sante-forme", lieu: "Gymnase Léo-Lagrange", audience: "Adultes — pause déjeuner" },
  { day: "Jeudi", start: "19h", end: "20h30", activite: "boxe-loisir", lieu: "Gymnase Léo-Lagrange", audience: "Adultes" },

  // ── Vendredi ─────────────────────────────────────────────
  { day: "Vendredi", start: "17h30", end: "18h30", activite: "boxe-educative", lieu: "Centre social Les Acacias", audience: "6-11 ans, quartier du Parc" },
  { day: "Vendredi", start: "19h", end: "21h", activite: "boxe-competition", lieu: "Gymnase Léo-Lagrange", audience: "Ados & adultes confirmés" },

  // ── Samedi ───────────────────────────────────────────────
  { day: "Samedi", start: "10h", end: "11h", activite: "boxe-sante-forme", lieu: "Gymnase Léo-Lagrange", audience: "Adultes" },
  { day: "Samedi", start: "11h15", end: "12h45", activite: "boxe-loisir", lieu: "Gymnase Léo-Lagrange", audience: "Ados & adultes, tous niveaux" },
  { day: "Samedi", start: "14h", end: "15h", activite: "initiation-decouverte", lieu: "Gymnase Léo-Lagrange", audience: "Tous publics — séance d'essai" },
];

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
    lieu: "Gymnase Léo-Lagrange",
    type: "stage",
  },
  {
    date: "Mer. 15 juillet",
    title: "Séance découverte avec le centre social Les Acacias",
    lieu: "Centre social Les Acacias",
    type: "initiation",
  },
  {
    date: "Sam. 18 juillet",
    title: "Sortie club : gala de boxe professionnel (places offertes aux jeunes)",
    lieu: "Palais des sports de Levallois",
    type: "sortie",
  },
  {
    date: "Lun. 20 → ven. 24 juillet",
    title: "Stage vacances ados « Ring d'été » (11-15 ans)",
    lieu: "Gymnase Léo-Lagrange",
    type: "stage",
  },
  {
    date: "Mar. 28 juillet",
    title: "Réunion bénévoles & préparation de la rentrée 2026",
    lieu: "Gymnase Léo-Lagrange — salle associative",
    type: "reunion",
  },
];
