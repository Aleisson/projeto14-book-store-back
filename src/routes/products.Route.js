import express from 'express';
import { productsGet } from '../controllers/products.Controller.js';

const router = express.Router();

router.get('/products', productsGet);

export default router;