import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config()

const password = process.env.MONGODB_PASS
const username = process.env.MONGODB_USERNAME
const uriWithPass = process.env.MONGODB_URI.replace("<password>", password)
const mongodbUri = uriWithPass.replace("<username>", username)

const connectToDb = async ()=>{
    console.log("connecting...")
    try {
        const connected = await mongoose.connect(mongodbUri)
        if(connected){
            console.log("MONGODB CONNECTED ✅😎")
        }
    } catch (error) {
        console.log(error)
    }
}

export default connectToDb