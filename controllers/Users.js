import { getAllUsers, getOneUser, addUser, deleteUser } from "../services/Users.js";


export const getAllUsersController = async(req, res) => {
    try{
        const allUsers = await getAllUsers();
        res.status(200).send(allUsers);
    }   
    catch(err){
        console.log(err);
        res.status(500).send({message: err})
    }
}

export const getOneUserController = async(req, res) => {
    try {
        const {id} = req.params
        const user = await getOneUser(id);

        res.status(500).send(user)
    }
    catch(err) {
        console.log(err);
        res.status(500).send({message: err})
    }
}

export const addUserController = async(req, res) => {
    try{
        const {username, password} = {...req.body}
        const newUser = await addUser(username, password) // {...req.body}

        res.status(200).send(newUser)
    }
    catch(err) {
        console.log(err);
        res.status(500).send({message: err})
    }
}

export const deleteUserController = async(req, res) => {
    try{
        const {id} = req.params;
        const getAllUsers = await deleteUser(id)
        res.status(200).send(getAllUsers);
    }
    catch(err){
        console.log(err);
        res.status(500).send({message: err})
    }
} 
