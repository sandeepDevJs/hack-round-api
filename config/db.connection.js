const mongoose = require("mongoose");
const fawn = require("fawn");

const connectDb = async () => {
	const conn = await mongoose.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	});

	console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
	fawn.init(mongoose);
};

module.exports = connectDb;
