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
      "Mon fils de 9 ans était timide et colérique. Deux stages vacances et un cycle avec son centre de loisirs plus tard, il a gagné en calme et en confiance — et il n'a jamais reçu un coup. Les coachs font un travail éducatif remarquable.",
    author: "Nadia K.",
    role: "Maman d'un participant de 9 ans",
  },
  {
    quote:
      "J'ai mis les gants pour la première fois à une initiation au centre social, à 15 ans, un peu perdu. Trois ans plus tard, je suis bénévole au CBAC : c'est moi qui aide les petits à lacer leurs gants pendant les stages. Ici on m'a appris la boxe, mais surtout la discipline et le respect.",
    author: "Yanis, 18 ans",
    role: "Bénévole, ancien participant",
  },
  {
    quote:
      "Nos résidents attendaient chaque séance du cycle avec impatience. Le coach a su poser un cadre où chacun se sentait en sécurité — même ceux qui ne s'inscrivent jamais à rien ont enfilé les gants.",
    author: "Claire D.",
    role: "Animatrice, foyer de jeunes travailleurs",
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
    a: "Exclusivement des coachs diplômés : BPJEPS, DEJEPS ou brevets fédéraux FFBoxe, tous titulaires du PSC1 (premiers secours). Les diplômes de chaque coach sont présentés aux structures avant chaque cycle et détaillés sur la page Coachs.",
  },
  {
    q: "Le matériel est-il fourni ?",
    a: "Oui, et c'est le principe même de nos interventions : nous arrivons avec tout le matériel — gants, casques, plastrons, pattes d'ours — fourni et désinfecté après chaque séance. Seul le protège-dents est personnel : nous en proposons à prix coûtant sur place. Prévoyez simplement une tenue de sport et une gourde.",
  },
  {
    q: "À partir de quel âge peut-on boxer ?",
    a: "Dès 6 ans en boxe éducative : une pratique codifiée où seules les touches légères sont autorisées — les coups appuyés sont interdits et sanctionnés. Toutes nos initiations et interventions se font sur cette base, quel que soit l'âge des participants.",
  },
  {
    q: "Les enfants reçoivent-ils des coups à la tête ?",
    a: "Non. En boxe éducative (6-11 ans), l'assaut se joue à la touche : l'arbitre-coach pénalise immédiatement tout coup appuyé. C'est un jeu d'adresse et de maîtrise, pas un combat.",
  },
  {
    q: "Comment êtes-vous assurés ?",
    a: "L'association est affiliée à la Fédération Française de Boxe et assurée en responsabilité civile pour l'ensemble de ses interventions : chaque participant est couvert pendant les séances, dans vos locaux comme dans les gymnases mis à disposition. Une attestation d'assurance est fournie sur demande aux structures partenaires.",
  },
  {
    q: "Faut-il un certificat médical ?",
    a: "Pour une initiation ou un atelier ponctuel, un simple questionnaire de santé suffit. Pour les stages vacances, un questionnaire de santé est demandé pour les mineurs et un certificat médical de non-contre-indication pour les adultes.",
  },
  {
    q: "Les séances sont-elles mixtes ?",
    a: "Oui, toutes nos séances sont mixtes, filles et garçons, femmes et hommes — c'est un principe d'éducation populaire auquel nous tenons. Les ateliers d'opposition se font toujours entre partenaires de gabarit et de niveau équivalents.",
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
      "Trois matinées intensives pour finir l'année en puissance : cardio-boxe, circuits de renforcement et ateliers d'opposition à la touche pour les volontaires. Ouvert à tous, aucune expérience requise.",
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
      "Assauts éducatifs des 6-11 ans, démonstrations des ados et des coachs, remise des récompenses de l'année : la grande fête de l'association revient à la salle des fêtes de Nanterre. Entrée libre, buvette associative.",
    image: "/images/actu-1.svg",
    tag: "Événement",
  },
  {
    slug: "nouveau-cycle-foyer-les-iris",
    date: "14 juin 2026",
    title: "Un nouveau cycle démarre au foyer Les Iris",
    excerpt:
      "Six séances co-construites avec l'équipe du foyer de jeunes travailleurs Les Iris : gestion des émotions, confiance, respect du cadre. Le matériel voyage avec nous — les gants aussi.",
    image: "/images/actu-2.svg",
    tag: "Interventions",
  },
  {
    slug: "pass-sport-stages-2026",
    date: "2 juin 2026",
    title: "Pass'Sport reconduit : 50 € de réduction sur les stages vacances",
    excerpt:
      "Bonne nouvelle : le dispositif Pass'Sport est reconduit pour 2026-2027. 50 € déduits immédiatement de l'inscription aux stages pour les jeunes éligibles — on vous explique tout.",
    image: "/images/actu-3.svg",
    tag: "Pratique",
  },
  {
    slug: "deux-nouveaux-gymnases-convention-ville",
    date: "19 mai 2026",
    title: "La Ville met deux nouveaux gymnases à notre disposition",
    excerpt:
      "La convention avec la Ville de Nanterre s'élargit : les gymnases Anatole-France et Joliot-Curie accueilleront nos initiations et nos stages en 2026-2027. Plus de lieux, plus de gants tendus.",
    image: "/images/actu-4.svg",
    tag: "Vie de l'asso",
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
    title: "30 jeunes de l'asso au gala professionnel de Levallois",
    excerpt:
      "Grâce à nos partenaires, 30 jeunes adhérents ont assisté à leur premier gala professionnel. Des étoiles dans les yeux, et une certitude : le travail paie, sur le ring comme ailleurs.",
    image: "/images/actu-6.svg",
    tag: "Sortie",
  },
];

