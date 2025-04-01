const mongoose = require('mongoose');

// Createing Document Schema
const restaurantSchema = new mongoose.Schema({
    name : String,
    avgRating : String,
    cuisines : Array,
    cloudinaryImageId : String,
    costForTwo : String,
});

// Creating Model inorder to use Document Schema and Create Documents
const restaurantModel = new mongoose.model('restaurants', restaurantSchema);
//                                          model name      document schema


module.exports = restaurantModel

