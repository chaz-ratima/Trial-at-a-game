const router = require('./routes')
const express = require('express')
const fs = require('fs')
const hbs = require('express-handlebars')
const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main2',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))
server.use(router)

module.exports = server
