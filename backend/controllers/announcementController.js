const announcementModel = require("../models/announcementModel");



exports.createAnnouncement = async (req, res) => {
    try {
        const { audience, subject, name, content, display, priority } = req.body;
        if(!audience || !subject || !name || !content || !priority) {
            return res.send({
                message: "all fields are required.",
            })
        }

        const announcement = new announcementModel({audience, subject, name, content, display, priority})
        await announcement.save();
        return res.send({
            message: "announcement was created successfully.",
            announcement,
        })
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "creating an announcement callback error.",
            error,
        })
    }
}


exports.getAnnouncements = async (req, res) => {
    try {
        const announcements = await announcementModel.find({});
        if(!announcements) {
            return res.send({
                message: "no announcements were found.",
            })
        }
        return res.send({
            announcementCount: announcements.length,
            announcements,
        })
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "getting all announcements callback error.",
            error,
        })
    }
}


exports.getAnnouncement = async (req, res) => {
    try {
        const { id } = req.params;
        const announcement = await announcementModel.findById(id);
        if(!announcement) {
            return res.send({
                message: "Announcement not found.",
            });
        }
        return res.send({
            announcement,
        })
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "getting an announcement callback error",
            error,
        })
    }
}


exports.updateAnnouncement = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, subject, content, priority, audience, display } = req.body;
        const announcement = await announcementModel.findByIdAndUpdate(id, req.body, {new: true});
        if(!announcement) {
            return res.send({
                message: "Announcement not found",
            })
        }
        return res.send({
            message: `${announcement.name} updated successfully`,
            announcement,
        })


    } catch (error) {
        return res.send({
            message: "updating announcement callback error",
            error,
        })
    }
}


exports.deleteAnnouncement = async (req, res) => {
    try {
        const { id } = req.params;
        const announcement = await announcementModel.findByIdAndDelete(id);
        if(!announcement) {
            return res.send({
                message: "Announcement not found",
            })
        }
        return res.send({
            message: "Announcement deleted successfully",
            announcement,
        })
    } catch (error) {
        return res.send({
            message: "deleting announcement callback error",
            error,
        })
    }
}