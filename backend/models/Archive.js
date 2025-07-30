import mongoose from "mongoose";

const archiveSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  title: { type: String, required: true },
  description: { type: String },

  entries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Entry" }],
  bottles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bottle" }],
  rituals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ritual" }],

  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Archive", archiveSchema);
