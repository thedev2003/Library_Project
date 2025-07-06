const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
const secretKey = process.env.SECRET_KEY;
const connectToDB = async () => {
	try {
		mongoose.connect(mongoURI);
		console.log("MongoDB Connected");
	}
	catch (err) {
		console.error("MongoDB Connection Error:", err);
		process.exit(1);
	}
}
module.exports = connectToDB;