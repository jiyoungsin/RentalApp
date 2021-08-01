import express from 'express';
import mongoose from 'mongoose';
import Rental from '../models/rental.model';

const app = express.Router();

app.get('/:id', async (req, res) => {
    let id = req.params.id;
    const payload = await Rental.findOne({ _id: id });
    res.status(200).json(payload);
});

// this route will remove the rental from users array
app.delete('/delete/:id', async (req, res) => {
    let id = req.params.id;
    const payload = await Rental.deleteOne({ _id: id })
        .then((response) => {
            console.log('Successfully Deleted Rental');
            res.send(response);
        })
        .catch((err) => {
            console.log('ERROR: Deleting Rental');
        });
    res.status(200);
});

app.put('/editRental/:id', async (req, res) => {
    let id = req.params.id;
    const payload = await Rental.updateOne({ _id: id }, req.body.data)
        .then((response) => {
            console.log('Successfully Updated Rental');
            res.send(response);
        })
        .catch((err) => {
            console.log('ERROR: while Updating Rental');
        });
    res.status(204);
});

module.exports = app;
