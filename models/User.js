// require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// make a new schema with 6 properties, and assign it to a variable
const UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: false },
		lastName: { type: String, required: false },
		userName: { type: String, required: false, unique: true },
		email: { type: String, unique: true, required: true },
		password: { type: String, min: 8 },
		timeStamp: { type: Date, default: Date.now },
	},
	{ timestamps: true }
);

// instantiate the model, calling it "User" and with the schema we just made
const User = mongoose.model('User', UserSchema);

// export the newly created model
module.exports = User;
