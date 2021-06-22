import React from 'react';
import { useStyles } from './styles';
import InputForm from '../../components/InputForm';

export default function CreateRentalTwo({ handleChange, checkHandleChange, state }) {
    const classes = useStyles();
    return (
        /*
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
        additionalInfo: null,
        */
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <div class="container"><p>*** Help us find right tenants for you by answering following options! ***</p></div>
                <div class="container">
                    <div className="row">
                        <div className="col-4">
                            <label className={classes.labelText} for="gym">
                                Gym: 
                            </label> &ensp;
                            <input onChange={checkHandleChange} type="checkbox" id="gym" name="gym" value={state.gym}>
                            </input>
                          
                        </div>
                        <div className="col-4">
                        <label className={classes.labelText} for="water">
                                Water:  
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="water" name="water" value={state.water}>
                            </input>
                         
                        </div>
                        <div className="col-4">
                        <label className={classes.labelText} for="hydro">
                                Hydro: 
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="hydro" name="hydro" value={state.hydro}>
                            </input>
                           
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div className="row">
                        <div className="col-4">
                           <label className={classes.labelText} for="internet">
                                Internet: 
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="internet" name="internet" value={state.internet}>
                            </input>
                        </div>
                        <div className="col-4">
                        <label className={classes.labelText} for="balcony">
                                Balcony:  
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="balcony" name="balcony" value={state.balcony}>
                            </input>
                        </div>
                        <div className="col-4">
                           <label className={classes.labelText} for="roommate">
                                Roommate: 
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="roommate" name="roommate" value={state.roommate}>
                            </input>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div className="row">
                        <div className="col-4">
                        <label className={classes.labelText} for="petFriendly">
                                Pet-Friendly: 
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="petFriendly" name="petFriendly" value={state.petFriendly}>
                            </input>
                        </div>
                        <div className="col-4">
                           <label className={classes.labelText} for="dishWasher">
                                Dish-Washer:  
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="dishWasher" name="dishWasher" value={state.dishWasher}>
                            </input>
                        </div>
                        <div className="col-4">
                        <label className={classes.labelText} for="airConditional">
                                Air-Conditional: 
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="airConditional" name="Air-Conditional" value={state.airConditional}>
                            </input>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <label className={classes.labelText} for="additionalInfo">
                        Additional Info:
                    </label>
                </div>
                <div class="container">
                    <textarea id="additionalInfo" name="additionalInfo" rows="4" cols="50" placeholder="Please provide us any additional info" value={state.additionalInfo}>
        
                    </textarea>
                </div>
                
            </form>
        </div>
    );
}
