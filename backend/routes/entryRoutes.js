import express from "express"

import { createEntry } from "../controllers/entryController.js"

const router = express.Router();

router.post ('/entry', createEntry)

export default router