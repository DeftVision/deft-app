require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const userRoute = require("./routes/userRoute");
const evaluationRoute = require("./routes/evaluationRoute");
const announcementRoute = require("./routes/announcementRoute");
const fileRoute = require("./routes/fileRoute");
const port = process.env.PORT;
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/usr", userRoute);
app.use("/api/evl", evaluationRoute);
app.use("/api/ann", announcementRoute);
/*app.use("/api/form", actionformRoute);*/
app.use("/api/file", fileRoute);
app.listen(port, () => {
    console.log(`Using port: ${port}`);
})

