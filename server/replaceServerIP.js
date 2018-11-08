const fs = require("fs");
const path = require("path");

function replace(ip) {
    replaceFileWithIP("../clients/alipay/log.js", ip);
    replaceFileWithIP("../clients/wxapp/log.js", ip);
}

function replaceFileWithIP(target, ip) {
    target = path.join(__dirname, target);
    
    let content = fs.readFileSync(target).toString();
    const SERVER_IP = /const server = .*;/;
    content = content.replace(SERVER_IP, 'const server = "http://' + ip + ':3000/";')

    fs.writeFileSync(target, content);
}

module.exports = replace;