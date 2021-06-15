import React from 'react';
import { useStyles } from './styles';
import InputForm from '../../components/InputForm';

export default function CreateRentalTwo({ handleChange, state }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <h2>Create Rental</h2>
                <label className={classes.labelText} for="price">
                    price
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    value={state.price}
                    placeholder="Ad price"
                    id="price"
                    name="price"
                />
                <label className={classes.labelText} for="address">
                    Address
                </label>
                <InputForm
                    onChange={handleChange}
                    type="text"
                    value={state.address}
                    id="address"
                    name="address"
                />
                <h3 style={{ paddingTop: 20 }}>Details</h3>
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
                    id="rooms"
                    name="rooms"
                />
                <label className={classes.labelText} for="bathroom">
                    Bathrooms
                </label>
                <InputForm
                    onChange={handleChange}
                    type="number"
                    value={state.bathroom}
                    id="bathrooms"
                    name="bathrooms"
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
            </form>
        </div>
    );
}
