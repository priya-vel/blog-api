const { UserService } = require("../users/service");
const jwt = require("jsonwebtoken");



const Authorization = async (req,res,next) => {
try{
    let auth = req.headers.authorization;
    let arr = String(auth).split(" ");

    if(arr.length != 2){
        throw ("token not valid")
    }

    if(arr[0]!== "Barear"){
        throw ("token not valid")
    }

    const verify = jwt.verify(arr[1],process.env.APP_SECRET);
    let id = verify.sessionId;
    let dbUser= await UserService.getOneUser({_id:id})
    if(!dbUser){
        throw "invalid token"
    }

    req["user"] = {
        _id : dbUser.id,
        name: dbUser.name,
        email:dbUser.email
    };
    next();


}catch(error){
    res.status(401).json({
        error: {
            message: error
        }
    })
}
}

module.exports= {
    Authorization
}