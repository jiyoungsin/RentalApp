import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputForm from '../../components/InputForm';
import Button from 'react-bootstrap/Button';

export default function CreateRentalTwo() {

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
        checkbox: {
            display: "flex",
            marginTop: "10px",
        },
        text: {
            fontSize: '24px',
            marginRight: "auto"
        },
        checkboxStyle: {
            height: "30px", width: "30px"
        }
    }));

    const classes = useStyles();

    const [state, setState] = useState({
        description: '',
    });

    const submitter = (event) =>{
        // @TODO: save user data using API
        event.preventDefault();
        window.location.replace("/CreateRentalThree");
    }

    const handleChange = (e) => {
        const {id, value} = e.target;
        console.log(id)
        console.log(value)
        setState((ps)=>({
            ...ps,
            [id]: value,
        }));
        console.log(state);
    }

    return (
        <div className={classes.container}>
            <form className={classes.formStyle} onSubmit={submitter}>
                <h2>Create Rental</h2>
                <label className={classes.labelText} for="price">price</label>
                <InputForm onChange={handleChange} type="text" value={state.price} placeholder="Ad price" id="price" name="price"/>
                <div className={classes.checkbox}>
                    <label className={classes.text} for="contact">Please Contact</label>
                    <input className={classes.checkboxStyle} onChange={handleChange} type="checkbox" value={state.contact} id="contact" name="contact"/>
                </div>
                <h3>Contact Information</h3>
                <label className={classes.labelText} for="phoneNum">Phone Number</label>
                <InputForm onChange={handleChange} type="text" value={state.phoneNum} id="phoneNum" name="phoneNum"/>
                <label className={classes.labelText} for="email">Email</label>
                <InputForm onChange={handleChange} type="text" value={state.email} id="email" name="email"/>

                <Button type="submit" variant="primary" className={classes.buttonPadding}>Create Rental</Button>
            </form>
        </div>
    )
}
