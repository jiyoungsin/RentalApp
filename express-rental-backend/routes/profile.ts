import express from 'express';
import mongoose from 'mongoose';
import Rental from '../models/rental.model';

const app = express.Router(); 

app.get("/",(req,res)=>{

});

app.post("/Update",(req,res)=> {

});

app.get("/rentals",async (req,res)=>{
    const payload = await Rental.findOne({_id: "60b6719124f0216b3ec5ec91"});
    res.status(200).json(payload);
});

module.exports = app;