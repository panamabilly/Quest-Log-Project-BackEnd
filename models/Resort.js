// require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// make a new schema with 10 properties, and assign it to a variable
const ResortSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		description: { type: String, unique: true, required: false },
		image: { data: Buffer, contentType: String },
		latitude: { type: Number, required: true },
		longitude: { type: Number, required: true },
		timeStamp: { type: Date, default: Date.now },
		website: { type: String, required: true },
	},
	{ timestamps: true }
);

// instantiate the model, calling it "Resort" and with the schema we just made
const Resort = mongoose.model('Resort', ResortSchema);

// export the newly created model
module.exports = Resort;
