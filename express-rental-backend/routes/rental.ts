import express from 'express';
import mongoose from 'mongoose';
import sgMail from '@sendgrid/mail';

const app = express.Router(); 

// this route is used when creating a Rental.
// we will need to append the new rentals to the users array of rentals.
app.post("/createrental", async (req, res) => {
    const { address, unitPictures, title, email, price, contact, phoneNum, category, description } = req.body;
    const database = mongoose.connection;
    console.log("Post Request to DB CreateRental");
    database.collection("rental").insertOne({
            title: title,
            email: email,
            price: price,
            contact: contact,
            address : address,
            phoneNum: phoneNum,
            category: category,
            description: description,
            unitPictures: unitPictures,
        });

    const message = 
        {
            to: email,
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
                <p><strong>Phone Number:</strong> ${phoneNum}</p>

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


    res.status(200).json("Saved to Database");
});
module.exports = app;