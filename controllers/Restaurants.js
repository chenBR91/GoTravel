import {
  getAllRestaurants,
  createRestaurant,
} from "../services/Restaurants.js";

export const getAllRestaurantsController = async (req, res) => {
  try {
    const resturants = await getAllRestaurants();

    res.status(200).send(resturants);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Invalid get resturant" });
  }
};

export const createRestaurantController = async (req, res) => {
    try {
    const newRestaurant = await createRestaurant(req.body);
    console.log('new', newRestaurant);

    res.status(200).send(newRestaurant);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "invalid in create a new restaurant" });
  }
};
