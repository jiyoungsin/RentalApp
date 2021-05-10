import path from 'path';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user.model';
import { userInfo } from 'os';

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

app.post('/', async (req, res) => {
    console.log("Post Request to DB");  
    const database = mongoose.connection;
    database.collection("user").save({
            uid : "12345",
            password : "123456",
            firstName : "foo",
            lastName : "faa",
            email : "12345@gmail.com",
            phoneNumber : "12345",
        });
    res.status(200).json("Saved to Database");
});

app.listen(PORT, ()=>{
    console.log("backend is running");
})