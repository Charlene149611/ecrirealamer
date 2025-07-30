import mongoose from "mongoose";

const ritualSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  anchorPhrase: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ""
  },
  gesture: {
    type: String,
    required: true
  },
  narration: {
    type: String,
    default: ""
  }
}, { timestamps: true });

export default mongoose.model("Ritual", ritualSchema);
