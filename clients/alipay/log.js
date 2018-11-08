const platform = "alipay";

let i = 0;

export default function log(msg) {
    const newLog = platform + "_" + (i++) + "_" + msg;
    console.log(newLog);
    ajax(newLog);
}

function ajax(msg) {
    const server = "http://127.0.0.1:3000/";
    const url = server + msg;
    my.httpRequest({
        url
    });
}