const express = require("express");
const router = express.Router();
const { jwtVerification } = require("../middleware/token");

const attendance = require("../controllers/attendance.controller");

router.post("/markAttendance", jwtVerification, attendance.markAttendance);

module.exports = router;
