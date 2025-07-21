const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const app = express();

app.use(express.json());

app.listen('3100', (req, res)=>{
    console.log('Started !!');
})


// GET Operation
app.get('/get', (req, res)=>{
    res.send('Server Get operation');
})


// POST Operation

app.post('/post', (req,res)=>{
    const val = req.body;

    res.send(val);
})

// const storage = require('node-persist');

// storage.init();

// POST Operation
// app.post('/post',jsonParser,  async(req, res)=>{
//     // const val = req.body;

//     const {id, fName, lName, Course, Branch} = req.body;

//     const studentObj = {fName, lName, Course, Branch}

//     // res.send(`Value : ${val}`);
//     // res.status(200).json(val);

//     await storage.setItem(id, JSON.stringify(studentObj));

//     // res.send(studentObj);
//     res.send('Student Added !!')
// })


// app.get('/get/:id', jsonParser, async(req, res)=>{

//     const id = req.params.id;

//     res.send(await storage.getItem(id));  
// })


// app.get('/getall', jsonParser, async(req,res)=>{
//     var students = [];

//     for(let st of await storage.values()){
//         students.push(st);
//     }

//     console.log(students);
//     res.send(students);

//     // res.send(students);
// })


// app.delete('/delete', jsonParser, async(req,res)=>{
//     await storage.clear();

//     res.send('Student Data has been Deleted !!');
// })

