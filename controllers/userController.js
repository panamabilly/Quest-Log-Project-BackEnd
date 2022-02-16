// Require the Express module
const express = require('express');
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//register and using bcrypt to hash password using Technique 1  in https://www.npmjs.com/package/bcrypt
router.post('/register', async (req, res) => {
	try {
		//generate new password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		//create new user
		const newUser = await User.create({
			userName: req.body.userName,
			email: req.body.email,
			password: hashedPassword,
		});
		// save user and save response
		// const user = await new User.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

//login - Julio Leon helped me fix error in the code where I needed to return nothing if user equals null this was breaking the code and use .compareSync and take out await from line 38
router.post('/login', async (req, res) => {
	try {
		let passwordMatched = true;
		const user = await User.findOne({ userName: req.body.userName });
		if (user === null) {
			res.status(400).json({ error: 'Wrong username or password!' });
			return;
		}

		const validPassword = bcrypt.compareSync(req.body.password, user.password);
		if (!validPassword) {
			passwordMatched = false;
		}

		passwordMatched
			? res.status(200).json({ userName: user.userName })
			: res.status(400).json({ error: 'Wrong username or password!' });
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/', async (req, res) => {
	try {
		// 1. Get all of the bookmarks from the DB
		const users = await User.find({});
		// 2. Send them back to the client as JSON
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
