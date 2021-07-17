const { PostService } = require("./service");



const PostController = {
    async create(req, res, next) {
        try{
            let {title, body}= req.body;
            let author  = req.user._id;
            const data = await PostService.create(title, body, author);
            res.status(201).json({
                data: "post created"
            })

        }catch(error){
           res.status(500).json({
            error: {
                message : error
            }
           })
        }
    },
    async update(req,res, next) {
        try{
            let postId = req.params.id;
            let body = req.body;
            const data = await PostService.update(postId, body)
            res.status(200).json({
                post: data
            })
        }catch(error){
            res.status(500).json({
                error: {
                    message: error
                }
            })
        }
    },

    async getOne(req, res, next) {
        try{
            let postId = req.params.id;
            const data = await PostService.getOne(postId)
            res.status(200).json({
               post: data
            })
        }catch(error){
            res.status(500).json({
                error: {
                    message: error
                }
            })
        }
    },

    async getMany(req,res,next) {
        try{
            const data = await PostService.getMany({})
            res.status(200).json({
                posts:data
            })
        }catch(error){
            res.status(500).json({
                error: {
                    message : error
                }
            })
        }
    },
    async getUserPost(req,res,next) {
        try{
            let userId = req.params.id;
            const data = await PostService.getMany({
                author: userId
            })
            res.status(200).json({
                posts:data
            })
        }catch(error){
           res.status(500).json({
            error : {
                message: error
            }
           })
        }
    },
    async delete(req, res, next){
        try{
            let id = req.params.id;
            const data = await PostService.delete(id)
            res.status(200).json({
                data
            })
        }catch(error){
            res.status(500).json({
                error: {
                    message: error
                }
            })
        }
    }

}

module.exports = {
    PostController
}