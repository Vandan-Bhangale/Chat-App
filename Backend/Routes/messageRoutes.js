const express = require("express");
const route = express.Router();
const messageController = require("../Controller/messageController");
const protectRoute = require("../middleware/protect");

route.post("/send/:id",protectRoute,messageController.sendMessage);
route.get("/:id",protectRoute,messageController.getMessage);

module.exports = route;