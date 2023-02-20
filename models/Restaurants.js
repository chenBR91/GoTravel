import mongoose, { Schema } from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        require: true,
        default : "",
    },
    categoriesMeal: {
        type: [String],
        enum: ["resturant" ,"Pizza", "Amburger", "Italian"],
        default: "resturant"
    },
    day: {
        type: String,
        enum: ["Sunday", "monday"],
        default: "Sunday",
    },
    location: {type: Schema.Types.ObjectId, ref: 'Locations'},
});

export const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema); 


