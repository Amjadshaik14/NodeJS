const http = require("http");
const fs = require('fs');
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req received\n`;
    fs.appendFile('./log.txt', log, (err, data) => {
        switch(req.url){
            case '/':
                res.end("Home Page");
                break
            case '/about':
                res.end("Amjad Shaik");
                break
            default:
                res.end("404 not found");
                break
        }
    })
    
});

myServer.listen(3000, () => console.log("Server started"));

