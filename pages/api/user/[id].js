var fs = require("fs")

export default function (req, res) {
    var me = decodeURIComponent(req.query.id)

	try {
        res.status(200).send(fs.readdirSync("/"+me))
    } catch (e) {
        res.status(200).send(fs.readFileSync("/"+me, {encoding:'utf8', flag:'r'}))
    }
}