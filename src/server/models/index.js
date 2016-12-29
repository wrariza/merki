import mongoose from 'mongoose'

let StoreSchema = new mongoose.Schema({
	 name: String,
	 address: String,
	 location: {
    	type: [Number],  // [<longitude>, <latitude>]
    	index: '2d'      // create the geospatial index
     },
	 img: {
	 	data: Buffer,
	 	contentType: String
	 },
	 description: String
})

export default mongoose.model('Store', StoreSchema)

