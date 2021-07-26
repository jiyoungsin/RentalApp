import express from 'express';
import Rental from '../models/rental.model';
import User from '../models/user.model';
import uploadMiddleware from '../src/middleware/uploadDriver';

const app = express.Router();

app.put('/:id', uploadMiddleware.single('image'), async (req, res) => {
    let id = req.params.id;
    const payload = await User.updateOne({ _id: id }, req.body)
    .then((response) => {
        console.log('Successfully Updated Profile Picture');
        res.send(response);
    })
    .catch((err) => {
        console.log('ERROR: while Updating Profile Picture');
    });
    res.status(204);
});

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

app.get('/username/:username', async (req, res) => {
    const { username } = req.params;
    const payload = await User.find({ userName: username })
        .then((pay) => {
            res.status(200).json(pay);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});


module.exports = app;
