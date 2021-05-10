const express = require('express');
const path = require('path')
const app = express();
const router = express.Router();


const errorController = require('../../..//controllers/prove03/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.set('views', )
// app.use(express.static(path.join(__dirname, 'prove/proveRoutes/prove03/public')))
// router.use(express.static('./public'));
router.use('/admin', adminRoutes);
router.use(shopRoutes);

router.use(errorController.get404);

module.exports = router;
