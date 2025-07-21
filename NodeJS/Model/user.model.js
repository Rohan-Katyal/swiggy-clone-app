const mongoose = require('mongoose');

// Schema Creation for Model
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : [true, 'Email already Exists !!']
    },
    password : {
        type : String,
        required : true
    },
    cart : {
        type : Array
    }
});


// Model Creation
const userModel = new mongoose.model('userModel', userSchema);


// exporting userModel
module.exports = userModel;