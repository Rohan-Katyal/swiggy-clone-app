// Controller
const adminUserController = require("../Controller/adminUser.controller.js");

// Defining Routes
module.exports = (app)=>{

    // adminUser regitration route
    app.post("/api/admin/userRegister", adminUserController.registerAdminUser);
}