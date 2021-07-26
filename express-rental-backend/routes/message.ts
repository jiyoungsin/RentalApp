import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import express from 'express';

const app = express.Router();
const API_KEY = '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';

sgMail.setApiKey(API_KEY);

app.post('/send', async (req, res) => {
    const { email, subject, message } = req.body;

    const mail = {
        to: email,
        from: 'VroomInc@officalbase.com',
        cc: 'sins0113@gmail.com',
        subject: subject,
        text: message,
    };
    try {
        (async () => {
            try {
                await sgMail.send(mail);
            } catch (error) {
                console.error(error);

                if (error.response) {
                    console.error(error.response.body);
                }
            }
        })();
        return res.status(200);
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body);
        }
    }
});
module.exports = app;
