var DB = require("simple-ultra-db")
var sc = require("supremcript")
var database = require("../../../gedf");
var err = require("../../../err");

function trateExi(exi = [], arr = [], apiKey = []) {
    if (apiKey[0] == "$##***ALL***##$") {
        exi = arr
    } else {
        exi.forEach((v, i) => {
            if (apiKey.indexOf(v) == -1) exi.split(i, 1);
        })
    }
 
	return exi
}

function login(AccError, ind, pass, database) {
    var db = new DB(database)
    var msg = new AccError("ind/senha errado(a)(s)")

    if (!JSON.stringify(db.data).includes(ind)) return msg
    if (!ind || !pass) return new AccError("ind/pass not provided")

    var r = msg;
    
    Object.keys(db.data).forEach(v => {
        var d = db.data[v]

        if (d.tell != ind && d.email != ind) return; 
        if (sc.SUPREM.decrypt(d.pass, pass, database.length, 1) != pass) return

        function dec(obj) {
            Object.keys(obj).map(v => {
                /*if (
                    v == "email" || 
                    v == "tell" || 
                    v == "confirmed"
                ) return;
                    
                if (typeof(obj[v]) === "object" && v != "apiKeys") {
                    dec(obj[v])
                } else if (v != "apiKeys") {
                    obj[v] = sc.SUPREM.decrypt(obj[v], pass, database.length, 1)
                }*/
            })
        }
        
        dec(d)

        r = d
    })

    return r
}

export default async function(req, res) {
    try {
        var me = JSON.parse(decodeURIComponent(req.query.me))
        var get = JSON.parse(decodeURIComponent(req.query.get))

        var apiKey = me.apiKey
        var exi = me.exi
        var pass = me.pass
        var ind = me.ind
        var client = get.ind

        console.log(process.env)

        err.test(apiKey, String, "me.apiKey")
        err.test(exi, Array, "me.exi");
        err.test(pass, String, "me.pass")
        err.test(ind, String, "me.ind")

        err.test(client, String, "get.ind")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}