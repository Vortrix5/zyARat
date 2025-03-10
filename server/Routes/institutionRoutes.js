const express = require("express");
const { registerInstitution, updateInstitution } = require("../controllers/institutionController");
const router = express.Router();
const {verifyToken} = requir("../middlewares/auth")

router.post("/register", verifyToken, registerInstitution);

router.put("/update", verifyToken, updateInstitution);

module.exports = router;
