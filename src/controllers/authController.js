import {STATUS_CODE} from '../enums/statusCode.js';
import bcrypt from 'bcrypt';
import database from '../database/database.js'
import {signUpSchema} from '../schemas/authSchema.js'

async function signUp(req, res){


    const isValid = signUpSchema.validate(req.body);

    if(isValid.error){
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    const {name, email, password} = req.body;

    const passwordHash = bcrypt.hashSync(password,10);



    try{

        const checkUser = await database.collection('users').findOne({email});
        if(checkUser){
            return res.sendStatus(STATUS_CODE.CONFLICT);
        }

        database.collection('users').insertOne({name, email, password: passwordHash});
        return res.sendStatus(STATUS_CODE.CREATED);
    }catch(e){
        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

    
}

export {signUp}