const express = require("express");
const route = express.Router();
const userController = require("../Controller/userController");
const protect = require("../middleware/protect");

route.get("/",protect,userController.getUser);

module.exports = route;