import React, { useState, useEffect } from 'react';
import InputForm from '../../components/InputForm';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
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
        checkboxStyle: {
            height: '20px',
            width: '20px',
            marginRight: '10px',
        },
        text: {
            fontSize: '24px',
            marginRight: 'auto',
        },
    }));

    const classes = UseStyles();
    const [state, setState] = useState({
        type: '',
        streetNumber: '',
        streetName: '',
        postalCode: '',
        price: '',
        parking: '',
        room: '',
        bathroom: '',
        petFriendly: false,
        balcony: false,
        airConditional: false,
        gym: false,
        dishWasher: false,
        hydro: false,
        internet: false,
        water: false,
        roommate: false,
        availability: true,
        additionalInfo: '',
        Reviews: [],
        Landlord: '',
        images: [],
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

    // Updates user input.
    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((ps) => ({
            ...ps,
            [id]: value,
        }));
    };
    // Updates the users input for Checkboxes
    const checkHandleChange = (e) => {
        const { id, checked } = e.target;
        setState((ps) => ({
            ...ps,
            [id]: checked,
        }));
    };

    const onSubmit = () => {
        // updates data to the backend
        const payload = { ...state };
        axios
            .put(`http://localhost:5000/rentalUnit/editRental/${id}`, {
                data: payload,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                console.log('Updated Rental Successfully');
                setEdited(true);
            })
            .catch((err) => {
                alert('ERROR: Updating Rental');
            });
    };

    return (
        <div className={classes.container}>
            <h1>Edit Rental</h1>
            <form className={classes.formStyle}>
                <label className={classes.labelText} for="type">
                    type
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="type"
                    name="type"
                    value={state.type}
                />
                <label className={classes.labelText} for="streetNumber">
                    streetNumber
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="streetNumber"
                    name="streetNumber"
                    value={state.streetNumber}
                />
                <label className={classes.labelText} for="streetName">
                    streetName
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="streetName"
                    name="streetName"
                    value={state.streetName}
                />
                <label className={classes.labelText} for="postalCode">
                    postalCode
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={state.postalCode}
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
                <label className={classes.labelText} for="parking">
                    parking
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="parking"
                    name="parking"
                    value={state.parking}
                />
                <label className={classes.labelText} for="room">
                    room
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="room"
                    name="room"
                    value={state.room}
                />
                <label className={classes.labelText} for="bathroom">
                    bathroom
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="bathroom"
                    name="bathroom"
                    value={state.bathroom}
                />
                <label className={classes.labelText} for="additionalInfo">
                    additionalInfo
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    id="additionalInfo"
                    name="additionalInfo"
                    value={state.additionalInfo}
                />
                <div className={classes.checkbox}>
                    <label className={classes.text} for="availability">
                        availability
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={checkHandleChange}
                        type="checkbox"
                        checked={state.availability}
                        id="availability"
                        name="availability"
                    />
                    <label className={classes.text} for="water">
                        water
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={checkHandleChange}
                        type="checkbox"
                        checked={state.water}
                        id="water"
                        name="water"
                    />
                    <label className={classes.text} for="roommate">
                        roommate
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={checkHandleChange}
                        type="checkbox"
                        checked={state.roommate}
                        id="roommate"
                        name="roommate"
                    />
                    <label className={classes.text} for="internet">
                        internet
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={checkHandleChange}
                        type="checkbox"
                        checked={state.internet}
                        id="internet"
                        name="internet"
                    />
                    <label className={classes.text} for="internet">
                        petFriendly
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={checkHandleChange}
                        type="checkbox"
                        checked={state.petFriendly}
                        id="petFriendly"
                        name="petFriendly"
                    />
                    <label className={classes.text} for="hydro">
                        hydro
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={checkHandleChange}
                        type="checkbox"
                        checked={state.hydro}
                        id="hydro"
                        name="hydro"
                    />
                    <label className={classes.text} for="dishWasher">
                        dishWasher
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={checkHandleChange}
                        type="checkbox"
                        checked={state.dishWasher}
                        id="dishWasher"
                        name="dishWasher"
                    />
                    <label className={classes.text} for="gym">
                        gym
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={checkHandleChange}
                        type="checkbox"
                        checked={state.gym}
                        id="gym"
                        name="gym"
                    />
                    <label className={classes.text} for="airConditional">
                        airConditional
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={checkHandleChange}
                        type="checkbox"
                        checked={state.airConditional}
                        id="airConditional"
                        name="airConditional"
                    />
                    <label className={classes.text} for="balcony">
                        balcony
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={checkHandleChange}
                        type="checkbox"
                        checked={state.balcony}
                        id="balcony"
                        name="balcony"
                    />
                    <label className={classes.text} for="petFriendly">
                        petFriendly
                    </label>
                    <input
                        className={classes.checkboxStyle}
                        onChange={checkHandleChange}
                        type="checkbox"
                        checked={state.petFriendly}
                        id="petFriendly"
                        name="petFriendly"
                    />
                </div>
                <Button onClick={onSubmit} variant="primary" className={classes.buttonPadding}>
                    Submit
                </Button>
            </form>
            {edited ? <Redirect to="/" /> : null}
        </div>
    );
}
