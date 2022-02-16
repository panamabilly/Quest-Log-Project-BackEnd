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
const bcrypt = require('bcrypt');

//register and using bcrypt to hash password
router.post('/register', async (req, res) => {
	try {
		//generate new password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bycrpt.hash(req.body.password, salt);
		//create new user
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		});
		// save user and save response
		const user = await new User.save();
		res.status(200).json(user._id);
	} catch (err) {
		res.status(500).json(err);
	}
});

//login

module.exports = router;
