// require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// make a new schema with 9 properties, and assign it to a variable
const PinSchema = new mongoose.Schema(
	{
		userName: { type: String, required: true },
		title: { type: String, required: true },
		description: { type: String, required: false },
		rating: { type: Number, required: false, min: 0, max: 5 },
		// image was causing problems with code want to implement image upload later
		// image: { data: Buffer, contentType: String },
		lat: { type: Number },
		long: { type: Number },
		timeStamp: { type: Date, default: Date.now },
	},

	{ timestamps: true }
);

// instantiate the model, calling it "Pin" and with the schema we just made
const Pin = mongoose.model('Pin', PinSchema);

// export the newly created model
module.exports = Pin;
