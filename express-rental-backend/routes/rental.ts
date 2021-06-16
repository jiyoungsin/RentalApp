import express from 'express';
import mongoose from 'mongoose';

const app = express.Router();

// this route is used when creating a Rental.
// we will need to append the new rentals to the users array of rentals.
app.post('/createrental', async (req, res) => {
    const { address, unitPictures, title, price, category, description, parking, room, bathroom, pet } =
        req.body;
    const database = mongoose.connection;
    console.log('Post Request to DB CreateRental');
    database.collection('rentUnit').insertOne({
        title: title,
        price: price,
        address: address,
        category: category,
        description: description,
        unitPictures: unitPictures,
        parking: parking,
        room: room,
        bathroom: bathroom,
        pet: pet,
    });
    res.status(200).json('Saved to Database');
});
module.exports = app;
