const express = require("express")
const router = express.Router()
const CryptoJS = require("crypto-js")

// get ip address of client 
router.get('/ip/jsontest.com', (req, res) => {
    return res.json({
        "ip": req.ip
    })
})

// request headers received from client
router.get("/headers/jsontest.com", (req, res) => {
    return res.json(req.headers)
})

// Date & Time
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

// customized JSON object defined through a REST-style URL

// router.get("/echo/jsontest.com/*", (req, res) => {
//     return res.json(req.params)
// })

router.get("/md5/jsontest.com", (req, res) => {

    console.log(req.query.text);
    //return res.json(req.query.text)
    const hash = CryptoJS.MD5(req.query.text).toString()
    return res.json({
        "original": req.query.text,
        "md5": hash
    })
})

module.exports = router