const express = require("express");
const router = express.Router();

const { createAnnouncement, getAnnouncements, getAnnouncement, updateAnnouncement, deleteAnnouncement } = require("../controllers/announcementController");

router.get("/announcements", getAnnouncements);
router.get("/announcement/:id", getAnnouncement);

router.post("/create", createAnnouncement);

router.patch("/update/:id", updateAnnouncement);

router.delete("/delete/:id", deleteAnnouncement);

module.exports = router;