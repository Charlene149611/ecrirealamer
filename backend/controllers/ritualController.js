import Ritual from "../models/Ritual.js";

// Créer un rituel
export const createRitual = async (req, res) => {
  try {
    const ritual = new Ritual(req.body);
    await ritual.save();
    res.status(201).json(ritual);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir tous les rituels d'un utilisateur
export const getUserRituals = async (req, res) => {
  try {
    const rituals = await Ritual.find({ user: req.params.userId });
    res.json(rituals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modifier un rituel
export const updateRitual = async (req, res) => {
  try {
    const ritual = await Ritual.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ritual);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un rituel
export const deleteRitual = async (req, res) => {
  try {
    await Ritual.findByIdAndDelete(req.params.id);
    res.json({ message: "Rituel supprimé" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
