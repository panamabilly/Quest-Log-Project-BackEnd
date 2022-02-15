// require the Express module
const express = require('express');

// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();

// import the Resorts model
const Resort = require('../models/Resort');

router.get('/', async (req, res) => {
	try {
		// 1. Get all of the bookmarks from the DB
		const resorts = await Resort.find({});
		// 2. Send them back to the client as JSON
		res.json(resorts);
	} catch (error) {
		// 3. If there's an error, pass it on to the error handling middleware
		next(error);
	}
});

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;
