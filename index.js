import app from "./server.js"
import ReviewsDAO from "./dao/rewiewsDAO.js"
import mongodb from "mongodb"


const MongoClient = mongodb.MongoClient

require("dotenv").config();
const mongo_username=process.env.MONGO_USER

console.log(mongo_username);

// https://www.youtube.com/watch?v=nu_pCVPKzTk&t=20537s CHECK THIS OUT LATER