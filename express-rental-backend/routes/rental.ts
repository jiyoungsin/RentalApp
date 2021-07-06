import express from 'express';
import mongoose from 'mongoose';
import Rental from '../models/rental.model';
import sgMail from '@sendgrid/mail';
import uploadMiddleware from "../src/middleware/uploadDriver";

const fs = require('fs')
const app = express.Router(); 
const API_KEY = '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';

sgMail.setApiKey(API_KEY);
// this route is used when creating a Rental.
// we will need to append the new rentals to the users array of rentals.
app.post('/createrental',uploadMiddleware.single('image'), async (req, res) => {
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
        water,
        roommate,
        availability,
        additionalInfo,
        Landlord,
        images,
        gym,
        dishWasher,
        hydro,
        wifi,
        Review,
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
        tanant: [],
        Reviews: Reviews,
        landlord: Landlord,
        image: {
            data: fs.readFileSync(req.file.path),
            contentType: 'image/png'
        }
    });

    const message = 
        {
            to: 'vroomgrid@gmail.com',
            from: 'VroomInc@officalbase.com',
            subject: 'New Rental Added',
            text: 'Hello world',
            html: 
            `
                <h1>${type} has been added</h1>
                <p>Your unit has been added with the following details:</p>
                <br/>
                <p><strong>Address:</strong> ${streetNumber} ${streetName}</p>
                <br/>
                <p><strong>Description:</strong> ${additionalInfo}</p>
                <br/>
                <p><strong>Category:</strong> ${type}</p>
                <br/>
                <p><strong>Listed Price:</strong> ${price}</p>
                <br/>

            `
        };

    (async () => {
        try {
          await sgMail.send(message);
        } catch (error) {
          console.error(error);
      
          if (error.response) {
            console.error(error.response.body)
          }
        }
      })();
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
        console.log('Failed to Fetching rental');
    }
});

app.get('/all', async (req, res) => {
    try {
        await Rental.find({}, (err: any, rental: any) => {
            if (err) {
                res.send(err);
            } else {
                return res.json(rental);
            }
        })
    } catch {
        console.log('Failed to Fetching rental');
    }
});

app.post('/users-rental', async (req, res) => {
    const {
        userName
    } = req.body.user;
    try {
        await Rental.find({Landlord: userName}, (err: any, rental: any) => {
            if (err) {
                res.send(err);
            } else {
                return res.json(rental);
            }
        })
    } catch {
        console.log('Failed to load rental');
    }
});

module.exports = app;
