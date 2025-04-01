const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes = require('./Routes/restaurants.routes.js');
const routesUser = require('./Routes/user.routes.js');
const routesAdminUser = require('./Routes/adminUser.routes.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin : 'http://localhost:3000',
//     methods : ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
//     allowedHeaders : ['Content-Type', 'Authorization']
// }));

mongoose.connect("mongodb+srv://Rohan:Rohan@cluster0.tpc5v6g.mongodb.net/");

app.listen(5000, '127.0.0.1',()=>{
    console.log('Server running on port 5000')
})

// Creating Middleware function
// function loggedInUserRequest(req, res, next){
//     console.log('User Initiated Request!!');
//     next();
// };

// Middleware
// Middleware is a simple javascript function used inorder to execute
// some functionality between a request and its respective responce.
 
// Using App level Middleware
// Any request present here will first execute this middleware
// Any API call present inside this App will first execute this middleware and create responce according to the API call made
// so the call will execute according to 
// request made => Middleware (loggedInUserRequest) => responce created
// app.use(loggedInUserRequest);

app.get("/users", (req,res)=>{
    res.send('Call Initiated!!');
});

function authUser(req,res, next){
    console.log('User logged in Successfully!!');

    next();
};

// Using Root Level Middleware
// Middleware sequence 
// First Application Level Middleware will execute then=> Root Level Middleware will execute
app.post("/authUser",authUser, (req,res)=>{
    const {name, email} = req.body;

    res.status(200).json({message:`Name : ${name},Email : ${email}`})
});

const db = mongoose.connection;

db.on('error', ()=>{
    console.log('Error Occured !!');
})

db.on('open',()=>{
    console.log('Connection COmplete!!');
})

routes(app);
routesUser(app);
routesAdminUser(app);