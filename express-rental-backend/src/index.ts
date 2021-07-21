import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('../routes/user');
const rentalController = require('../routes/rental');
const messageController = require('../routes/message');
const profileController = require('../routes/profile');
const rentalUnitController = require('../routes/rentalUnit');
const maintenanceController = require('../routes/maintenance');
const session = require('express-session');
// const MongoStore = require('connect-mongo');

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);
app.use(cookieParser());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('connected to Mongo database');
    })
    .catch((error) => {
        console.log(error);
        console.log('Error occurred connecting to Database');
    });

// Modulating routes
// MAPs EXPRESS TO ALL OUR  ROUTER OBJECTS
app.use('/users', userController);
app.use('/rentals', rentalController);
app.use('/profile', profileController);
app.use('/message', messageController);
app.use('/rentalUnit', rentalUnitController);
app.use('/maintenance', maintenanceController);
app.listen(PORT, () => {
    console.log('backend is running on Port :', PORT);
});
