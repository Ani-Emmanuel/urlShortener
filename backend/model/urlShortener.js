const mongoose = require('mongoose')
const shortId = require('shortid')

const urlSchema = new mongoose.Schema({
  fullurl: {
    type: String,
    required: true
  },
  shorturl: {
    type: String,
    required: true,
    default: shortId.generate
  }
})

module.exports = mongoose.model('UrlShortener', urlSchema)
