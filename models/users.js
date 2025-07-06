const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	roll: {
		type: String,
		required: true,
		unique: true
	},
	admin: {
		type: Boolean,
		default: false
	}
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);