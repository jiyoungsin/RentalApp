import express from 'express';
import mongoose from 'mongoose';

const app = express.Router();

app.post('/signup', async (req, res) => {
    const { password, firstName, lastName, email, phoneNumber, userName } = req.body;
    const database = mongoose.connection;
    console.log("Post Request to DB");
    database.collection("user").insertOne({
            email : email,
            password : password,
            lastName : lastName,
            userName : userName,
            firstName : firstName,
            phoneNumber : phoneNumber,
        });
    res.status(200).json("Saved to Database");
});


app.post('/login', async (req, res) => {
    // change to req.body later when not using postman
    let email = req.query.userName;
    let password = req.query.password;

    res.status(200).json("Successful login");
});


module.exports = app;
