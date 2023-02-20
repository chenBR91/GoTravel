import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { deleteUserController, getAllUsersController, getOneUserController, registerUserController, loginUserController, updateUserController } from "./controllers/Users.js";
import { createLocationController, getAllLocationsController } from "./controllers/Locations.js";
import { getAllRestaurantsController, createRestaurantController } from "./controllers/Restaurants.js";

dotenv.config();
const { PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const app = express();

// middleware for the server
app.use(cors());
app.use(express.json());
app.use(cookieParser())

mongoose.set("strictQuery", true);

// Routes for users
app.post("/api/users/register", registerUserController)
app.post("/api/users/login", loginUserController)
app.get("/api/users/all-users", getAllUsersController)
app.get("/api/users/detail-user/:id", getOneUserController)
app.delete("/api/users/delete/:id", deleteUserController)
app.put("/api/users/update/:id", updateUserController)

// Routes for Location
app.get("/api/location/all-location", getAllLocationsController)
app.post("/api/location/create", createLocationController)

// Routes for Restaurant
app.get("/api/restaurant/all", getAllRestaurantsController)
app.post("/api/restaurant/create", createRestaurantController)

// route index.html
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});


mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log("err", err);
    app.listen(PORT, () => {
      console.log(`Server lisiting`);
    });
  }
);
