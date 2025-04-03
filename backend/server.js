// ******* backend/server.js *******

const http = require('http');
const database = require('./database');

http.createServer(async (req,res)=> {
    // THIS IS FOR CORS ERRORS
    res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
    if(req.url == '/api/shoes'){
        try {
            res.writeHead(200, {'Content-Type':'application/json'});
            const dataset = await database.shoes(); // here we get the string json
            res.write(dataset); // whoever requests will get the string json as response
        }
        finally {
            res.end(); // must end response. DONT FOGET
        }
    }
}).listen(4000);
// servidor ouvindo na porta 4000.
// react rodando na porta 3000, react vai
// 3000 to our nodejs in port 4000