import jsonwebtoken, { verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const { JWT_SECERT } = process.env;

export const createToken = (user) => {
  const accessToken = jsonwebtoken.sign(
    { username: user.username, id: user._id },
    JWT_SECERT
  );
  return accessToken;
};

export const vaildateToken = (req, res, next) => {
    const accessToken = req.cookie["access-token"];

    if(!accessToken) {
        return res.status(400).username({message: "User not Authenticated"})
    }

    try {
        const validToken = verify(accessToken, JWT_SECERT) 
        if(vaildateToken) {
            req.authenticated = true;
            return next;
        }
    } catch(err) {
        res.status(400).send({message: "validate token dosen't exist"})
    }
}