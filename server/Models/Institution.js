const mongoose = require("mongoose");

const InstitutionSchema = new mongoose.Schema({
	id: { 
        type: String, 
        required: true, 
        unique: true 
    },
	name: { 
        type: String, 
        required: true 
    },
	description: { 
        type: String,
        default: "No description available."
    },
	workingHours: {
        Monday: {
          open: { type: String, default: "00:00" },
          close: { type: String, default: "00:00" },
        },
        Tuesday: {
          open: { type: String, default: "00:00" },
          close: { type: String, default: "00:00" },
        },
        Wednesday: {
          open: { type: String, default: "00:00" },
          close: { type: String, default: "00:00" },
        },
        Thursday: {
          open: { type: String, default: "00:00" },
          close: { type: String, default: "00:00" },
        },
        Friday: {
          open: { type: String, default: "00:00" },
          close: { type: String, default: "00:00" },
        },
        Saturday: {
          open: { type: String, default: "00:00" },
          close: { type: String, default: "00:00" },
        },
        Sunday: {
          open: { type: String, default: "00:00" },
          close: { type: String, default: "00:00" },
        },
      },
	location: { 
        type: String,
        default: "No location available."
    },
	contactInfo: { 
        type: String,
        default: "No contact information available."
    },
});

const Institution = mongoose.model("Institution", InstitutionSchema, "Institution");

module.exports = Institution;
