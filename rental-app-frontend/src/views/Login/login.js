import React, { useState, useContext } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputForm from '../../components/InputForm';
import Button from 'react-bootstrap/Button';
import { userSessionContext } from '../../contextFile';
import { Redirect } from 'react-router-dom';

export default function Login() {
    // css needed for our components.
    const UseStyles = makeStyles((theme) => ({
        formStyle: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            justifyItems: 'center',
            justifySelf: 'center',
        },
        container: {
            width: '60%',
            height: '100vh',
            margin: 'auto',
        },
        buttonPadding: {
            padding: '10px',
            marginTop: '20px',
            marginBottom: '20px',
        },
        labelText: {
            fontSize: '24px',
        },
    }));
    const { user, setUser } = useContext(userSessionContext);
    const classes = UseStyles();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [signInSuccessful, setSignInSuccessful] = useState(false);

    // this function updates the state every input.
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };

    // submits the data for validation
    const onSubmit = () => {
        // checks data by using Database Endpoint /login
        const payload = { ...formData };
        axios
            .post('http://www.aidatastructures.com:5000/users/login', {
                data: payload,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                const the_User = res.data;
                if (res.data.toString() === 'Incorrect Password') {
                    const error = 'Incorrect Username or Password';
                    document.getElementById('wrongPwOrId').innerHTML = error;
                } else {
                    setUser(the_User);
                    setSignInSuccessful(true);
                }
            })
            .catch((err) => {
                console.error(err);
                alert('ERROR: Logging in');
            });
    };
    console.log(formData);
    return (
        <React.Fragment>
            {signInSuccessful ? (
                <Redirect to="/" />
            ) : (
                <div className={classes.container}>
                    <form className={classes.formStyle}>
                        <h2>Log in</h2>
                        <p id="wrongPwOrId" style={{ color: 'red' }}></p>
                        <label className={classes.labelText} for="email">
                            Email
                        </label>
                        <InputForm
                            onChange={handleChange}
                            type="text"
                            value={formData.email}
                            placeholder="JohnDoe@gmail.com"
                            id="email"
                            name="email"
                        />
                        <label className={classes.labelText} for="password">
                            Password
                        </label>
                        <InputForm
                            onChange={handleChange}
                            type="text"
                            value={formData.password}
                            placeholder=""
                            id="password"
                            name="password"
                        />
                        <Button
                            variant="primary"
                            className={classes.buttonPadding}
                            onClick={onSubmit}
                        >
                            Submit
                        </Button>
                        <div class="container">
                            <span class="psw">
                                Don't have an account?<a href="/signup"> Sign Up.</a>
                            </span>
                        </div>
                    </form>
                </div>
            )}
        </React.Fragment>
    );
}
