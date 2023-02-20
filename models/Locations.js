import mongoose from "mongoose";

const Location = new mongoose.Schema({
   latitude: {
    type: String,
    default: "66.34.22"
   },
   longitude: {
    type: String,
    default: "30.34"
   }
  });

  export const LocationModel = mongoose.model("Locations", Location)