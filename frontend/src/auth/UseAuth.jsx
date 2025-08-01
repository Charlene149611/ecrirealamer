// C'est notre Hook pour accéder facilement aux context d'authentification

import { useContext } from "react";
import { AuthContext } from "./AuthContext";

// Ce hook donne accès à toutes les valeurs du contexte (token, user, setToken, setUser, logout)
export default function useAuth() {
  return useContext(AuthContext);
}
