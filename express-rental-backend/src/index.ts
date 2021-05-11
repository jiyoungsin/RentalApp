import path from 'path';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user.model';
import { userInfo } from 'os';

const { check, validationResult } = require('express-validator');

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use(express.urlencoded({
    extended: true,
}));

mongoose.connect("mongodb+srv://admin:admin@cluster0.icaj7.mongodb.net/rentalapp?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(()=>{
    console.log("connected to Mongo database");
}).catch((error)=>{
    console.log(error);
    console.log("Error occurred connecting to Database");
});

app.get('/', async (req, res) => {
    console.log("Fetching Data from DB");
    const payload = await User.findOne({firstName: "paul"});
    res.status(200).json(payload);
});

app.post('/signup', async (req, res) => {
    // change to req.body later when not using postman
    const { uid, password, firstName, lastName, email, phoneNumber } = req.query;
    const database = mongoose.connection;

    console.log("Post Request to DB");
    database.collection("user").insertOne({
            uid : `${uid}`,
            password : `${password}`,
            firstName : `${firstName}`,
            lastName : `${lastName}`,
            email : `${email}`,
            phoneNumber : `${phoneNumber}`,
        });
    res.status(200).json("Saved to Database");
});

app.post('/login', async (req, res) => {
    // change to req.body later when not using postman
    let email = req.query.userName;
    let password = req.query.password;

    res.status(200).json("Successful login");
});

app.get("/rentalUnit",(req,res)=>{
    /*Rental.find(function(err,docs){ 
        let rowNeeded = [];
        for(let i=0; i< docs.length; i++){
                rowNeeded.push(docs[i]); 
        }
        res.render("Rental/dashboard",{
            title: "dashboard",
            pageHeader: "dashboard",
            units: rowNeeded,
        });
    });*/
})

app.get("/rentalUnit/:product",(req,res)=>{
    let prodType = req.params.product;
    //Rental.find()
})

app.get("/profile",(req,res)=>{

});
app.post("/UpdateProfile",(req,res)=> {

});


app.listen(PORT, ()=>{
    console.log("backend is running");
})