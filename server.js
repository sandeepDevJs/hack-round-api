const app = require("./index");
const colors = require("colors");
const connectToDb = require("./config/db.connection");

const PORT = process.env.PORT || 4000;

//Connect To DB
connectToDb();

//Initialize Server
const server = app.listen(PORT, () =>
	console.log(`Server is running on port ${PORT}`.yellow.bold)
);

//Handle Unhandled Promise Rejection
process.on("unhandledRejection", (err, promise) => {
	console.log("OOPS!!, Something Went Terribly Wrong!".red);
	if (process.env.NODE_ENV === "development") {
		console.log(err.message);
	}
	server.close(() => process.exit(1));
});

//Handle Uncought Exceptions
process.on("uncaughtException", (error) => {
	if (config.env === "development") {
		console.log("Oh my god, something terrible happened: ".red, error);
	} else {
		console.log("Oh my god, something terrible happened: ".red);
	}
});
