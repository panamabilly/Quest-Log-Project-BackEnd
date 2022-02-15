// require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// make a new schema with 9 properties, and assign it to a variable
const PinSchema = new mongoose.Schema({
	userName: { type: String, required: true },
	title: { type: String, required: true },
	description: { type: String, required: false },
	rating: { type: Number, required: false, min: 0, max: 5 },
	image: { data: Buffer, contentType: String },
	latitude: { type: Number, unique: true },
	longitude: { type: Number, unique: true },
	timestamps: true,
});

// instantiate the model, calling it "User" and with the schema we just made
const Pin = mongoose.model('Pin', PinSchema);

// export the newly created model
module.exports = Pin;
