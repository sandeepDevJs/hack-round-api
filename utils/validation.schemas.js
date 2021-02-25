const { Joi, Segments } = require("celebrate");
const mongoose = require("mongoose");

module.exports.addCompVal = {
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().min(3).max(100).required(),
		description: Joi.string().min(6).max(300).required(),
		email: Joi.string().email().required(),
		contact: Joi.string()
			.regex(/\d{10}/)
			.message("Invalid contact!")
			.required(),
		state: Joi.string().min(2).max(50).required(),
		city: Joi.string().min(2).max(50).required(),
	}),
};

module.exports.updateCompVal = {
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().min(3).max(100),
		description: Joi.string().min(6).max(300),
		email: Joi.string().email(),
		contact: Joi.string()
			.regex(/\d{10}/)
			.message("Invalid contact!"),
		state: Joi.string().min(2).max(50),
		city: Joi.string().min(2).max(50),
	}),
};
