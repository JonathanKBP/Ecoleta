const express = require('express')
const nunjucks = require('nunjucks')

const routes = require('./routes/index')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)

nunjucks.configure('src/app/views', {
    express: server,
    noCache: true
})

server.listen(3000)