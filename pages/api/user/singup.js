var DB = require("simple-ultra-db")
var sc = require('supremcript')
var err = require("../../../err");
var database = require("../../../gedf");
var fs = require("fs")

export default async function (req, res) {
	console.log(__dirname)

	/*try {
		req.query
	} catch (error) {
		res.status(400).json({error: "não foi possivel detectar o  json"})
	}

	var db = new DB(database)
	var data = JSON.stringify(db.data)
	var {tell, email, name, lName, birth, pass, username} = req.query.cadaster
	var ind = Date.now();

	if (!tell && !email) return new AccError("nenhum ind informado")

	if (!tell) tell = "non"
	if (!email) email = "non"

	if (!name || !lName || !birth || !pass || !username) return new AccError(`esta faltando informação no json (name: ${!(!name)}, lName: ${!(!lName)}, birth: ${!(!birth)}, pass: ${!(!pass)}, username: ${!(!username)})`)

	if (!email.includes("@")) return new AccError("email mal constituido")

	if (data.includes(tell) && tell != "non") {
   		return new AccError("esse telefone ja esta sendo usado")
	} else {
		if (data.includes(email) && email != "non") {
			return new AccError("esse email ja esta sendo usado")
		} else {
			if (data.includes(username)) {
				return new AccError("esse usuario ja esta sendo usado")
			} else {
				try {
					if (new Date(birth).getFullYear() > new Date().getFullYear() + 122 || new Date(birth).getFullYear() < new Date().getFullYear() - 122) {
						return new AccError("a data de aniverçario não é valida")
					} else {
						db.set(ind, {
							email,
							tell,
							name: {
								firt: sc.SUPREM.encrypt(name, pass, database.length, 1),
								last: sc.SUPREM.encrypt(lName, pass, database.length, 1)
							},
							birth: sc.SUPREM.encrypt(birth, pass, database.length, 1),
							pass: sc.SUPREM.encrypt(pass, pass, database.length, 1),
							username: sc.SUPREM.encrypt(username, pass, database.length, 1),
							confirmed: {
								tell: false,
								mail: false
							},
							client: {
								apiKeys: {}
							}
						})
		
						var r = ""
		
						r = {
							ind: email || tell,
							pass: pass
						}
		
						if (email != "non") {
							var emailASerEnviado = {
								from: process.env['email'],
								to: email,
								subject: 'confirmação de email',
								html: 'clique <a>aqui</a> para verificar o email',
							};
							
							remetente.sendMail(emailASerEnviado, function(error){
								if (error) {
									console.log(error)
								}
							});
		
							return r
						} else return r;
					}
				} catch (error) {
					return new AccError("error: " + error)
				}
				
			}
		}
	}*/

	try {
		var me = JSON.parse(decodeURIComponent(req.query.me))

		var pass = me.pass || me.password;
		var email = me.email;
		var tell = me.tell;
		var name = me.name;
		var lName = me.lName || me.lastName;
		var birth = me.birth;
		var user = me.user || me.username;
		var ip = me.ip;		

		err.test(pass, String, "me.pass || me.password")
		err.test(email, String, "me.email")
		err.test(tell, String, "me.tell")
		err.test(name, String, "me.name")
		err.test(lName, String, "me.lName || me.lastName")
		err.test(birth, String, "me.birth")
		err.test(user, String, "me.user || me.username")
		err.test(ip, String, "me.ip")

		
    } catch (error) {
		res.status(500).json({ error: error.message })
	}
}


/*{
	pass: "senha", 
	email: "email@gmail.com", 
	tell: "00 (00) 00000-0000", 
	name: "henrique", 
	lName: "franchesco de almeida do rosario", 
	birth: "17/06/2009",
	username: "username",
	services: [
		["google", "google.com", "google.com/login-system-connection/"]
	],
	apiKeys: [
		["soufoda1234", ["email", "tell"]]
	]
}*/
