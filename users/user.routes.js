const { Router } = require("express");
const { Authorization } = require("../middlewares/Authorization");

const { UserController } = require("./user.controllers");


/**
 * In this we can initializing post routes
 *  @category Routes
 * @subcategory UserRoutes
 */
const UserRoutes = Router();

UserRoutes.post("/register",UserController.register);
UserRoutes.post("/login", UserController.login);
UserRoutes.get("/",Authorization,UserController.getAll);
UserRoutes.get("/me",Authorization, UserController.getMyData);


module.exports = {
    UserRoutes
}
