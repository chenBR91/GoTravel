import {
  getAllUsers,
  getOneUser,
  addUser,
  deleteUser,
  registerUser,
  loginUser,
  updateUser,
} from "../services/Users.js";
import bcrypt from "bcrypt";
import { createToken } from "../JWT.js";

export const registerUserController = async (req, res) => {
  try {
    const { username, password, restaurants } = req.body;

    const hashPwd = await bcrypt.hash(password, 10);
    console.log(hashPwd);

    console.log('restaurants', restaurants);
    const user = await registerUser({
      username: username,
      password: hashPwd,
      restaurants: restaurants
    })

    console.log('user', user);
    res.status(200).send({ "user registred": user });

  } catch(err) {
    console.log('err', err);
    res.status(500).send({message: err});
  }
};


export const loginUserController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await loginUser({ username: username });
    if (!user) res.send({ message: "User Doesn't Exist" });

    console.log("user", user);

    const dbPasssword = user.password;
    bcrypt.compare(password, dbPasssword, async(match)=>{
      if (!match) {
        res
          .status(400)
          .send({ message: "Wrong username and password combination" });
      } else {
        const accessToken = createToken(user);

        res.cookie("access-token", accessToken, {
          maxAge: 60 * 60 * 24,
          httpOnly: true,
        });

        res.status(200).send("LOGININ");
      }
    })
     
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};


export const getAllUsersController = async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).send(allUsers);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

export const getOneUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getOneUser(id);
    res.status(500).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

export const addUserController = async (req, res) => {
  try {
    const { username, password } = { ...req.body };
    const newUser = await addUser(username, password); // {...req.body}

    res.status(200).send(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const getAllUsers = await deleteUser(id);
    res.status(200).send(getAllUsers);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};


const userAllowParmerersUpdate = ["username"];

export const updateUserController = async (req, res) => {
  const parametersUpdate = Object.keys(req.body);
  const isValidaionUpdate = parametersUpdate.every((currentUpdate) => {
    return userAllowParmerersUpdate.includes(currentUpdate)
  });

  if (!isValidaionUpdate) {
    res.status(400).send({ message: "Invalid updates" });
  }

  try {
    const {id} = req.params;
    const user = await getOneUser(id);

    if(!user) {
        res.status(400).send({ message: "Invalid get user" });
    }

    parametersUpdate.forEach((update) => (user[update] = req.body[update]))
    await updateUser(user);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
};
