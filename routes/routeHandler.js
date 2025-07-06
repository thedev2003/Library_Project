const router = require('express').Router();
const { getAllBooks, getBookById, createBook,
	updateBook, deleteBook } = require('../controllers/bookController');
	
const userController = require('../controllers/userController');
const issueController = require('../controllers/issueController');


// Book routes
router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

// ...user and issue routes (similarly)
module.exports = router;