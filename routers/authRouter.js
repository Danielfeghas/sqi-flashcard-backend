import express from "express"
const authRouter = express.Router()
// import userModel from "../models/userModel"
import handleSignUpHandler, { handleLoginHandler } from "../controllers/authController.js"


authRouter.post("/",handleSignUpHandler)
authRouter.post("/login",handleLoginHandler)



export default authRouter