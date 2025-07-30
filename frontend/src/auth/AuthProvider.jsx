import { useState, useEffect, useMemo, } from "react";

import PropTypes  from "prop-types";

import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        if (token) {
            localStorage.setItem('token' , token) // stockage du token
        } else {
            localStorage.removeItem('token')
        }
    }, [token]);

    const value = useMemo(() => ({token , setToken}), [token, setToken]);

    return (
        <AuthContext.Provider value={value}>

        {children}

        </AuthContext.Provider>
    )
}

// Vérifier si ele composant AuthProvider a bien un enfant react valide 

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}