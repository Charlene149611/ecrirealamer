import express from "express";
import { verifyToken, hasRole } from "../middleware/authMiddleware.js";
import {
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { ROLES } from "../config/roles.js";

const router = express.Router();

// Récupérer le profil d’un utilisateur (protégé)
router.get("/:id", verifyToken, getUserById);

// Mettre à jour les infos d’un utilisateur (protégé)
router.put("/:id", verifyToken, updateUser);

// Supprimer un utilisateur (protégé et réservé à l'admin
router.delete("/:id", verifyToken, hasRole("ROLES.ADMIN"), deleteUser);

export default router;
