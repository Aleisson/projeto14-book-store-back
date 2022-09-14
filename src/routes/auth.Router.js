import express from 'express';
import { signUp, signIn } from '../controllers/auth.Controller.js';
import {signUpMiddleWares } from '../middlewares/auth.MiddleWares.js';
const router = express.Router();

router.post('/signUp', signUpMiddleWares,signUp);
router.post('/signIN',signIn);

export default router;

