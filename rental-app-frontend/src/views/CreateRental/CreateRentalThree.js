import React from 'react';
import { useStyles } from './styles';
import InputForm from '../../components/InputForm';

export default function CreateRentalTwo({ handleChange, state }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <div class="container">
                <p>Upload Pictures of Your House!</p>
                </div>
                <div class="container">
                    <label for="images">Select Images: </label>&ensp;
                    <input type="file" id="images" name="images"></input>
                </div>
                

            </form>
        </div>
    );
}
