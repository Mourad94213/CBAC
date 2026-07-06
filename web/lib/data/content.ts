/* ── Témoignages (personas des docs de cadrage : Sophie, Marc, Fatima, Thomas) ── */

export const testimonials: { quote: string; author: string; role: string }[] = [
  {
    quote:
      "Je cherchais une activité qui capte l'attention des jeunes les plus difficiles. Dès la deuxième séance, ils réclamaient la suite — et le bilan écrit du cycle m'a servi tel quel pour mon dossier CAF.",
    author: "Sophie M.",
    role: "Directrice de centre social, Nanterre",
  },
  {
    quote:
      "La boxe pour un team building, j'avoue que j'hésitais. Résultat : l'atelier dont mes équipes parlent encore six mois après. Encadrement impeccable, zéro coup reçu, cohésion maximale.",
    author: "Marc L.",
    role: "DRH d'une PME, La Défense",
  },
  {
    quote:
      "J'avais besoin d'un stage clé en main pour les vacances, sécurisé et adapté aux 8-12 ans. Tout était carré : diplômes des coachs affichés, matériel fourni, enfants ravis. On re-signe pour l'automne.",
    author: "Fatima B.",
    role: "Responsable d'accueil de loisirs",
  },
  {
    quote:
      "Mes jeunes avaient besoin de canaliser leur énergie, et moi de justifier le projet auprès de ma direction. Le projet pédagogique écrit du CBAC et les points d'étape ont tout changé : le dispositif est reconduit.",
    author: "Thomas R.",
    role: "Éducateur PJJ, Hauts-de-Seine",
  },
  {
    quote:
      "Mon fils de 9 ans était timide et colérique. Un an de boxe éducative plus tard, il a gagné en calme et en confiance — et il n'a jamais reçu un coup. Les coachs font un travail éducatif remarquable.",
    author: "Nadia K.",
    role: "Maman d'un adhérent de 9 ans",
  },
  {
    quote:
      "Je suis arrivé au club à 15 ans, un peu perdu. Aujourd'hui je prépare les championnats départementaux avec Karim. Ici on m'a appris la boxe, mais surtout la discipline et le respect.",
    author: "Yanis, 17 ans",
    role: "Adhérent, groupe compétition",
  },
  {
    quote:
      "Le créneau cardio-boxe du jeudi midi est devenu mon rendez-vous sacré. Une heure pour tout évacuer, une ambiance en or, et je n'ai jamais été aussi en forme.",
    author: "Claire D.",
    role: "Adhérente boxe santé & forme",
  },
];

/* ── Partenaires « Ils nous font confiance » (maquette) ── */

export const partenaires: { name: string }[] = [
  { name: "Ville de Nanterre" },
  { name: "CAF des Hauts-de-Seine" },
  { name: "Fédération Française de Boxe" },
  { name: "Département des Hauts-de-Seine" },
  { name: "Centre social Les Acacias" },
  { name: "Collège Paul-Éluard" },
  { name: "Mission locale Rives de Seine" },
  { name: "Protection judiciaire de la jeunesse 92" },
  { name: "Groupe Sogetel" },
  { name: "ANS — Pass'Sport" },
];

/* ── FAQ sécurité & encadrement ── */

export const faqSecurite: { q: string; a: string }[] = [
  {
    q: "Qui encadre les séances ?",
    a: "Exclusivement des coachs diplômés : BPJEPS, DEJEPS ou brevets fédéraux FFBoxe, tous titulaires du PSC1 (premiers secours). Les diplômes de chaque coach sont affichés au gymnase et détaillés sur la page Coachs.",
  },
  {
    q: "Le matériel est-il fourni ?",
    a: "Oui. Gants, casques, plastrons et pattes d'ours sont fournis et désinfectés après chaque séance. Seul le protège-dents est personnel : nous en proposons à prix coûtant au club. Prévoyez simplement une tenue de sport et une gourde.",
  },
  {
    q: "À partir de quel âge peut-on boxer ?",
    a: "Dès 6 ans en boxe éducative : une pratique codifiée où seules les touches légères sont autorisées — les coups appuyés sont interdits et sanctionnés. La boxe avec opposition réelle n'intervient que chez les ados et adultes, toujours sur la base du volontariat.",
  },
  {
    q: "Les enfants reçoivent-ils des coups à la tête ?",
    a: "Non. En boxe éducative (6-11 ans), l'assaut se joue à la touche : l'arbitre-coach pénalise immédiatement tout coup appuyé. C'est un jeu d'adresse et de maîtrise, pas un combat.",
  },
  {
    q: "Comment êtes-vous assurés ?",
    a: "L'association est affiliée à la Fédération Française de Boxe : la licence fédérale, incluse dans l'adhésion, couvre chaque pratiquant en responsabilité civile et individuelle accident. Une attestation d'assurance est fournie sur demande aux structures partenaires.",
  },
  {
    q: "Faut-il un certificat médical ?",
    a: "Pour les mineurs, un questionnaire de santé suffit dans la plupart des cas. Un certificat médical de non-contre-indication est requis pour les adultes et obligatoire, avec examen approfondi, pour la pratique en compétition.",
  },
  {
    q: "Les cours sont-ils mixtes ?",
    a: "Oui, tous nos créneaux sont mixtes, filles et garçons, femmes et hommes — c'est un principe d'éducation populaire auquel nous tenons. Les mises de gants se font toujours entre partenaires de gabarit et de niveau équivalents.",
  },
];

