import React from 'react'
import { useStyles } from './styles';
import InputForm from '../../components/InputForm';

export default function CreateRental({handleChange, state}) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <h2>Create Rental</h2>
                <label className={classes.labelText} for="title">Title</label>
                <InputForm onChange={handleChange} type="text" value={state.title} placeholder="Ad title" id="title" name="title"/>
                <label className={classes.labelText}>Select a Category</label>
                <div class="container">
                    <label className={classes.labelText}>
                        <InputForm style={{margin: "10px"}} onChange={handleChange} type="radio" value="Condo" id="category" name="category"  checked={state.category === "Condo"}/>
                        Condo
                    </label>
                </div>
                <div class="container">
                    <label className={classes.labelText}>
                        <InputForm style={{margin: "10px"}} onChange={handleChange} type="radio" value="Homes" id="category" name="category"  checked={state.category === "Homes"}/>
                    Homes</label>
                </div>
                <div class="container">
                    <label className={classes.labelText}>
                        <InputForm style={{margin: "10px"}} onChange={handleChange} type="radio" value="Luxury" id="category" name="category"  checked={state.category === "Luxury"}/>
                    Luxury</label>
                </div>
                <div class="container">
                    <label className={classes.labelText}>
                        <InputForm style={{margin: "10px"}} onChange={handleChange} type="radio" value="Apartment" id="category" name="category"  checked={state.category === "Apartment"}/>
                    Apartment</label>
                </div>
                <div class="container">
                    <label className={classes.labelText}>
                        <InputForm style={{margin: "10px"}} onChange={handleChange} type="radio" value="TownHomes" id="category" name="category"  checked={state.category === "TownHomes"}/>
                    TownHomes</label>
                </div>
            </form>
        </div>
    )
}
