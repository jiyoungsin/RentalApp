import express from 'express';
import mongoose from 'mongoose';
import Maintenance from '../models/maintenance.model';
import sgMail from '@sendgrid/mail';

const app = express.Router();
const API_KEY = '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';

sgMail.setApiKey(API_KEY);
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
    
    try{
        database.collection("maintenance").insertOne({
            email: email,
            maintenanceIssue: maintenanceIssue,
            tenantName: tenantName,
            landlordName: landlordName,
            tenantPhoneNumber: tenantPhoneNumber,
            landlordPhoneNumber: landlordPhoneNumber,
        })
        
        //This is the structure of the email maeesage to be sent
        const message = 
        {
            to: email,
            from: 'VroomInc@officalbase.com',
            subject: 'Maintenance Request',
            text: 'Hello world',
            html: 
            `
                <h1>Maintenance Request</h1>
                <p>${tenantName} is requesting maintenance for their unit.</p>
                <p>${maintenanceIssue}</p>

                <p>Phone Number: ${tenantPhoneNumber}</p>
            `
        };

        //this function sends the above message to the landlord in order to alert them to a maintenance request
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

        res.status(200).json("Saved to Database");
    }catch{
        console.log("ERROR: Did not Create maintenance.")
    }
});

module.exports = app;
