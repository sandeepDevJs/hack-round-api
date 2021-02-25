const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");
const compRoutes = require("./routes/companies");

dotenv.config({ path: "./config/config.env" });
const app = express();

//Middlewares
app.use(express.json());
app.use("/images", express.static("./public/uploads/"));

if (process.env.NODE_ENV === "development") {
	app.use(morgan("tiny"));
}

//users route
app.use("/api/companies/", compRoutes);

//404 Handler
app.use(notFoundHandler);

//Error Handler
app.use(errorHandler);

module.exports = app;
