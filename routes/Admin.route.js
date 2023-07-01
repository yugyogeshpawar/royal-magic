const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/AdminAuth.middleware");
const { login } = require("../controllers/AdminAuth.controller");
const { summary } = require("../controllers/AdminInvestment.controller");
const { getAdminDashboard } = require("../controllers/AdminDashboard.controller");
const {
  getActiveUsers,
  getInactiveUsers,
  getBlockedUsers,
  searchUser,
  getUserDetails,
  getSearchDashboard,
  postBlockUser,
} = require("../controllers/AdminUserInformation.controller");
const {
  getWithdrawRequests,
  verifyWithdrawRequest,
  rejectWithdrawRequest,
  withdrawSummary,
} = require("../controllers/AdminWithdraw.controller");

router.route("/withdrawRequest").get(getWithdrawRequests);
router.route("/verifyWithdrawRequest").post(verifyWithdrawRequest);
router.route("/rejectWithdrawRequest").post(rejectWithdrawRequest);
router.route("/withdrawSummary").get(withdrawSummary);

router.route("/inactive-users").get(verifyToken, getInactiveUsers);
router.route("/activeUser").get(verifyToken, getActiveUsers);
router.route("/blockedUser").get(verifyToken, getBlockedUsers);
router.route("/search").get(searchUser);
router.route("/user").get(getUserDetails);
router.route("/summary").get(summary);
router.route("/login").post(login);
router.route("/dashboard").get(getAdminDashboard);
router.route("/search-dashboard").get(getSearchDashboard);
router.route("/block-user").post(postBlockUser);

module.exports = router;
