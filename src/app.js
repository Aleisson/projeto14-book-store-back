import express from 'express';
import {json} from 'express';
import dotnev from 'dotenv';
import cors from 'cors';
import { MongoClient } from "mongodb";


dotnev.config();


const app = express();

app.use(cors());
app.use(json());


app.get("/",(req,res)=>{res.send("<h1>Api Book Store</h1>")})

console.log(process.env.MONGO_URI)
const mongoClient = new MongoClient(process.env.MONGO_URI);
let database;
mongoClient.connect(async () => {
    database = await mongoClient.db("bookstore");
})

app.listen(process.env.PORT, () =>{
    console.log("Server running on port " + process.env.PORT);
});