import React from 'react';
import { useStyles } from './styles';

export default function CreateRentalTwo({ handleChange, checkHandleChange, state }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <div class="container">
                    <p>
                        <strong>
                            *** Help us find right tenants for you by answering following options!
                            ***
                        </strong>
                    </p>
                </div>
                <div class="container">
                    <div className="row">
                        <div
                            className="col-4"
                            style={{
                                border: '1px solid black',
                                backgroundColor: state.gym ? 'yellow' : 'white',
                            }}
                        >
                            <label for="gym">Gym</label> &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="gym"
                                name="gym"
                                checked={state.gym}
                            />
                        </div>
                        <div
                            className="col-4"
                            style={{
                                border: '1px solid black',
                                backgroundColor: state.water ? 'yellow' : 'white',
                            }}
                        >
                            <label for="water">Water</label> &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="water"
                                name="water"
                                checked={state.water}
                            />
                        </div>
                        <div
                            className="col-4"
                            style={{
                                border: '1px solid black',
                                backgroundColor: state.hydro ? 'yellow' : 'white',
                            }}
                        >
                            <label for="hydro">Hydro</label> &ensp;
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
                        <div
                            className="col-4"
                            style={{
                                border: '1px solid black',
                                backgroundColor: state.wifi ? 'yellow' : 'white',
                            }}
                        >
                            <label for="wifi">Internet</label> &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="wifi"
                                name="wifi"
                                checked={state.wifi}
                            />
                        </div>
                        <div
                            className="col-4"
                            style={{
                                border: '1px solid black',
                                backgroundColor: state.balcony ? 'yellow' : 'white',
                            }}
                        >
                            <label for="balcony">Balcony</label> &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="balcony"
                                name="balcony"
                                checked={state.balcony}
                            />
                        </div>
                        <div
                            className="col-4"
                            style={{
                                border: '1px solid black',
                                backgroundColor: state.roommate ? 'yellow' : 'white',
                            }}
                        >
                            <label for="roommate">Roommate</label> &ensp;
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
                        <div
                            className="col-4"
                            style={{
                                border: '1px solid black',
                                backgroundColor: state.petFriendly ? 'yellow' : 'white',
                            }}
                        >
                            <label for="petFriendly">Pet-Friendly</label> &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="petFriendly"
                                name="petFriendly"
                                checked={state.petFriendly}
                            />
                        </div>
                        <div
                            className="col-4"
                            style={{
                                border: '1px solid black',
                                backgroundColor: state.dishWasher ? 'yellow' : 'white',
                            }}
                        >
                            <label for="dishWasher">Dish-Washer</label> &ensp;
                            <input
                                onChange={checkHandleChange}
                                type="checkbox"
                                id="dishWasher"
                                name="dishWasher"
                                checked={state.dishWasher}
                            />
                        </div>
                        <div
                            className="col-4"
                            style={{
                                border: '1px solid black',
                                backgroundColor: state.airConditional ? 'yellow' : 'white',
                            }}
                        >
                            <label for="airConditional">Air-Conditional</label> &ensp;
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
                <label className={classes.textBoxStyling} for="additionalInfo">
                    Additional Info:
                </label>
                <textarea
                    onChange={handleChange}
                    id="additionalInfo"
                    name="additionalInfo"
                    rows="4"
                    cols="50"
                    placeholder="Please provide us any additional info"
                    value={state.additionalInfo}
                ></textarea>
            </form>
        </div>
    );
}
