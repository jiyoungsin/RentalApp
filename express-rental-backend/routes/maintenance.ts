import express from 'express';
import mongoose from 'mongoose';
import Maintenance from '../models/maintenance.model';

const app = express.Router();
app.get('/maintenance', async (req, res) => {
    try {
        await Maintenance.find({}, (err: any, mainReq: any) => {
            if (err) {
                res.send(err);
            } else {
                return res.json(mainReq);
            }
        });
    } catch {
        console.log('Failed to load Maintenance Request');
    }
});
// this route is used when creating a Rental.
// we will need to append the new rentals to the users array of rentals.
app.post('/create', async (req, res) => {
    const {
        email,
        maintenanceIssue,
        tenantName,
        landlordName,
        tenantPhoneNumber,
        landlordPhoneNumber,
    } = req.body;
    console.log('Post Request to DB Create Maintenance');
    const database = mongoose.connection;
    database.collection('maintenance').insertOne({
        email: email,
        maintenanceIssue: maintenanceIssue,
        tenantName: tenantName,
        landlordName: landlordName,
        tenantPhoneNumber: tenantPhoneNumber,
        landlordPhoneNumber: landlordPhoneNumber,
    });
    res.status(200).json('Saved to Database');
});

module.exports = app;
