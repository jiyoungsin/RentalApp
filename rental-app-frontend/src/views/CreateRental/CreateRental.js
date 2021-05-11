import React from 'react'
import Button from 'react-bootstrap/Button';
import InputForm from '../../components/InputForm';
import { makeStyles } from '@material-ui/core/styles';


export default function CreateRental({values, handleChange, state}) {

    const useStyles = makeStyles(theme => ({
        formStyle: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            justifyItems : 'center',
            justifySelf : 'center',
        },
        container: {
            width: '60%',
            height: '100vh',
            margin: 'auto',
        },
        buttonPadding: {
            padding: "10px",
            marginTop: "20px",
            marginBottom: "20px",
        },
        labelText: {
            fontSize: '24px',
        },
    }));
    const classes = useStyles();
    
    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <h2>Create Rental</h2>
                <label className={classes.labelText} for="title">Title</label>
                <InputForm onChange={handleChange} type="text" value={values.title} placeholder="Ad title" id="title" name="title"/>
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
                        <InputForm style={{margin: "10px"}} onChange={handleChange} type="radio" value="Townhomes" id="category" name="category"  checked={state.category === "Townhomes"}/>
                    TownHomes</label>
                </div>
            </form>
        </div>
    )
}
