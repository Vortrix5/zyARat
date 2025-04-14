const Institution = require("../Models/Institution")
const Ticket = require("../Models/Ticket")

const getTickets = async (req, res) => {
  try{
    const id = req.id;
    
    const institution = await Institution.findOne({id: id})

    const tickets = await Ticket.find({institutionId: institution._id});
    
    if(tickets.length === 0){
      return res.status(404).json({ messege: "No tickets were found." });
    }
    return res.status(200).json({ message: "Tickets retrieved succesfully" , tickets });
  }catch(error){
    console.log(error);
    return res.status(500).json({ message: "Server error"});
  }
}

const createTicket = async (req, res) => {
  try {
    const id = req.id;
    const { name , price , description } = req.body;

    const institution = await Institution.findOne({id: id});
    if (!institution) {
      return res.status(404).json({ message: "Institution not found." });
    }

    const ticket = new Ticket({
      institutionId: institution._id,
      name: name,
      price: price,
      description: description,
    })

    await ticket.save();

    res.status(200).json({ message: "Ticket added successfully.", institution });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "An error occurred while adding the ticket.", error: err.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const id = req.id;
    const { ticketId } = req.body;
    console.log()

    const institution = await Institution.findOne({id: id});
    if (!institution) {
      return res.status(404).json({ message: "Institution not found." });
    }

    const ticket = await Ticket.findById(ticketId);

    if(!ticket){
      return res.status(404).json({ message: "Ticket not found" });
    }

    if(ticket.institutionId.toString() !== ticket._id.toString()){
      return res.status(401).json({ message: "Do not have authorization to delete this ticket." })
    }
  
    await Ticket.findByIdAndDelete(ticketId)
    res.status(200).json({ message: "Ticket deleted successfully.", institution });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "An error occurred while adding the ticket.", error: err.message });
  }
};

const updateTicket = async (req, res) => {
  try {
    const id = req.id;
    const { ticketId , name , price , description } = req.body;

    const institution = await Institution.findOne({id: id});
    if (!institution) {
      return res.status(404).json({ message: "Institution not found." });
    }

    const ticket = await Ticket.findById(ticketId);

    if(!ticket){
      return res.status(404).json({ message: "Ticket not found" });
    }

    if(ticket.institutionId.toString() !== institution._id.toString()){
      return res.status(401).json({ message: "Do not have authorization to update this ticket." })
    }
  
    await Ticket.findByIdAndUpdate(ticketId, { name: name, price: price, description: description })
    res.status(200).json({ message: "Ticket updated successfully.", institution });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "An error occurred while updating the ticket.", error: err.message });
  }
};

module.exports = { getTickets , createTicket , deleteTicket , updateTicket}