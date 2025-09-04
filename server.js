import express from "express"
import dotenv from "dotenv"
import connectToDb from "./config/connectToDB.js"
connectToDb()
dotenv.config()


import authRouter from "./routers/authRouter.js"
import errorHandler from "./middlewares/errorHandler.js"

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

app.use("/{*any}", errorHandler)

