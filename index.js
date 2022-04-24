const express = require('express')
const path = require('path')
const { execSync } = require("child_process")
var app =  express()

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://10.0.0.2:3000'}));

app.get('/', function (req, res){
    const resolvedPath = path.resolve('index.html');
    res.sendFile(resolvedPath);
})

app.get('/hls', function (req, res){
    const resolvedPath = path.resolve('node_modules/hls.js/dist/hls.js');
    res.sendFile(resolvedPath);
})

app.get('/segments-list', function (req,res){
    console.log('get m3u8 file');

    execSync("ndncat get /ndn/video/output.m3u8 --ver none > temp/output.m3u8", (error, stdout, stderr) =>{
        if(error){
            console.log(`error: ${error.message}`);
            return;
        }
        if(stderr){
            console.log(`stderr: ${stderr}`);
            return;
        }
    });

    console.log('send m3u8 file');

    const resolvedPath = path.resolve('temp/output.m3u8');
    res.sendFile(resolvedPath);
});

app.get('/segments/:segment', function (req,res){
    const { segment } = req.params;
    console.log(`get ${segment.toString()}`);

    execSync(`ndncat get /ndn/video/${segment.toString()} --ver none > temp/${segment.toString()}`, (error, stdout, stderr) =>{
        if(error){
            console.log(`error: ${error.message}`);
            return;
        }
        if(stderr){
            console.log(`stderr: ${stderr}`);
            return;
        }
    });

    console.log(`send ${segment.toString()}`);

    const resolvedPath = path.resolve(`temp/${segment.toString()}`);
    res.sendFile(resolvedPath);
});

console.log("Server listening");

app.listen(3000);