import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        require: true,
        default : "",
    },
    // restaurantCategory: {
    //     type: [String],
    //     enum: ["meat", "Pizze", "vegan"],
    //     default: "",
    // },
    // restaurantDate: {
    //     type: Date,
    //     require: 'Please fill from date'
    // }
});

//export const modelsResturant = mongoose.model("Restaurant", RestaurantSchema); 