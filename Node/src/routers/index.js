const express = require('express');
const routerUser = require('./user');
const routerHome = require('./home');
const router = express.Router();

router.use('/user', routerUser);
router.use('/home', routerHome);
module.exports = router;