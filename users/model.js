const { Schema, model } = require("mongoose");

/**
 * This object gives the structure for the project, to which users  can use the project
 *  @category Models
 * @subcategory UserModel
 */
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