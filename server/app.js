#!/usr/bin/env node

const http = require("http");
const getLocalIP = require("./getLocalIP.js");
const replaceServerIP = require("./replaceServerIP.js");

const ip = getLocalIP();
replaceServerIP(ip);

const server = http.createServer((req, res) => {
    const url = req.url.slice(1);
    if (/alipay\w*App.onLaunch/.test(url)) {
        console.log("");
    }
    console.log(url);
    if (/App.onHide/.test(url)) {
        console.log("");
    }

    let result = ''
    req.on('data', data => {
        result += data;
    })

    req.on('end', () => {
        console.log('DATA:' + result);
    })
    
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end();
}).listen(3000);

server.on("listening", () => {
    console.log("Server start to listen");
})

server.on("close", () => {
    console.log("Server is Closed");
})

server.on("error", e => {
    console.log("Server encoutered error, e:", e);
})

console.log(`monitor running on http://${ip}:3000`);