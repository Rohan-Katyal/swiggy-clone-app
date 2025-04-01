
// importing userModel
const userModel = require('../Model/user.model.js');

// importing bcrypt library
const bcrypt = require("bcrypt")

// importing jsonwebtoken library
const jwt = require('jsonwebtoken');

exports.register =(req, res)=>{
    

    console.log(req.body);

    // getting req.body input
    const {name, email, password}  = req.body;

    // res.send(`Name : ${name},
    // Email : ${email},
    // Password : ${password}`);

    
    // res.send(req.body);


    // creating a new row in our user Model
    const newuser = new userModel({
        name,
        email, 
        password : bcrypt.hashSync(password, 10)
    });

    // findOne helps us to find an entry inside the Model,
    // or we can say it finds the document inside the MondoDB database,
    // matching the defined filter.

    // here we are using the findOne method to find the document
    // with the same email id as the current user input
    userModel.findOne({email})
    .then((data)=>{
        if (data){
            return res.status(400).send({message : 'User already exists!!'})
        }
        newuser.save().then((data)=>{
            res.status(200).json({message : "user registed!!"});
        })
    }).catch((err)=>{
        return res.status(500).send({
            message : err.message || 'Some error occured whie registering!!'
        })
    })

}


// login in a user
exports.login = (req, res)=>{
    const {email, password} = req.body;

    userModel.findOne({email}).then((data)=>{
        if(!data){
            res.status(404).json({message:"User not Found!!"})
            return;
        }
        
        // Comparing password to check the validity
        let isValidPassword = bcrypt.compareSync(password, data.password);
        
        // If password is not valid
        if(!isValidPassword){
            return res.status(401).send({message: "Invalid Password!!"});
        }

        // sign the jwt token
        // token creation using jwt sign method
        let token = 
        jwt.sign(
            {id: data._id},// unique Data Payload
            "secretKey", 
            {expiresIn: "1h"} // optional feature
        );

        // if password is valid
        
        res.send({
            user :{
                id : data._id,
                email : data.email,
                name : data.name
            },
            accessToken : token
        })

        return;
    }).catch((err)=>{

        res.status(500).send({message : `Server did not respond!!`});
        return;
    })
}


exports.showUser=(req,res)=>{
    const {email,show} = req.body;

    if(show){
        // here we are using findOne function 
        // we are finding our document using email field,
        // 
        userModel.findOne({email})
        .then((data)=>{
            return res.status(200).send(data);
        }).catch((err)=>{
            res.status(404).json({message:"Error 404!!\nUser not Found!!"});
            return;
        })
    }
    else{
        res.status(401).json({message : "Please provide valid Authentication credentials!!"})
        return;
    }
};

// exports.getUserData = (req,res)=>{
//     const {_id} = req.body;

//     if(_id){
//         userModel.findOne({_id})
//         .then((data)=>{

//             console.log(`data : ${data}`);

//             const email = data.email
//             const password = data.password
//             return res.status(200).send({email, password});
            
//         })
//         .catch((err)=>{
//             res.status(404).json({message : 'Data Error!!'})
//             return;
//         })
//     }

//     else{
//         res.status(401).json({message : 'User Not Found!!'})
//         return;
//     }

// }

exports.showAll = (req,res)=>{
    // const {showAll} = req.body;

    // if(showAll){
        userModel.find()
        .then((data)=>{
            res.status(200).json(data);
        })
        .catch((err)=>{
            console.log(err);
            res.status(404).json({message : "Data not Found!!"})
        });
    // }

    // res.status(403).json({message:"Please provide valid authentication method!!"});
}

exports.cartAddItem = (req,res)=>{
    let {_id, cartitem} = req.body;

    userModel.findOne({_id})
    .then((data)=>{
        if(!data){ 
            return res.status(400).json({message : "User Data Error!!"})           
        }

        data.cart.push(cartitem);

        data.save()
        .then(()=>{
            // console.log(data);
            return res.status(200).json({message : 'Item Added Successfuly!!'});
        })
        .catch((err)=>{
            return res.status(500).json({message : 'Error Saving Item!!'});
        })

        return
        })
        .catch((err)=>{
        return res.status(404).json({message : err, error : err})
    })
}

exports.getCartItem = (req,res)=>{
    let {_id} = req.body;

        userModel.findOne({_id})
        .then((data)=>{

        // console.log(data);
        if(!data){
            return res.status(400).send({message: 'User Data Error!!'});
        }

        // console.log(data);
        res.status(200).json(data);
        return data;    
        // return data;
        // res.status(200).json(data);
        // return response.json();
    })
    .catch((err)=>{
        return res.status(404).send({message : 'Internal Server Error'});
    })
}

exports.clearCart = (req,res)=>{
    let {_id} = req.body;

    userModel.findOne({_id :_id})
    .then((data)=>{

        if(!data){
            res.status(404).json({message : 'User Not Found!!'});
        }

        // console.log(data.cart.length);

        data.cart = [] 
        
        // console.log(data.cart);

        data.save()
        .then(()=>{
            return res.status(200).send(data);
        })
        .catch((err)=>{
            res.status(404).json({message : "User Not Found!!"})
        })

    })
    .catch((err)=>{
        res.status(500).send({message : 'User Not Found!!'})
    });
}

// bcrypt library for encryption
// It helps us to hash our password
// bcrypt provides us with encryption and decyption of user passwords 