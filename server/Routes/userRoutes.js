const express = require("express");

const router = express.Router();

const {
	register,
	getUsers,
	resetPassword,
	logIn,
} = require("../Controllers/userController");

const auth = require("../Middlewares/auth");

router.post("/register", register);
router.put("/resetpassword", auth, resetPassword);
router.post("/login", logIn);
router.get("/", auth, autho(["admin"]), getUsers);

module.exports = router;
