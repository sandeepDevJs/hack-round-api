const ErrorResponse = require("../utils/ErrorResponse");
module.exports = (req, res, next) => {
	next(new ErrorResponse("Path Not Found!", 404));
};
