import { UserModel } from "../models/Users.js";

export const getAllUsers = () => {
  return UserModel.find({});
};

export const addUser = (username, password) => {
  const newUser = new UserModel({ userName: username, password: password });
  return newUser.save();
};

export const getOneUser = (id) => {
  return UserModel.findOne({ _id: id });
};

export const deleteUser = (id) => {
  return UserModel.findByIdAndDelete({ _id: id });
};
