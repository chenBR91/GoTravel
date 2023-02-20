import { LocationModel } from "../models/Locations.js";

export const getAllLocations = () => {
    return LocationModel.find({});
}

export const createLocation = (obj) => {
    const newLocation = new LocationModel(obj);
    return newLocation.save();
}

