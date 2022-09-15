import { STATUS_CODE } from '../enums/statusCode.enum.js'
import { DATABASE_COLLECTIONS } from '../enums/databaseCollections.enum.js'
import database from '../database/database.js'


async function productsGet(req, res) {


    try {

        return res.send({name: 'test', image:'teste', valor: '10,00'});
    } catch (error) {
        console.error(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

   

}

export { productsGet }