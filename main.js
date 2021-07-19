const express = require("express");
const { json, urlencoded } = require("express");
const { DBConnection } = require("./config/database");
const { PostRoutes } = require("./post/post.routes");
const { UserRoutes } = require("./users/user.routes");
require('dotenv').config()
/**
 * This is used to give the database status where database is connected or not
 */
const app = express();

DBConnection ().then((res) => {
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})

app.use(json());
app.use(urlencoded({extended: true}));
app.use("/users", UserRoutes);
app.use("/post", PostRoutes);
console.log(process.env.DB_HOST);

module.exports = {
    app
}