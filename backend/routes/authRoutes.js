import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register); // inscription d'un nouvel utilisateur
router.post("/login", login); // connexion d'un utilisateur existant

export default router;
