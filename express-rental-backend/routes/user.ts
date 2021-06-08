import express from 'express';
import mongoose from 'mongoose';

import * as userController from '../models/controllers/userController';
import  User from '../models/user.model';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express.Router();
// route to sign up.
app.post('/signup', async (req, res) => {
    const { password, firstName, lastName, email, phoneNumber, userName } = req.body;
    const database = mongoose.connection;
    console.log("Post Request to DB");
    const hash = bcrypt.hashSync(password, saltRounds);

    try{
        database.collection("user").insertOne({
            email : email,
            password : hash,
            lastName : lastName,
            userName : userName,
            firstName : firstName,
            phoneNumber : phoneNumber,

        })
        res.status(200).json("Saved to Database");
    }catch{
        console.log("ERROR: Did not Create User.")
    }
});

// Checks if the users cred are correct
app.post('/login', async (req, res)=>{
    try{
        const { email, password } = req.body.data;
        await User.findOne({email: email}, (err: any, user: any)=>{ 
            if(err){
                res.send(err);
            }else{
                if (bcrypt.compareSync(password, user.password)){
                    return res.status(200).json(user);
                }
                else{
                    console.log(err);
                    res.send("Incorrect Password");
                };
            }
        })
    }catch{
        console.log("ERROR: login in")
    }
})

module.exports = app;
