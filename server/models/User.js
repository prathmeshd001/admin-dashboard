import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: {
      type: String,
      max: 50,
    },
    state: {
      type: String,
      max: 50,
    },
    country: {
      type: String,
      max: 50,
    },
    occupation: {
      type: String,
      max: 50,
    },
    phoneNumber: {
      type: String,
      max: 15,
    },
    transactions: {
      type: Array,
    },
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
