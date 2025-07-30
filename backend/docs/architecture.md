# Architecture du projet : Écrire à la mer

## Bases de données utilisées

- **MongoDB** : pour les données souples, narratives, personnelles, liées à l’expression et aux utilisateurs.  
- **MySQL** : pour les données structurées, statistiques, logs, et administration.

---

## Données gérées dans MongoDB

| Collection  | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `users`     | Utilisateurs (nom, email, mot de passe hashé, rôle)                         |
| `entries`   | Entrées personnelles : titre, narration, date, statut                       |
| `rituals`   | Rituels : geste, phrase d’ancrage, image, narration                         |
| `bottles`   | Pensées mises à la mer, intimes, à envoyer ou conserver (si utilisées)      |
| `archives`  | Archives facultatives (entries, bottles ou rituals archivés)                |

---

## Données gérées dans MySQL

| Table           | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| `admin_logs`    | Logs d’administration (connexions, modifications sensibles)                 |
| `activity_logs` | Historique des actions des utilisateurs (facultatif)                        |
| `statistics`    | Statistiques générales : nombre d’entries créés, utilisateurs actifs, etc.  |
| `error_logs`    | Suivi des erreurs techniques (500, 404, etc.)                               |

---

## Règles de cohérence

- **Pas de duplication** entre MongoDB et MySQL.  
- **Pas de déplacement d’une entité d’une base à l’autre sans justification technique majeure.**  
- MongoDB = **contenus personnels**, souples, non-relationnels.  
- MySQL = **métadonnées**, logs, administration.

---

