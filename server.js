import express from "express"
import dotenv from "dotenv"
dotenv.config()
// import connectToDb from "./config/connectToDB.js"
connectToDb()


import authRouter from "./routers/authRouter.js"
import connectToDb from "./config/connectToDB.js"

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 4005

app.listen(PORT, ()=>{
    console.log("App is running!!🚀");
    
})

app.get("/api/v1",(req,res)=>{
    res.send("Welcome to SQI Flash card API version 1")
})


app.use("/api/v1/users", authRouter)
//api/v1/auth