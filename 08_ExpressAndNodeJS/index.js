const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello from Home Page');
});

app.get('/about', (req, res) => {
    return res.send('Hello from about page');
});

// myServer = http.createServer(app);

// myServer.listen(3000, ()=> console.log("server started"));

app.listen(3000, () => console.log('Server started.'));

// Basic routing
// app.method(PATH, HANDLER)