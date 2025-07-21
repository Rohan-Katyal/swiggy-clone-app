

const userController = require('../Controller/user.controller.js');

module.exports = (app)=>{
    
    // POST Operation for registering User to Databse.
    app.post('/api/userRegister', userController.register);

    // POST Operation for Login in the User
    app.post('/api/userLogin', userController.login);

    // POST Operation for user information
    app.post('/api/userInfo', userController.showUser);

    // GET Operation for all user Information
    app.get('/api/UsersInfo', userController.showAll);

    // POST operation for adding cart Items
    app.post('/api/cart/updateItem', userController.cartAddItem);

    // POST operation for getting cart Items
    app.post('/api/cart/getCartItem', userController.getCartItem);

    // POST operation for deleting cart Items
    app.post('/api/cart/deleteItems', userController.clearCart);

    // POST operation for auto login
    // app.post('/api/autoLogin', userController.getUserData);
};
