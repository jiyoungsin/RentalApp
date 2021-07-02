import React from 'react';
import { useStyles } from './styles';

export default function CreateRentalTwo({ handleChange, state }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <div class="container">
                <p>Upload Pictures of Your House!</p>
                </div>
                <div class="container">
                    <label for="image">Select Images: </label>&ensp;
                    <input type="file" id="image" name="image" onChange={handleChange}></input>
                </div>
            </form>
        </div>
    );
}
