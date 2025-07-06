const Book = require('../models/books'); // or correct path to your model

// GET /api/books
exports.getAllBooks = async (req, res, next) => {
	try {
		const books = await Book.find();
		res.json(books);
	} catch (err) {
		next(err);
	}
};

// GET /api/books/:id
exports.getBookById = async (req, res, next) => {
	try {
		const book = await Book.findById(req.params.id);
		if (!book) return res.status(404).json({ message: "Book not found" });
		res.json(book);
	} catch (err) {
		next(err);
	}
};

// POST /api/books
exports.createBook = async (req, res, next) => {
	try {
		const newBook = await Book.create(req.body);
		res.status(201).json(newBook);
	} catch (err) {
		next(err);
	}
};

// PUT /api/books/:id
exports.updateBook = async (req, res, next) => {
	try {
		const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!updatedBook) return res.status(404).json({ message: "Book not found" });
		res.json(updatedBook);
	} catch (err) {
		next(err);
	}
};

// DELETE /api/books/:id
exports.deleteBook = async (req, res, next) => {
	try {
		const deletedBook = await Book.findByIdAndDelete(req.params.id);
		if (!deletedBook) return res.status(404).json({ message: "Book not found" });
		res.json({ message: "Book deleted" });
	} catch (err) {
		next(err);
	}
};