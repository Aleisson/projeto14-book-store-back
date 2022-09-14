import express from 'express';
import { signUp } from '../controllers/auth.Controller.js';
import {signUpMiddleWares } from '../middlewares/auth.MiddleWares.js';
const router = express.Router();

router.post('/signUp', signUpMiddleWares,signUp);

export default router;

