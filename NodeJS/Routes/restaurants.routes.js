const restaurantController = require('../Controller/restaurants.controller.js');

const verifyToken = require('../Middleware/verifyToken.js');

module.exports = (app)=>{

    // POST Operation for uploading Restaurant Data
    app.post('/api/restaurantpost', restaurantController.create);

    // GET Operation to get all Restaurant Data
    app.get('/api/getallrestaurants', restaurantController.fetch);
    // GET Operation to get one Restaurant Data
    app.get('/api/getrestaurant/:id', restaurantController.fetchOne);

    // PUT Operation to update Restaurant Data
    app.put('/api/restaurantUpdate/:id', restaurantController.update);

    // DELETE Operation to delete one Restaurant Data
    app.delete('/api/deleterestaurant/:id', restaurantController.deleteOne);
    
}