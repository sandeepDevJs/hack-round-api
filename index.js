const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const userRoutes = require("./routes/companies");
const app = express();

//Third Party Middlewares
if (process.env.NODE_ENV === "development") {
	app.use(morgan("tiny"));
}

//users route
app.use("/hackRoundAPI/users/", userRoutes);

module.exports = app;
