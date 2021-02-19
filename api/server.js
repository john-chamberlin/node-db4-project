const express = require('express')
const server = express()

const reciperRouter = require('./recipes/reciper-router')

server.use(express.json())
server.use('/api/recipes', reciperRouter)

module.exports = server
