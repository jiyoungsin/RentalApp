import React from 'react';
import { useStyles } from './styles';

export default function CreateRentalTwo({ handleChange, checkHandleChange, state }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <div class="container">
                    <p>
                        *** Help us find right tenants for you by answering following options! ***
                    </p>
                </div>
                <div class="container">
                    <div className="row">
                        <div className="col-4" style={{border: "1px solid black", backgroundColor: state.gym ? "yellow" : "white"}}>
                            <label className={classes.labelText} for="gym" >
                                Gym
                            </label>{' '}
                            &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="gym"
                                name="gym"
                                checked={state.gym}
                            />
                        </div>
                        <div className="col-4" style={{border: "1px solid black", backgroundColor: state.water ? "yellow" : "white"}}>
                            <label className={classes.labelText} for="water">
                                Water
                            </label>{' '}
                            &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="water"
                                name="water"
                                checked={state.water}
                            />
                        </div>
                        <div className="col-4" style={{border: "1px solid black", backgroundColor: state.hydro ? "yellow" : "white"}}>
                            <label className={classes.labelText} for="hydro">
                                Hydro
                            </label>{' '}
                            &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="hydro"
                                name="hydro"
                                checked={state.hydro}
                            />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div className="row">
                        <div className="col-4" style={{border: "1px solid black", backgroundColor: state.wifi ? "yellow" : "white"}}>
                            <label className={classes.labelText} for="wifi">
                                Internet
                            </label>{' '}
                            &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="wifi"
                                name="wifi"
                                checked={state.wifi}
                            />
                        </div>
                        <div className="col-4" style={{border: "1px solid black", backgroundColor: state.balcony ? "yellow" : "white"}}>
                            <label className={classes.labelText} for="balcony">
                                Balcony
                            </label>{' '}
                            &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="balcony"
                                name="balcony"
                                checked={state.balcony}
                            />
                        </div>
                        <div className="col-4" style={{border: "1px solid black", backgroundColor: state.roommate ? "yellow" : "white"}}>
                            <label className={classes.labelText} for="roommate">
                                Roommate
                            </label>{' '}
                            &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="roommate"
                                name="roommate"
                                checked={state.roommate}
                            />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div className="row">
                        <div className="col-4" style={{border: "1px solid black", backgroundColor: state.petFriendly ? "yellow" : "white"}}>
                            <label className={classes.labelText} for="petFriendly">
                                Pet-Friendly
                            </label>{' '}
                            &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="petFriendly"
                                name="petFriendly"
                                checked={state.petFriendly}
                            />
                        </div>
                        <div className="col-4" style={{border: "1px solid black", backgroundColor: state.dishWasher ? "yellow" : "white"}}>
                            <label className={classes.labelText} for="dishWasher">
                                Dish-Washer
                            </label>{' '}
                            &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="dishWasher"
                                name="dishWasher"
                                checked={state.dishWasher}
                            />
                        </div>
                        <div className="col-4" style={{border: "1px solid black", backgroundColor: state.airConditional ? "yellow" : "white"}}>
                            <label className={classes.labelText} for="airConditional">
                                Air-Conditional
                            </label>{' '}
                            &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="airConditional"
                                name="Air-Conditional"
                                checked={state.airConditional}
                            />
                        </div>
                    </div>
                </div>

                <div class="container">
                    <label className={classes.labelText} for="additionalInfo">
                        Additional Info:
                    </label>
                </div>
                <div class="container">
                    <textarea
                        onChange={handleChange}
                        id="additionalInfo"
                        name="additionalInfo"
                        rows="4"
                        cols="50"
                        placeholder="Please provide us any additional info"
                        value={state.additionalInfo}
                    ></textarea>
                </div>
            </form>
        </div>
    );
}
