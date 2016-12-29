import express from 'express'
import Store from 'src/server/models/'

const router = express.Router();


//Create store
router.post('/stores', (req, res) => {
	let store = new Store();
	console.log(req.body)
	store.name = req.body.name
	store.address = req.body.address

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
