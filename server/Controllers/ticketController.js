const Ticket = require("../models/Ticket");

const createTicket = async (req, res) => {
  try {
    const institutionId = req.institutionId;
    const { name, price, description, quantity } = req.body;

    const newTicket = new Ticket({
      institutionId,
      name,
      price,
      description,
      quantity,
    });

    await newTicket.save();
    res.status(201).json({ message: "Ticket created successfully", ticket: newTicket });
  } catch (err) {
    res.status(500).json({ message: "Error creating ticket", error: err.message });
  }
};

const getTickets = async (req, res) => {
  try {
    const { institutionId } = req.institutionId;

    const tickets = await Ticket.find({ institutionId });

    if (!tickets.length) {
      return res.status(404).json({ message: "No tickets found for this institution" });
    }

    res.status(200).json({ message: "Tickets fetched successfully", tickets });
  } catch (err) {
    res.status(500).json({ message: "Error fetching tickets", error: err.message });
  }
};

const updateTicket = async (req, res) => {
  try {
    const { id } = req.institutionId;
    const updates = req.body;

    const updatedTicket = await Ticket.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json({ message: "Ticket updated successfully", ticket: updatedTicket });
  } catch (err) {
    res.status(500).json({ message: "Error updating ticket", error: err.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { id } = req.institutionId;

    const ticket = await Ticket.findByIdAndDelete(id);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting ticket", error: err.message });
  }
};

module.exports = { createTicket, getTickets, updateTicket, deleteTicket };
