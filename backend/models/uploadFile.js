const mongoose = require("mongoose");
const schema = mongoose.Schema;

const uploadFileSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
    upload: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const uploadFileModel = mongoose.model("UploadFile", uploadFileSchema);
module.exports = uploadFileModel;