import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/user.model';
//import Rental from '../models/rental.model';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000 ;
const userController = require('../routes/user');
const rentalController = require('../routes/rental');
const profileController = require('../routes/profile');
const rentalUnitController = require('../routes/rentalUnit');

app.use(cors());
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URI, {
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

// Modulating routes 
app.use('/users', userController);
app.use('/rentals', rentalController);
app.use('/profile', profileController);
app.use('/rentalUnit', rentalUnitController);

app.listen(PORT, ()=>{
    console.log("backend is running on Port :", PORT);
})