const { model, Schema, SchemaTypes, } = require("mongoose");



/**
 * This object gives the structure of the user-post model
 *  @category Models
 * @subcategory PostModel
 */
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