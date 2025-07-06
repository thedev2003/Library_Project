const Issue = require('../models/issues'); // Adjust path if needed

// GET /api/issues (list all issues)
exports.getAllIssues = async (req, res, next) => {
	try {
		const issues = await Issue.find().populate('book user');
		res.json(issues);
	} catch (err) {
		next(err);
	}
};

// GET /api/issues/:id (get issue by ID)
exports.getIssueById = async (req, res, next) => {
	try {
		const issue = await Issue.findById(req.params.id).populate('book user');
		if (!issue) return res.status(404).json({ message: "Issue not found" });
		res.json(issue);
	} catch (err) {
		next(err);
	}
};

// POST /api/issues (create a new issue)
exports.createIssue = async (req, res, next) => {
	try {
		const issue = new Issue(req.body);
		await issue.save();
		res.status(201).json(issue);
	} catch (err) {
		next(err);
	}
};

// PUT /api/issues/:id (update an issue)
exports.updateIssue = async (req, res, next) => {
	try {
		const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!issue) return res.status(404).json({ message: "Issue not found" });
		res.json(issue);
	} catch (err) {
		next(err);
	}
};

// DELETE /api/issues/:id (delete an issue)
exports.deleteIssue = async (req, res, next) => {
	try {
		const issue = await Issue.findByIdAndDelete(req.params.id);
		if (!issue) return res.status(404).json({ message: "Issue not found" });
		res.json({ message: "Issue deleted" });
	} catch (err) {
		next(err);
	}
};

// PUT /api/issues/:id/return (mark an issue as returned)
exports.returnIssue = async (req, res, next) => {
	try {
		const issue = await Issue.findById(req.params.id);
		if (!issue) return res.status(404).json({ message: "Issue not found" });
		issue.returned = true;
		await issue.save();
		res.json({ message: "Book returned", issue });
	} catch (err) {
		next(err);
	}
};