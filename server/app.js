const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url.slice(1);
    if (/alipay\w*App.onLaunch/.test(url)) {
        console.log("");
    }
    console.log(url);
    if (/App.onHide/.test(url)) {
        console.log("");
    }
    
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

console.log("monitor running on localhost:3000");