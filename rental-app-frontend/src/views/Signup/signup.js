import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputForm from '../../components/InputForm';
import Button from 'react-bootstrap/Button';

export default function signup() {
    const UseStyles = makeStyles(theme => ({
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

    const classes = UseStyles();
    const onSubmit = () =>{
        // do something.
    }

    return (
        <div className={classes.container}>
            <form className={classes.formStyle} onSubmit={onSubmit()}>
                <h2>Sign Up</h2>
                <label className={classes.labelText} for="id">Email</label>
                <InputForm type="text" placeholder="JohnDoe@gmail.com" id="id" name="id"/>
                <label className={classes.labelText} for="password">password</label>
                <InputForm type="text" placeholder="" id="password" name="password"/>
                <Button variant="primary" className={classes.buttonPadding}>Submit</Button>
            </form>
        </div>
    )
}
