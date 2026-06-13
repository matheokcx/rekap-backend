# CLAUDE.md

__Template de projet d'api avec Adonis v7 et Typescript v6__

---

## Commandes principales

- `npm run dev` - Pour lancer le serveur de développement
- `npm run build` - Pour builder le projet
- `npm run typecheck` - Pour vérifier les erreurs de typage Typescript
- `npm run lint` - Pour vérifier la qualité du code avec eslint
- `npm run format` - Pour modifier et formatter les fichiers sources du projet
- `npm run test` - Lance tous les tests (unitaires, fonctionnels)

## Architecture (`/app`)

### Librairies

- `Eslint + prettier`: Qualité de code général pour la sécurité et maintenabilité du projet
- `pg`: Utilisation de Postgres pour la base de données

## Conventions

### À faire

- Décaler le plus possible la logique du côté des services afin d'alléger les controllers
- Vérifier les permissions, rôles et accessibilité des utilisateurs
- Optimiser les requêtes au mieux (ex : pagination, indexation, récupérer les bonnes informations et non pas `*`)

### À ne pas faire

- Ne pas vérifier les données entrantes et ne pas transformer la donnée en sortie
- Terminer une tâche sans effectuer les vérifications (formatage, typage, qualité ...)