/* ── Stages vacances 2026 ── */

export type Stage = {
  title: string;
  dates: string;
  ages: string;
  places: string;
  image: string;
  description: string;
  statut: "ouvert" | "complet" | "bientot";
};

export const stages: Stage[] = [
  {
    title: "Stage « Premiers gants »",
    dates: "Du 6 au 10 juillet 2026",
    ages: "6-10 ans",
    places: "16 places",
    image: "/images/activite-stage-vacances.svg",
    description:
      "Cinq matinées de boxe éducative et de grands jeux pour découvrir la garde, les déplacements et les premières touches — et un mini-gala devant les parents pour clôturer la semaine.",
    statut: "complet",
  },
  {
    title: "Stage ados « Ring d'été »",
    dates: "Du 20 au 24 juillet 2026",
    ages: "11-15 ans",
    places: "14 places",
    image: "/images/cours-1.svg",
    description:
      "Une semaine en journée complète : technique et sac le matin, tournois sportifs et ateliers « vie de groupe » l'après-midi, sortie surprise le vendredi. Repas tiré du sac.",
    statut: "ouvert",
  },
  {
    title: "Stage d'automne « Défense & confiance »",
    dates: "Du 19 au 23 octobre 2026",
    ages: "8-12 ans",
    places: "16 places",
    image: "/images/cours-2.svg",
    description:
      "Cinq après-midis autour de l'esquive, de la gestion des émotions et de la confiance en soi, avec un atelier parents-enfants en clôture. En partenariat avec les accueils de loisirs du territoire.",
    statut: "bientot",
  },
  {
    title: "Stage de Noël « Cardio & gants »",
    dates: "Du 21 au 23 décembre 2026",
    ages: "Ados & adultes, dès 14 ans",
    places: "12 places",
    image: "/images/evenement-1.svg",
    description:
      "Trois matinées intensives pour finir l'année en puissance : cardio-boxe, circuits de renforcement et mise de gants encadrée pour les volontaires. Ouvert aux non-adhérents.",
    statut: "bientot",
  },
];

/* ── Actualités / fil de vie ── */

export const actus: { slug: string; date: string; title: string; excerpt: string; image: string; tag: string }[] = [
  {
    slug: "gala-ete-2026",
    date: "28 juin 2026",
    title: "Gala amical d'été : rendez-vous le 4 juillet !",
    excerpt:
      "Assauts éducatifs des 6-11 ans, démonstrations du groupe compétition et remise des gants de couleur : la grande fête du club revient à la salle des fêtes de Nanterre. Entrée libre, buvette associative.",
    image: "/images/actu-1.svg",
    tag: "Événement",
  },
  {
    slug: "deux-qualifies-finale-departementale",
    date: "14 juin 2026",
    title: "Yanis et Inès en finale départementale !",
    excerpt:
      "Deux de nos jeunes du groupe compétition se sont qualifiés pour les finales des Hauts-de-Seine. Tout le club sera dans les gradins pour les porter — fiers de vous.",
    image: "/images/actu-2.svg",
    tag: "Compétition",
  },
  {
    slug: "pass-sport-reconduit-2026",
    date: "2 juin 2026",
    title: "Pass'Sport reconduit : 50 € de réduction sur l'adhésion",
    excerpt:
      "Bonne nouvelle pour la rentrée : le dispositif Pass'Sport est reconduit pour la saison 2026-2027. 50 € déduits immédiatement de l'adhésion pour les jeunes éligibles — on vous explique tout.",
    image: "/images/actu-3.svg",
    tag: "Pratique",
  },
  {
    slug: "nouveau-creneau-cardio-midi",
    date: "19 mai 2026",
    title: "Le cardio-boxe du midi affiche complet : un 2e créneau à la rentrée",
    excerpt:
      "Victime de son succès, le créneau boxe santé & forme du jeudi midi double à la rentrée. Un nouveau rendez-vous le mardi à 12h15 ouvrira en septembre — pré-inscriptions ouvertes.",
    image: "/images/actu-4.svg",
    tag: "Vie du club",
  },
  {
    slug: "cycle-college-paul-eluard",
    date: "5 mai 2026",
    title: "Retour sur le cycle boxe éducative au collège Paul-Éluard",
    excerpt:
      "Huit séances avec deux classes de 5e : assiduité record, un climat de classe apaisé selon l'équipe enseignante, et des élèves qui ont découvert que la boxe commence par le respect.",
    image: "/images/actu-5.svg",
    tag: "Interventions",
  },
  {
    slug: "sortie-gala-professionnel",
    date: "21 avril 2026",
    title: "30 jeunes du club au gala professionnel de Levallois",
    excerpt:
      "Grâce à nos partenaires, 30 jeunes adhérents ont assisté à leur premier gala professionnel. Des étoiles dans les yeux, et une certitude : le travail paie, sur le ring comme ailleurs.",
    image: "/images/actu-6.svg",
    tag: "Sortie",
  },
];

