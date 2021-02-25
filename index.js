const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
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

//Header protection
app.use(helmet());

//Cors
app.use(cors());

//sanitization
app.use(mongoSanitize());

//xss protection
app.use(xss());

//users route
app.use("/api/companies/", compRoutes);

//404 Handler
app.use(notFoundHandler);

//Error Handler
app.use(errorHandler);

module.exports = app;
