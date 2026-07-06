export const association = {
  name: "CBAC",
  legalName: "Association CBAC",
  president: "Soungui Gomis",
  tagline: "La boxe anglaise comme école de vie",
  promise:
    "Ici, on apprend à encaisser, à respecter et à se dépasser — sur le ring comme dans la vie.",
  /** Siège social — l'association n'a pas de salle à elle : elle intervient là où on l'accueille. */
  address: {
    street: "12 rue du Ring",
    zip: "92000",
    city: "Nanterre",
    full: "Maison des associations, 12 rue du Ring, 92000 Nanterre",
    venue: "Maison des associations de Nanterre",
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
  { label: "Nos actions", href: "/actions" },
  { label: "Stages", href: "/stages" },
  { label: "Interventions", href: "/interventions" },
  { label: "Coachs", href: "/coachs" },
  { label: "Calendrier", href: "/calendrier" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export const announcement =
  "Gala amical d'été le samedi 4 juillet à la salle des fêtes de Nanterre — entrée libre · Stages d'été : dernières places disponibles";

/** Valeurs défilantes du marquee (accueil). */
export const valeurs = [
  "Respect",
  "Discipline",
  "Dépassement de soi",
  "Transmission",
  "Confiance",
  "Énergie",
] as const;

/** Permanences de l'équipe — l'association n'a pas de local d'accueil : on se joint par téléphone ou e-mail. */
export const hours: { label: string; value: string }[] = [
  { label: "Permanence téléphonique", value: "lundi → vendredi, 9h30 — 18h" },
  { label: "Réponse e-mail", value: "sous 48h ouvrées" },
];
