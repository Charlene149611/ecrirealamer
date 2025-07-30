import mongoose from "mongoose";

const bottleSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  message: { type: String, required: true },
  title: { type: String },

  status: {
    type: String,
    enum: ["envoyée", "repêchée", "archivée"],
    default: "envoyée"
  },

  visibility: {
    type: String,
    enum: ["publique", "privée"],
    default: "privée"
  },

  sent_at: { type: Date, default: Date.now },
  retrieved_at: { type: Date }, // si quelqu'un l’a lue ou récupérée

  tags: [String]
}, { timestamps: true });

export default mongoose.model("Bottle", bottleSchema);
