const path = require ('path')
const express = require('express')

const server = express()

server.use(express.static(path.join(__dirname, '../public')))

module.exports = server


// const router = require('./routes/test')
// const fs = require('fs')
// const hbs = require('express-handlebars')


// Middleware

// server.engine('hbs', hbs({
//   defaultLayout: 'main',
//   extname: 'hbs'
// }))
// server.set('view engine', 'hbs')
// server.use(express.static('public'))
// server.use(express.urlencoded({extended: false}))
// server.use(router)