// import express from "express"
import { Router } from "express"
const authRouter = Router()

import handleSignUpHandler, { handleLoginHandler } from "../controllers/authController.js"


authRouter.post("/signup",handleSignUpHandler)
authRouter.post("/login",handleLoginHandler)



export default authRouter