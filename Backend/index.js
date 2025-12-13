const express = require("express");
require("dotenv").config();

const userRoute = require("./Routes/userRoute");

const app = express();

const PORT = process.env.PORT || 3001;

app.use("/api",userRoute);

app.listen(PORT,() => {
    console.log(`Server is now live on http://localhost:${PORT}`);
})