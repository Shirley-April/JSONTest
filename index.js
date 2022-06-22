const express = require("express")
const app = express()

app.get("/", (req, res) => {
    return res.json("Hello there!")
})

app.listen(3000, () => console.log('Server running on port 3000'))