## Structure du dossier frontend

frontend/
├── docs/
│   └── front.md
├── src/
│   ├── api/
│   │   └── api.js
│   │
│   ├── auth/
│   │   ├── AuthContext.jsx
│   │   ├── AuthProvider.jsx
│   │   └── useAuth.jsx
│   │
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Profil.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── eslint.config.js
├── package.json
├── package-lock.json
└── vite.config.js

## Cette structure permet de :

api/ : permet de faire le lien entre le backend et le frontend

pages/ : regroupe toutes les vues accessibles via des routes

auth/ : gère l’authentification et l’état utilisateur de façon centralisée

components/ : pour les blocs réutilisables (Navbar, Footer, etc.)

App.jsx : point central où sont définis les routes et le rendu

main.jsx : point d’entrée de l’application (où placer le <AuthProvider>)

## Dépendances à installer

1. Fonctionnelles

axios -> Librairie pour faire des requêtes HTTP (POST, GET, etc.) qui permet de communiquer avec le backend (inscription, login, etc), faire des appels API manuellement

react-hook-form -> Gère les formulaires de manière simple et performante, Moins de re-renders que useState, et plus fluide

zod -> Librairie de validation de schémas, définir les règles ( email valide, mot de passe min 6 caractères), fonctionne avec react-hook-form

@hookform/resolvers -> Connecte zod à react-hook-form

2. Navigation & UI

react-router-dom -> Permet la navigation entre les pages (/login, /register, /profil)

react & react-dom -> Ce sont des peer-dependencies utilisées par Vite

prop-types -> Permet de typer les props des composants

3. Style

Bibliothèque externe ou framework
Pour ce projet: 
tailwindcs -> Plus long à installer et configurer au départ mais plus personnalisable 


## Installation des dépendances

1. Nettoyage des anciennes dépendances (facultatif si projet vierge)

rm -rf node_modules
rm package-lock.json

Ces deux commandes suppriment les modules installés et le fichier de verrouillage pour repartir d’un état propre.

2. Réinitialisation avec Vite (dans un dossier déjà existant)

npm create vite@latest . -- --template react

Le . signifie qu’on initialise dans le dossier courant, sans en créer un nouveau.

👉 Lors du prompt, choisir :
○ Ignore files and continue (ne pas supprimer les fichiers existants)

3.  Installation des dépendances de base

npm install

4. Installation des dépendances supplémentaires utiles

npm install axios react-hook-form zod @hookform/resolvers react-router-dom prop-types
npm install serve --save-dev

5. Pages

/login : connexion

/register : inscription

/dashboard (profil) : page utilisateur protégée

/ : page d’accueil

Composants clés
Navbar : navigation + déconnexion

Logout : bouton de déconnexion

Hooks auth : useAuth, AuthProvider

## Tests

Inscription via formulaire, vérifier en base MongoDB

Connexion, vérifier token stocké localStorage + contexte

Accès au profil, vérifier affichage infos utilisateur

Bouton déconnexion, vérifier suppression token + redirection

Protection des routes privées

## Fonctionnalités frontend

AuthContext + AuthProvider pour gérer token et utilisateur

Hook personnalisé useAuth pour accéder au contexte

Formulaires Login et Register avec validation

Stockage sécurisé du token et user dans localStorage

Navbar dynamique selon statut connecté

Protection des routes privées (profil/dashboard)

Déconnexion efficace avec suppression du token

## Configuration de Tailwindcss pour un style doux et symbolique (?)
 
### 1. Fichier `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mer: {
          clair: '#ebf8ff',
          profond: '#3b82f6',
          mousse: '#d1fae5',
        },
        corail: '#f87171',
        sable: '#fef3c7',
      },
      fontFamily: {
        poeme: ['"Cormorant Garamond"', 'serif'],
        doux: ['"Quicksand"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Style général */
body {
  @apply font-doux text-slate-700 bg-mer-clair;
}

importer des polices dans index.html

<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;500&family=Quicksand:wght@400;600&display=swap" rel="stylesheet">



