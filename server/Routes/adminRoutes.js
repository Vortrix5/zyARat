const express = require("express");

const router = express.Router();

const { getUsers } = require("../Controllers/adminController");

const auth = require("../Middlewares/auth");
const autho = require("../Middlewares/autho");

router.get("/", auth, autho(["admin"]), getUsers);

module.exports = router;
