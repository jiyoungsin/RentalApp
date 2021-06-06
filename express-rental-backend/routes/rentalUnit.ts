import express from 'express';
import mongoose from 'mongoose';
import Rental from '../models/rental.model';

const app = express.Router();

app.get("/",(req,res)=>{

})

app.get("/:id",async (req,res)=>{
    let id = req.params.id;
    const payload = await Rental.findOne({_id: id});
    res.status(200).json(payload);
})

app.delete("/delete/:id",async (req,res)=>{
    let id = req.params.id;
    const payload = await Rental.deleteOne({_id: id});
    res.status(204);
})


module.exports = app;
