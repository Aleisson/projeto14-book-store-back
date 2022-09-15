import express from 'express';
import { productsGet } from '../controllers/products.Controller.js';
import { tokenMidlewares } from '../middlewares/token.MiddleWares.js';


const router = express.Router();

router.get('/products', tokenMidlewares,productsGet);

export default router;