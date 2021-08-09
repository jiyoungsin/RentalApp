import React, { useDebugValue, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import InputForm from '../../components/InputForm';

export default function CreateMaintenance() {
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
        maintenanceIssue: '',
        tenantName: '',
        landlordName: '',
        tenantPhoneNumber: '',
        landlordPhoneNumber: '',
    });

    const [maintenanceRequestSuccessful] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };
    const validateSubmit = () => {
        let isOkay = true;
        const payload = { ...formData };
        for (const i in payload) {
            if (`${payload[i]}` == '') {
                isOkay = false;
                document.getElementById(`${i}Error`).innerHTML = 'THIS FIELD IS REQUIRED';
            } else {
                if (document.getElementById(`${i}Error`).innerHTML == 'THIS FIELD IS REQUIRED') {
                    document.getElementById(`${i}Error`).innerHTML = '';
                }
            }
            if (document.getElementById(`${i}Error`).innerHTML != '') {
                isOkay = false;
            }
        }

        if (isOkay == true) {
            onSubmit();
        }
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

        if (id == 'email') document.getElementById('emailError').innerHTML = error;

        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };

    const validatePhone = (e) => {
        let { id, value } = e.target;
        let error;
        if (isNaN(value)) error = 'PHONE NUMBER SHOULD ONLY CONTAIN NUMBERS';
        else if (value.length != 9) error = 'PHONE NUMBER SHOULD BE 9 DIGITS';
        else error = '';

        if (id == 'tenantPhoneNumber') {
            document.getElementById('tenantPhoneNumberError').innerHTML = error;
        } else if (id == 'landlordPhoneNumber') {
            document.getElementById('landlordPhoneNumberError').innerText = error;
        }

        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };

    const onSubmit = () => {
        const payload = { ...formData };
        axios
            .post('http://localhost:5000/maintenance/create', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                console.log('Creating new Maintenance');
                const the_User = res.data;
                console.log(the_User);
                // set something here.
                // then redirect to the new maintence
            })
            .catch((err) => {
                console.error(err);
                alert('ERROR: Logging in');
            });
    };
    console.log(formData);

    return (
        // Shouln't be a <br> here but added it for now.
        <div className={classes.container}>
            <br />
            <form className={classes.formStyle}>
                <h2>Maintenance Request</h2>
                <label className={classes.labelText} for="tenantName">
                    Tenant Full Name
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    value={formData.tenantName}
                    id="tenantName"
                    name="tenantName"
                />
                <p id="tenantNameError" style={{ color: 'red' }}></p>

                <label className={classes.labelText} for="landlordName">
                    Landlord Full Name
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    value={formData.landlordName}
                    id="landlordName"
                    name="landlordName"
                />
                <p id="landlordNameError" style={{ color: 'red' }}></p>

                <label className={classes.labelText} for="email">
                    Landlord's Email
                </label>
                <InputForm
                    onChange={validateEmail}
                    type="text"
                    value={formData.email}
                    id="email"
                    name="email"
                />
                <p id="emailError" style={{ color: 'red' }}></p>

                <label className={classes.labelText} for="tenantPhoneNumber">
                    Tenant's Phone Number
                </label>
                <InputForm
                    onChange={validatePhone}
                    type="text"
                    value={formData.tenantPhoneNumber}
                    id="tenantPhoneNumber"
                    name="tenantPhoneNumber"
                />
                <p id="tenantPhoneNumberError" style={{ color: 'red' }}></p>

                <label className={classes.labelText} for="landlordPhoneNumber">
                    Landlord's Phone Number
                </label>
                <InputForm
                    onChange={validatePhone}
                    type="text"
                    value={formData.landlordPhoneNumber}
                    id="landlordPhoneNumber"
                    name="landlordPhoneNumber"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                />
                <p id="landlordPhoneNumberError" style={{ color: 'red' }}></p>

                <label className={classes.labelText} for="maintenanceIssue">
                    Maintenance Issue Details
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    value={formData.maintenanceIssue}
                    id="maintenanceIssue"
                    name="maintenanceIssue"
                    required
                />
                <p id="maintenanceIssueError" style={{ color: 'red' }}></p>
                <br />
                <Button
                    variant="primary"
                    className={classes.buttonPadding}
                    onClick={() => {
                        validateSubmit();
                    }}
                >
                    Submit
                </Button>
            </form>
            {maintenanceRequestSuccessful ? <Redirect to="/" /> : null}
        </div>
    );
}
