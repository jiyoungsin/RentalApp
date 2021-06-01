import express from 'express';
import mongoose from 'mongoose';
import Rental from '../models/rental.model';

const app = express.Router(); 

app.get("/",(req,res)=>{

});

app.post("/Update",(req,res)=> {

});

app.get("/rentals",async (req,res)=>{
    const payload = await Rental.findOne({_id: "60a9273f294f23ffb8f4e74e"});
    res.status(200).json(payload);
});

module.exports = app;