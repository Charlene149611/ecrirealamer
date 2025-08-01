import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../api/api";

// Définition du schéma de validation avec Zod

const schema = z
  .object({
    username: z.string().min(3, "Le nom doit comporter au moins 3 lettres"),
    email: z.email("Email invalide"),
    password: z
      .string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Les mots de passe ne correspondent pas",
  });

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
    // on retire confirmPassword pour ne pas l'envoyer au backend
    const dataToSend = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    try {
      await api.post("/auth/register", dataToSend);
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Une erreur est survenue lors de l'inscription.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("username")}
        placeholder="Nom d'utilisateur"
      />
      {errors.username && <p>{errors.username.message}</p>}

      <input type="email" {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        {...register("password")}
        placeholder="Mot de passe"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input
        type="password"
        {...register("confirmPassword")}
        placeholder="Confirmez le mot de passe"
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        S'inscrire
      </button>
    </form>
  );
};

export default Register;
