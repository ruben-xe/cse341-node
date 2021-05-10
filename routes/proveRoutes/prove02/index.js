const Book = require('../../../models/prove02/book');

const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    Book.fetchAll( books => {

        res.render('pages/proveActivities/prove02', { 
            title: 'Team Activity 02', 
            books: books,
            path: '/p02', // For pug, EJS 
        });
    })
});
router.post('/addbook',(req, res, next) => {
    const data =  req.body;
    const book = new Book(data);
    book.save();

    res.redirect('/prove02');
});

module.exports = router;