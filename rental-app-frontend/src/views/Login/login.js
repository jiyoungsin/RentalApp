import React, {useState, useEffect}  from "react";
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
        name: '',
    });

    const onSubmit = () =>{
        // do something.
    }
    const handleChange = (e) => {
        // console.log(e);
        const {id, value} = e.target;
        setState({[id]: value});
    }

    return (
        <>
            <div className={classes.container}>
                {/* <h3>{state.name}</h3> */}
                <form className={classes.formStyle} onSubmit={onSubmit()}>
                    <h2>Log in</h2>
                    <label className={classes.labelText} for="name">Email</label>
                    <InputForm onChange={handleChange} type="text" value={state.name} placeholder="JohnDoe@gmail.com" id="name" name="name"/>
                    <label className={classes.labelText} for="password">Password</label>
                    <InputForm onChange={handleChange} type="text" value={state.name} placeholder="" id="password" name="password"/>
                    <Button variant="primary" className={classes.buttonPadding}>Submit</Button>
                    <div class="container">
                        <span class="psw">Dont have an account?<a href="/signup"> Sign Up.</a></span>
                    </div>
                    <div class="container">
                        <span class="psw">If you have forgotten your password, you can reset it by clicking <a href="/"> Reset Password.</a></span>
                    </div>
                </form>
            </div>
       </>
    )
}
