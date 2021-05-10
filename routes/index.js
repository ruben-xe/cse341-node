const routes = require('express').Router();

const teamRoutes = require('./teamRoutes');
const proveRoutes = require('./proveRoutes');




routes
    .use('/teamActivities', require('./teamRoutes'))
    .use('/proveActivities', proveRoutes)
    .get('/', (req, res, next) => {
        // This is the primary index, always handled last. 
        res.render('pages/index', { title: 'Welcome to my CSE341 repo', path: '/' })
    })
    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', { title: '404 - Page Not Found', path: req.url })
    })
module.exports = routes;