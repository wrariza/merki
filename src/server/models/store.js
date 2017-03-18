import mongoose from 'mongoose'

const StoreSchema = new mongoose.Schema({
  name: String,
  address: String,
  location: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2d',    // create the geospatial index
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  description: String,
})

module.exports = mongoose.model('Store', StoreSchema)
