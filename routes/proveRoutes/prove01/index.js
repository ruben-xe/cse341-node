
const express = require('express');
const router = express.Router();



var users = ['Adam','Max','Mary'];
var error='';
router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        users:users,
        error:error,
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});
router.post('/addUser',(req, res, next) => {
    let username =  req.body.username;
    let idx = users.indexOf(req.body.username);
    if (idx!=-1){
        error = 'Duplicated username'
    }else{
        users.push(username);
        error='';
    }

    res.redirect('/ta02');
});
router.post('/removeUser',(req, res, next) => {
    let idx = users.indexOf(req.body.username);
    if (idx!=-1){
        users.splice(idx,1);
        error='';
    }else{
        error = 'Username is not found'
    }
    
    res.redirect('/ta02');
});

module.exports = router;