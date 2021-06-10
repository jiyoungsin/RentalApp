import express from 'express';
import mongoose from 'mongoose';

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
        res.status(200).json("Saved to Database");
    }catch{
        console.log("ERROR: Did not Create maintenance.")
    }
});
module.exports = app;