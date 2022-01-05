// Import basic elements required  
import express from "express";
const app = express();

import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv"
dotenv.config({ path: './.env' });

// GENERAL SETUP
app.use(cors());
app.set('port', 5000);


app.listen(app.get('port'), () => {
    console.log('Server connected to Atlas DB and listening port: ' + app.get('port'))
    // Listen to the previous port defined 
});

//setting the bodyparser so it can properly handle the requests 
app.use(bodyParser.json({ limit: "20mb", extended: true })) //we are going to be sendig some images that have to be limited in size 
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }))