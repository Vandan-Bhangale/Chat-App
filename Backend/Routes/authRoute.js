const express = require("express");
const route = express.Router();
const userController = require("../Controller/authController");
const protect = require("../middleware/protect");

route.post("/login",userController.postLogin);
route.post("/register",userController.postRegister);
route.get("/logout",userController.getLogout);
route.get("/me",protect,userController.getMe);

module.exports = route;
