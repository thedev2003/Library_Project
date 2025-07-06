const router = require('express').Router();
const { getAllBooks, getBookById, createBook,
	updateBook, deleteBook } = require('../controllers/bookController');

const { getAllUsers, signup, login, 
	getUserById, updateUser} = require('../controllers/userController');

const { getAllIssues, getIssueById, createIssue,
	updateIssue, deleteIssue } = require('../controllers/issueController');


// Book routes
router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

// user routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users/signup', signup);
router.post('/users/login', login);
router.put('/users/:id', updateUser);


// issue routes
router.get('/issues', getAllIssues);
router.get('/issues/:id', getIssueById);
router.post('/issues', createIssue);
router.put('/issues/:id', updateIssue);
router.delete('/issues/:id', deleteIssue);
module.exports = router;