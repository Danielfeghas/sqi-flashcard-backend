import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import connectToDb from "./config/connectToDB.js"
connectToDb()
dotenv.config()


import authRouter from "./routers/authRouter.js"
import errorHandler from "./middlewares/errorHandler.js"
import deckRouter from "./routers/deckRouter.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan("start"))

const PORT = process.env.PORT || 4005

app.listen(PORT, ()=>{
    console.log("App is running!!🚀");
    
})

app.get("/api/v1",(req,res)=>{
    res.send("Welcome to SQI Flash card API version 1")
})


app.use("/api/v1/users", authRouter)
app.use("/api/v1/decks", deckRouter)

app.use("/{*any}", errorHandler)

