import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  anchor_phrase: { type: String },
  narration: { type: String, required: true },
  status: {
    type: String,
    enum: ["brouillon", "publique", "privée", "en bouteille"],
    default: "brouillon"
  },
  visibility: {
    type: String,
    enum: ["publique", "privée"],
    default: "privée"
  },
  tags: [String],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export default mongoose.model("Entry", entrySchema);
