import express from "express";
import connection from "./Database/db.js";
import dotenv from "dotenv";
import router from "./Route/route.js"
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//* dotenv configration for use .env file in nodejs server this is come from npm package
dotenv.config();


app.use("/", router);
connection();


app.listen(8000 , ()=>{
console.log("server start on 8000")
})