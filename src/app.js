const express = require('express')
const mongoose = require('mongoose')

const config = require('./config.json')

class App {
  constructor () {
    this.environment = process.env.NODE_ENV || 'development'
    this.express = express()
    this.configureDbConnection()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./router'))
  }

  configureDbConnection () {
    mongoose.connect(config[this.environment].connectionString, {
      useNewUrlParser: true
    })
  }
}

module.exports = new App().express
