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

//login

module.exports = router;
