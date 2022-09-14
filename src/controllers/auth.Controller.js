import { STATUS_CODE } from '../enums/statusCode.js';
import database from '../database/database.js'
import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';

async function signUp(req, res) {

    const { name, email, password } = res.locals.user;

    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        database.collection('users').insertOne({ name, email, password: passwordHash });
        return res.sendStatus(STATUS_CODE.CREATED);
    } catch (e) {
        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }


}

async function signIn(req, res) {

    const user = res.locals.user;

    try {
        const token = uuid();

        await database.collection('sessions').insertOne({
            userId: user._id, 
            username: user.name,
            token,
            lastStatus: Date.now()
        })

        return res.status(STATUS_CODE.CREATED).send({username: user.name, token});

    } catch (error) {
        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}

export { signUp, signIn }