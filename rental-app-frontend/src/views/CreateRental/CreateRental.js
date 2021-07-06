import React from 'react';
import { useStyles } from './styles';
import InputForm from '../../components/InputForm';

export default function CreateRental({ handleChange, state }) {
    const classes = useStyles();
    return (

        /*
        type: '',
        streetNumber: 0,
        streetName:'',
        postalCode: '',
        price: 0.0,
        parking: false,
        room: 0,
        bathroom: 0
        */
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <div class="container">
                    <div className="row">
                        <div className="col-6">
                            <label className={classes.labelText}>Unit type: &ensp;</label>
                            <select id="type" name="type" value={state.type} onChange={handleChange}> 
                                <option value="" selected disabled hidden>Choose The Type</option>
                                <option value="condo">Condo</option>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="studio">Studio</option>
                                <option value="room">Room</option>
                            </select>
                        </div>
                        <div className="col-6">

                            <label className={classes.labelText}>Price/Month: &ensp;</label>
                            <input onChange={handleChange} type="number" id="price" name="price"  placeholder="$0" value={state.price}></input>
                        </div>
                    </div>
                </div>
                <div class="container">
                </div>
                <div class="container">
                <label className={classes.labelText}>Address: &ensp;</label>
                            <input onChange={handleChange} type="text" id="streetNumber" name="streetNumber" size="6" placeholder="Street #" value={state.streetNumber}></input>&ensp;
                            <input onChange={handleChange} type="text" id="streetName" name="streetName" size="30" placeholder="Street Name" value={state.streetName}></input>&ensp;
                            <input onChange={handleChange} type="text" id="postalCode" name="postalCode" size="10" placeholder="Postal-Code" value={state.postalCode}></input>
                </div>
                <div class="container">
                    <div className="row">
                        <div className="col-6">
                            <label className={classes.labelText}>Room: &ensp;</label>
                            <input onChange={handleChange} type="number" id="room" name="room" min="0" placeholder="0" value={state.room}></input>
                        </div>
                        <div className="col-6">
                            <label className={classes.labelText}>Bathroom: &ensp;</label>
                            <input onChange={handleChange} type="number" id="bathroom" name="bathroom" min="0" placeholder="0" value={state.bathroom}></input>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <label className={classes.labelText}>Parking spot: &ensp;</label>
                    <input onChange={handleChange} type="number" id="parking" name="parking" min="0" placeholder="0" value={state.parking}></input>&ensp;
                </div>
            </form>
        </div>
    );
}
