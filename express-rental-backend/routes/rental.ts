import express from 'express';
import mongoose from 'mongoose';

const app = express.Router();

// this route is used when creating a Rental.
// we will need to append the new rentals to the users array of rentals.
app.post('/createrental', async (req, res) => {
   const { address, unitPictures, title, email, price, contact, phoneNum, category, description } =
      req.body;
   const database = mongoose.connection;
   console.log('Post Request to DB CreateRental');
   database.collection('rental').insertOne({
      title: title,
      email: email,
      price: price,
      contact: contact,
      address: address,
      phoneNum: phoneNum,
      category: category,
      description: description,
      unitPictures: unitPictures,
   });
   res.status(200).json('Saved to Database');
});
module.exports = app;
