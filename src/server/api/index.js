import express from 'express'
import multer from 'multer'
import fs from 'fs'
import Store from './../models/'

const upload = multer({ dest: 'uploads/' })
const router = express.Router()


router.post('/stores', upload.single('img'), (error, req, res, next) => {
  const store = new Store()
  store.name = req.body.name
  store.address = req.body.adresss
  store.location = [req.body.longitude, req.body.latitude]
  store.description = req.body.description
  store.img.data = fs.readFileSync(req.file.path, 'base64', 'utf8')
  store.img.contentType = req.file.mimetype


  store.save((err) => {
    if (err) {
      res.status(500).json(err)
    }
    res.status(200).json({ message: 'Store created!' })
  })
})


router.get('/stores', (req, res) => {
  console.log('GET /stores')
  Store.find({}, (err, docs) => {
    if (err) {
      return console.error(err)
    }
    res.status(200).json(docs)
  })
})

export default router
