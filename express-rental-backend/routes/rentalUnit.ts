import express from 'express';
import mongoose from 'mongoose';

const app = express.Router();

app.get("/",(req,res)=>{
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

app.get("/:product",(req,res)=>{
    let prodType = req.params.product;
    //Rental.find()
})


module.exports = app;
