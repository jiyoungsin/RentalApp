import express from 'express';
import mongoose from 'mongoose';
import Rental from '../models/rental.model';

const app = express.Router();

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

app.put("/editRental/:id",async (req,res)=>{
    let id = req.params.id;
    console.log("id");
    console.log(id);
    console.log("req.body.data");
    console.log(req.body.data);
    const payload = await Rental.updateOne({_id: id}, req.body.data)
    .then((res)=>{
        console.log(res)
        console.log("Successfully Updated Rental")
    })
    .catch((err)=>{
        console.log(err)
        console.log("ERROR: while Updating Rental")
    });
    res.status(204);
})

module.exports = app;
