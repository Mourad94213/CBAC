export const association = {
  name: "CBAC",
  legalName: "Association CBAC",
  president: "Soungui Gomis",
  tagline: "La boxe anglaise comme école de vie",
  promise:
    "Ici, on apprend à encaisser, à respecter et à se dépasser — sur le ring comme dans la vie.",
  address: {
    street: "12 rue du Ring",
    zip: "92000",
    city: "Nanterre",
    full: "Gymnase Léo-Lagrange, 12 rue du Ring, 92000 Nanterre",
    venue: "Gymnase Léo-Lagrange",
  },
  phone: "06 12 34 56 78",
  phoneHref: "tel:+33612345678",
  email: "contact@cbac-boxe.fr",
  emailHref: "mailto:contact@cbac-boxe.fr",
  socials: {
    instagram: { handle: "@cbacboxe", url: "https://www.instagram.com/cbacboxe" },
    facebook: { handle: "@cbacboxe", url: "https://www.facebook.com/cbacboxe" },
  },
  impact: {
    jeunes: 450,
    structures: 25,
    annees: 12,
    seances: 300,
  },
} as const;

export const navigation: { label: string; href: string }[] = [
  { label: "Association", href: "/association" },
  { label: "Activités", href: "/activites" },
  { label: "Stages", href: "/stages" },
  { label: "Interventions", href: "/interventions" },
  { label: "Coachs", href: "/coachs" },
  { label: "Calendrier", href: "/calendrier" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export const announcement =
  "Gala amical d'été le samedi 4 juillet à la salle des fêtes de Nanterre — entrée libre · Inscriptions rentrée 2026 ouvertes dès le 24 août";

/** Valeurs défilantes du marquee (accueil). */
export const valeurs = [
  "Respect",
  "Discipline",
  "Dépassement de soi",
  "Transmission",
  "Confiance",
  "Énergie",
] as const;

/** Horaires d'accueil au gymnase (permanences, hors créneaux d'entraînement). */
export const hours: { label: string; value: string }[] = [
  { label: "Lundi → vendredi", value: "17h — 21h" },
  { label: "Mercredi", value: "13h30 — 21h" },
  { label: "Samedi", value: "9h30 — 13h" },
];
