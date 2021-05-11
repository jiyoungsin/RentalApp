import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputForm from '../../components/InputForm';
import Button from 'react-bootstrap/Button';

export default function CreateRentalTwo({values, handleChange, state }) {

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
                <InputForm onChange={handleChange} type="text" value={state.title} placeholder="Ad title" id="title" name="title"/>
                <label className={classes.labelText} for="category">category</label>
                <InputForm onChange={handleChange} type="text" value={state.category} placeholder="" id="category" name="category"/>
                <label className={classes.labelText} for="description">Description</label>
                <InputForm onChange={handleChange} type="text" value={state.description} id="description" name="description"/>
                <label className={classes.labelText} for="file">Upload Images</label>
                <InputForm onChange={handleChange} type="file" value={state.file} id="file" name="file"/>
            </form>
        </div>
    )
}
