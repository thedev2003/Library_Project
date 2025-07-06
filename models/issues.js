const mongoose = require('mongoose');
const issueSchema = new mongoose.Schema({
	student: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	book: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Book',
		required: true
	},
	returned: {
		type: Boolean,
		default: false
	}
}, {
	timestamps: true  // handles createdAt and updatedAt fields automatically
});

module.exports = mongoose.model('Issue', issueSchema);