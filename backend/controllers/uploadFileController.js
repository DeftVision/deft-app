const uploadFileModel = require("../models/uploadFile");


exports.getFiles = async (req, res) => {
    try{
        const files = await uploadFileModel.find({});
        if(!files) {
            return res.send({
                message: "Files not found."
            })
        }
        if(files) {
            return res.send({
                fileCount: files.length,
                files,
            })
        }
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "getting all files callback error.",
            error,
        })
    }
}

exports.getFile = async (req, res) => {
    try {
        const {id} = req.params;
        const file = await uploadFileModel.findById(id);
        if(!file) {
            return res.send({
              message: "file not found"
            })
        }
        if(file) {
            return res.send({
                file,
            })

        }


    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "getting a file callback error",
            error,
        })
    }
}

exports.createFile = async (req, res) => {
    try {
        const { title, fileName, category, upload } = req.body;
        if(!title || !category || !upload ) {
            return res.send({
                message: "Required fields missing",
            })
        }

        const file = new uploadFileModel({title, fileName, category, upload});
        await file.save();
        return res.send({
            message: "File uploaded successfully",
            file,
        })
    }
    catch (error) {
        return res.send({
            message: "creating a file callback error",
            error,
        })
    }
}

exports.updateFile = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, fileName, category, upload} = req.body;
        const file = uploadFileModel.findByIdAndUpdate(id, req.body, {new: true});
        if(!file) {
            return res.send({
                message: "File not found"
            })
        }
        if(file) {
            return res.send({
                file,
            })
        }
    }
    catch (error) {
        console.log(error)
            return res.send({
                message: "updating a file callback error",
                error,
            })
    }
}

exports.deleteFile = async (req, res) => {
    try {
        const {id} = req.params;
        const file = await uploadFileModel.findByIdAndDelete(id);
        if(!file) {
            return res.send({
                message: "File not found",
            })
        }
        if(file) {
            return res.send({
                message: "File deleted successfully",
                file,
            })
        }
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "deleting a file callback error",
            error,
        })
    }
}