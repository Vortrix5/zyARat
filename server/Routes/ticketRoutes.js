const express = require("express");
const { createTicket, getTickets, updateTicket, deleteTicket } = require("../controllers/ticketController");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth")

router.post("/", verifyToken, createTicket);

router.get("/:institutionId", verifyToken, getTickets);

router.put("/:id", verifyToken, updateTicket);

router.delete("/:id", verifyToken, deleteTicket);

module.exports = router;
