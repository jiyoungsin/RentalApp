import express from 'express';
import mongoose from 'mongoose';
import * as userController from '../models/controllers/userController';
import  User from '../models/user.model';

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express.Router();

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

//app.get('/login', userController.allUsers);
app.post('/login', async (req, res)=>{
    try{
        await User.findOne({email: req.body.data.email}, (err: any, user: any)=>{ 
            if(err){
                res.send(err);
            }else{
                let passwordAttempt = req.body.data.password
                if (bcrypt.compareSync(passwordAttempt, user.password)){
                    return res.status(200).json(user);
                }
                else{
                    console.log(err);
                    console.log("Incorrect Password")
                    res.send("Incorrect Password");
                };
            }
        })
    }catch{
        console.log("ERROR: loggin in")
    }
})

module.exports = app;
