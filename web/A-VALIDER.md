# Contenu à valider / à fournir (maquette CBAC)

**Règle actée (renforcée le 2026-07-06) : ne rien inventer. Si une information n'est pas connue, on ne met rien** (état « en préparation » plutôt que fausse donnée). Tout le contenu est centralisé dans `lib/data/`.

## Informations réelles intégrées (fournies par l'association, 2026-07-06)
- **Chiffres** : plus de 30 actions menées dans des structures · 5 structures partenaires · 2 ans d'existence (`lib/data/site.ts` → `impact`).
- **Équipe** (`lib/data/coachs.ts`) : Soungui Gomis (président fondateur), Younes (jeune boxeur amateur et coach), Zinedine Meftah (jeune boxeur amateur, passif de coach). **Aucun diplôme ni parcours inventé.**
- **Pas de gymnase attitré** : l'association intervient dans les structures qui l'accueillent.
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

**Historique.** Révision 2026-07-06 (matin) : repositionnement « association itinérante ». Révision 2026-07-06 (après-midi) : purge complète du contenu inventé après retour de l'association (faux coachs Awa/Karim/Léa supprimés, faux stages « Premiers gants »/« Ring d'été » supprimés, fausse chronologie 2014-2026 supprimée, faux témoignages/partenaires/actus supprimés, chiffres corrigés 450→30+/25→5/12→2, actions réalignées sur la brochure : initiations & cours, stages, temps d'échanges & sorties, galas amicaux en ambition).

**Règle de travail actée : aucune fonctionnalité ni contenu hors doc ne sera ajouté sans demande explicite. Ne jamais inventer de faits, d'événements, de personnes ou de diplômes.**
