const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotPassword,
  verifyotp,
} = require("../controllers/Auth.controller");

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/confirm-otp", verifyotp);

module.exports = router;
