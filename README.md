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

## 3. Objectifs

- Authentification sécurisée avec JWT  
- Gestion des profils utilisateur  
- Gestion des rôles (admin, user)  
- CRUD des lettres et pensées (à venir)  
- Interface simple, fluide et responsive  

## 4. Installation et démarrage


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
