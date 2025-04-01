const mongoose = require("mongoose");

// Creating Schema for Model Creation

const adminUserSchema = new mongoose.Schema({
    user_name : {
        type : String,
        required : true
    },
    user_email : {
        type : String,
        required : true,
        unique : [true, 'User already exists!!']
    },
    user_password : {
        type : String,
        required : true
    },
    user_role : {
        type : String,
        required : true
    }
});


// Creating Model using Schema

const adminUserModel = new mongoose.model('adminUser_collection', adminUserSchema);

module.exports = adminUserModel;