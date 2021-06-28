import express from 'express';
import mongoose from 'mongoose';
import sgMail from '@sendgrid/mail';

const app = express.Router(); 

// this route is used when creating a Rental.
// we will need to append the new rentals to the users array of rentals.
app.post("/create", async (req, res) => {
    const { email, maintenanceIssue, tenantName, landlordName, tenantPhoneNumber, landlordPhoneNumber} = req.body.data;
    console.log(req.body)
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