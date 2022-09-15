import { STATUS_CODE } from '../enums/statusCode.js'



async function productsGet(req, res) {

    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    return res.send(`<h1>${token}</h2>`);

}

export { productsGet }