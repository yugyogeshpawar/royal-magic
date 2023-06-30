const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/Auth.middleware");
const {
  stakingBonus,
  referralBonus,
  levelbonus,
} = require("../controllers/Earning.controller");

router.route("/StakingBonus").get(verifyToken, stakingBonus);
router.route("/ReferralBonus").get(verifyToken, referralBonus);
router.route("/levelbonus").get(verifyToken, levelbonus);

module.exports = router;
