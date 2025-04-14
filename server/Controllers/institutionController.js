const Institution = require("../Models/Institution");
const Announcement = require("../Models/Announcement")
const jwt = require("jsonwebtoken")

const registerInstitution = async (req, res) => {
  try {
    const { id , name} = req.body;

    const existingInstitution = await Institution.findOne({ id });
    if (existingInstitution) {
      const token = jwt.sign({id: existingInstitution.id}, process.env.JWT_SECRET)
      return res.status(200).json({ message: "Institution already registered", institution: existingInstitution , token: token});
    }

    console.log(id, name)
    const newInstitution = new Institution({ id: id , name: name});

    await newInstitution.save();
    res.status(201).json({message: "Institution registered successfully.", institution: newInstitution });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
};

const updateInformation = async (req, res) => {
    try {
      const id = req.id;
      const { name , description , workingHours , location , contactInfo } = req.body;
  
      const institution = await Institution.findOne({id: id});
      if (!institution) {
        return res.status(404).json({ message: "Institution not found." });
      }
  
      institution.name = name || institution.name;
      institution.description = description || institution.description;
      institution.location = location || institution.location;
      institution.contactInfo = contactInfo || institution.contactInfo;

      const updatedWorkingHours = {};

      console.log(workingHours)

      if (workingHours) {
        Object.keys(workingHours).forEach((item) => {
          updatedWorkingHours[workingHours[item].day] = {
            open: workingHours[item].open || "00:00", // Default to "00:00" if not provided
            close: workingHours[item].close || "00:00", // Default to "00:00" if not provided
          };
        });
      }
      institution.workingHours = updatedWorkingHours;

      await institution.save();
  
      res.status(200).json({ message: "Institution details updated successfully.", institution });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: "An error occurred while updating the institution.", error: err.message });
    }
  };

  const getAnnouncements = async (req, res) => {
    try{
      const id = req.id;
      
      const institution = await Institution.findOne({id: id})

      const announcements = await Announcement.find({institutionId: institution._id});
      
      if(announcements.length === 0){
        return res.status(404).json({ messege: "No announcements were found." });
      }
      return res.status(200).json({ message: "Announcements retrieved succesfully" , announcements });
    }catch(error){
      console.log(error);
      return res.status(500).json({ message: "Server error"});
    }
  }

  const addAnnouncement = async (req, res) => {
    try {
      const id = req.id;
      const { title , content } = req.body;

      console.log(id, title, content)
  
      const institution = await Institution.findOne({id: id});
      if (!institution) {
        return res.status(404).json({ message: "Institution not found." });
      }
  
      const announcement = new Announcement({
        institutionId: institution._id,
        title: title,
        content: content
      })

      await announcement.save();
  
      res.status(200).json({ message: "Announcement added successfully.", institution });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: "An error occurred while adding the announcement.", error: err.message });
    }
  };

  const deleteAnnouncement = async (req, res) => {
    try {
      const id = req.id;
      const { announcementId } = req.body;
      console.log()
  
      const institution = await Institution.findOne({id: id});
      if (!institution) {
        return res.status(404).json({ message: "Institution not found." });
      }

      const announcement = await Announcement.findById(announcementId);

      if(!announcement){
        return res.status(404).json({ message: "Announcement not found" });
      }

      if(announcement.institutionId.toString() !== institution._id.toString()){
        return res.status(401).json({ message: "Do not have authorization to delete this announcement." })
      }
    
      await Announcement.findByIdAndDelete(announcementId)
      res.status(200).json({ message: "Announcement deleted successfully.", institution });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: "An error occurred while deleting the announcement.", error: err.message });
    }
  };

  const updateAnnouncement = async (req, res) => {
    try {
      const id = req.id;
      const { announcementId , title, content } = req.body;

      console.log(announcementId, title, content)
  
      const institution = await Institution.findOne({id: id});
      if (!institution) {
        return res.status(404).json({ message: "Institution not found." });
      }

      const announcement = await Announcement.findById(announcementId);

      if(!announcement){
        return res.status(404).json({ message: "Announcement not found" });
      }

      if(announcement.institutionId.toString() !== institution._id.toString()){
        return res.status(401).json({ message: "Do not have authorization to upade this announcement." })
      }
    
      await Announcement.findByIdAndUpdate(announcementId, {title: title, content: content })
      res.status(200).json({ message: "Announcement updated successfully.", institution });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: "An error occurred while updating the announcement.", error: err.message });
    }
  };
  
  module.exports = { registerInstitution, updateInformation , getAnnouncements , addAnnouncement , deleteAnnouncement , updateAnnouncement};