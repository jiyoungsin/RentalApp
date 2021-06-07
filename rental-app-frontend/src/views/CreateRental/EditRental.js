import React, { useState, useEffect} from 'react'
import InputForm from '../../components/InputForm';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function EditRental({match}) {
    const { id } = match.params;
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
        labelText: {
            fontSize: '24px',
        },
        buttonPadding: {
            padding: "10px",
            marginTop: "20px",
            marginBottom: "20px",
        },
    }));
    
    const classes = UseStyles();
    const [state,setState] = useState({
        file: "",
        title: "",
        email: "",
        price: "",
        contact: "",
        phoneNum: "",
        category: "",
        description: "",
    });
    const [loading,setLoading] = useState(false);
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/rentalUnit/${id}`, { 
            headers: {
                'Content-Type' : 'application/json',
            }
        }).then(res => {
            console.log("Fetching Data from Database");
            setState(res.data);
            setLoading(true);
        }).catch(err => {
            console.error(err);
            alert('Error fetching Data from Backend ');
        });
        // eslint-disable-next-line 
    },[loading]);
    
    // updating user input.
    const handleChange = (e) => {
        const {id,value} = e.target;
        setState((ps)=>({
            ...ps,
            [id]: value,
        }));
    }

    {/* TODO: make end point for edit/update rental. */}
    const onSubmit = () =>{
        // do something. 
    }

    return (
        loading === true ? 
        <div className={classes.container}>
            <h1>Edit Profile</h1>
            <form className={classes.formStyle} onSubmit={onSubmit()}>
                <label className={classes.labelText} for="title">title</label>
                <InputForm onChange={handleChange} type="text" id="title"  name="title" value={state.title} />
                <label className={classes.labelText} for="email">email</label>
                <InputForm onChange={handleChange} type="text" id="email"  name="email" value={state.email} />
                <label className={classes.labelText} for="price">price</label>
                <InputForm onChange={handleChange} type="text" id="price"  name="price" value={state.price} />
                <label className={classes.labelText} for="contact">contact</label>
                <InputForm onChange={handleChange} type="text" id="contact"  name="contact" value={state.contact} />
                <label className={classes.labelText} for="phoneNum">phoneNum</label>
                <InputForm onChange={handleChange} type="text" id="phoneNum"  name="phoneNum" value={state.phoneNum} />
                <label className={classes.labelText} for="category">category</label>
                <InputForm onChange={handleChange} type="text" id="category"  name="category" value={state.category} />
                <label className={classes.labelText} for="description">description</label>
                <InputForm onChange={handleChange} type="text" id="description"  name="description" value={state.description} />
                <Button variant="primary" className={classes.buttonPadding}>Submit</Button>
            </form>
        </div>
        : null
    )
}
