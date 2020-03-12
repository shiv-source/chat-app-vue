const express = require('express');

app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/', (req,res,next)=>{
    res.status(200).json({
        message : "connection ok"
    })
})

module.exports = app;