import express from "express";
import { verifyToken, hasRole } from "../middleware/authMiddleware.js";
import {
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import User from "../models/User.js";  // import pour la route /me
import { ROLES } from "../config/roles.js";

const router = express.Router();

// Route pour récupérer les infos du user connecté (protégé)
router.get("/me", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId; // récupéré depuis le token
    const user = await User.findById(userId).select("-passwordHash");
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.json(user);
  } catch (error) {
    console.error("Erreur récupération user :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Récupérer le profil d’un utilisateur par ID (protégé)
router.get("/:id", verifyToken, getUserById);

// Mettre à jour les infos d’un utilisateur (protégé)
router.put("/:id", verifyToken, updateUser);

// Supprimer un utilisateur (protégé et réservé à l'admin)
router.delete("/:id", verifyToken, hasRole(ROLES.ADMIN), deleteUser);

export default router;
