const express = require("express");
const { verifyToken } = require("../middlewares/VerifyToken");
const { currentUser } = require("../controllers/User.controller");

const router = express.Router();

router.get("/me", verifyToken, currentUser);

module.exports = router;
