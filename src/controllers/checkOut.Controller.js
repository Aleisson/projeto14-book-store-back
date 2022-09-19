import { STATUS_CODE } from '../enums/statusCode.enum.js';
import { DATABASE_COLLECTIONS } from '../enums/databaseCollections.enum.js'
import database from '../database/database.js'
import { ObjectId } from "mongodb";

async function postCheckOut(req, res) {

    const checkOut = req.body;
    const user = res.locals.user;
    try {
        await database.collection(DATABASE_COLLECTIONS.CHECKOUT).insertOne({
            ...checkOut,
            userId: user._id
        });
        const teste = database.collection(DATABASE_COLLECTIONS.PRODUCTSCART).deleteMany({userId:user._id})
        

        res.sendStatus(STATUS_CODE.OK);

    } catch (error) {

        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);

    }


}

export {postCheckOut}