const os = require("os");

function getLocalIP() {
    const maps = os.networkInterfaces();
    for (let key in maps) {
        const arr = maps[key];
        const result = arr.filter(item => item.family === "IPv4" && item.address !== "127.0.0.1")
            .map(item => item.address);
        if (!result || result.length <= 0) continue;
        return result[0];
    } 
}

module.exports = getLocalIP;