const express = require('express')
const router = express.Router()
// const fs = require('fs')

router.get('/', (req, res) => {
    res.render('./layouts/home')
})

router.get('/page1', (req, res) => {
    res.render('./layouts/page2')
})


module.exports = router