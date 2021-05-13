import React from 'react';
import { useStyles } from './styles';
import InputForm from '../../components/InputForm';

export default function CreateRentalTwo({handleChange, state}) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <h2>Create Rental</h2>
                <label className={classes.labelText} for="price">price</label>
                <InputForm onChange={handleChange} type="text" value={state.price} placeholder="Ad price" id="price" name="price"/>
                <div className={classes.checkbox}>
                    <label className={classes.text} for="contact">Please Contact</label>
                    <input className={classes.checkboxStyle} onChange={handleChange} type="checkbox" value={state.contact} id="contact" name="contact"/>
                </div>
                <h3>Contact Information</h3>
                <label className={classes.labelText} for="phoneNum">Phone Number</label>
                <InputForm onChange={handleChange} type="text" value={state.phoneNum} id="phoneNum" name="phoneNum"/>
                <label className={classes.labelText} for="email">Email</label>
                <InputForm onChange={handleChange} type="text" value={state.email} id="email" name="email"/>
            </form>
        </div>
    )
}
