# Contenu fictif à valider / remplacer (maquette CBAC)

Tout ce qui suit a été **inventé pour les besoins de la maquette** (la doc de cadrage ne fournit pas ces informations) et doit être validé ou remplacé par les vraies données de l'association. Tout est centralisé dans `lib/data/`.

## Issu de la doc (ne pas toucher)
- Valeurs (respect, gestion des émotions, dépassement de soi), président M. Soungui Gomis, publics cibles, actions (initiations, stages vacances, galas, sorties), personas des témoignages (Sophie, Marc, Fatima, Thomas), toutes les fonctionnalités (devis, rappel 24h, configurateur, quiz, newsletter « Les news du ring », pop-up plaquette, espace partenaires…).

## Inventé pour la maquette (à valider)
| Donnée | Valeur maquette | Fichier |
|---|---|---|
| Baseline | « La boxe anglaise comme école de vie » | `lib/data/site.ts` |
| Adresse / lieu | Gymnase Léo-Lagrange, 12 rue du Ring, 92000 Nanterre | `lib/data/site.ts` |
| Téléphone / email / réseaux | 06 12 34 56 78 · contact@cbac-boxe.fr · @cbacboxe | `lib/data/site.ts` |
| Domaine | www.cbac-boxe.fr | `lib/utils.ts` |
| Chiffres d'impact | 450+ jeunes · 25 structures · 12 ans · 300 séances | `lib/data/site.ts` |
| Découpage en 6 activités + descriptifs | boxe éducative / loisir / compétition / santé-forme / initiation / stages | `lib/data/activites.ts` |
| Coachs (sauf le président) | Awa Diallo, Karim Benali, Léa Fontaine + diplômes | `lib/data/coachs.ts` |
| Planning hebdo + événements du mois | créneaux et dates fictifs | `lib/data/schedule.ts` |
| Tarifs et aides | montants fictifs (adhésions, licence, Pass'Sport, QF) | `lib/data/content.ts` |
| Stages (noms, dates, places) | « Premiers gants », « Ring d'été »… | `lib/data/content.ts` |
| Témoignages (textes), partenaires (noms), actualités, FAQ (réponses) | fictifs mais calqués sur les personas de la doc | `lib/data/content.ts` |
| Visuels | SVG placeholders + PDFs maquette (`public/images`, `public/docs`) | — |

**Règle de travail actée : aucune fonctionnalité ni contenu hors doc ne sera ajouté sans demande explicite.**
