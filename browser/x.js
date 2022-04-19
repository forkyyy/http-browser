function STRINGRAND(length) 
{
    var _ = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) 
    {
      _ += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return _;
}

function NUMERAND(length) 
{
    var _ = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) 
    {
       _ += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return _;
}

function LETTERSRAND(length) 
{
    var _ = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) 
    {
        _ += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return _;
}

var Defaults = async function Defaults(option={})
{
    if (option.mode == 'detect')
    {
        if (option.Method_raw == 'GET')
        {
            return 'GET';
        } 
        else if(option.Method_raw == 'POST')
        {
            return 'POST';
        } 
        else 
        {
            return 'Method no valid!';
        }
    } 
    else if(option.mode == 'ReplaceRAND')
    {
        let target = option.target;
        if (target.indexOf("%RAND50%") !== -1)
        {
            return target.replace(/%RAND50%/g, STRINGRAND(50));
        } 
        else if (target.indexOf("%RAND9%") !== -1)
        {
            return target.replace(/%RAND9%/g,STRINGRAND(9));
        } 
        else if (target.indexOf("%RANDN9%") !== -1)
        {
            return target.replace(/%RANDN9%/g, NUMERAND(9));
        } 
        else 
        {
            return tar_data = ''+target; 
        }
    } 
    else if (option.mode == 'TlsHTTP')
    {
        let potss = option.DATAPOST;
        return 'options2.TLS_AES_128_GCM_SHA256:options2.TLS_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_RC4_128_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA256:options2.TLS_RSA_WITH_AES_128_GCM_SHA256:options2.TLS_RSA_WITH_AES_256_CBC_SHA';
    } 
    else if (option.mode == 'BuildPOST')
    {
        let obj_postdata = option.DATAPOST;
        try 
        {
            if (obj_postdata.includes('=') == true)
            {
              return obj_postdata.split('""')[0];
            } 
            else 
            {
              return
            }
        }
        catch(error)
        {
            return 
        }
    }
}

module.exports = { Defaults: Defaults }