import express from 'express';

const router = express.Router();

router.get('/products', (res, req) => { return res.setEncoding('<h1> Products </h1>'});

export default router;