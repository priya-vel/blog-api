const { Router } = require("express");
const { PostController } = require("./post.controllers");
const { Authorization } = require("../middlewares/Authorization");



const PostRoutes = Router();

PostRoutes.post("/", Authorization, PostController.create);
PostRoutes.get("/", PostController.getMany);
PostRoutes.get("/:id", PostController.getOne);
PostRoutes.get("/users:id", PostController.getUserPost);
PostRoutes.delete("/:id", Authorization, PostController.delete)


module.exports = {
    PostRoutes
}