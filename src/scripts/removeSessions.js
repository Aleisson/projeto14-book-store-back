import database from "../database/database.js"
import { DATABASE_COLLECTIONS } from "../enums/databaseCollections.enum.js";
import { STATUS_CODE } from "../enums/statusCode.enum.js";
import { ObjectId } from "mongodb";


async function testStatus(session){
    try {
        if((Date.now() - session.lastStatus) > 60000){
            await database.collection(DATABASE_COLLECTIONS.SESSIONS).deleteOne({_id: ObjectId(session._id)})
        }

    } catch (error) {
        console.error(error);
        res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}


async function removeSessions(){


    console.log('Removendo usuários');
    try {
        const sessions= await database.collection(DATABASE_COLLECTIONS.SESSIONS).find().toArray();
        //console.log(sessions);
        sessions.forEach(session => testStatus(session));

    } catch (error) {
        console.error(error);
        res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }



}

export {removeSessions}