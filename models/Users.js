import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: false,
    },
    password: {
      type: String,
      require: false,
    },
    firstName: {
      type: String,
      require: false,
      default: "",
    },
    lastName: {
      type: String,
      require: false,
      default: "",
    },
    EmailAddress: {
      type: String,
      require: false,
      default: "",
      unique: true,
    },
    phoneNumber: {
      type: String,
      default: null,
    },
    avatar: {
      type: String,
      default: "",
    },
    dateCreated: {
      type: Date,
      default: Date.now(),
    },
    restaurants: [
      { type: Schema.Types.ObjectId, ref: "Restaurants", dateTime: Date.now() }
    ]
  });

export const UserModel = mongoose.model("Users", UserSchema)