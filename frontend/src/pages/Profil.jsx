import { useState, useEffect } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/UseAuth";

const Profil = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await api.get("/users/me");
        setUser(response.data);
      } catch (error) {
        console.error("Erreur récupération profil", error);
        setError("Impossible de récupérer le profil.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token, navigate]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>Utilisateur non trouvé</p>;

  return (
    <div>
      <h1>Profil de {user.username}</h1>
      <p>Email : {user.email}</p>
      <p>Compte créé le : {new Date(user.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default Profil;
