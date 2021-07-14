import express from 'express';
import mongoose from 'mongoose';

import sgMail from '@sendgrid/mail';
import User from '../models/user.model';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express.Router();

// route to sign up.
app.post('/signup', async (req, res) => {
    const {
        password,
        firstName,
        lastName,
        email,
        phoneNumber,
        userName,
        role,
        rentals,
        viewRentals,
        favoriteRentals,
        reviews,
        image,
    } = req.body;
    const database = mongoose.connection;
    const hash = bcrypt.hashSync(password, saltRounds);

    // Move This to Process .env
    sgMail.setApiKey('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');

    try {
        database.collection('user').insertOne({
            email: email,
            password: hash,
            lastName: lastName,
            userName: userName,
            firstName: firstName,
            phoneNumber: phoneNumber,
            role: role,
            rentals: rentals,
            viewRentals: viewRentals,
            favoriteRentals: favoriteRentals,
            reviews: reviews,
            image: image,
        });

        const message = {
            to: email,
            from: 'VroomInc@officalbase.com',
            subject: 'Welcome to Vroom',
            text: 'Hello world',
            html: `
                <h1>Welcome to Vroom</h1>
                <p> Thanks for Signing Up! Now let's find you a home!</p>
            `,
        };

        (async () => {
            try {
                await sgMail.send(message);
            } catch (error) {
                console.error(error);

                if (error.response) {
                    console.error(error.response.body);
                }
            }
        })();
        res.status(200).json('Saved to Database');
    } catch {
        console.log('ERROR: Did not Create User.');
    }
});

// Checks if the users cred are correct
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body.data;
        await User.findOne({ email: email }, (err: any, user: any) => {
            if (err) {
                res.send(err);
            } else {
                if (bcrypt.compareSync(password, user.password)) {
                    req.cookies.user = user;
                    return res.status(200).json(user);
                } else {
                    console.log(err);
                    res.send('Incorrect Password');
                }
            }
        });
    } catch {
        console.log('ERROR: login in');
    }
});
app.get('/usernames', async (req, res) => {
    try {
        await User.find({}, (err: any, userName: any) => {
            if (err) {
                res.send(err);
            } else {
                return res.json(userName);
            }
        });
    } catch {
        console.log('Failed to load usernames');
    }
});

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    const database = mongoose.connection;
    try {
        database.collection('subscriber').insertOne({
            email: email,
        });
        res.status(200).json('Saved to Database.');
    } catch {
        console.log('ERROR: Did Not Add Subscriber.');
    }
});
module.exports = app;
