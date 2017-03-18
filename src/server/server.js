import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { stores, products } from './api/'

const app = express()
const port = process.env.PORT || 3000
const connectMongo = 'mongodb://localhost/apptienda'

mongoose.connect(connectMongo)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/api', products)
app.use('/api', stores)


app.listen(port, () => {
  console.log('Start server in listen port 3000')
})
