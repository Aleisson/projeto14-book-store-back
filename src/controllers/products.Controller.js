import { STATUS_CODE } from '../enums/statusCode.enum.js'
import { DATABASE_COLLECTIONS } from '../enums/databaseCollections.enum.js'
import database from '../database/database.js'


async function productsGet(req, res) {


    try {

        const produtos = await database.collection(DATABASE_COLLECTIONS.PRODUCTS).find({}).toArray();

        res.send(produtos);

    } catch (error) {
        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }



}

export { productsGet }