/* ── Galerie photo ── */

export const galerie: { src: string; alt: string; cat: "gala" | "cours" | "evenement" }[] = [
  { src: "/images/gala-1.svg", alt: "Assaut éducatif sous les projecteurs lors du gala d'été", cat: "gala" },
  { src: "/images/gala-2.svg", alt: "Remise des gants de couleur aux jeunes boxeurs du CBAC", cat: "gala" },
  { src: "/images/gala-3.svg", alt: "Le public debout autour du ring à la salle des fêtes de Nanterre", cat: "gala" },
  { src: "/images/cours-1.svg", alt: "Travail aux pattes d'ours pendant le cours de boxe loisir", cat: "cours" },
  { src: "/images/cours-2.svg", alt: "Groupe boxe éducative 6-11 ans en cercle autour du coach", cat: "cours" },
  { src: "/images/cours-3.svg", alt: "Séance cardio-boxe du midi au gymnase Léo-Lagrange", cat: "cours" },
  { src: "/images/evenement-1.svg", alt: "Atelier team building boxe avec une entreprise partenaire", cat: "evenement" },
  { src: "/images/evenement-2.svg", alt: "Sortie du club au gala de boxe professionnel de Levallois", cat: "evenement" },
  { src: "/images/evenement-3.svg", alt: "Séance découverte au centre social Les Acacias", cat: "evenement" },
];

/* ── Quiz « Quel programme pour vous ? » ── */

export const quiz: { question: string; options: { label: string; scores: Record<string, number> }[] }[] = [
  {
    question: "Pour qui cherchez-vous un programme ?",
    options: [
      { label: "Mon enfant (6-11 ans)", scores: { enfant: 3 } },
      { label: "Mon ado (12-17 ans)", scores: { "adulte-loisir": 2, compet: 1 } },
      { label: "Moi-même", scores: { "adulte-loisir": 2, forme: 1 } },
      { label: "Un groupe, une structure ou mon équipe", scores: { structure: 3 } },
    ],
  },
  {
    question: "Quel est l'objectif principal ?",
    options: [
      { label: "Apprendre en s'amusant, gagner en confiance", scores: { enfant: 2, "adulte-loisir": 1 } },
      { label: "Me défouler et me remettre en forme", scores: { forme: 3 } },
      { label: "Progresser sérieusement, viser la compétition", scores: { compet: 3 } },
      { label: "Créer du lien, souder un groupe", scores: { structure: 2, "adulte-loisir": 1 } },
    ],
  },
  {
    question: "Quel est le niveau de départ ?",
    options: [
      { label: "Jamais mis les gants", scores: { "adulte-loisir": 2, enfant: 1, forme: 1 } },
      { label: "Quelques bases, envie d'aller plus loin", scores: { "adulte-loisir": 2, compet: 1 } },
      { label: "Déjà de l'expérience, voire des assauts", scores: { compet: 3 } },
      { label: "Des niveaux très différents dans le groupe", scores: { structure: 3 } },
    ],
  },
  {
    question: "Quel rythme vous conviendrait ?",
    options: [
      { label: "Une séance par semaine, tranquille", scores: { "adulte-loisir": 2, enfant: 1 } },
      { label: "Deux à trois séances intenses par semaine", scores: { compet: 2, forme: 1 } },
      { label: "Du cardio sans opposition, midi ou soir", scores: { forme: 3 } },
      { label: "Un cycle ponctuel ou une intervention sur mesure", scores: { structure: 3 } },
    ],
  },
];

