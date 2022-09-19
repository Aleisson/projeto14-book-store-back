import express from 'express';
import { tokenMidlewares} from '../middlewares/token.MiddleWares.js';
import { postStatus } from '../controllers/status.Controller.js';
const router = express.Router();

router.post('/status', postStatus);


export default router;