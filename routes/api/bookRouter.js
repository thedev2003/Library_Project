const express = require('express'); 
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const bookRouter = express.Router();
const authenticate = require('../../authenticate'); 
const cors = require('../cors'); // CORS config
const Books = require('../../models/books'); // Book model


// /api/books
// Preflight OPTIONS request
bookRouter.options('/', cors.corsWithOptions, (req, res) => res.sendStatus(200));

// Get all books (with optional query)
bookRouter.get('/', cors.corsWithOptions, async (req, res, next) => {
    try {
        const books = await Books.find(req.query).sort({ name: 'asc' });
        res.status(200).json(books);
    } catch (err) {
        next(err);
    }
});

// Add a new book (admin only)
bookRouter.post('/', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    try {
        const book = await Books.create(req.body);
        res.status(200).json(book);
    } catch (err) {
        next(err);
    }
});

// Not supported
bookRouter.put('/', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.status(403).end('PUT operation not supported on /books');
});

// Not supported
bookRouter.delete('/', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.status(403).end('DELETE operation not supported on /books');
});




// /api/books/:bookId
// Preflight OPTIONS request
bookRouter.options('/:bookId', cors.corsWithOptions, (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(200);
});

// Get a book by ID
bookRouter.get('/:bookId', cors.corsWithOptions, async (req, res, next) => {
    try {
        const book = await Books.findById(req.params.bookId);
        res.status(200).json(book);
    } catch (err) {
        next(err);
    }
});

// Not supported
bookRouter.post('/:bookId', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.status(403).end('POST operation not supported on /books/' + req.params.bookId);
});

// Update a book by ID (admin only)
bookRouter.put('/:bookId', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    try {
        const book = await Books.findByIdAndUpdate(req.params.bookId, { $set: req.body }, { new: true });
        res.status(200).json(book);
    } catch (err) {
        res.status(400).json({ success: false });
    }
});

// Delete a book by ID (admin only)
bookRouter.delete('/:bookId', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, async (req, res, next) => {
    try {
        await Books.findByIdAndRemove(req.params.bookId);
        res.status(200).json({ _id: req.params.bookId, success: true });
    } catch (err) {
        res.status(400).json({ success: false });
    }
});

module.exports = bookRouter;