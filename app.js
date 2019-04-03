var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

const express = require('express')
const app = express()
const port = 3000
const routeBooks = require('./routes/book')
const routeMember = require('./routes/member')
const routeTransaction = require('./routes/transactions')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', routeBooks)
app.use('/', routeMember)
app.use('/', routeTransaction)

app.listen(port, () => {
  console.log(`Listen in port ${port}`)
})