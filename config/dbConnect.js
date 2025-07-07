const mongoose = require('mongoose');
require('dotenv').config();

const connectToDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDB Connected");
	}
	catch (err) {
		console.error("MongoDB Connection Error:", err);
		process.exit(1);
	}
}
module.exports = connectToDB;