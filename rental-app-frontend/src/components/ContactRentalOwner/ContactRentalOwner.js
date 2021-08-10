import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { userSessionContext } from '../../contextFile';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function ContactRentalOwner(Landlord, theCurrentUser) {
    const [loaded, setLoaded] = useState(false);
    const [landlordEmail, setLandlordEmail] = useState(false);
    const UseStyles = makeStyles((theme) => ({
        formStyle: {
            width: '30vw',
            height: '45vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            justifyItems: 'center',
            justifySelf: 'center',
        },
        container: {
            width: '60%',
            height: '100vh',
            margin: 'auto',
        },
        buttonPadding: {
            padding: '10px',
            marginTop: '20px',
            marginBottom: '20px',
        },
        labelText: {
            fontSize: '24px',
        },
    }));
    console.log('theCurrentUser');
    console.log(theCurrentUser);
    useEffect(() => {
        axios
            .get(`http://www.aidatastructures.com:5000/profile/username/` + Landlord.landlord)
            .then((res) => {
                setLandlordEmail(res.data[0].email);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
                alert('Error while Fetching Landlord  email');
            });
    }, [loaded]);

    const classes = UseStyles();
    const { user, setUser } = useContext(userSessionContext);
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
        cc: user.email,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };
    const validateEmail = (e) => {
        const { id, value } = e.target;
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let error;
        if (!re.test(String(value).toLowerCase())) {
            error = 'EMAIL ADDRESS MUST BE VALID';
        } else {
            error = '';
        }

        if (id == 'email') {
            document.getElementById('emailError').innerHTML = error;
        }

        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };

    const onSubmit = (e) => {
        let payload = { ...formData };
        payload.email = landlordEmail;
        axios
            .post('http://www.aidatastructures.com:5000/message/send', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                alert('Email Sent Successfully');
                const mailStatus = res.data;
                setFormData({
                    email: '',
                    subject: '',
                    message: '',
                    cc: user.email,
                })
                // set something here.
                // then redirect to the new maintence
            })
            .catch((err) => {
                console.error(err);
                alert('ERROR: Logging in');
            });
    };
    return (
        <>
            {theCurrentUser ? (
                <div>
                    <form className={classes.formStyle}>
                        <h2>Contact Landlord</h2>
                        <label className={classes.labelText} for="email">
                            Send to:
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="border border-dark"
                            placeholder={landlordEmail}
                            disabled="true"
                        ></input>
                        <p id="emailError" style={{ color: 'red' }}></p>

                        <label className={classes.labelText} for="subject">
                            Subject:
                        </label>
                        <input
                            type="text"
                            onChange={handleChange}
                            value={formData.subject}
                            id="subject"
                            name="subject"
                            className="border border-dark"
                        ></input>

                        <label className={classes.labelText} for="message">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            onChange={handleChange}
                            value={formData.message}
                            name="message"
                            rows="10"
                        ></textarea>

                        <Button
                            variant="primary"
                            className={classes.buttonPadding}
                            onClick={() => onSubmit()}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
}
