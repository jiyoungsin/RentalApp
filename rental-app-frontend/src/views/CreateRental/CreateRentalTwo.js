import React from 'react';
import { useStyles } from './styles';

export default function CreateRentalTwo({ handleChange, checkHandleChange, state }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <div class="container"><p>*** Help us find right tenants for you by answering following options! ***</p></div>
                <div class="container">
                    <div className="row">
                        <div className="col-4">
                            <label className={classes.labelText} for="gym">
                                Gym: 
                            </label> &ensp;
                            <input onChange={checkHandleChange} type="checkbox" id="gym" name="gym" checked={state.gym}>
                            </input>
                          
                        </div>
                        <div className="col-4">
                        <label className={classes.labelText} for="water">
                                Water:  
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="water" name="water" checked={state.water}>
                            </input>
                         
                        </div>
                        <div className="col-4">
                        <label className={classes.labelText} for="hydro">
                                Hydro: 
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="hydro" name="hydro" checked={state.hydro}>
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
                            <input  onChange={checkHandleChange} type="checkbox" id="internet" name="internet" checked={state.internet}>
                            </input>
                        </div>
                        <div className="col-4">
                        <label className={classes.labelText} for="balcony">
                                Balcony:  
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="balcony" name="balcony" checked={state.balcony}>
                            </input>
                        </div>
                        <div className="col-4">
                           <label className={classes.labelText} for="roommate">
                                Roommate: 
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="roommate" name="roommate" checked={state.roommate}>
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
                            <input  onChange={checkHandleChange} type="checkbox" id="petFriendly" name="petFriendly" checked={state.petFriendly}>
                            </input>
                        </div>
                        <div className="col-4">
                           <label className={classes.labelText} for="dishWasher">
                                Dish-Washer:  
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="dishWasher" name="dishWasher" checked={state.dishWasher}>
                            </input>
                        </div>
                        <div className="col-4">
                        <label className={classes.labelText} for="airConditional">
                                Air-Conditional: 
                            </label> &ensp;
                            <input  onChange={checkHandleChange} type="checkbox" id="airConditional" name="Air-Conditional" checked={state.airConditional}>
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
                    <textarea id="additionalInfo" name="additionalInfo" rows="4" cols="50" placeholder="Please provide us any additional info" onChange={handleChange} value={state.additionalInfo}>
        
                    </textarea>
                </div>
                
            </form>
        </div>
    );
}
