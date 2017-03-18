import express from 'express'
import multer from 'multer'
import fs from 'fs'
import Product from './../models/product'

const productsRouter = express.Router()
const upload = multer({ dest: 'uploads/' })

productsRouter.post('/products', upload.single('img'), (req, res, next) => {
  const product = new Product()

  product.name = req.name
  product.cost = req.cost
  product.store = req.store
  product.img.data = fs.readFileSync(req.file.path, 'base64', 'utf8')
  product.img.contentType = req.file.mimetype

  product.save((err) => {
    if (err) {
      res.status(500).json(err)
    }
    res.status(200).json({ message: 'Product created!' })
  })
})

productsRouter.get('/', (req, res) => {
  console.log('GET /products')
  Product.find({}, (err, docs) => {
    if (err) {
      return console.error(err)
    }
    res.status(200).json(docs)
  })
})

export default productsRouter
