import { ProfileModel } from "../models/Users.js";

export const getAllProfiles = () => {
    return ProfileModel.find({});
}


export const createProfile = (obj) => {
    const newProfile = new ProfileModel(obj)
    return newProfile.save();
}
