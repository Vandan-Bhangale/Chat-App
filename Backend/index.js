 const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");

const authRoute = require("./Routes/authRoute");
const messageRoute = require("./Routes/messageRoutes");
const userRoute = require("./Routes/userRoute");

const app = express();
app.use(cors({origin:process.env.CORS_ORIGIN,credentials:true}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
const URI = process.env.MONGODB_URI;

const PORT = process.env.PORT || 3001;

app.use(cookieParser());
app.use("/api/users",userRoute);
app.use("/api",authRoute);
app.use("/api",messageRoute);

mongoose.connect(URI).
then(() => {
    app.listen(PORT,() => {
        console.log('Connectiong to DB is successfull.');
        console.log(`Server is now live on http://localhost:${PORT}`);
    });
}).catch ((err) => {
    console.log("Error while connecting to DB.",err);
})
