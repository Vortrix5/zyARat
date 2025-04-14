const express = require("express");
const { registerInstitution, updateInformation , getAnnouncements , addAnnouncement, deleteAnnouncement , updateAnnouncement} = require("../Controllers/institutionController");
const router = express.Router();
const {auth} = require("../Middlewares/auth")

router.post("/register", registerInstitution);

router.put("/update", auth, updateInformation);

router.get("/announcements", auth, getAnnouncements)

router.post("/announcements/add", auth, addAnnouncement);

router.delete("/announcements/delete", auth, deleteAnnouncement);

router.put("/announcements/update", auth, updateAnnouncement);

module.exports = router;
