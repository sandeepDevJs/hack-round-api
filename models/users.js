const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, "Company Name Is Required!"],
	},
	description: {
		type: String,
		required: [true, "Company Description Is Required!"],
	},

	email: {
		type: String,
		required: [true, "Company Email Is Required!"],
	},

	contact: {
		type: String,
		maxlength: [20, "contact number cannot exceed 20 chars!"],
		required: [true, "Company Contact Is Required!"],
	},
	logo: {
		type: String,
		required: [true, "Company Logo Is Required!"],
	},
	state: {
		type: String,
		maxlength: [50, "state name cannot exceed 40 chars!"],
		required: [true, "Company State Is Required!"],
	},
	city: {
		type: String,
		maxlength: [50, "city name cannot exceed 40 chars!"],
		required: [true, "Company City Is Required!"],
	},
});

module.exports = mongoose.model("companies", companySchema);
