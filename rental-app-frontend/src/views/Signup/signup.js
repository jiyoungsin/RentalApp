import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import InputForm from '../../components/InputForm';
import { makeStyles } from '@material-ui/core/styles';

export default function Signup() {
    // CSS for our components.
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
        userName: '',
        lastName: '',
        password: '',
        rePassword: '',
        firstName: '',
        phoneNumber: '',
        role: 'customer',
        image: [],
        rentals: [],
        viewRentals: [],
        favoriteRentals: [],
        reviews: [],
    });
    // boolean to stop page from rendering every 1 second.
    const [signUpSuccessful, setSignUpSuccessful] = useState(false);
    // updates every user input.
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };
    const validateText = (e) => {
        const { id, value } = e.target;
        let error;
        if (/\d/.test(value)) {
            error = 'THIS FEILD SHOULD ONLY CONTAIN CHARACTERS';
        } else {
            error = '';
        }
        document.getElementById(`${id}Error`).innerHTML = error;
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

        document.getElementById(`${id}Error`).innerHTML = error;

        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };

    const validatePhone = (e) => {
        let { id, value } = e.target;
        let error;
        if (isNaN(value)) error = 'PHONE NUMBER SHOULD ONLY CONTAIN NUMBERS';
        else if (value.length != 10) error = 'PHONE NUMBER SHOULD BE 10 DIGITS';
        else error = '';

        document.getElementById(`${id}Error`).innerHTML = error;

        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };

    //fetch all username in Mongo to check for duplicate username
    const validateUserName = (id, value) => {
        let userNames;
        let error = '';
        axios
            .get('http://localhost:5000/users/usernames')
            .then((res) => {
                userNames = res.data;
                console.log('i come in');
                for (let i = 0; i < userNames.length; i++) {
                    console.log(userNames[i]);
                    if (userNames[i].userName == value) {
                        error = 'USER NAME IS BEING USED';
                        document.getElementById('userNameError').innerHTML = error;
                    }
                }
            })
            .catch((err) => {
                console.error(err);
                alert('USER NAME IS BEING USED');
            });
    };

    const validatePassword = (e) => {
        let { id, value } = e.target;
        let error;
        var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;

        if (!re.test(value))
            error = 'PASSWORD MUST CONTAIN AT LEAST ONE DIGIT & ONE SPECIAL CHARACTER';
        else if (value.length < 6) error = 'PASSWORD MUST BE LONGER THAN 6 CHARACTERS';
        else error = '';

        document.getElementById(`${id}Error`).innerHTML = error;
        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };
    const validatePasswordMatch = (e) => {
        let { id, value } = e.target;
        let password = formData.password;
        let error;

        if (value !== password) error = 'PASSWORD MUST MATCH';
        else error = '';

        document.getElementById(`${id}Error`).innerHTML = error;
        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };

    const validateSubmit = (value) => {
        let isOkay = true;
        let isUsed = false;
        let count = 0;
        let userNames;
        let error = '';
        const payload = { ...formData };

        for (const i in payload && count < 7) {
            if (`${payload[i]}` == '') {
                isOkay = false;
                document.getElementById(`${i}Error`).innerHTML = 'THIS FIELD IS REQUIRED';
            } else {
                if (document.getElementById(`${i}Error`).innerHTML == 'THIS FIELD IS REQUIRED')
                    document.getElementById(`${i}Error`).innerHTML = '';
            }
            count++;
        }
        axios
            .get('http://localhost:5000/users/usernames')
            .then((res) => {
                userNames = res.data;
                console.log('i come in');
                for (let i = 0; i < userNames.length; i++) {
                    console.log(userNames[i]);
                    if (userNames[i].userName == value) {
                        isUsed = true;
                        error = 'USER NAME IS BEING USED';
                        document.getElementById('userNameError').innerHTML = error;
                    }
                }
                if (isUsed == false) {
                    document.getElementById('userNameError').innerHTML = '';
                }
                count = 0;
                for (const i in payload && count < 7) {
                    if (document.getElementById(`${i}Error`).innerHTML != '') {
                        isOkay = false;
                    }
                }
                if (isOkay == true) {
                    onSubmit();
                }
            })
            .catch((err) => {
                console.error(err);
                alert('Error Sending Data to Backend from ValidateUserName');
            });
    };

    // sends sign up data to backend.
    const onSubmit = () => {
        // saves data to Database Endpoint /signup
        const payload = { ...formData };
        axios
            .post('http://localhost:5000/users/signup', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                console.log('Creating Account');
                setSignUpSuccessful(true);
            })
            .catch((err) => {
                console.error(err);
                alert('Error Sending Data to Backend on Submit');
            });
    };

    // form for user sign up page.
    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <h2>Sign Up</h2>

                <label className={classes.labelText} for="userName">
                    User Name
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    value={formData.userName}
                    id="userName"
                    name="userName"
                />
                <p id="userNameError" style={{ color: 'red' }}></p>

                <label className={classes.labelText} for="firstName">
                    First Name
                </label>
                <InputForm
                    onChange={validateText}
                    type="text"
                    value={formData.firstName}
                    id="firstName"
                    name="firstName"
                />
                <p id="firstNameError" style={{ color: 'red' }}></p>

                <label className={classes.labelText} for="lastName">
                    Last Name
                </label>
                <InputForm
                    onChange={validateText}
                    type="text"
                    value={formData.lastName}
                    id="lastName"
                    name="lastName"
                />
                <p id="lastNameError" style={{ color: 'red' }}></p>

                <label className={classes.labelText} for="email">
                    Email
                </label>
                <InputForm
                    onChange={validateEmail}
                    type="text"
                    value={formData.email}
                    id="email"
                    name="email"
                />
                <p id="emailError" style={{ color: 'red' }}></p>

                <label className={classes.labelText} for="password">
                    Password
                </label>
                <InputForm
                    onChange={validatePassword}
                    type="password"
                    value={formData.password}
                    id="password"
                    name="password"
                />
                <p id="passwordError" style={{ color: 'red' }}></p>

                <label className={classes.labelText} for="rePassword">
                    Re-Password
                </label>
                <InputForm
                    onChange={validatePasswordMatch}
                    type="password"
                    value={formData.rePassword}
                    id="rePassword"
                    name="rePassword"
                />
                <p id="rePasswordError" style={{ color: 'red' }}></p>

                <label className={classes.labelText} for="phoneNumber">
                    Phone Number
                </label>
                <InputForm
                    onChange={validatePhone}
                    type="text"
                    value={formData.phoneNumber}
                    id="phoneNumber"
                    name="phoneNumber"
                />
                <p id="phoneNumberError" style={{ color: 'red' }}></p>

                <Button
                    variant="primary"
                    className={classes.buttonPadding}
                    onClick={() => {
                        validateSubmit(`${formData.userName}`);
                    }}
                >
                    Submit
                </Button>
            </form>
            {signUpSuccessful ? <Redirect to="/login" /> : null}
        </div>
    );
}
