import { STATUS_CODE } from '../enums/statusCode.enum.js';
import { DATABASE_COLLECTIONS } from '../enums/databaseCollections.enum.js'
import database from '../database/database.js'
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

async function signUp(req, res) {

    const { name, email, password } = res.locals.user;

    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        database.collection(DATABASE_COLLECTIONS.USERS).insertOne({ name, email, password: passwordHash });
        return res.sendStatus(STATUS_CODE.CREATED);
    } catch (e) {
        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }


}

async function signIn(req, res) {

    const user = res.locals.user;
    //console.log(user);
    try {
        const token = uuid();

        await database.collection(DATABASE_COLLECTIONS.SESSIONS).insertOne({
            userId: user._id,
            name: user.name,
            token,
            lastStatus: Date.now()
        })

        return res.status(STATUS_CODE.CREATED).send({ name: user.name, token });

    } catch (error) {
        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}

export { signUp, signIn }