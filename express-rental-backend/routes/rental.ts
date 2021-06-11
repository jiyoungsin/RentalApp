import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';

const  uploadMiddleware = require('../src/middleware/uploadDriver');

const app = express.Router(); 

app.post("/createRental", uploadMiddleware.single(`file`), async (req, res) => {
    const { address, title, email, price, contact, phoneNum, category, description } = req.body;
    const database = mongoose.connection;

    console.log("Post Request to DB CreateRental");
    console.log(req);
    database.collection("rental").insertOne({
            image: {
                data: fs.readFileSync(req.body.file.path),
                contentType : "image/jpeg",
            },
            title: title,
            email: email,
            price: price,
            contact: contact,
            address : address,
            phoneNum: phoneNum,
            category: category,
            description: description,
        });
    res.status(200).json("Saved to Database");
});


module.exports = app;