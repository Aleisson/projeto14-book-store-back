import { STATUS_CODE } from "../enums/statusCode.enum.js";
import { DATABASE_COLLECTIONS } from "../enums/databaseCollections.enum.js";
import database from "../database/database.js";

async function cartPost(req, res) {
  const productCart = req.body;
  const user = res.locals.user;

  try {
    await database
      .collection(DATABASE_COLLECTIONS.PRODUCTSCART)
      .insertOne({
        ...productCart,
        userId: user._id
      });

    res.sendStatus(STATUS_CODE.CREATED);
  } catch (error) {
    console.error(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

async function cartGet(req, res) {
  const { _id } = res.locals.user;

  try {
    const produtos = await database
      .collection(DATABASE_COLLECTIONS.PRODUCTSCART)
      .find({ userId:_id  })
      .toArray();

    res.send(produtos);
  } catch (error) {
    console.error(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

export { cartPost, cartGet };
