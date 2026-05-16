# Oraux X/ENS

Site statique de préparation aux oraux X/ENS, en français, pensé pour GitHub Pages.

## Ce que contient le site

- Deux comptes dédiés : `Raphael` et `Heni`
- Un tableau de bord de progression
- Une zone de cours structurée à partir des thèmes Francinou et des rapports ENS
- Un glossaire orienté oral
- Un QCM de résultats classiques à connaître
- Un corpus d'oraux blancs filtrable
- Une mémoire des erreurs par profil
- Une page de résultats avec comparaison des profils

## Choix techniques

- Aucune dépendance de build
- HTML / CSS / JavaScript natifs
- Persistance locale via `localStorage`
- Navigation par hash, donc déploiement simple sur GitHub Pages

## Sources mobilisées

- Rapports officiels ENS 2025 et 2022
- Sujets posés à l'oral Maths Ulm 2019
- Plan de la collection Cassini `Oraux X-ENS`
- Volumes Francinou disponibles localement :
  - `Algèbre 1`
  - `Algèbre 2` via le plan de collection
  - `Algèbre 3`
  - `Analyse 1`
  - `Analyse 2`

Note : `Analyse 3` n'était pas disponible localement dans l'espace de travail. Les modules associés ont été alignés sur le plan Cassini de la collection et sur les remarques des rapports ENS 2025.

## Déploiement

Le workflow GitHub Pages inclus publie directement le contenu du dépôt.
