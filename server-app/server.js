const express = require('express');
const http = require('http');
const app = require('./app')

const port = 3000;
server = http.createServer(app);


server.listen(port, ()=>{
    console.log("server is running at port :", port);
})