import { UserModel } from "../models/Users.js";

export const getAllUsers = () => {
  return UserModel.find({})
  .populate({ path: "restaurants", populate: [{path: "location"}]}) // .populate("restaurants")
  .exec();
};

export const addUser = (username, password) => {
  const newUser = new UserModel({ username: username, password: password });
  return newUser.save();
};

export const getOneUser = (id) => {
  return UserModel.findOne({ _id: id });
};

export const deleteUser = (id) => {
  return UserModel.findByIdAndDelete({ _id: id });
};

export const registerUser = (obj) => {
    const newUser = new UserModel(obj);
    return newUser.save();
}

export const loginUser = (obj) => {
    return UserModel.findOne(obj)
}

export const updateUser = (user) => {
    return user.save();
}