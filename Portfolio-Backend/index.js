import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app  = express()

app.use(bodyParser.json());

let mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl)

let connection = mongoose.connection
connection.once("open",()=>{
    console.log("MongoDB connection estabilished successfully")
})

app.use("/api/users",userRouter)

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})

