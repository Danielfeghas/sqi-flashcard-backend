// import mongoose from "mongoose";
import {model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        
    },
    email: {
        type: String,
        required:[true, "Email is required"],
        unique: [true, "email already exists"]
    },
    password: {
        type : String,
        required: [true,"Password is required"],
        minlength: [6, "password must not be less than 6 characters"]
    },
    department : {
        type: String,
        default: "Software engineering",
        enum: ["Software engineering", "Data science", "Graphic design", "UI/UX", "Cyber Security", "Data analysis"]
    },
    level: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default:false
    }
})

const userModel = model("users", userSchema)

export default userModel