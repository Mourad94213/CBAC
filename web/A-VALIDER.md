# Contenu fictif à valider / remplacer (maquette CBAC)

Tout ce qui suit a été **inventé pour les besoins de la maquette** (la doc de cadrage ne fournit pas ces informations) et doit être validé ou remplacé par les vraies données de l'association. Tout est centralisé dans `lib/data/`.

## Issu de la doc (ne pas toucher)
- Valeurs (respect, gestion des émotions, dépassement de soi), président M. Soungui Gomis, publics cibles, actions (initiations, stages vacances, galas, sorties), personas des témoignages (Sophie, Marc, Fatima, Thomas), toutes les fonctionnalités (devis, rappel 24h, configurateur, quiz, newsletter « Les news du ring », pop-up plaquette, espace partenaires…).

## Inventé pour la maquette (à valider)
| Donnée | Valeur maquette | Fichier |
|---|---|---|
| Baseline | « La boxe anglaise comme école de vie » | `lib/data/site.ts` |
| Siège social (adresse administrative — pas de salle) | Maison des associations, 12 rue du Ring, 92000 Nanterre | `lib/data/site.ts` |
| Téléphone / email / réseaux / permanences | 06 12 34 56 78 · contact@cbac-boxe.fr · @cbacboxe · permanence lun→ven 9h30-18h | `lib/data/site.ts` |
| Domaine | www.cbac-boxe.fr | `lib/utils.ts` |
| Chiffres d'impact | 450+ jeunes · 25 structures · 12 ans · 300 séances | `lib/data/site.ts` |
| Descriptifs des 4 actions (les actions elles-mêmes viennent de la doc) | cours d'initiation / stages vacances / galas amicaux / sorties & événements | `lib/data/actions.ts` |
| Coachs (sauf le président) | Awa Diallo, Karim Benali, Léa Fontaine + diplômes | `lib/data/coachs.ts` |
| Événements du mois + lieux | dates et lieux fictifs (gymnases Anatole-France & Joliot-Curie, foyer Les Iris, centre social Les Acacias…) | `lib/data/schedule.ts` |
| Cotisation d'adhésion | « montant libre dès 10 € » | `app/adhesion/page.tsx` |
| Stages (noms, dates, places) + aides (Pass'Sport, QF) | « Premiers gants », « Ring d'été »… | `lib/data/content.ts` |
| Témoignages (textes), partenaires (noms), actualités, FAQ (réponses) | fictifs mais calqués sur les personas de la doc | `lib/data/content.ts` |
| Visuels | SVG placeholders + PDFs maquette (`public/images`, `public/docs`) | — |

**Révision 2026-07-06 :** repositionnement « association itinérante » (pas de salle attitrée, pas de créneaux hebdo, pas de grille tarifaire) — suppression de `/tarifs`, `/activites(+slug)`, du planning hebdomadaire et de la licence de saison ; création de `/actions`.

**Règle de travail actée : aucune fonctionnalité ni contenu hors doc ne sera ajouté sans demande explicite.**
