const express = require("express");
const route = express.Router();
const userController = require("../Controller/authController");

route.post("/login",userController.postLogin);
route.post("/register",userController.postRegister);

module.exports = route;
