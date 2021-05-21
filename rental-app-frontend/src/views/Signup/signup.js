import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import InputForm from '../../components/InputForm';
import { makeStyles } from '@material-ui/core/styles';

export default function Signup() {
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
        userName: '',
        lastName: '',
        password: '',
        firstName: '',
        phoneNumber: '',
    });

    const [signUpSuccessful, setSignUpSuccessful] = useState(false);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((ps)=>({
            ...ps,
            [id]: value,
        }));
    }
    console.log(formData);
    const onSubmit = () =>{
        // saves data to Database Endpoint /signup
        const payload = {...formData}
        axios.post('http://localhost:5000/users/signup', payload, { 
            headers: {
                'Content-Type' : 'application/json',
            }
        }).then(res => {
            console.log("Creating Account");
            setSignUpSuccessful(true);
        }).catch(err => {
            console.error(err);
            alert('Error Sending Data to Backend');
        });
    }

    return (
        <div className={classes.container}>
            <form className={classes.formStyle}>
                <h2>Sign Up</h2>
                <label className={classes.labelText} for="userName">User Name</label>
                <InputForm onChange={handleChange} type="text" value={formData.userName} id="userName" name="userName"/>
                <label className={classes.labelText} for="firstName">First Name</label>
                <InputForm onChange={handleChange} type="text" value={formData.firstName} id="firstName" name="firstName"/>
                <label className={classes.labelText} for="lastName">Last Name</label>
                <InputForm onChange={handleChange} type="text" value={formData.lastName} id="lastName" name="lastName"/>
                <label className={classes.labelText} for="email">Email</label>
                <InputForm onChange={handleChange} type="text" value={formData.email} id="email" name="email"/>
                <label className={classes.labelText} for="password">Password</label>
                <InputForm onChange={handleChange} type="text" value={formData.password} id="password" name="password"/>
                <label className={classes.labelText} for="phoneNumber">Phone Number</label>
                <InputForm onChange={handleChange} type="text" value={formData.phoneNumber} id="phoneNumber" name="phoneNumber"/>
                <Button variant="primary" className={classes.buttonPadding} onClick={()=>{onSubmit()}}>Submit</Button>
            </form>
            {signUpSuccessful ? <Redirect to="/login"/> : null }
        </div>
    )
}
