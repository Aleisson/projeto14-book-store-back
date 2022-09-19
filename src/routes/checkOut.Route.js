import express from 'express';
import { postCheckOut } from '../controllers/checkOut.Controller.js';
import { tokenMidlewares} from '../middlewares/token.MiddleWares.js';
const router = express.Router();

router.post('/checkOut', tokenMidlewares, postCheckOut);

export default router;