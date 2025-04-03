//const { MongoClient } = require('mongodb');
import { MongoClient } from "mongodb";
//import module from "node";
const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);

client.connect(); 
//await client.connect(); 

export async function shoes() { //
    try {
        const dataset = await client.db('Ecommerce').collection('shoes').find().toArray();
        return JSON.stringify(dataset); //vai converter os dados de shoes para um array(vetor);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
//module.exports = {shoes};
//export default {shoes};

//console.log(dataset) //array de objetos.