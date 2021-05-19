import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
//import autoIncrement from 'mongoose-auto-increment';
//import rentalController from '../controllers/rental';
import dotenv from 'dotenv';

//const { check, validationResult } = require('express-validator');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

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
//autoIncrement.initialize(mongoose.connection);





import User from '../models/user.model';
//app.use('/rentals', rentalController);

app.get('/', async (req, res) => {
    console.log("Fetching Data from DB");
    const payload = await User.findOne({firstName: "paul"});
    res.status(200).json(payload);
});

app.post('/signup', async (req, res) => {
    // change to req.body later when not using postman
    const { password, firstName, lastName, email, phoneNumber } = req.body;
    const database = mongoose.connection;

    console.log("Post Request to DB");
    database.collection("user").insertOne({
            password : password,
            firstName : firstName,
            lastName : lastName,
            email : email,
            phoneNumber : phoneNumber,
        });
    res.status(200).json("Saved to Database");
});

// app.post('createRental', async (req, res) => {
//     // change to req.body later when not using postman
//     const { file, title, email, price, contact, phoneNum, category, description } = req.body;
//     const database = mongoose.connection;

//     console.log("Post Request to DB CreateRental");
//     database.collection("rental").insertOne({
//             file: file,
//             title: title,
//             email: email,
//             price: price,
//             contact: contact,
//             phoneNum: phoneNum,
//             category: category,
//             description: description,
            
//         });
//     res.status(201).json("Saved to Database");
// });

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
    console.log("backend is running on Port : ", PORT);
})