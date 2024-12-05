const express = require('express') // express file import
const mongoose = require('mongoose');
const { User } = require('./models/User');

const server = express() // express fn instance create and storing in a variable app

const PORT = 3000

// http://localhost:3000/hamaphlarequest
server.get('/', async function (req, res) {

 const users =   await User.find()

 console.log("users -->", users);
 

    res.send('Hello World from Sushmita, Mordhwaj, and Pradeep. We enjoyed learning express. Creating a server using express is very easy. We hope MongoDB is easy too')
  })
  
// app/server listen -> on
server.listen(PORT, ()=> {
    console.log(`Hello from Mordhwaj! Our Backend Express Server is running on port ${PORT}, url:http://localhost:${PORT}`); 
})

mongoose.connect('mongodb+srv://mordhwaj:93W4HRpGgqDnDQrD@cluster0.g9csg.mongodb.net/oceaannboard')
  .then(() => {
    console.log('Mongodb Connected!')
  });

// request methods
// GET
// POST
// PUT
// DELETE
// PATCH
  