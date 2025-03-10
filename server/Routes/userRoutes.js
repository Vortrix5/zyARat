const express = require('express')

const router = express.Router();

const {
    register,
    getUsers,
    resetPassword,
    logIn
} = require("../controllers/userController");

const auth = require("../middlewares/auth");

router.post('/register', register);
router.put('/resetpassword', auth, resetPassword);
router.post('/login', logIn)
router.get('/', auth, autho(['admin']), getUsers)

module.exports = router;