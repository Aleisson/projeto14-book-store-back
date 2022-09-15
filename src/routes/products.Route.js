import express, { Router } from 'express';

const router = express.Router();

router.get('/products', (req, res) => {

    return res.send('<h1> Produtos </h1>');

})

export default router;