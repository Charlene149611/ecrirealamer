import Entry from "../models/Entry.js"

// Créer une entrée
export const createEntry = async (req, res) => {
    try {
        const entry = new Entry(req.body);
        await entry.save();
        res.status(201).json(entry);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}