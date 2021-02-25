const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./public/uploads/");
	},

	filename: function (req, file, cb) {
		cb(null, Date.now() + " " + file.originalname);
	},
});

function fileFilter(req, file, cb) {
	let allowed_types = [
		"image/jpg",
		"image/jpeg",
		"image/png",
		"image/webp",
		"jpg",
		"jpeg",
		"png",
		"webp",
	];

	if (allowed_types.includes(file.mimetype)) {
		return cb(null, true);
	} else {
		cb(new Error("Upload Images Only!"), false);
	}
}

module.exports = multer({
	storage,
	limit: 1000 * 1000 * 3,
	fileFilter,
});
