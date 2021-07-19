const { PostService } = require("./service");


/**
 *  This object is used to interact with the users  by create, read, update and delete the user-post
 *  @category Controllers
 * @subcategory PostControllers
 */
const PostController = {
    /**
     * 
     * @param {String} title title for the post
     * @param {String} body  body content for the post
     * @param {String} author current logged in user who created the post
     */
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
            let usersId = req.params.id;
            const data = await PostService.getMany({
                author: usersId
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