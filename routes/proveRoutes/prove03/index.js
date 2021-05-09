const express = require('express');

const router = express.Router();


const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

router.use(express.static('./public'));

router.use('/admin', adminRoutes);
router.use(shopRoutes);

router.use(errorController.get404);

module.exports = router;
