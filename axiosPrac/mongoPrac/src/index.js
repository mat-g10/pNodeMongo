import dotenv from "dotenv";

dotenv.config();

const db = client.db(mongo);
const collections = await db.listCollections().toArray;
console.log(collections)