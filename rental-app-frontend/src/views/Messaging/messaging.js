import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Messaging() {
    const UseStyles = makeStyles((theme) => ({
        formStyle: {
            width: '100%',
            height: '100vh',
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

    const classes = UseStyles();

    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
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

        if (id == 'email')
        {
            document.getElementById('emailError').innerHTML = error;
        }

        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };
    console.log(formData);
    const onSubmit = (e) =>
    {
        const payload = { ...formData };
        axios
        .post('http://localhost:5000/message/send', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            console.log('Email Sent Successfully');
            const mailStatus = res.data;
            console.log(mailStatus);
            // set something here.
            // then redirect to the new maintence
        })
        .catch((err) => {
            console.error(err);
            alert('ERROR: Logging in');
        });
    }

    return(
        <>
            <div className={classes.container}>
                <form className={classes.formStyle}>
                    <h2>Contact Renter</h2>
                    <label className={classes.labelText} for="email">
                        Send to:
                    </label>
                    <input
                        type="text"
                        onChange={validateEmail}
                        value = {formData.email}
                        id="email"
                        name="email"
                        className="border border-dark"
                    ></input>
                    <p id="emailError" style={{ color: 'red' }}></p>

                    <label className={classes.labelText} for="subject">
                        Subject:
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        value = {formData.subject}
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
                        value = {formData.message}
                        name="message"
                        rows = "10"
                    ></textarea>

                    <Button
                    variant="primary"
                    className={classes.buttonPadding}
                    onClick={()=> onSubmit()}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </>
    )
}