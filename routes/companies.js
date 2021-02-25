const { Router } = require("express");
const { celebrate } = require("celebrate");
const upload = require("../utils/multer");
const {
	getCompanies,
	AddCompany,
	updateCompany,
} = require("../controllers/companies");
const { addCompVal, updateCompVal } = require("../utils/validation.schemas");

const router = Router();

router
	.route("/")
	.get(getCompanies)
	.post(upload.single("logo"), celebrate(addCompVal), AddCompany);
router
	.route("/:id")
	.get(getCompanies)
	.put(upload.single("logo"), celebrate(updateCompVal), updateCompany);

module.exports = router;
