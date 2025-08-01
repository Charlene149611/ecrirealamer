import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, trim: true, lowercase: true, unique: true },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin", "moderator"],
    default: "user"
  },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
