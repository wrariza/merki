import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import api from 'src/server/api'

const app = express();
mongoose.connect('mongodb://localhost/apptienda')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/api', api)

app.listen(3000, () => {
  console.log("Start server in listen port 3000")
})
