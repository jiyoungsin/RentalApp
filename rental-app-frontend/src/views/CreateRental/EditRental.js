import React, { useState, useEffect } from 'react';
import InputForm from '../../components/InputForm';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export default function EditRental({ match }) {
    const { id } = match.params;
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
        labelText: {
            fontSize: '24px',
        },
        buttonPadding: {
            padding: '10px',
            marginTop: '20px',
            marginBottom: '20px',
        },
    }));

    const classes = UseStyles();
    const [state, setState] = useState({
        file: '',
        title: '',
        email: '',
        price: '',
        contact: '',
        phoneNum: '',
        category: '',
        description: '',
        parking: '',
        room: '',
        bathroom: '',
        pet: '',
    });
    const [edited, setEdited] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/rentalUnit/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                console.log('Fetching Data from Database');
                setState(res.data);
            })
            .catch((err) => {
                console.error(err);
                alert('Error fetching Data from Backend ');
            });
        // eslint-disable-next-line
    }, []);

    // updating user input.
    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((ps) => ({
            ...ps,
            [id]: value,
        }));
    };

    const onSubmit = () => {
        // updates data to the backend
        const payload = { ...state };
        console.log("@@@@@@@@")
        axios
            .put(`http://localhost:5000/rentalUnit/editRental/${id}`, {
                data: payload,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                console.log('Updated Rental Successfully');
                setEdited(true)
                console.log("edited")
                console.log(edited)
            })
            .catch((err) => {
                alert('ERROR: Updating Rental');
            });
    };

    return ( 
        <div className={classes.container}>
            <h1>Edit Profile</h1>
            <form className={classes.formStyle}>
                <label className={classes.labelText} for="title">
                    title
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="title"
                    name="title"
                    value={state.title}
                />
                <label className={classes.labelText} for="price">
                    price
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="price"
                    name="price"
                    value={state.price}
                />
                <label className={classes.labelText} for="contact">
                    contact
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="contact"
                    name="contact"
                    value={state.contact}
                />
                <label className={classes.labelText} for="category">
                    category
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="category"
                    name="category"
                    value={state.category}
                />
                <label className={classes.labelText} for="description">
                    description
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="description"
                    name="description"
                    value={state.description}
                />
                <label className={classes.labelText} for="parking">
                    Parking
                </label>
                <InputForm
                    onChange={handleChange}
                    type="number"
                    value={state.parking}
                    id="parking"
                    name="parking"
                />
                <label className={classes.labelText} for="room">
                    Rooms
                </label>
                <InputForm
                    onChange={handleChange}
                    type="number"
                    value={state.room}
                    id="room"
                    name="room"
                />
                <label className={classes.labelText} for="bathroom">
                    Bathrooms
                </label>
                <InputForm
                    onChange={handleChange}
                    type="number"
                    value={state.bathroom}
                    id="bathroom"
                    name="bathroom"
                />
                <div className={classes.checkbox}>
                    <label className={classes.text} for="pet">
                        Pet
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={handleChange}
                        type="checkbox"
                        value={state.pet}
                        id="pet"
                        name="pet"
                    />
                </div>
                <Button onClick={onSubmit} variant="primary" className={classes.buttonPadding}>
                    Submit
                </Button>
            </form>
            {edited ? <Redirect to="/" /> : null}
        </div>
    ) 
}
