import express from 'express';
import mongoose from 'mongoose';
import User from "../models/user.model";

const app = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post('/signup', async (req, res) => {
    const { password, firstName, lastName, email, phoneNumber, userName } = req.body;
    const database = mongoose.connection;
    console.log("Post Request to DB");
    database.collection("user").insertOne({
            email : email,
            password : bcrypt.hashSync(password, saltRounds),
            lastName : lastName,
            userName : userName,
            firstName : firstName,
            phoneNumber : phoneNumber,
        });
    res.status(200).json("Saved to Database");
});


app.post('/login', async (req, res) => {
    // change to req.body later when not using postman
    const database = mongoose.connection;
    let uemail = req.query.userName;
    let password = req.query.password;
    let success : boolean = false;

    //not sure if this is going to work. Will need to research passwords and how to manage logins
    let logUser: string;
    database.collection("user").findOne({ userName:(uemail) })
    .then( (user) => {
        logUser = user.password;
    });

    success = bcrypt.compareSync(password, logUser);

    if (success)
    {
        console.log("Password Accepted");
    }
    else
    {
        console.log("Wrong Password");
    }

    res.status(200).json("Successful login");
});


module.exports = app;
