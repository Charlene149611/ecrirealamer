// C'est notre Hook pour accéder facilment aux context d'authentification

import { useContext } from "react";
import { AuthContext } from "./AuthContext";

// On va retourner directement les valeurs des contexte AuthContext (token, setToken ) sans passer par des propos de M

export default function useAuth() {
    return useContext(AuthContext)
}