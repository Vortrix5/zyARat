const express = require('express')

const router = express.Router();

const {
    getUsers,
} = require("../controllers/adminController");

const auth = require("../middlewares/auth");
const autho = require("../Middlewares/autho")

router.get('/', auth, autho(['admin']), getUsers)

module.exports = router;