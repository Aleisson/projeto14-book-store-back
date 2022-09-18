import express from 'express';
import { cartGet, cartPost } from '../controllers/cart.Controller.js';
import { tokenMidlewares} from '../middlewares/token.MiddleWares.js';
const router = express.Router();

router.post('/cart', tokenMidlewares, cartPost);
router.get('/cart', tokenMidlewares, cartGet);

export default router;