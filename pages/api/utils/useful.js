export default function(req, res) {
  res
    .status(200)
    .json({ date: {
        now: Date.now()
      } 
    })
}