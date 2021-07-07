import express from 'express';
import Rental from '../models/rental.model';

const app = express.Router();

app.post('/Update', (req, res) => {});

app.get('/:rental', async (req, res) => {
    const { rental } = req.params;
    const payload = await Rental.find({ _id: rental })
        .then((pay) => {
            res.status(200).json(pay);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});

module.exports = app;
