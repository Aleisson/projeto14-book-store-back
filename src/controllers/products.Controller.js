import { STATUS_CODE } from '../enums/statusCode.enum.js'
import { DATABASE_COLLECTIONS } from '../enums/databaseCollections.enum.js'
import database from '../database/database.js'


async function productsGet(req, res) {

    const token = req.headers.authorization?.replace('Bearer ', '')
    
        //console.log(token)
    
    if (!token) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    try {
        const session = await database.collection(DATABASE_COLLECTIONS.SESSIONS).findOne({ token });

        if(!session){
            return res.send(STATUS_CODE.UNAUTHORIZED);
        }

        const user = await database.collection(DATABASE_COLLECTIONS.USERS).findOne({_id: session.userId});

        return res.send({user});
    } catch (error) {
        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

   

}

export { productsGet }