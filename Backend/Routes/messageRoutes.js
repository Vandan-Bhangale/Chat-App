const express = require("express");
const route = express.Router();
const messageController = require("../Controller/messageController");

route.post("/send/:id",messageController.sendMessage);

module.exports = route;