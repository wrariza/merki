import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import api from './api'

const app = express()
const port = process.env.PORT || 5000;
const connectMongo = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/apptienda'

mongoose.connect(connectMongo, (err, res) => {
  if (err) {
    console.log ('ERROR connecting to: ' + connectMongo + '. ' + err)
  } else {
    console.log ('Succeeded connected to: ' + connectMongo)
  }
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/api', api)

app.listen(port, () => {
  console.log('Start server in listen port 3000')
})
