
const jwt = require('jsonwebtoken');
const userModel = require('../Model/user.model');

const verifyToken = (req,res,next)=>{

    // we are checking the following conditions, inside the below if conditional statement
    // req.headers => We are checking for the header inside the request 
    // req.headers.authorization => We are checking if their is any authorization feild inside the header of the request 
    // req.headers.authorization.split(" ")[0]==="JWT"
    // Here we are first splitting the authorization field value of the header,
    // and we are doing a check if it is JWT or not.
    // basically we are doing these operations in order to check if the first string is JWT or not

    if (
        req.headers && 
        req.headers.authorization && 
        req.headers.authorization.split(" ")[0]==="JWT")
        {
            jwt.verify(
                req.headers.authorization.split(" ")[1],
                "secretKey", 
                function(err,verifiedToken){

                    if(err){
                        res.status(401).json({message : "Invalid JWT Token !!"});
                    };

                    console.log(verifiedToken);

                    // we are using ._id here as we have 
                    // used _id as our unique payload inside the token
                    userModel.findById(verifiedToken.id)
                    .then((user)=>{
                        req.user = user;
                        next();
                    })
                    .catch(err=>{
                        res.status(500).json({message : "Server not available !!"});
                    })
                }
            );
        }
        else{
            res.status(403).json({message : "Token not found!!"})
        };

    /*
    req.headers => request header,
    req.headers.authorization => authorization field in the request header
    req.headers.athorization.split(" ")[0] => Getting the value at the first index after 
                                            splitting the authorization value
    */

};


module.exports = verifyToken;