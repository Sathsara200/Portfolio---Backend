import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import projectRouter from "./routes/projectRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app  = express()

app.use(cors());
app.use(bodyParser.json());

let mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl)

let connection = mongoose.connection
connection.once("open",()=>{
    console.log("MongoDB connection estabilished successfully")
})

app.use("/api/users",userRouter)
app.use("/api/projects",projectRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

