const Institution = require("../models/Institution");

const registerInstitution = async (req, res) => {
  try {
    const { id } = req.institutionId;

    const existingInstitution = await Institution.findOne({ id });
    if (existingInstitution) {
      return res.status(400).json({ message: "Institution already registered" });
    }

    const newInstitution = new Institution({ clerkUserId });

    await newInstitution.save();
    res.status(201).json({message: "Institution registered successfully."}, newInstitution);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateInformation = async (req, res) => {
    try {
      const { id } = req.institutionId; 
      const updates = req.body;
  
      const institution = await Institution.findById(id);
      if (!institution) {
        return res.status(404).json({ message: "Institution not found." });
      }
  
      Object.keys(updates).forEach((key) => {
        institution[key] = updates[key];
      });
  
      await institution.save();
  
      res.status(200).json({ message: "Institution details updated successfully.", institution });
    } catch (err) {
      res.status(500).json({ message: "An error occurred while updating the institution.", error: err.message });
    }
  };
  
  module.exports = { registerInstitution, updateInformation };