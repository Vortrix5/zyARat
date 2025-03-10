const mongoose = require("mongoose");

const InstitutionSchema = new mongoose.Schema({
	id: { 
        type: String, 
        required: true, 
        unique: true },
	name: { 
        type: String, 
        required: true 
    },
	description: { 
        type: String 
    },
	workingHours: [
		{
			day: { type: String, required: true },
			open: { type: String, required: true },
			close: { type: String, required: true },
		},
	],
	location: { 
        type: String 
    },
	contactInfo: { 
        type: String 
    },
});

const Institution = mongoose.model("Institution", InstitutionSchema, "Institution");

module.exports = Institution;
