const { model, Schema, SchemaTypes, } = require("mongoose");




const PostModel = model("Posts", Schema({
    title:
    {
        type : String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: SchemaTypes.ObjectId,
        required: true
    }

}))


module.exports = {
    PostModel
}