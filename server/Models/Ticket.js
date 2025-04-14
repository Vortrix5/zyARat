const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
	institutionId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Institution",
		required: true,
	},
	name: { 
        type: String, 
        required: true 
    },
	price: { 
        type: Number, 
        required: true 
    },
	description: { 
        type: String 
    }
});

module.exports = mongoose.model("Ticket", TicketSchema, "Ticket");
