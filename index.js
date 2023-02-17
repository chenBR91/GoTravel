import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { deleteUserController, getAllUsersController, getOneUserController } from "./controllers/Users.js";


dotenv.config();
const { PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const app = express();

// middleware for the server
app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);

// Routes for users
app.get("/api/users/all-users", getAllUsersController)
app.get("/api/users/detail-user/:id", getOneUserController)
app.delete("/api/users/delete/:id", deleteUserController)


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
