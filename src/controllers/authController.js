import {STATUS_CODE} from '../enums/statusCode.js';
import bcrypt from 'bcrypt';
import database from '../database/database.js'

async function signUp(req, res){

    const {name, email, password} = req.body;

    const passwordHash = bcrypt.hashSync(password,10);

    try{

        const checkUser = await database.collection('users').findOne({email});
        if(checkUser){
            return res.send(STATUS_CODE.CONFLICT);
        }

        database.collection('users').insertOne({name, email, password: passwordHash});
        return res.send(STATUS_CODE.CREATED);
    }catch(e){
        console.error(error);
        return res.send(STATUS_CODE.SERVER_ERROR);
    }

    
}

export {signUp}