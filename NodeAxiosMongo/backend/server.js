// ******* backend/server.js *******

//const http = require('http');
import http from "http";
//const shoes = require('./database');
import shoes from "./database.js";

http.createServer(async (req,res)=> {
    // Para erros de CORS
    res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 dias
    if(req.url == '/api/shoes'){
        try {
            res.writeHead(200, {'Content-Type':'application/json'});
            const dataset = await database.shoes(); // aqui pegamos a string json
            res.write(dataset); // qualquer um que requisitar vai pegar json como resposta
        }
        finally {
            res.end(); // must end response. DONT FOGET
        }
    }
}).listen(4000);
// servidor ouvindo na porta 4000.
// react rodando na porta 3000, react vai requisitar pelos dados da porta
// 3000 para o nosso node js na porta 4000