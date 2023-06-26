const express = require("express");
const router = express.Router();
const { stakingRequest ,stakingSummary} = require("../controllers/Staking.controller");
const {verifyToken} = require('../middleware/Auth.middleware');

router.route("/").post( verifyToken, stakingRequest);
router.route("/Summary").get(verifyToken,stakingSummary);

module.exports = router;
