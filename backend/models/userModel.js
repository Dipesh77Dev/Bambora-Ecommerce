import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // remove whitespace
    },
    email: {
      type: String,
      required: true,
      unique: true, // users cant have multiple email they will have only 1 unique emails..
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    // answer: {
    //   type: String,
    //   required: true,
    // },
    role: {
      type: Number,
      default: 0, // 0 - false, 1 - true
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
