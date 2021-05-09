import path from 'path';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import User from '../models/users.model';

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
    console.log("Home routeeeeeeee")
    //res.sendFile(path.join(__dirname + "/test.html"));
    
    const payload = await User.findOne({ firstName: "paul"});
    console.log("$$$$$$")
    console.log(payload);
    res.status(200).json(payload);
});

app.listen(PORT, ()=>{
    console.log("backend is running");
})