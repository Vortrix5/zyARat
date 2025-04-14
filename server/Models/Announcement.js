const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema(
    {
        institutionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Institution",
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Announcement = mongoose.model("Announcement", AnnouncementSchema, "Announcement");

module.exports = Announcement;
