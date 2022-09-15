import database from "../database/database.js"
import { DATABASE_COLLECTIONS } from "../enums/databaseCollections.enum.js";
import { books } from './books.js'


async function insertProducts() {

    try {
        const validProducts = await database.collection(DATABASE_COLLECTIONS.PRODUCTS).find({}).toArray();
        //console.log(validProducts)
        if(validProducts.length){
            return;
        }

        await database.collection(DATABASE_COLLECTIONS.PRODUCTS).insertMany(books);

    } catch (error) {
        console.error(error);
    }



}
export {insertProducts}