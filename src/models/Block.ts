import mongoose from "mongoose";

const BlockSchema = new mongoose.Schema({
  number: { type: String, required: true },
  size: { type: String, required: true },
  timestamp: { type: Number, required: true },
  nonce: { type: String, required: true },
  gasLimit: { type: String, required: true },
  hash: { type: String, required: true, unique: true },
});

export default mongoose.models.Block || mongoose.model("Block", BlockSchema);
