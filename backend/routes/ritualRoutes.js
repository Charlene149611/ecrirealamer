import express from "express";
import {
  createRitual,
  getUserRituals,
  updateRitual,
  deleteRitual,
} from "../controllers/ritualController.js";

const router = express.Router();

router.post("/rituals", createRitual); // créer un rituel
router.get("/user/:userId", getUserRituals); // lire les rituels d’un user
router.put("/:id", updateRitual); // mettre à jour un rituel
router.delete("/:id", deleteRitual); // supprimer un rituel

export default router;
