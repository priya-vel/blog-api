const { PostModel } = require("./model")




const PostService = {
    async create(title, body, author) {
        return new PostModel({title, body, author})
        .save()

    },

    async update(id, data) {
        return PostModel(
            {_id : id},
            {$set: data}
            )
    },

    async getOne(id) {
        return PostModel.findById(id)
    },

    async getMany(filter) {
        return PostModel.find(filter)
    },


    async delete(id) {
        return PostModel.deleteOne({_id: id})
    }
}

module.exports = {
    PostService
}