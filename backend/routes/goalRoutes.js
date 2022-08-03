const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Get Goals"
    })
})

router.put('/', (req, res) => {
    res.status(200).json({
        message: "Get Goals"
    })
})

router.push('/', (req, res) => {
    res.status(200).json({
        message: "Get Goals"
    })
    
})

module.exports = router 