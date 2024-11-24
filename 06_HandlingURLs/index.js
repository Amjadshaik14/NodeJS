// URL -- Uniform Resource Locator
// https:// -- Protocol
// www.google.com -- Domain(user friendly name of IP add of the server)
// / -- path
// ?{ex:?userId=1&a=2} -- Query parameters

const http = require('http');
const fs = require('fs');
const url = require('url');

myServer = http.createServer((req, res) => {
    if (req.url === '/facion.ico') return res.end("Hello from Server");
    const log = `${Date.now()}: ${req.url} Req Received\n`;
    fs.appendFile('./log.txt', log, (err, data) => {
        switch (req.url) {
            case '/':
                res.end("Home Page");
                break
            case '/about':
                res.end('Amjad Shaik');
                break
            default:
                res.end('Error 404: Not found');
        }
    });

});

myServer.listen(3000, ()=>console.log('Server Started'));