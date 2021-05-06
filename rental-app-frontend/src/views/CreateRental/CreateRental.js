import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputForm from '../../components/InputForm';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom'


export default function CreateRental() {

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
    }));
    // className={classes.root}
    const classes = useStyles();

    const [state, setState] = useState({
        title: '',
        category: '',
        nextPage: false,
    });


    const onSubmit = () =>{
        // @TODO: save user data using API
        // <Redirect to="/CreateRentalTwo"/>
    }
    const handleChange = (e) => {
        // console.log(e);
        const {id, value} = e.target;
        setState({
            [id]: value,
        });
    }
    
    const handleRadioChange = (e) => {
        // console.log(e);
        const {id, placeholder} = e.target;
        setState({
            [id]: placeholder,
        });
        console.log(state);
        // ask about keeping track of two states.
    }
    return (
        <div className={classes.container}>
            <h1>{state.title}</h1>
            <h1>{state.category}</h1>
            <div ></div>
            <form className={classes.formStyle} onSubmit={onSubmit}>
                <h2>Create Rental</h2>
                <label className={classes.labelText} for="title">Title</label>
                <InputForm onChange={handleChange} type="text" value={state.name} placeholder="Ad title" id="title" name="title"/>
                <label className={classes.labelText}>Select a Category</label>
                <div class="container">
                    <InputForm onChange={handleRadioChange} type="radio" value="Condo" placeholder="Condo" id="category" name="category"  checked={state.category === "Condo"}/>
                    <label className={classes.labelText} for="Condo">Condo</label>
                </div>
                <div class="container">
                    <InputForm onChange={handleRadioChange} type="radio" value="Homes" placeholder="Homes" id="category" name="category"  checked={state.category === "Homes"}/>
                    <label className={classes.labelText} for="Homes">Homes</label>
                </div>
                <div class="container">
                    <InputForm onChange={handleRadioChange} type="radio" value="Luxury" placeholder="Luxury" id="category" name="category"  checked={state.category === "Luxury"}/>
                    <label className={classes.labelText} for="Luxury">Luxury</label>
                </div>
                <div class="container">
                    <InputForm onChange={handleRadioChange} type="radio" value="Apartment" placeholder="Apartment" id="category" name="category"  checked={state.category === "Apartment"}/>
                    <label className={classes.labelText} for="Apartment">Apartment</label>
                </div>
                <div class="container">
                    <InputForm onChange={handleRadioChange} type="radio" value="Townhomes" placeholder="Townhomes" id="category" name="category"  checked={state.category === "Townhomes"}/>
                    <label className={classes.labelText} for="Townhomes">Townhomes</label>
                </div>
                <Button type="submit" variant="primary" className={classes.buttonPadding}>Create Rental</Button>
            </form>
        </div>
    )
}
