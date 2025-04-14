const express = require("express");
const { createTicket, getTickets, updateTicket, deleteTicket } = require("../Controllers/ticketController");
const router = express.Router();
const { auth } = require("../Middlewares/auth")

router.post("/add", auth, createTicket);

router.get("/", auth, getTickets);

router.put("/update", auth, updateTicket);

router.delete("/delete", auth, deleteTicket);

module.exports = router;
