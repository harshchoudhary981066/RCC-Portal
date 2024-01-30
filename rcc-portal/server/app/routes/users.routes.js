const express = require("express");
const router = express.Router();
const { jwtVerification } = require("../middleware/token");
const usersController = require("../controllers/users.controller");

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.delete("/deleteUser/:id", usersController.deleteAccount);
router.put("/makeAdmin/:id", usersController.updateAdminStatus);

router.get("/getAllUsers", jwtVerification, usersController.getAllUsers);

router.get("/getUser/:rno", jwtVerification, usersController.getUser);

module.exports = router;