/* ── Galerie photo ── */

export const galerie: { src: string; alt: string; cat: "gala" | "cours" | "evenement" }[] = [
  { src: "/images/gala-1.svg", alt: "Assaut éducatif sous les projecteurs lors du gala d'été", cat: "gala" },
  { src: "/images/gala-2.svg", alt: "Remise des récompenses aux jeunes participants du gala amical", cat: "gala" },
  { src: "/images/gala-3.svg", alt: "Le public debout autour du ring à la salle des fêtes de Nanterre", cat: "gala" },
  { src: "/images/cours-1.svg", alt: "Travail aux pattes d'ours pendant un cours d'initiation", cat: "cours" },
  { src: "/images/cours-2.svg", alt: "Groupe boxe éducative 6-11 ans en cercle autour du coach, en stage vacances", cat: "cours" },
  { src: "/images/cours-3.svg", alt: "Séance d'initiation dans un gymnase mis à disposition par la Ville", cat: "cours" },
  { src: "/images/evenement-1.svg", alt: "Atelier team building boxe avec une entreprise partenaire", cat: "evenement" },
  { src: "/images/evenement-2.svg", alt: "Sortie de l'association au gala de boxe professionnel de Levallois", cat: "evenement" },
  { src: "/images/evenement-3.svg", alt: "Séance découverte au centre social Les Acacias", cat: "evenement" },
];

/* ── Quiz « Quel programme pour vous ? » ── */

export const quiz: { question: string; options: { label: string; scores: Record<string, number> }[] }[] = [
  {
    question: "Pour qui cherchez-vous un programme ?",
    options: [
      { label: "Mon enfant ou mon ado", scores: { enfant: 3 } },
      { label: "Moi-même", scores: { adulte: 3 } },
      { label: "Les jeunes ou résidents de ma structure", scores: { structure: 3 } },
      { label: "Mon équipe, mes collègues", scores: { entreprise: 3 } },
    ],
  },
  {
    question: "Quel est l'objectif principal ?",
    options: [
      { label: "Découvrir la boxe en s'amusant, gagner en confiance", scores: { enfant: 2, adulte: 2 } },
      { label: "Occuper les vacances utilement", scores: { enfant: 3 } },
      { label: "Canaliser l'énergie d'un groupe, poser un cadre", scores: { structure: 3 } },
      { label: "Souder une équipe autrement", scores: { entreprise: 3 } },
    ],
  },
  {
    question: "Quel format vous parle le plus ?",
    options: [
      { label: "Une séance découverte, pour voir", scores: { adulte: 2, enfant: 1 } },
      { label: "Une semaine de stage pendant les vacances", scores: { enfant: 3 } },
      { label: "Un cycle de plusieurs séances dans la durée", scores: { structure: 3 } },
      { label: "Un événement ponctuel, clé en main", scores: { entreprise: 2, structure: 1 } },
    ],
  },
  {
    question: "Où imaginez-vous les séances ?",
    options: [
      { label: "Près de chez moi, dans un gymnase de la ville", scores: { enfant: 2, adulte: 2 } },
      { label: "Dans nos locaux — venez à nous", scores: { structure: 2, entreprise: 2 } },
      { label: "Peu importe, du moment que ça bouge", scores: { adulte: 1, enfant: 1 } },
      { label: "À définir ensemble selon le projet", scores: { structure: 1, entreprise: 1 } },
    ],
  },
];

export const quizProfiles: Record<string, { title: string; text: string; href: string; cta: string }> = {
  enfant: {
    title: "Stages vacances & initiations enfants",
    text: "Boxe éducative uniquement : touches légères, zéro coup porté, et une vraie école de respect et de confiance. Prochain rendez-vous : les stages des vacances et les initiations près de chez vous.",
    href: "/stages",
    cta: "Voir les stages vacances",
  },
  adulte: {
    title: "Cours d'initiation",
    text: "Une séance découverte gratuite pour mettre les gants, apprendre la garde et comprendre pourquoi la boxe est d'abord une école de respect. Consultez le calendrier pour la prochaine séance près de chez vous.",
    href: "/actions#cours-initiation",
    cta: "Découvrir les initiations",
  },
  structure: {
    title: "Intervention sur mesure",
    text: "Cycle éducatif, initiation ponctuelle, stage clé en main : construisons ensemble l'intervention adaptée à votre structure — dans vos locaux, matériel fourni, devis sous 48h.",
    href: "/interventions",
    cta: "Créer mon intervention",
  },
  entreprise: {
    title: "Team building boxe",
    text: "Vos équipes enfilent les gants, apprennent à se faire confiance et repartent soudées — zéro coup reçu, et chaque séance finance nos actions auprès des jeunes du territoire.",
    href: "/interventions#entreprises",
    cta: "Organiser mon team building",
  },
};

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
    caption: "Le matériel est chargé, direction le foyer Les Iris pour la séance 4 du cycle 🚐🥊 #onvientavous",
    likes: 342,
  },
  {
    image: "/images/insta-5.svg",
    caption: "Gymnase Anatole-France prêté par la Ville : les initiations de l'été peuvent commencer ! #merci",
    likes: 87,
  },
  {
    image: "/images/insta-6.svg",
    caption: "Merci au centre social Les Acacias pour l'accueil — 14 jeunes, 10 séances, que du respect 🙏",
    likes: 173,
  },
];
