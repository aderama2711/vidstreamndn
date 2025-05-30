const express = require('express')
const path = require('path')
var cors = require('cors')
var app =  express()

app.use(cors())

app.get('/segments-list', function (req,res){

    console.log('send m3u8 file');

    const resolvedPath = path.resolve('temp/master.m3u8');
    res.sendFile(resolvedPath);
});

app.get('/stream_0/:segment', function (req,res){
    const { segment } = req.params;

    console.log(`send ${segment.toString()}`);

    const resolvedPath = path.resolve(`temp/stream_0/${segment.toString()}`);
    res.sendFile(resolvedPath);
});

app.get('/stream_1/:segment', function (req,res){
    const { segment } = req.params;

    console.log(`send ${segment.toString()}`);

    const resolvedPath = path.resolve(`temp/stream_1/${segment.toString()}`);
    res.sendFile(resolvedPath);
});

app.get('/stream_2/:segment', function (req,res){
    const { segment } = req.params;

    console.log(`send ${segment.toString()}`);

    const resolvedPath = path.resolve(`temp/stream_2/${segment.toString()}`);
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

app.get('/:m3u8', function (req,res){
    const { m3u8 } = req.params;

    console.log(`send ${m3u8.toString()}`);

    const resolvedPath = path.resolve(`temp/${m3u8.toString()}`);
    res.sendFile(resolvedPath);
});

console.log("Server listening");

app.listen(3000);