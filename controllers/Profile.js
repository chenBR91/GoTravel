import { getAllProfiles, createProfile } from "../services/Profile.js";


export const getProfilesController = async(req, res) => {
    try{
        const allProfiles = await getAllProfiles();

        res.status(200).send({message: allProfiles})
    }
    catch(err) {
        res.status(400).send({message: err})
    }
}


export const createProfileController = async(req, res) => {
    try {
        const {firsName, lastName, EmailAddress, phoneNumber, user} = req.body;
        console.log('req body obj', req.body);
        const newProfile = await createProfile(req.body)

        res.status(200).send(newProfile)
    } catch(err) {
        console.log(err);
        res.status(400).send({message: err})
    }
}