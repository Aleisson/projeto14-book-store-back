import { STATUS_CODE } from '../enums/statusCode.enum.js'
import { DATABASE_COLLECTIONS } from '../enums/databaseCollections.enum.js'
import database from '../database/database.js'

async function postStatus(req, res) {


    const { token } = req.body;
    console.log(token)
    try {
        const session = await database.collection(DATABASE_COLLECTIONS.SESSIONS).findOne({ token });
        console.log(session);

        if (!session) {
            res.sendStatus(STATUS_CODE.NOT_FOUND);
            return;
        }
        
        await database.collection(DATABASE_COLLECTIONS.SESSIONS).updateOne({ token }, { $set: { lastStatus: Date.now() } })

    } catch (error) {
        console.error(error);
        res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

    res.sendStatus(STATUS_CODE.OK);

}

export { postStatus }