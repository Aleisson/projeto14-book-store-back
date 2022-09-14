import { STATUS_CODE } from '../enums/statusCode.js';
import { signUpSchema } from '../schemas/auth.Schema.js';
import database from '../database/database.js';

async function signUpMiddleWares(req, res, next) {

    const { name, email, password } = req.body;

    const isValid = signUpSchema.validate({ name, email, password });

    if (isValid.error) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    try {
        const checkUser = await database.collection('users').findOne({ email });
        if (checkUser) {
            return res.sendStatus(STATUS_CODE.CONFLICT);
        }
        
        res.locals.user = { name, email, password };
        next();

    } catch (error) {
        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);

    }


}

export {signUpMiddleWares}