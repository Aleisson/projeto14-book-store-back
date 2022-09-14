import express from 'express';
import {json} from 'express';
import cors from 'cors';
import dotnev from 'dotenv';
import homeRoute from './routes/home.Route.js'
import authRouter from './routes/auth.Router.js'

dotnev.config();


const app = express();

app.use(cors());
app.use(json());

app.use(homeRoute);
app.use(authRouter);

app.listen(process.env.PORT, () =>{
    console.log("Server running on port " + process.env.PORT);
});