const { Router } = require("express");
const {
	getCompanies,
	AddCompany,
	updateCompany,
} = require("../controllers/companies");
const router = Router();

router.route("/").get(getCompanies).post(AddCompany);
router.route("/:id").get(getCompanies).put(updateCompany);

module.exports = router;
