import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"

export const isLoggedIn = async (req,res, next)=>{
    let token;
   try {
     if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }
    if (!token) {
       return res.status(404).json({
        status: "error",
        message: "No token was provided"
       }) 
    }

    const {id} = jwt.verify(token, process.env.JWT_SECRET)

    const user = await userModel.findById(id)
    if (!user) {
        return res.status(404).json({
            status: "error",
            message: "Invalid token"
        })
    }
    req.user = user
    next()
   } catch (error) {
    console.log(error);
    next(error)
    
   }
}
