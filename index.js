const express = require ('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const { Router } = require("./Routes/routes");

const app = express()
mongoose.set('strictQuery', false)
const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.use("/", Router);
  

  app.listen(4000, () => {
    connect();
    console.log("Connected to backend.");
  });