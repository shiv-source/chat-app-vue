const express = require('express');

app = express();

app.get('/', (req,res,next)=>{
    res.status(200).json({
        message : "connection ok"
    })
})

module.exports = app;