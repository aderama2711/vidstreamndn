const express = require('express')
const path = require('path')
var app =  express()

app.get('/', function (req, res){
    const resolvedPath = path.resolve('index.html');
    res.sendFile(resolvedPath);
})

app.get('/hls', function (req, res){
    const resolvedPath = path.resolve('node_modules/hls.js/dist/hls.js');
    res.sendFile(resolvedPath);
})

console.log("Server listening");

app.listen(3000);