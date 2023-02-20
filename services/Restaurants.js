import { RestaurantModel } from "../models/Restaurants.js";

export const getAllRestaurants = () => {
  return RestaurantModel.find({})
  .populate("location")
  .exec();
};

export const createRestaurant = (obj) => {
  const restaurant = new RestaurantModel({ ...obj });
  return restaurant.save();
};
