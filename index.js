/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();

// Route setup. You can implement more in the future!
const routes = require('./routes')

app
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'prove/proveRoutes/prove03/public')))
  // Setting the second views folder for activity prove-03
  .set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'routes/proveRoutes/prove03/views')])
  .set('view engine', 'ejs')
  // For view engine as Pug
  //.set('view engine', 'pug') // For view engine as PUG. 
  // For view engine as hbs (Handlebars)
  //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
  //.set('view engine', 'hbs')
  .use(bodyParser({ extended: false })) // For parsing the body of a POST
  .use('/', routes)
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    console.log(`http://127.0.0.1:${PORT}`);
  });
