import express from 'express';
import mongoose from 'mongoose';
import Review from '../models/review.model';
import sgMail from '@sendgrid/mail';

const app = express.Router();
const API_KEY = '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';

sgMail.setApiKey(API_KEY);
app.get('/review', async (req, res) => {
    try {
        await Review.find({}, (err: any, mainReq: any) => {
            if (err) {
                res.send(err);
            } else {
                return res.json(mainReq);
            }
        });
    } catch {
        console.log('Failed to load Review Request');
    }
});

// this route will remove the rental from users array
app.delete('/delete/:id', async (req, res) => {
    let id = req.params.id;
    const payload = await Review.deleteOne({ _id: req.params.id })
        .then((response) => {
            console.log('Successfully Deleted Rental');
            res.json(response);
        })
        .catch((err) => {
            console.log('ERROR: while Deleting Rental');
        });
    res.status(200).json(payload);
});

// this route is used when creating a Rental.
// we will need to append the new rentals to the users array of rentals.
app.post('/create', async (req, res) => {
    const {
        uid,
        user,
        score,
        description,
        timeCreated
    } = req.body;
    const database = mongoose.connection;

    try {
        database.collection('review').insertOne({
            uid: uid,
            user: user,
            score: score,
            description: description,
            timeCreated: timeCreated
        });
        res.status(200).json('Saved to Database');
    } catch {
        console.log('ERROR: Cannot Create a Review');
    }
});

module.exports = app;
