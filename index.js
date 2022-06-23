const express = require("express")
const app = express()
const apiroutes = require("./routes/api_routes")

app.use(apiroutes)
app.set('json spaces', 10);

app.get("/", (req, res) => {
    return res.json("Hello there!")
})

app.listen(3000, () => console.log('Server running on port 3000'))