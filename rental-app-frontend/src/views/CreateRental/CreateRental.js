import React from 'react';
import { useStyles } from './styles';
import InputForm from "../../components/InputForm";

export default function CreateRental({ handleChange, state }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <div class="container">
                    <div className="row">
                        <div className="col-6">
                            <label className={classes.labelText}>Unit type: &ensp;</label>
                            <select
                                id="type"
                                name="type"
                                value={state.type}
                                onChange={handleChange}
                            >
                                <option value="" selected disabled hidden>
                                    Choose The Type
                                </option>
                                <option value="condo">Condo</option>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="studio">Studio</option>
                                <option value="room">Room</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label className={classes.labelText}>Price/Month: &ensp;</label>
                            <InputForm
                                onChange={handleChange}
                                type="number"
                                id="price"
                                name="price"
                                placeholder="$0"
                                value={state.price}
                            ></InputForm>
                        </div>
                    </div>
                </div>
                <div class="container"></div>
                <div class="container">
                    <label className={classes.labelText}>Address: &ensp;</label>
                    <InputForm
                        onChange={handleChange}
                        type="text"
                        id="streetNumber"
                        name="streetNumber"
                        size="6"
                        placeholder="Street #"
                        value={state.streetNumber}
                    ></InputForm>
                    &ensp;
                    <InputForm
                        onChange={handleChange}
                        type="text"
                        id="streetName"
                        name="streetName"
                        size="30"
                        placeholder="Street Name"
                        value={state.streetName}
                    ></InputForm>
                    &ensp;
                    <InputForm
                        onChange={handleChange}
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        size="10"
                        placeholder="Postal-Code"
                        value={state.postalCode}
                    ></InputForm>
                </div>
                <div class="container">
                    <div className="row">
                        <div className="col-6">
                            <label className={classes.labelText}>Room: &ensp;</label>
                            <InputForm
                                onChange={handleChange}
                                type="number"
                                id="room"
                                name="room"
                                min="0"
                                placeholder="0"
                                value={state.room}
                            ></InputForm>
                        </div>
                        <div className="col-6">
                            <label className={classes.labelText}>Bathroom: &ensp;</label>
                            <InputForm
                                onChange={handleChange}
                                type="number"
                                id="bathroom"
                                name="bathroom"
                                min="0"
                                placeholder="0"
                                value={state.bathroom}
                            ></InputForm>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <label className={classes.labelText}>Parking spot: &ensp;</label>
                    <InputForm
                        onChange={handleChange}
                        type="number"
                        id="parking"
                        name="parking"
                        min="0"
                        placeholder="0"
                        value={state.parking}
                    ></InputForm>
                    &ensp;
                </div>
            </form>
        </div>
    );
}
