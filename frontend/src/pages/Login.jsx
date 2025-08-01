import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { useState } from "react";
import useAuth from "../auth/UseAuth";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const { setToken, setUser } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/login", data);
      const { token, user } = response.data;

      setToken(token); // Met à jour le contexte d'authentification
      setUser(user); // Met à jour l'utilisateur dans le contexte

      // Redirection vers le tableau de bord après la connexion réussie
      navigate("/dashboard");
    } catch (error) {
      const message =
        error?.response?.data?.message || "Erreur à la connexion.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("identifier", { required: true })}
        placeholder="Email ou nom d'utilisateur"
        type="text"
      />
      <input
        type="password"
        {...register("password", { required: true })}
        placeholder="Mot de passe"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Connexion en cours..." : "Connexion"}
      </button>
    </form>
  );
};

export default Login;
