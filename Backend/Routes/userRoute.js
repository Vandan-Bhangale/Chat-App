const express = require("express");
const route = express.Router();
const userController = require("../Controller/userController");

route.get("/login",userController.postLogin);

module.exports = route;