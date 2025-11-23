import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // removes extra spaces
    },
    email: {
      type: String,
      required: true,
      unique: true, // no duplicate emails
      lowercase: true, // store in lowercase
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // basic security
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const User = mongoose.model("User", userSchema);

export default User;
