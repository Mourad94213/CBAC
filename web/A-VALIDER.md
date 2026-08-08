# Contenu à valider / à fournir (maquette CBAC)

**Règle actée (renforcée le 2026-07-06) : ne rien inventer. Si une information n'est pas connue, on ne met rien** (état « en préparation » plutôt que fausse donnée). Tout le contenu est centralisé dans `lib/data/`.

## ⚠️ À faire remonter à l'association (retour vocal du 2026-08-08)
Ces éléments ont été écrits avec les informations disponibles, mais doivent être **confirmés ou complétés** :

| Point | Ce qui est en ligne | Ce qu'il manque |
|---|---|---|
| Fonction de Younes | « Conseiller en développement » + mention « Boxeur amateur & coach » | **Confirmer l'intitulé exact** et à qui il s'applique (déduit du vocal : la personne actuellement affichée comme « coach & boxeur amateur ») |
| Douka | Ajoutée : « Psychologue », sœur de Zinedine | Nom de famille (ou confirmation prénom seul), intitulé exact, photo |
| Hugo | Ajouté : « Membre de l'équipe » (libellé neutre faute d'info) | **Fonction réelle dans l'association**, nom de famille éventuel, photo |
| Le frère de Zinedine | **Non ajouté** (prénom inaudible sur le vocal) | Prénom, nom, fonction |
| L'exposition | Citée comme exemple dans l'action « Projets » (`lib/data/actions.ts`) | Nom du projet, structure partenaire, date — ou retrait si l'exemple ne doit pas être public |
| Photos de l'équipe | Placeholders SVG (`coach-hugo.svg`, `coach-douka.svg`) | Vraies photos |
| Fiche d'inscription | PDF maquette `public/docs/fiche-inscription-cbac.pdf` | **Le vrai document** de l'association |
| Cotisation | « Le montant est précisé sur le bulletin » + mention que les structures partenaires prennent en charge leurs participants | Décision de l'association sur le modèle économique (cotisation annuelle particuliers, portes ouvertes une fois les locaux obtenus) |
| Formulaires | Toujours en succès simulé (rien n'est envoyé) | Brancher un vrai envoi e-mail avant mise en ligne |

## Informations réelles intégrées (fournies par l'association, 2026-07-06, complétées le 2026-08-09)
- **Chiffres** : plus de 30 actions menées dans des structures · 5 structures partenaires · 2 ans d'existence (`lib/data/site.ts` → `impact`).
- **Équipe** (`lib/data/coachs.ts`) : Soungui Gomis (président fondateur), Younes (conseiller en développement), Douka (psychologue), Hugo (membre de l'équipe), Zinedine Meftah (boxeur). **Aucun diplôme ni parcours inventé.**
- **Pas encore de locaux** : la formulation retenue est « en attendant nos locaux » (et non plus « pas de gymnase attitré ») ; l'association intervient **chez ses structures partenaires** (et non plus « les structures qui nous accueillent » — vocabulaire plus collaboratif, demandé le 2026-08-08).
- **Une cinquième action, « Projets »** : projets inédits co-construits avec une structure partenaire à partir de son besoin (`lib/data/actions.ts` → slug `projets`).
- **Positionnement des échanges** : on n'échange pas pour échanger — la thématique est définie en amont avec la structure, à partir d'une problématique ou d'un besoin identifiés chez son public.
- **Positionnement** : l'action sociale, l'interaction et la discussion sont au cœur des initiations ; les actions en foyer sont mises en avant (première cible sur `/interventions`).
- **Logo** : le vrai logo (`docs/logo cbac.jpeg` = `public/images/logo-cbac.jpg`) est utilisé dans le header (`components/site/brand-mark.tsx`) et le footer.
- **Textes** : le « mot du président » et les descriptions d'actions reprennent le dossier de présentation (`docs/Dossier Soungui_merged (1) (1).pdf`). Les galas amicaux sont présentés comme une **ambition**, pas comme un acquis.

## À fournir par l'association (rien n'est affiché en attendant)
| Donnée | État actuel sur la maquette |
|---|---|
| Histoire de l'association | Document annoncé par l'association — section « en bref » factuelle en attendant (`/association`) |
| Noms des 5 structures partenaires | Non affichés (seul le chiffre apparaît) |
| Dates des stages et événements du mois | À saisir par l'association dans le backoffice `/admin` (stockage : Upstash Redis en production, `data/events.json` en local) — vide → état « programme en préparation » |
| Mot de passe du backoffice | Valeur de maquette `cbac2026` (`.env.local` → `ADMIN_PASSWORD`) — **à changer avant mise en ligne** |

## Déploiement Vercel — prérequis du backoffice
1. **Upstash Redis** : dashboard Vercel → Storage → Upstash (Redis) → créer la base (plan gratuit) et la **connecter au projet** — les variables `KV_REST_API_URL`/`KV_REST_API_TOKEN` (ou `UPSTASH_REDIS_REST_*`) sont injectées automatiquement. Sans elles, toute écriture depuis `/admin` échoue volontairement (voir `lib/events/store.ts`).
2. **`ADMIN_PASSWORD`** : à définir dans Settings → Environment Variables (Production + Preview) avec un vrai mot de passe.
| Témoignages réels | Section supprimée (les anciens étaient fictifs) |
| Actualités | Page `/actualites` en état « premières actus arrivent » |
| Montant de la cotisation | « précisé sur le bulletin » (`/adhesion`) |
| Ville / siège social réel | Coordonnées de maquette (voir ci-dessous) — la ville n'apparaît plus dans les textes éditoriaux |

## Encore fictif (placeholders de maquette, signalés comme tels)
| Donnée | Valeur maquette | Fichier |
|---|---|---|
| Siège social | Maison des associations, 12 rue du Ring, 92000 Nanterre (+ coordonnées geo) | `lib/data/site.ts`, `lib/seo.ts` |
| Téléphone / email / réseaux / permanences | 06 12 34 56 78 · contact@cbac-boxe.fr · @cbacboxe | `lib/data/site.ts` |
| Domaine | www.cbac-boxe.fr | `lib/utils.ts` |
| PDFs (dossier de présentation, plaquette) | fichiers maquette | `public/docs/` |
| Visuels | SVG placeholders (style conservé à la demande de l'association) | `public/images/` |
| Flux Instagram | mock à légendes génériques | `lib/data/content.ts` |
| Espace partenaires | démo statique, données marquées « (démo) » | `components/partenaires/partner-panel.tsx` |
| Promesses de service (rappel 24h, réponse 48h) | issues des fonctionnalités demandées dans la doc de cadrage — à confirmer | formulaires |

**Historique.** Révision 2026-08-09 (retour vocal du 2026-08-08) : « structures qui nous accueillent » → « structures partenaires » partout ; « pas de gymnase attitré » → « en attendant nos locaux » ; 5ᵉ action « Projets » ajoutée ; échanges recentrés sur une problématique identifiée avec la structure ; `/interventions` reformulée en « structure encadrante (foyer, centre social…) » et « initiation ou autre action » ; équipe élargie (Younes conseiller en développement, Douka psychologue, Hugo) ; quiz « programme » → « l'action qu'il vous faut » ; fiche d'inscription PDF ajoutée sur `/adhesion` ; cotisation précisée (prise en charge par les structures partenaires). Révision 2026-07-06 (matin) : repositionnement « association itinérante ». Révision 2026-07-06 (après-midi) : purge complète du contenu inventé après retour de l'association (faux coachs Awa/Karim/Léa supprimés, faux stages « Premiers gants »/« Ring d'été » supprimés, fausse chronologie 2014-2026 supprimée, faux témoignages/partenaires/actus supprimés, chiffres corrigés 450→30+/25→5/12→2, actions réalignées sur la brochure : initiations & cours, stages, temps d'échanges & sorties, galas amicaux en ambition).

**Règle de travail actée : aucune fonctionnalité ni contenu hors doc ne sera ajouté sans demande explicite. Ne jamais inventer de faits, d'événements, de personnes ou de diplômes.**
