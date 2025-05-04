// require('dotenv').config({oath: './env'})
import dotenv from "dotenv"
import express from 'express'
import connectionDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectionDB();









/*
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Express is listening on ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR: ", error);
    }
})()*/