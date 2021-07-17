const { Schema, model } = require("mongoose");


const UserModel = model("Users", Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}))

module.exports = {
    UserModel
}