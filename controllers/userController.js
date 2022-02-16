// Require the Express module
const express = require('express');

// Instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();

// Import the Resorts model
const Pin = require('../models/Pin');
// Create a pin
router.post('/', async (req, res) => {
	const newPin = new Pin(req.body);
	try {
		const savePin = await newPin.save();
		res.status(201).json(savePin);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Get all pins

router.get('/', async (req, res) => {
	try {
		// 1. Get all of the bookmarks from the DB
		const pins = await Pin.find({});
		// 2. Send them back to the client as JSON
		res.status(200).json(pins);
	} catch (err) {
		res.status(500).json(err);
	}
});
// Export this router object so that it is accessible when we require the file elsewhere

module.exports = router;
const router = require('express').Router();
const User = require('../models/User');

//register
router.post('/register', async (req, res) => {
	try {
		//generate new password

		//create new user 

		// save user and save response

	} catch(err){
		res.status(500).json(err)
	}
})

//login

module.exports = router;
