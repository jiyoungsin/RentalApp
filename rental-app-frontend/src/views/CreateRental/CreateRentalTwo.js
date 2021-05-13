import React from 'react';
import { useStyles } from './styles';

import InputForm from '../../components/InputForm';

export default function CreateRentalTwo({handleChange, state }) {
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
