const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../controllers/Dashboard.controller');
const {verifyToken} = require('../middleware/Auth.middleware');
const {changePassword } = require('../controllers/Auth.controller');

router.route('/').get(verifyToken , getDashboardData);
router.put('/changePassword',verifyToken, changePassword);
module.exports = router;
