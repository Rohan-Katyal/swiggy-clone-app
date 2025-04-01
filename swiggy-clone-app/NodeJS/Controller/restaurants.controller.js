// Controller File has all the logics related to the API calls,
// i.e. what are the different functionalities involved for the different
// API call operations, such as GET, POST, DELETE, PUT and others.

const restaurantModel = require("../Model/restaurants.model.js");
const mongoose = require("mongoose");

// Saving client data into the Database Model
exports.create = (req, res) => {
  // Getting data from the request Body from the client

  const keys = Object.keys(req.body);
  var values = {};

  for(let i=0;i<keys.length;i++){
  values = req.body[keys[i]];
  }

  const { name, avgRating, cuisines, cloudinaryImageId, costForTwo} = 
  values

  console.log({
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwo,
  });

  // creating a new Restaurant instance for storing into the model
  const newRestaurant = new restaurantModel({
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwo,
  });

  newRestaurant
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).send("Error Occured !!");
      }
      res.send(data);
    })
    .catch((err) =>
      res.status(500).json({ message: "Server not available!!" })
    );
};

exports.fetch = (req, res) => {
  restaurantModel
    .find()
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Not Found !!" });
      }
      console.log(data);
      res.send(data);
    })
    .catch((err) =>
      res.status(500).json({ message: "Server Not Available !!" })
    );
};

exports.fetchOne = (req, res) => {
  const id = req.params.id;

  restaurantModel
    .findById(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(404).json({ message: "Data Not Found !!" });
    });
};

const db = mongoose.connection;

exports.deleteOne = (req, res) => {
  const id = req.params.id;

  restaurantModel
    .deleteOne({ _id: id })
    .then(() => {
      res.send("Deletion Complete!!");
    })
    .catch((err) => {
      res.status(404).json({ message: "Error Occured !!" });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  restaurantModel
    .findByIdAndUpdate(
        id, 
        { cuisines: ["Chhole Bhature"] }, 
        { new: true }
    )
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.stats(500).json({ message: "Server Not Available !!" });
    });
};
