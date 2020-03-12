const express = require('express');
const http = require('http');
const app = require('./app');

const port = 3000;
server = http.createServer(app);


server.listen(port, ()=>{
    console.log("server is running at port :", port);
});

const io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

  io.on('connection', function(socket){
        socket.on('SEND MESSAGE', function(data){
            io.emit('MESSAGE', data);
        });
  });