/*var DB = require("simple-ultra-db")
var sc = require('supremcript')
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789)!@{}[]()?&*$%?|,.".split("")

function generateRandomCharString(chr = chars, n = 50) {
    var r = ""

    while (n > 0) {
        n--;

        r += chr[Math.floor(Math.random() * chr.length)]
    }

    return r
}

module.exports = (database, AccError, json) => {
    var db = new DB(database)
    var API = new DB(database)

    var { apiKey, pass, ind } = json;

    //IND: {
    //    apiKeys: {
    //         encr pass 
    //    }  
    //}
}*/