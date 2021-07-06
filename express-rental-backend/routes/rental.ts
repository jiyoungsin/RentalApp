import express from 'express';
import mongoose from 'mongoose';
import Rental from '../models/rental.model';
const app = express.Router();

// this route is used when creating a Rental.
// we will need to append the new rentals to the users array of rentals.
app.post('/createrental', async (req, res) => {
    const {
        type,
        streetNumber,
        streetName,
        postalCode,
        price,
        parking,
        room,
        bathroom,
        petFriendly,
        balcony,
        airConditional,
        images,
        gym,
        dishWasher,
        hydro,
        wifi,
        water,
        roommate,
        availability,
        additionalInfo,
        landlord, 
    } = req.body;
    const database = mongoose.connection;
    console.log('Post Request to DB CreateRental');
    database.collection('rentUnit').insertOne({
        type: type,
        streetNumber: streetNumber,
        streetName: streetName,
        postalCode: postalCode,
        price: price,
        parking: parking,
        room: room,
        bathroom: bathroom,
        petFriendly: petFriendly,
        balcony: balcony,
        airConditional: airConditional,
        images: images,
        gym: gym,
        dishWasher: dishWasher,
        hydro: hydro,
        wifi: wifi,
        water: water,
        roommate: roommate,
        availability: availability,
        additionalInfo: additionalInfo,
        postDate: new Date(),
        lastUpdate: null,
        review: [],
        landlord: landlord,
        tanant: []
    }); 
    res.status(200).json('Saved to Database');
});

app.get('/rentals', async (req, res) => {
    try {
        await Rental.find({}, (err: any, rental: any) => {
            if (err) {
                res.send(err);
            } else {
                return res.json(rental);
            }
        }).limit(3);
    } catch {
        console.log('Failed to load rental');
    }
});

module.exports = app;
