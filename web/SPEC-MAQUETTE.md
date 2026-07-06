# SPEC — Maquette site CBAC (boxe anglaise & éducation populaire)

> **RÉVISION 2026-07-06 — association itinérante.** Le CBAC est une association (loi 1901), pas un club : **pas de salle attitrée, pas de créneaux hebdomadaires, pas de grille tarifaire publique**. L'association se déplace là où on l'accueille (gymnases mis à disposition par les villes, foyers, centres sociaux, écoles, entreprises). Conséquences appliquées au site : pages `/tarifs` et `/activites(+slug)` supprimées ; page `/actions` créée (cours d'initiation, stages vacances, galas amicaux, sorties & événements — les actions listées dans la doc) ; `/calendrier` réduit au calendrier du mois avec les **lieux** ; `/adhesion` reformulée (bulletin + cotisation libre, sans licence de saison) ; planning hebdo (`days/creneaux`, WeeklySchedule) et données tarifs supprimés. Les sections ci-dessous antérieures à cette révision restent la référence de *construction* (patterns, granularité), mais la structure qui prévaut est celle-ci.

## 0. Contexte

Maquette complète d'un site vitrine pour l'association **CBAC** (boxe anglaise / éducation populaire), construite en **miroir exact de la construction** du site existant `D:/Code/Prospection/20eDanse/web` (Next.js 16 App Router, React 19, Tailwind 3.4, Radix UI, motion, lucide-react, CVA), avec une **direction artistique différente** (univers boxe, voir §2) et un contenu issu des documents de cadrage :
- `D:/Code/CBAC/docs/docs/brainstorming-session-2026-03-08.md`
- `D:/Code/CBAC/docs/docs/fonctionnalites-site-cbac.md`

Projet cible : `D:/Code/CBAC/web` (déjà scaffoldé : package.json, node_modules, tailwind.config.ts, globals.css, lib/utils.ts, next.config.ts sont EN PLACE — ne pas les réécrire).

**Règles impératives pour chaque agent :**
1. AVANT d'écrire un fichier, LIS son équivalent 20eDanse (chemin indiqué dans ta mission) : tu dois reproduire sa construction (structure, patterns, granularité, qualité), pas l'inventer.
2. AVANT d'importer un module CBAC déjà écrit par une phase précédente (lib/data, components/ui…), LIS le fichier réel dans `D:/Code/CBAC/web` pour connaître son API exacte.
3. Pour les modules écrits EN PARALLÈLE dans ta phase, respecte STRICTEMENT les contrats d'exports du §4 — c'est ce que les autres agents importeront.
4. Next.js 16 a des breaking changes : en cas de doute sur une API, consulte `D:/Code/CBAC/web/node_modules/next/dist/docs/`. Le code 20eDanse est déjà conforme Next 16 : c'est ta référence la plus sûre.
5. Tout le contenu est en **français impeccable** (orthographe, typographie : espaces insécables non requises, apostrophes typographiques « ' » bienvenues). Ton : énergique, direct, chaleureux, valeurs d'éducation populaire. Pas de lorem ipsum — du vrai contenu de maquette crédible.
6. Données de maquette : coordonnées volontairement fictives (voir §3). Ne pas inventer de faits réels sur l'association au-delà des docs.
7. Chaque page intègre au moins un élément interactif ou engageant (principe transverse des specs).

## 1. Arborescence cible

```
app/
  layout.tsx  page.tsx  not-found.tsx  robots.ts  sitemap.ts  globals.css(fait)
  association/page.tsx
  actions/page.tsx          (les 4 actions, sections ancrées — remplace activites/*)
  stages/page.tsx
  interventions/page.tsx
  coachs/page.tsx
  calendrier/page.tsx       (calendrier du mois + lieux uniquement — pas de planning hebdo)
  adhesion/page.tsx
  galerie/page.tsx
  actualites/page.tsx
  contact/page.tsx
  espace-partenaires/page.tsx
components/
  layout/   header.tsx footer.tsx announcement-bar.tsx mobile-action-bar.tsx rappel-flottant.tsx
  site/     reveal.tsx parallax.tsx section-title.tsx divider.tsx brand-mark.tsx
            social-icons.tsx testimonial-slider.tsx framed-image.tsx impact-counter.tsx quiz.tsx exit-popup.tsx
  ui/       button.tsx badge.tsx accordion.tsx dialog.tsx form.tsx
  forms/    contact-form.tsx newsletter-form.tsx adhesion-form.tsx groupe-form.tsx
  devis/    devis-store.tsx devis-root.tsx devis-wizard.tsx devis-button.tsx
  planning/ mois-calendar.tsx
  coachs/   coach-card.tsx
  actions/  action-card.tsx
  actus/    actu-card.tsx
  galerie/  galerie-grid.tsx
  seo/      json-ld.tsx
lib/
  utils.ts (fait)  seo.ts
  data/  site.ts actions.ts publics.ts coachs.ts schedule.ts content.ts
public/
  images/  (SVG placeholders, voir §5 ; logo-cbac.jpg déjà présent)
  docs/    projet-pedagogique-cbac.pdf  plaquette-entreprises-cbac.pdf
```

## 2. Direction artistique (DÉJÀ codée dans tailwind.config.ts + globals.css — les lire)

- **Univers** : "ring de nuit" — fond noir profond (`bg-noir`), texte craie, projecteurs (utility `.spotlight`), grain photo (`.grain`), séparateurs "cordes de ring" (`.ring-ropes`).
- **Couleurs** : `noir` (fonds : DEFAULT/deep/surface/card/line), `craie` (textes : DEFAULT/soft/muted), `bleu` CBAC (marque, hovers, surfaces teintées `bleu-tint`), `or` (eyebrows, accents de valorisation, focus), `rouge` (ring : **réservé aux CTA principaux** et micro-accents). Une seule couleur d'action principale = rouge ; bleu = secondaire ; or = éditorial.
- **Typo** : `font-display` = Anton (titres, UPPERCASE automatique via globals) ; `font-sans` = Barlow ; `font-condensed` = Barlow Condensed (eyebrows, chiffres, "ROUND 01").
- **Navigation narrative en "rounds"** : sur les pages longues (accueil, association, interventions), les eyebrows des sections sont préfixés : `Round 01 · L'association`, `Round 02 · Nos actions`… (le composant SectionTitle reçoit ça via sa prop `eyebrow`).
- **Animations** : mêmes patterns que 20eDanse (Reveal au scroll, Stagger, ParallaxImage, Marquee) + `animate-pulse-ring` sur le bouton flottant rappel, `hover` "jab" sur les CTA (translation courte), compteurs animés.
- **Ombres** : `shadow-card/lift/soft` sombres + `shadow-glow-bleu/or/rouge` pour les halos.
- Radius généreux conservés (`rounded-4xl/5xl`) mais surfaces sombres bordées `border-noir-line`.

## 3. Identité & contenus de référence

- **Nom** : CBAC · association loi 1901 — boxe anglaise & éducation populaire. `legalName: "Association CBAC"`.
- **Président** : M. Soungui Gomis (aussi coach fondateur dans la maquette).
- **Valeurs** : Respect · Gestion des émotions · Dépassement de soi · Transmission.
- **Baseline** : « La boxe anglaise comme école de vie ». Promesse : « Ici, on apprend à encaisser, à respecter et à se dépasser — sur le ring comme dans la vie. »
- **Publics** : jeunes des quartiers, particuliers (enfants/ados/adultes), et structures B2B/B2A : entreprises (team building), centres sociaux & structures jeunesse, écoles, structures d'insertion/PJJ.
- **Actions** : cours d'initiation, stages vacances, galas amicaux, sorties/événements boxe, interventions sur mesure.
- **Coordonnées maquette (fictives)** : siège social (adresse administrative uniquement) Maison des associations, 12 rue du Ring, 92000 Nanterre · 06 12 34 56 78 · contact@cbac-boxe.fr · Instagram/Facebook `@cbacboxe`. `SITE_URL = https://www.cbac-boxe.fr` (déjà dans lib/utils.ts). Pas de local d'accueil : permanence téléphonique.
- **Compteurs d'impact (maquette)** : 450+ jeunes accompagnés · 25 structures partenaires · 12 ans d'engagement · 300 séances par an.
- **Marquee valeurs** : RESPECT · DISCIPLINE · DÉPASSEMENT DE SOI · TRANSMISSION · CONFIANCE · ÉNERGIE (+ répétition).
- **Newsletter** : « Les news du ring ».
- **Actions (4, révision 2026-07-06)** : slugs/ancres exacts → `cours-initiation`, `stages-vacances`, `galas-amicaux`, `sorties-evenements`. Ce sont les actions listées dans la doc de cadrage ; les interventions sur mesure restent portées par `/interventions`.
- **Coachs maquette (4)** : Soungui Gomis (fondateur, BPJEPS boxe anglaise, prévôt fédéral), Awa Diallo (BMF2, boxe éducative — écoles & enfance), Karim Benali (DEJEPS — interventions jeunesse & insertion), Léa Fontaine (BPJEPS AF — cardio-boxe & bien-être en entreprise). Diplômes affichés (exigence docs).

## 4. Contrats d'exports (OBLIGATOIRES pour les imports croisés)

### lib/data/site.ts
`export const association = { name, legalName, president, tagline, promise, address: { street, zip, city, full, venue }, phone, email, socials: { instagram, facebook }, impact: { jeunes: 450, structures: 25, annees: 12, seances: 300 } }` ; `export const navigation: { label: string; href: string }[]` (ordre header : Association, Nos actions, Stages, Interventions, Coachs, Calendrier, Actualités, Contact — Galerie & Adhésion accessibles via footer/CTA) ; `export const announcement: string` (bandeau : gala/stages) ; `export const hours` (permanences téléphoniques — pas de local d'accueil).

### lib/data/actions.ts (remplace activites.ts — révision 2026-07-06)
`export type Action = { slug; name; short; description; publics; lieux; image; points: string[]; faq?: { q; a }[] }` ; `export const actions: Action[]` (les 4 du §3). Pas de pages détail : les slugs servent d'ancres sur `/actions`.

### lib/data/publics.ts (cibles B2B/B2A — personas des docs)
`export type Cible = { key: "entreprises" | "centres-sociaux" | "ecoles" | "insertion"; name; anchor; persona; pitch; points: string[]; image; exemples: string[] }` ; `export const cibles: Cible[]`.

### lib/data/coachs.ts
`export type Coach = { slug; name; role; bio; diplomes: string[]; image; founder?: boolean }` ; `export const coachs: Coach[]`.

### lib/data/schedule.ts
`export type EventMois = { date; title; lieu; type: "gala" | "stage" | "sortie" | "initiation" | "reunion" }` ; `export const eventsMois: EventMois[]` (~7 événements juillet 2026, lieux variés : gymnases mis à disposition, foyer, centre social, salle municipale, maison des associations). **Plus de planning hebdo** (`days`/`creneaux` supprimés — révision 2026-07-06).

### lib/data/content.ts
`export const testimonials: { quote; author; role }[]` (≥6 : DRH, directrice centre social, éducateur, parents, adhérents — reprendre les personas Sophie/Marc/Fatima/Thomas des docs) ; `export const partenaires: { name: string }[]` (≥8, fictifs crédibles : Ville de Nanterre, CAF 92, Fédération FF Boxe, collèges, PME…) ; `export const faqSecurite: { q; a }[]` (≥6 : encadrement, matériel, âge minimum, assurance, certificat médical, mixité) ; `export const stages: { title; dates; ages; places; image; description; statut: "ouvert" | "complet" | "bientot" }[]` (≥4, vacances 2026) ; `export const actus: { slug; date; title; excerpt; image; tag }[]` (≥6) ; `export const galerie: { src; alt; cat: "gala" | "cours" | "evenement" }[]` (≥9) ; `export const quiz: { question; options: { label; scores: Record<string,number> }[] }[]` + `export const quizProfiles: Record<string, { title; text; href; cta }>` (profils révisés : enfant→/stages, adulte→/actions#cours-initiation, structure→/interventions, entreprise→/interventions#entreprises) ; `export const instaPosts: { image; caption; likes }[]` (6, flux mock). **Plus d'export `tarifs`** (page /tarifs supprimée — le prix passe par le devis et les aides sont mentionnées sur /stages et /adhesion).

### lib/seo.ts (miroir de 20eDanse/lib/seo.ts)
`buildMetadata({ title, description, path?, image? }): Metadata` (canonical, OG 1200×630, twitter) ; `localBusinessLd()` (`@type: ["SportsActivityLocation","SportsClub"]` — type schema.org technique, sans équivalent « association sportive ») ; `eventLd(stage)` (`@type: Event`, lieu « communiqué à l'inscription ») ; `faqLd(items)` ; `breadcrumbLd(crumbs)`. **`activiteLd` supprimé** (plus de pages détail d'activité).

### components/seo/json-ld.tsx
`export function JsonLd({ data }: { data: object | object[] })`.

### components/ui (API identique à 20eDanse — lire chaque source)
`button.tsx`: `Button`, `buttonVariants` (CVA ; primary = rouge, secondary = bleu, outline = bordure craie/30 texte craie, ghost ; mêmes tailles que 20eDanse). `badge.tsx`: `Badge`. `accordion.tsx`: `Accordion, AccordionItem, AccordionTrigger, AccordionContent`. `dialog.tsx`: exports Radix identiques à 20eDanse. `form.tsx`: mêmes exports que 20eDanse/components/ui/form.tsx.

### components/site (API identique aux équivalents 20eDanse)
`reveal.tsx`: `Reveal({ children, delay?, className? })`, `Stagger`, `StaggerItem`. `parallax.tsx`: `ParallaxImage` (mêmes props que 20eDanse). `marquee.tsx`: `Marquee({ items, className? })`. `section-title.tsx`: `SectionTitle({ eyebrow, title, intro?, align? })`. `divider.tsx`: `Divider` (picto = gants de boxe stylisés SVG inline au lieu du picto danse). `brand-mark.tsx`: `BrandMark` (cœur bleu/or du logo en SVG inline + texte "CBAC"). `social-icons.tsx`: `SocialIcons`. `testimonial-slider.tsx`: `TestimonialSlider` (+ affiche un faux player vidéo : poster image + bouton play décoratif — exigence "témoignages vidéo"). `framed-image.tsx`: `FramedImage`.
**Nouveaux** : `impact-counter.tsx`: `ImpactCounter({ value: number; suffix?: string; label: string })` client, compte à rebours animé à l'entrée dans le viewport (motion useInView). `quiz.tsx`: `Quiz()` client — quiz « Quel programme pour vous ? » (données lib/data/content), 4 questions, barre de progression, résultat = profil + CTA. `exit-popup.tsx`: `ExitPopup()` client — dialog déclenché à l'intention de sortie (mouseleave haut de viewport, une fois par session via sessionStorage), propose la plaquette PDF.

### components/layout
`header.tsx`: `Header` — même comportement que 20eDanse (sticky, scroll, burger mobile via Dialog) + CTA permanent « Demander un devis » (DevisButton) et lien Adhésion. `footer.tsx`: `Footer` — colonnes (association+réseaux, navigation, activités, contact/horaires) + bloc NewsletterForm « Les news du ring » + mentions maquette. `announcement-bar.tsx`: `AnnouncementBar`. `mobile-action-bar.tsx`: `MobileActionBar` (Adhésion / Devis / Appeler). `rappel-flottant.tsx`: `RappelFlottant` client — bouton flottant rouge `animate-pulse-ring` « Rappel sous 24h » ouvrant un Dialog avec mini-formulaire (prénom, téléphone, créneau) → état succès simulé.

### components/devis (miroir du wizard enroll de 20eDanse — lire enroll-store/root/wizard/start-button)
`devis-store.tsx`: `DevisProvider`, `useDevis()` (contexte : open/close, étape, données). `devis-root.tsx`: `DevisRoot` (Dialog global monté dans layout). `devis-wizard.tsx`: `DevisWizard` — configurateur « Créez votre intervention sur mesure » en 4 étapes : 1) Vous êtes… (cibles de lib/data/publics + particulier) 2) Format & objectifs (initiation, cycle, stage, team building, gala…) 3) Effectif, lieu, période 4) Coordonnées + récap → succès simulé (maquette, pas d'envoi réseau). `devis-button.tsx`: `DevisButton({ size?, variant?, className?, children? })` — ouvre le wizard.

### components/forms (mêmes patterns que 20eDanse forms : 'use client', état soumis simulé, validation HTML + messages)
`contact-form.tsx`: `ContactForm` — champ « Vous êtes » (particulier/entreprise/centre social/école/insertion) qui adapte les champs (société, structure, effectif…), case « Je souhaite être rappelé·e » et « Prendre un rendez-vous de présentation ». `newsletter-form.tsx`: `NewsletterForm` (inline, footer). `adhesion-form.tsx`: `AdhesionForm` — adhésion particulier (adhérent, date de naissance, centre d'intérêt via select statique : initiations/stages/sorties/bénévolat/soutien, responsable légal si mineur, droit à l'image) → succès simulé. `groupe-form.tsx`: `GroupeForm` — inscription groupe simplifiée (structure, effectif, tranche d'âge, période souhaitée).

### components features
`planning/mois-calendar.tsx`: `CalendrierMois` — liste stylée des `eventsMois` (date en gros font-condensed, type en Badge, lieu avec MapPin). `coachs/coach-card.tsx`: `CoachCard({ coach })` — photo, nom, rôle, diplômes en pills or. `actions/action-card.tsx`: `ActionCard({ action })` — carte d'action (badge, lieux avec MapPin), lien vers `/actions#slug`. `actus/actu-card.tsx`: `ActuCard({ actu })`. `galerie/galerie-grid.tsx`: `GalerieGrid` client — filtres par catégorie (Tous/Galas/Cours/Événements) + lightbox Dialog. **`weekly-schedule.tsx` supprimé** (pas de planning hebdo).

## 5. Manifest images (public/images/ — SVG placeholders soignés)

Style commun : scènes sombres `#0B0E14`→`#151A24` en dégradés, silhouettes/formes géométriques boxe (ring, cordes, gants, silhouettes boxeurs), touches bleu #2159D8 / or #E4CE7E / rouge #D7263D, grain léger (filtre turbulence), libellé discret de la scène en Barlow (texte SVG, font system fallback). Tous en `viewBox` cohérent avec leur ratio d'usage.

- `hero-ring.svg` (4:5, hero accueil : ring sous projecteur, silhouette boxeur)
- `transmission.svg` (4:3, adulte passant le gant à un enfant — image de marque)
- `activite-boxe-educative.svg`, `activite-boxe-loisir.svg`, `activite-boxe-competition.svg`, `activite-boxe-sante-forme.svg`, `activite-initiation-decouverte.svg`, `activite-stage-vacances.svg` (3:4)
- `coach-soungui.svg`, `coach-awa.svg`, `coach-karim.svg`, `coach-lea.svg` (4:5, portraits silhouette)
- `gala-1.svg` `gala-2.svg` `gala-3.svg`, `cours-1.svg` `cours-2.svg` `cours-3.svg`, `evenement-1.svg` `evenement-2.svg` `evenement-3.svg` (4:3, galerie)
- `corporate-1.svg`, `corporate-2.svg` (16:10, team building)
- `centre-social-1.svg`, `ecole-1.svg`, `insertion-1.svg` (16:10)
- `actu-1.svg` … `actu-6.svg` (16:10)
- `video-poster.svg` (16:9, poster témoignage vidéo avec bouton play dessiné)
- `insta-1.svg` … `insta-6.svg` (1:1, flux Instagram mock)
- `og-cover.svg` n'existe pas : buildMetadata utilise `/images/hero-ring.svg` par défaut.
- `logo-cbac.jpg` : DÉJÀ présent (cœur bleu/or sur noir).

`public/docs/` : `projet-pedagogique-cbac.pdf` et `plaquette-entreprises-cbac.pdf` — PDFs minimaux valides d'une page (titre + phrase "Document maquette").

## 6. Pages — briefs (chacune : metadata via buildMetadata, JsonLd pertinent, sections Reveal/Stagger, miroir du page.tsx 20eDanse indiqué)

- **/** (miroir `app/page.tsx`) : hero split (ParallaxImage hero-ring + carte flottante « le respect / avant tout » en condensed/display + mini image transmission) ; Marquee valeurs ; bande **compteurs d'impact** (4 ImpactCounter, exigence docs) ; « Round 01 · Nos actions » grille ActionCard scroll horizontal ; « Round 02 · Pour qui ? » 3 panneaux (Jeunes & familles → /actions, Structures & collectivités → /interventions, Entreprises → /interventions#entreprises) ; bande sombre "esprit" (promise + transmission.svg parallax) ; **Quiz** « Quel programme pour vous ? » ; coachs (fondateur + grille) ; TestimonialSlider + « Ils nous font confiance » (marquee/grille de noms partenaires) ; CalendrierMois (teaser 3 événements + lien /calendrier) ; bande flux Instagram mock ; CTA final rouge grain (DevisButton + lien adhésion). Séparateurs `.ring-ropes` entre grandes zones.
- **/association** (miroir a-propos) : hero éditorial, histoire/mission éducation populaire, valeurs en 3 cartes (Respect/Émotions/Dépassement), mot du président (Soungui Gomis), image transmission, **documents téléchargeables** (projet pédagogique PDF + plaquette), **FAQ sécurité & encadrement** (Accordion + faqLd), CTA.
- **/actions** (révision 2026-07-06, remplace /activites et ses pages détail) : intro « pas de salle, la boxe vient à vous » + ancres par action, une section ancrée par action (image/texte alternés, points, publics + lieux, CTA calendrier ou stages + DevisButton), bande « où nous intervenons » (gymnases municipaux, foyers, centres sociaux, écoles, entreprises, événements de quartier), faqLd sur les FAQ des actions, CTA final devis/contact.
- **/stages** (miroir stages) : liste des stages vacances (dates, âges, places, statut Badge), fonctionnement d'une journée type, **GroupeForm** (structures), FAQ courte, eventLd.
- **/interventions** (miroir prestations) : page conversion B2B/B2A — hero + ancres, **une section par cible** de lib/data/publics (entreprises #entreprises, centres sociaux, écoles, insertion) avec persona quote, points, exemples de séances, image ; bande « comment ça marche » (4 étapes) ; **DevisButton** partout ; plaquette PDF ; **ExitPopup** monté ici ; témoignages structures.
- **/coachs** (miroir profs) : fondateur à l'honneur + grille CoachCard, bloc diplômes/certifications & encadrement sécurisé, CTA.
- **/calendrier** (révision 2026-07-06) : CalendrierMois complet — les **lieux et événements du mois** (exigence doc), repères chiffrés (nb de rendez-vous, nb de lieux), note « lieux confirmés au fil du mois », lien iCal factice, bloc « un doute ? appelez la permanence ». **Pas de planning hebdo.**
- **/tarifs** : SUPPRIMÉE (révision 2026-07-06 — pas de grille tarifaire publique ; devis pour les structures, aides mentionnées sur /stages et /adhesion).
- **/adhesion** (révision 2026-07-06) : parcours en étapes (rencontre sur un lieu d'intervention → bulletin d'adhésion → participation/bénévolat), cotisation libre dès 10 €, **AdhesionForm**, documents à prévoir (sans licence de saison), bloc « comment nous joindre » (pas de local d'accueil), CTA contact.
- **/galerie** : GalerieGrid (filtres + lightbox), bande CTA « revivez nos galas ».
- **/actualites** : grille ActuCard (6), bande NewsletterForm « Les news du ring ».
- **/contact** (miroir contact) : ContactForm multi-profils, coordonnées + carte stylisée maquette (bloc SVG/di v), horaires d'accueil, bloc « Votre corner » (accompagnement personnalisé, rappel 24h, rdv de présentation).
- **/espace-partenaires** (miroir compte) : maquette d'espace privé partenaires — écran de connexion factice puis aperçu (planning des interventions, documents, factures) en données statiques, bandeau « démo maquette ».
- **not-found.tsx** : 404 « Hors des cordes » + CTA retour.
- **sitemap.ts / robots.ts** : miroir 20eDanse (routes CBAC + activites dynamiques).

## 7. Checklist fonctionnalités docs → emplacement (le réviseur vérifiera CHAQUE ligne)

Devis visible partout (header + mobile bar + sections) ✓ Rappel 24h flottant global ✓ Formulaire entreprise (ContactForm + DevisWizard) ✓ Inscription groupe (GroupeForm sur /stages) ✓ Configurateur 4 étapes (DevisWizard) ✓ Pop-up sortie plaquette (/interventions) ✓ Newsletter « Les news du ring » (footer + /actualites) ✓ RDV présentation (ContactForm + /contact) ✓ Pages par cible (/interventions sections) ✓ Stages vacances dates+âges (/stages) ✓ Adhésion particuliers (/adhesion) ✓ Coachs+diplômes (/coachs) ✓ FAQ sécurité (/association) ✓ Projet pédagogique PDF (/association) ✓ Plaquette PDF (/interventions, ExitPopup) ✓ Stats impact (ImpactCounter accueil) ✓ Logos partenaires (accueil) ✓ Témoignages vidéo (TestimonialSlider avec poster play) ✓ Galerie (/galerie) ✓ Flux réseaux sociaux (accueil, mock) ✓ Quiz programme (accueil) ✓ Calendrier du mois (accueil teaser + /calendrier) ✓ Actualités (/actualites) ✓ Espace partenaires (/espace-partenaires mock) ✓ Navigation en rounds (eyebrows) ✓ Boutons gong/gants (hover jab + pulse-ring) ✓ Entrée dramatique (hero spotlight + grain + reveal) ✓ Ambiance sonore : NON retenue (option écartée, ne pas implémenter).
