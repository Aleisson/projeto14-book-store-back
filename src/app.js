import express from 'express';
import { json } from 'express';
import cors from 'cors';
import dotnev from 'dotenv';
import homeRoute from './routes/home.Route.js'
import authRouter from './routes/auth.Route.js'
import products from './routes/products.Route.js'
import checkOut from './routes/checkOut.Route.js'
import { insertProducts } from './scripts/insertProducts.js'
import {removeSessions} from './scripts/removeSessions.js'

dotnev.config();
import cart from './routes/cart.Route.js'

const app = express();
// functions express
app.use(cors());
app.use(json());
// Routes
app.use(homeRoute);
app.use(authRouter);
app.use(products);
app.use(cart);
app.use(checkOut);
//scripts
insertProducts();
setInterval(removeSessions, 120000)


app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});