const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoute = require("./Routes/userRoute");

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
const URI = process.env.MONGODB_URI;

const PORT = process.env.PORT || 3001;

app.use("/api",userRoute);

mongoose.connect(URI).
then(() => {
    app.listen(PORT,() => {
        console.log('Connectiong to DB is successfull.');
        console.log(`Server is now live on http://localhost:${PORT}`);
    });
}).catch ((err) => {
    console.log("Error while connecting to DB.",err);
})