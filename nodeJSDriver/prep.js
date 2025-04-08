import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

const uri = 'mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2'
dotenv.config() // { path: '/root/node-app/.env' }

export async function createClient () {
    try {
      const uri = process.env.MONGODB_URI;
      const client = new MongoClient(uri);
      return client;
    } catch (err) {
      console.error(`Error connecting to the server: ${err}`);
    }
  }