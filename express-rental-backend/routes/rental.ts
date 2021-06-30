import express from 'express';
import mongoose from 'mongoose';
import Rental from '../models/rental.model';
import sgMail from '@sendgrid/mail';

const app = express.Router(); 
const API_KEY = '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';

sgMail.setApiKey(API_KEY);
// this route is used when creating a Rental.
// we will need to append the new rentals to the users array of rentals.
app.post('/createrental', async (req, res) => {
    const {
        address,
        unitPictures,
        title,
        price,
        category,
        description,
        parking,
        room,
        bathroom,
        pet,
    } = req.body;
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

    const message = 
        {
            to: 'vroomgrid@gmail.com',
            from: 'VroomInc@officalbase.com',
            subject: 'New Rental Added',
            text: 'Hello world',
            html: 
            `
                <h1>${title} has been added</h1>
                <p>Your unit has been added with the following details:</p>
                <br/>
                <p><strong>Address:</strong> ${address}</p>
                <br/>
                <p><strong>Description:</strong> ${description}</p>
                <br/>
                <p><strong>Category:</strong> ${category}</p>
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
    console.log("Fetching data from DB");
});

app.get('/users-rental', async (req, res) => {
    try {
        await Rental.find({landlord: "sins0113"}, (err: any, rental: any) => {
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
