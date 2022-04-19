const rp = require('request-promise');

let BuildPayload = function (config={})
{
    let Proxy = config.Proxy;
    let Domain = config.Domain;

    const proxies = ["http://localhost:8190/v1", "http://localhost:8191/v1", "http://localhost:8192/v1", "http://localhost:8193/v1", "http://localhost:8194/v1", "http://localhost:8195/v1", "http://localhost:8196/v1", "http://localhost:8197/v1", "http://localhost:8198/v1", "http://localhost:8199/v1"];
    let Payload = 
    {
        method: "POST",
        url: proxies[Math.floor(Math.random() * proxies.length)],
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            cmd: "request.get",
            url: ""+Domain+"",
            proxy: {"url": `http://${Proxy}`},
            maxTimeout: 120000,
        }),
    }

    return Payload
}

var RunCURL = async function (option={})
{
    let IdBrowser = option.IdBrowser;
    let proxy = option.Proxy;
    let Domain = option.Domain
    let x = {};

    return rp(BuildPayload(config={Proxy:proxy,Domain:Domain})).then(async parsedBody => 
    {
        var ParseJson = JSON.parse(parsedBody);

        if (ParseJson.status == "ok") 
        {
            if (ParseJson.solution.cookies === undefined) 
            {
                return false;
            }
    
            if (ParseJson.solution.cookies !== undefined) 
            {

                const cookiesObject = ParseJson.solution.cookies;
                const UserObj = ParseJson.solution.userAgent;
                let StringCookie = "";

                let JsonSy = JSON.stringify(cookiesObject);
                JsonSy = JSON.parse(JsonSy);

                JsonSy.forEach((value) => 
                {
                    const valueString = value.name + "=" + value.value + ";";
                    StringCookie += valueString;
                });
                x[IdBrowser] = ""+StringCookie+":::"+UserObj 

                return x
            }
        } 
        else 
        {
            return 'bad';
        }
    }).catch(function (error) 
    {
        delete error
        return undefined
    });
}

module.exports = { RunSessions: RunCURL }