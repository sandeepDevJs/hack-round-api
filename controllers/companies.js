const asyncHandler = require("../utils/asyncHandler");
const companyModel = require("../models/users");

// @desc   Get All companies
// @route  /api/companies/
module.exports.getCompanies = asyncHandler(async (req, res, next) => {
	let data,
		id = req.params.id;
	if (id) {
		data = await companyModel.findById(id);
	} else {
		data = await companyModel.find();
	}
	res.send({
		success: true,
		count: data instanceof Array ? data.length : data ? 1 : 0,
		data,
	});
});

// @desc   Add Company
// @route  /api/companies/
module.exports.AddCompany = asyncHandler(async (req, res, next) => {
	let data = req.body;
	if (!req.file) {
		return res
			.status(400)
			.send({ success: false, message: "Logo Image Is Required!" });
	}
	data = {
		...data,
		logo: process.env.HOME_URL + "/images/" + req.file.filename,
	};

	let newData = await companyModel.create(data);
	res.status(201).send({ success: true, data: newData });
});

// @desc   Update Company
// @route  /api/companies/
module.exports.updateCompany = asyncHandler(async (req, res, next) => {
	let id = req.params.id;
	let data = req.body;

	// if (Object.keys(data) == 0) {
	// 	return res
	// 		.status(400)
	// 		.send({ success: false, message: "No Data To Make Any Changes!" });
	// }

	//if user wants to chnage logo
	if (req.file) {
		if (req.file.filename) {
			data = {
				...data,
				logo: process.env.HOME_URL + "/images/" + req.file.filename,
			};
		}
	}

	let newData = await companyModel.findByIdAndUpdate(id, data, {
		runValidators: true,
		new: true,
	});

	if (!newData) {
		return res.status(400).send({ success: false });
	}

	res.status(200).send({ success: true, data: newData });
});
