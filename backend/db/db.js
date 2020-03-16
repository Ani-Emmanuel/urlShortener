const mongoose = require('mongoose')
require('dotenv-safe').config()

function dbConnection () {
  const DB_URL = process.env.DB_URL
  mongoose.connect(
    DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    error => {
      if (error) return new Error('Failed to connect to database')
      console.log('connected to database')
    }
  )
}

module.exports = dbConnection
