import {STATUS_CODE} from '../enums/statusCode.js';
import bcrypt from 'bcrypt';
import database from '../database/database.js'

async function signUp(req, res){
    
    const {name, email, password} = res.locals.user;

    const passwordHash = bcrypt.hashSync(password,10);



    try{
        database.collection('users').insertOne({name, email, password: passwordHash});
        return res.sendStatus(STATUS_CODE.CREATED);
    }catch(e){
        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

    
}

async function signIn(req, res){

    res.send('<h1>SignIN</h1>')

}

export {signUp, signIn}