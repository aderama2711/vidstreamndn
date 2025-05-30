const express = require('express')
const path = require('path')
var app =  express()

app.use(cors())

app.get('/segments-list', function (req,res){

    console.log('send m3u8 file');

    const resolvedPath = path.resolve('temp/output.m3u8');
    res.sendFile(resolvedPath);
});

app.get('/segments/:segment', function (req,res){
    const { segment } = req.params;

    console.log(`send ${segment.toString()}`);

    const resolvedPath = path.resolve(`temp/${segment.toString()}`);
    res.sendFile(resolvedPath);
});

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