import express from 'express'
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log("Start server in listen port 3000")
})

