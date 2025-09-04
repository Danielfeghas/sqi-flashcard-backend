import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


// Signup

const handleSignUpHandler = async (req, res,next) => {
        const {password, confirmPassword} = req.body

        //check if password match

        if (password !== confirmPassword) {
            return res.status(400).json({
                status: "error",
                message: "Passwords do not match"
            })
        }

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await userModel.create({...req.body, password: hashedPassword})

        const result = {
            name: user.name,
            email : user.email,
            department : user.department,
            level: user.level
        }

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "Unable to create user"
            })
        }

        if (user) {
            return res.status(200).json({
                status: "success",
                message: "user created successfully",
                user : result
            })
        }
    } catch (error) {
        console.log(error);
        next (error)
        
    }
}

export const handleLoginHandler = async (req, res,next) => {
    const {password, email} = req.body
    try {
        const user = await userModel.findOne({email}).select("+password")
        if (!user) {
           return res.status(404).json({
            status: "error",
            message: "Email or password is incorrect"
           }) 
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(404).json({
                status: "error",
                message: "Email or password is incorrect"
            })
        }

        const token = jwt.sign({userId: user.id, email: user.email},process.env.JWT_SECRET,{expiresIn: process.env.JWT_SECRET_EXP})

        return res.status(200).json({
            status: "success",
            message: "Login successful",
            token,
            email

        })
    } catch (error) {
        console.log(error);
        next(error)
        
    }
}

export default handleSignUpHandler

