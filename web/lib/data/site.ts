export const association = {
  name: "CBAC",
  legalName: "Association CBAC",
  president: "Soungui Gomis",
  tagline: "La boxe anglaise comme école de vie",
  promise:
    "Ici, on apprend à encaisser, à respecter et à se dépasser — sur le ring comme dans la vie.",
  /** Siège social (coordonnées de maquette, à remplacer) — en attendant ses propres locaux, l'association intervient chez ses structures partenaires. */
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
  /** Chiffres réels communiqués par l'association (juillet 2026). */
  impact: {
    actions: 30,
    structures: 5,
    annees: 2,
  },
} as const;

export const navigation: { label: string; href: string }[] = [
  { label: "Association", href: "/association" },
  { label: "Nos actions", href: "/actions" },
  { label: "Stages", href: "/stages" },
  { label: "Interventions", href: "/interventions" },
  { label: "L'équipe", href: "/coachs" },
  { label: "Calendrier", href: "/calendrier" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

/** Permanences de l'équipe — l'association n'a pas de local d'accueil : on se joint par téléphone ou e-mail. */
export const hours: { label: string; value: string }[] = [
  { label: "Permanence téléphonique", value: "lundi → vendredi, 9h30 — 18h" },
  { label: "Réponse e-mail", value: "sous 48h ouvrées" },
];
