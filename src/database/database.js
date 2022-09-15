import dotnev from 'dotenv';
import { MongoClient } from 'mongodb';

dotnev.config();

let database;

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
    
    await mongoClient.connect();

} catch (error) {
    console.error(error);
}

database = mongoClient.db('bookstore');



export default database;
