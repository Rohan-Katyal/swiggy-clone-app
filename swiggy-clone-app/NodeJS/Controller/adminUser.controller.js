const adminUserModel = require("../Model/adminUser.model.js");

const bcrypt = require("bcrypt");

exports.registerAdminUser = (req,res)=>{
    
    // Data from the request body
    const {user_name,user_email,user_password,user_role} = req.body;

    // Storing a new user document inside the Document Collection
    let newAdminUser = new adminUserModel({
        user_name,
        user_email,
        user_password : bcrypt.hashSync(user_password, 10),
        user_role
    });

    adminUserModel.findOne({user_email})
    .then((data)=>{
        if(data){
            res.status(409).json({message : "User already present!!"});
        };
        
        newAdminUser.save().then((data)=>{
            res.status(200).json({message : "User Registered Succesfully!!"});
        })
    })
    .catch((err)=>{
        res.status().json({message : "Server Error!!"});
    });
};