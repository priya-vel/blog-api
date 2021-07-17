const { Router } = require("express");
const { Authorization } = require("../middlewares/Authorization");

const { UserController } = require("./user.controllers");



const UserRoutes = Router();

UserRoutes.post("/register",UserController.register);
UserRoutes.post("/login", UserController.login);
UserRoutes.get("/",Authorization,UserController.getAll);
UserRoutes.get("/me",Authorization, UserController.getMyData);


module.exports = {
    UserRoutes
}
