import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config({ path: '/root/node-app/.env' })

export async function createClient () {
    try {
      const uri = process.env.MONGODB_URI;
      const client = new MongoClient(uri);
      return client;
    } catch (err) {
      console.error(`Error connecting to the server: ${err}`);
    }
  }