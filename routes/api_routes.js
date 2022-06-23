const express = require("express")
const router = express.Router()

router.get('/ip/jsontest.com', (req, res) => {
    return res.json({
        "ip": req.ip
    })
})

router.get("/headers/jsontest.com", (req, res) => {
    return res.json(req.headers)
})

router.get("/date/jsontest.com", (req, res) => {
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear()

    const millisecondsSinceEpoch = date.getTime()

    return res.json({
        "date": `${month}-${day}-${year}`,
        "milliseconds_since_epoch": millisecondsSinceEpoch,
        "time": date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    })
})

module.exports = router