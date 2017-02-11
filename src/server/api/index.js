import express from 'express'
import Store from 'src/server/models/'

const router = express.Router();


//Create store
router.post('/stores', (req, res) => {
	let store = new Store();
	let latitude = req.body.latitude
	let longitude = req.body.longitude

	store.name = req.body.name
	store.address = req.body.address
	store.location = [longitude, latitude]
	store.description = req.body.description

	store.save((err) =>{
		if(err){
			res.status(500).json(err);
		}
		res.status(200).json({message: 'Store created!' });
	})
})


//GET /stores/
router.get('/stores', (req, res) => {
	console.log('GET /stores')
    Store.find({}, (err, docs) => {
    	if (err) return console.error(err);
    	console.log(docs)
    	res.status(200).json(docs)
    })
})



export default router
