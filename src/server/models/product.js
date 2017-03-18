import mongoose from 'mongoose'


const ProductSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  storeBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'Store',
  },
  img: {
    data: Buffer,
    contentType: String,
  },
})

module.exports = mongoose.model('Product', ProductSchema)
