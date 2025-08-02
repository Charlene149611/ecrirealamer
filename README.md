# Écrire à la mer

## 1. Présentation du projet

Écrire à la mer est une application web permettant aux utilisateurs d’écrire, conserver et partager des pensées sous forme de lettres ou messages. L’accent est mis sur une expérience intime et sécurisée.

## 2. Structure du projet

/backend # Serveur Node.js (Express) avec MongoDB + MySQL
/frontend # Application React avec routing, auth context, hooks, pages
/src # Code source frontend
/api # Gestion des appels API
/auth # Context et hooks d'authentification
/components # Composants réutilisables (Navbar, Logout, etc.)
/pages # Pages principales (Login, Register, Profil, Home)

```
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── api
│   │   ├── auth
│   │   ├── components
│   │   └── pages
│   ├── public
│   └── index.html
├── .gitignore
└── README.md
```

Pour plus de détails sur l’architecture du backend, veuillez consulter le fichier [backend/docs/architecture.md](backend/docs/architecture.md).

Pour plus d’informations sur l’architecture du frontend, veuillez consulter le fichier [frontend/docs/front.md](frontend/docs/front.md).

## 3. Objectifs

- Authentification sécurisée avec JWT  
- Gestion des profils utilisateur  
- Gestion des rôles (admin, user)  
- CRUD des lettres et pensées (à venir)  
- Interface simple, fluide et responsive 
- Interface accessible (à venir)

## 4. Installation et démarrage

### Prérequis  
- Node.js et npm  
- MongoDB (en local ou cloud)  
- MySQL (configuré)  
- Fichier `.env` (voir section Variables d'environnement) 

### Pour plus de détails (architecture | installation | endpoints)

Pour plus de détails sur l’installation du backend, veuillez consulter le fichier [docs/backend/architecture.md](docs/backend/architecture.md).

Pour plus d’informations sur l’installation et le démarrage du frontend, veuillez consulter le fichier [docs/front.md](docs/front.md).

### Lancer le backend  
```bash
cd backend
npm install
node server.js || nodemon server.js || npm run dev

### Lancer le frontend
```bash
cd frontend
npm install
npm run dev

Voici les commandes GitHub/Git courantes pour initialiser et gérer votre dépôt :

```bash
# Initialiser un nouveau dépôt Git
git init

# Vérifier le statut des fichiers
git status

# Ajouter des fichiers à l’index (staging area)
git add .

# Enregistrer les modifications avec un message de commit
git commit -m "Votre message de commit"

# Ajouter la remote (remplacer par l’URL de votre dépôt)
git remote add origin https://github.com/votre-utilisateur/votre-repo.git

# Envoyer les commits vers la branche principale sur GitHub
git push -u origin main

# Récupérer les dernières modifications du dépôt distant
git pull
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
