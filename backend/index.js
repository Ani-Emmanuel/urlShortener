const express = require('express')
const { SERVE_HOSTNAME, SERVE_PORT } = require('../src/config.json')
const cookieSession = require('cookie-session')
const { v4: uuid } = require('uuid')
const cors = require('cors')
const database = require('../backend/db/db')
const { getAllUrl, createShortUrl, getOneUrl } = require('../backend/services/urlService')
require('dotenv-safe').config()

const app = express()

database()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
  cookieSession({
    name: 'shortlinks',
    keys: [process.env.SESHSECRET],
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  })
)

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.url}`)
  req.session.id = req.session.id || uuid()
  res.header('Access-Control-Allow-Origin', '*')
  next() // pass control to the next handler
})

app.get('/', (req, res) => {
  res.json({
    backend: 'ok',
    session_id: req.session.id
  })
})
// app.get('/api/links', (req, res, next) => {
//   res.json(['test1', 'test2'])
//   // TODO
//   next()
// })

// app.post('/api/links', (req, res, next) => {
//   // TODO
//   next()
// })

// app.get('/api/links/:id', (req, res, next) => {
//   // TODO
//   res.send(`Id=${req.params.id}`)
//   next()
// })

app.get('/api/links', getAllUrl)
app.post('/api/links', createShortUrl)
app.get('/api/links/:id', getOneUrl)

// catching not found errors
app.use((req, res, next) => {
  const err = new Error('Not Found')
  res.statusCode = 404
  next(err)
})

// catching all errors
app.use((err, req, res, nexr) => {
  const error = app.get('env') === 'development' ? err : {}
  const status = err.status || 500
  res.status(status).json({ error: { message: error.message } })
})

app.listen(SERVE_PORT, SERVE_HOSTNAME, () =>
  console.log(
    `Shortlinks backend listening on ${SERVE_HOSTNAME}:${SERVE_PORT}!`
  )
)
