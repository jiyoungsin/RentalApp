import React, {useState}  from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputForm from '../../components/InputForm';
import Button from 'react-bootstrap/Button';

export default function Login() {
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
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const onSubmit = () =>{
        // do something.
    }
    const handleChange = (e) => {
        const {id,value} = e.target;
        setState((ps)=>({
            ...ps,
            [id]: value,
        }));
    }

    return (
        <div className={classes.container}>
            <form className={classes.formStyle} onSubmit={onSubmit()}>
                <h2>Log in</h2>
                <label className={classes.labelText} for="email">Email</label>
                <InputForm onChange={handleChange} type="text" value={state.email} placeholder="JohnDoe@gmail.com" id="email" name="email"/>
                <label className={classes.labelText} for="password">Password</label>
                <InputForm onChange={handleChange} type="text" value={state.password} placeholder="" id="password" name="password"/>
                <Button variant="primary" className={classes.buttonPadding}>Submit</Button>
                <div class="container">
                    <span class="psw">Don't have an account?<a href="/signup"> Sign Up.</a></span>
                </div>
                <div class="container">
                    <span class="psw">If you have forgotten your password, you can reset it by clicking <a href="/"> Reset Password.</a></span>
                </div>
            </form>
        </div>
    )
}
