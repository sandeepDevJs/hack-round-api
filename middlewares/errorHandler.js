const ErrorResponse = require("../utils/ErrorResponse");
const { isCelebrateError } = require("celebrate");

module.exports = (err, req, res, next) => {
	let error = { ...err };
	error.message = err.message;

	//Invalid Id
	if (err.name === "CastError") {
		error = new ErrorResponse(`Invalid Id ${err.value}`, 400);
	}

	//Duplicate Error
	if (err.code === 11000) {
		error = new ErrorResponse("User Already Exists!!", 400);
	}

	//if validation Error
	if (err.name === "ValidationError") {
		let validationErrors = Object.values(err.errors).map((e) => e.message);
		error = new ErrorResponse(validationErrors, 400);
	}

	//if celebrate error
	if (isCelebrateError(err)) {
		if (err.details.get("body")) {
			error = new ErrorResponse(
				err.details.get("body").details[0].message,
				400
			);
		} else {
			error = new ErrorResponse(
				err.details.get("params").details[0].message,
				400
			);
		}
	}

	error.statusCode = error.statusCode || 500;

	if (process.env.NODE_ENV === "development") {
		// console.log(err);
		return res.status(error.statusCode).send({
			success: false,
			message: error.message || "Server Error",
		});
	}

	if (error.statusCode != 500) {
		res.status(error.statusCode).send({
			success: false,
			message: error.message,
		});
	} else {
		res.status(error.statusCode).send({
			success: false,
			message: "Server Error",
		});
	}
};
