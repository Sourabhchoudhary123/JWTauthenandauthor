

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, unique: true, required: true },
  password: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model("Users12312", userSchema);

export default User;