var bcrypt = require('bcryptjs');
const { UserModel } = require('./model');

/**
 * This object is a collection of methods which intract with the database related to users
 *  @category Services
 * @subcategory USerService
 */
const UserService = {
     /**
         * this is used to create the users
         */
    createUser(user) {
       
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt);
        let newUser = new UserModel();
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.password = hash;
        newUser.save();
        return "user saved";

    },
    /**
        * this is used to users by id
        */
   async getOneUser(condition) {
       
        return UserModel.findOne(condition)
    },
      /**
         * this is used to all users in the database
         */
    async getAllUser() {
      
        return UserModel.find({})
    },
     /**
    * this is used to update one user
    */

    async updateOneUser(condition, newValue) {
       
        return UserModel.updateOne(condition, {
            $set: newValue,
        }) 
    },
}

module.exports = {
    UserService
}