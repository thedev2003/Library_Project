const router = require('express').Router();
const { getAllBooks, getBookById, createBook,
	updateBook, deleteBook } = require('../controllers/bookController');

const { getAllUsers, signup, login, 
	getUserById, updateUser} = require('../controllers/userController');

const { getAllIssues, getIssueById, createIssue, returnIssue,
	updateIssue, deleteIssue } = require('../controllers/issueController');

const {cors, corsWithOptions} = require('../cors');
const { verifyUser, verifyAdmin } = require('../authenticate');


// Book routes
router.get('/books', corsWithOptions, getAllBooks); // Get all books
router.get('/books/:id', corsWithOptions, getBookById); // Get a book by ID
router.post('/books', corsWithOptions, verifyUser, verifyAdmin, createBook); // Add a new book (admin only)
router.put('/books/:id', corsWithOptions, verifyUser, verifyAdmin, updateBook); // Update a book by ID (admin only)
router.delete('/books/:id', corsWithOptions, verifyUser, verifyAdmin, deleteBook); // Delete a book by ID (admin only)



// User routes
router.get('/users', corsWithOptions, verifyUser, verifyAdmin, getAllUsers); // Get all users (admin only)
router.get('/users/:id', corsWithOptions, verifyUser, verifyAdmin, getUserById); // Get a user by ID (admin only)
router.post('/users/signup', corsWithOptions, signup); // User signup
router.post('/users/login', corsWithOptions, login); // User login
router.put('/users/:id', corsWithOptions, verifyUser, updateUser); // Update user info (self only)




// Issue routes
router.get('/issues', corsWithOptions, verifyUser, getAllIssues); // Get all issues (auth required)
router.get('/issues/:id', corsWithOptions, verifyUser, getIssueById); // Get an issue by ID (auth required)
router.post('/issues/return/:id', corsWithOptions, verifyUser, returnIssue); // Return an issue (auth required)
router.post('/issues', corsWithOptions, verifyUser, createIssue); // Create a new issue (auth required)
router.put('/issues/:id', corsWithOptions, verifyUser, updateIssue); // Update an issue (auth required)
router.delete('/issues/:id', corsWithOptions, verifyUser, deleteIssue); // Delete an issue (auth required)
module.exports = router;