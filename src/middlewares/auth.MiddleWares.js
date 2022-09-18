import { STATUS_CODE } from '../enums/statusCode.enum.js';
import { DATABASE_COLLECTIONS } from '../enums/databaseCollections.enum.js';
import { signUpSchema, signInSchema } from '../schemas/auth.Schema.js';
import database from '../database/database.js';
import bcrypt, { compareSync } from 'bcrypt';


async function signUpMiddleWares(req, res, next) {

    const { name, email, password } = req.body;

    const isValid = signUpSchema.validate({ name, email, password });

    if (isValid.error) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    try {
        const checkUser = await database.collection(DATABASE_COLLECTIONS.USERS).findOne({ email });
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

async function signInMiddleWares(req, res, next) {

    const { email, password } = req.body;

    const isValid = signInSchema.validate({ email, password });

    if (isValid.error) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    try {
        const user = await database.collection(DATABASE_COLLECTIONS.USERS).findOne({ email });
        //console.log(user);
        if(!user){
            return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
        }
        const passwordValid = bcrypt.compareSync(password, user.password);
     
        if (!passwordValid) {
            return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
        }

        res.locals.user = user;
        next()

    } catch (error) {

        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);

    }

}

export { signUpMiddleWares, signInMiddleWares }