import React, {useState}  from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
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
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const onSubmit = () => {
        const payload = {...formData}
        axios.post('http://localhost:5000/users/login', payload, { 
            headers: {
                'Content-Type' : 'application/json',
            }
        }).then(res => {
            console.log("Logging in user");
            <Redirect to="/profile"/>
        }).catch(err => {
            console.error(err);
            alert('ERROR: Logging in');
        });
    }
    const handleChange = (e) => {
        const {id,value} = e.target;
        setFormData((ps)=>({
            ...ps,
            [id]: value,
        }));
    }
    return (
        <div className={classes.container}>
            <form className={classes.formStyle} onSubmit={onSubmit}>
                <h2>Log in</h2>
                <label className={classes.labelText} for="email">Email</label>
                <InputForm onChange={handleChange} type="text" value={formData.email} placeholder="JohnDoe@gmail.com" id="email" name="email"/>
                <label className={classes.labelText} for="password">Password</label>
                <InputForm onChange={handleChange} type="text" value={formData.password} placeholder="" id="password" name="password"/>
                <Button type="submit" variant="primary" className={classes.buttonPadding}>Submit</Button>
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
