const routes = require('express').Router();

routes
    .use('/01', require('./ta01'))
    .use('/02', require('./ta02'))
    .use('/03', require('./ta03'))
    .use('/04', require('./ta04'))
    .get('/', (req, res, next) => {
        console.log('no encuentra el archivo para renderizar')
        res.send('<h1>HOLA GATO </H1>');
        res.render ('pages/teamActivities', {
            pageTitle: 'Team Activities',
            path: '/teamActivities'
        })
    })

module.exports = routes;