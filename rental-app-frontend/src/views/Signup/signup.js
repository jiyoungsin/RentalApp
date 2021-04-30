import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputForm from '../../components/InputForm';


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
        }
    }));

    const classes = UseStyles();
    const onSubmit = () =>{
        // do something.
    }

    return (
        <div className={classes.container}>
            <form className={classes.formStyle} onSubmit={onSubmit()}>
                <label for="id">id</label>
                <InputForm type="text" placeholder="JohnDoe@gmail.com" id="id" name="id"/>
                <label for="password">password</label>
                <InputForm type="text" placeholder="" id="password" name="password"/>
                <button>Submit</button>
            </form>
        </div>
    )
}
