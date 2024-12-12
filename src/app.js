const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

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
    const connString = process.env.MONGO_CONNECTION_STRING

    if (connString) {
      mongoose.connect(connString)
    } else {
      console.warn(`Connection String is not defined!`)
    }
  }

  listen(port, callback) {
    this.express.listen(port, callback)
  }
}

module.exports = new App()