export const quizProfiles: Record<string, { title: string; text: string; href: string; cta: string }> = {
  enfant: {
    title: "Boxe éducative (6-11 ans)",
    text: "Votre enfant apprendra la boxe comme un grand jeu : touches légères, zéro coup porté, et une vraie école de respect et de confiance en soi.",
    href: "/activites/boxe-educative",
    cta: "Découvrir la boxe éducative",
  },
  "adulte-loisir": {
    title: "Boxe loisir",
    text: "Le cours idéal pour apprendre vraiment la boxe anglaise : technique, sac, et mise de gants uniquement si vous le souhaitez. Débutants bienvenus.",
    href: "/activites/boxe-loisir",
    cta: "Découvrir la boxe loisir",
  },
  compet: {
    title: "Boxe compétition",
    text: "Préparation physique, tactique et sparring contrôlé : notre groupe compétition vous emmènera jusqu'aux championnats, sérieusement préparé·e.",
    href: "/activites/boxe-competition",
    cta: "Découvrir la boxe compétition",
  },
  forme: {
    title: "Boxe santé & forme",
    text: "Tout l'engagement du boxeur, zéro coup reçu : cardio-boxe, circuits et renforcement en musique, avec un créneau du midi pour les actifs.",
    href: "/activites/boxe-sante-forme",
    cta: "Découvrir le cardio-boxe",
  },
  structure: {
    title: "Intervention sur mesure",
    text: "Team building, cycle éducatif, stage clé en main : construisons ensemble l'intervention adaptée à votre structure, avec devis sous 48h.",
    href: "/interventions",
    cta: "Créer mon intervention",
  },
};

/* ── Tarifs (maquette — saison 2026-2027) ── */

export const tarifs: { label: string; public: string; prix: string; details: string[] }[] = [
  {
    label: "Adhésion annuelle enfant",
    public: "Boxe éducative · 6-11 ans",
    prix: "150 € / an",
    details: [
      "1 à 2 séances par semaine",
      "Licence FFBoxe et assurance incluses",
      "Matériel fourni (hors protège-dents)",
      "Passage des gants de couleur inclus",
    ],
  },
  {
    label: "Adhésion annuelle ado",
    public: "Boxe loisir · 12-17 ans",
    prix: "180 € / an",
    details: [
      "2 séances par semaine",
      "Licence FFBoxe et assurance incluses",
      "Accès aux sorties et événements du club",
    ],
  },
  {
    label: "Adhésion annuelle adulte",
    public: "Boxe loisir · dès 18 ans",
    prix: "220 € / an",
    details: [
      "Jusqu'à 3 séances par semaine",
      "Licence FFBoxe et assurance incluses",
      "Accès libre au créneau du samedi",
    ],
  },
  {
    label: "Boxe santé & forme",
    public: "Cardio-boxe · dès 16 ans",
    prix: "190 € / an",
    details: [
      "2 créneaux par semaine, dont le midi",
      "Sans opposition, tous niveaux",
      "Licence loisir et assurance incluses",
    ],
  },
  {
    label: "Option compétition",
    public: "Sur avis du coach · dès 14 ans",
    prix: "+60 € / an",
    details: [
      "Passeport sportif et licence compétition",
      "Séances spécifiques et suivi individualisé",
      "Accompagnement aux compétitions inclus",
    ],
  },
  {
    label: "Réductions & aides",
    public: "Selon situation",
    prix: "Jusqu'à −50 %",
    details: [
      "Pass'Sport : 50 € déduits pour les jeunes éligibles",
      "Tarif solidaire selon quotient familial CAF",
      "−10 % dès le 2e membre d'une même famille",
      "Paiement en 3 fois sans frais",
    ],
  },
];

/* ── Flux Instagram (mock) ── */

export const instaPosts: { image: string; caption: string; likes: number }[] = [
  {
    image: "/images/insta-1.svg",
    caption: "Dernier entraînement avant le gala d'été — le groupe est prêt 🔥 #CBAC #boxeanglaise",
    likes: 128,
  },
  {
    image: "/images/insta-2.svg",
    caption: "6 ans, premiers gants, premier sourire. La relève est là 🥊 #boxeeducative",
    likes: 214,
  },
  {
    image: "/images/insta-3.svg",
    caption: "Team building du jour avec une super équipe venue de La Défense. Merci pour l'énergie !",
    likes: 96,
  },
  {
    image: "/images/insta-4.svg",
    caption: "Yanis et Inès qualifiés pour la finale départementale. On est FIERS 💪 #competition",
    likes: 342,
  },
  {
    image: "/images/insta-5.svg",
    caption: "Cardio-boxe du jeudi midi : une heure pour tout évacuer. Complet, encore ! #cardioboxe",
    likes: 87,
  },
  {
    image: "/images/insta-6.svg",
    caption: "Merci au centre social Les Acacias pour l'accueil — 14 jeunes, 10 séances, que du respect 🙏",
    likes: 173,
  },
];
