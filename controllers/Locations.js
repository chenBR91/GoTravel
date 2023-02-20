
import { createLocation, getAllLocations } from "../services/Locations.js";

export const getAllLocationsController = async(req, res) => {
    try{
        const allLocations = await getAllLocations();
        res.status(200).send(allLocations)
    } catch(err) {
        res.status(500).send({message: 'error in get all location'})
    }
}


export const createLocationController = async(req, res) => {
    try {
        const location = await createLocation(req.body)

        console.log('location', location);
        res.status(200).send(location)

    } catch(err) {
        console.log(err);
        res.status(500).send({message: "location fail"})
    }
}