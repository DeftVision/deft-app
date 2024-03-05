const express = require("express");
const router = express.Router();
const { getFiles, getFile, createFile, updateFile, deleteFile } = require("../controllers/uploadFileController")


router.get("/files", getFiles);
router.get("/file/:id", getFile);

router.post("/create", createFile);

router.patch("/update/:id", updateFile);

router.delete("/delete/:id", deleteFile);


module.exports = router;