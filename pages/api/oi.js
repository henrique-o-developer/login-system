export default function(req, res) {
    console.log(req.query.my)
    res.status(200).send("oi")
}  