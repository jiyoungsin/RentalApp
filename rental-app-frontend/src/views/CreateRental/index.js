import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DoneIcon from '@material-ui/icons/Done';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateRental from './CreateRental';
import CreateRentalTwo from './CreateRentalTwo';
import CreateRentalThree from './CreateRentalThree';

export default function Checkout() {

    const useStyles = makeStyles((theme) => ({
        appBar: {
          position: 'relative',
        },
        layout: {
          width: 2000,
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
          [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 1500
          },
        },
        paper: {
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(3),
          padding: theme.spacing(2),
          [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          },
        },
        stepper: {
          padding: theme.spacing(3, 0, 5),
        },
        buttons: {
          display: 'flex',
          justifyContent: 'flex-end'
        },
        button: {
          marginTop: theme.spacing(3),
          marginLeft: theme.spacing(1),
        },
    }));

    const classes = useStyles();
    const steps = ['Create Title', 'Upload Photos', 'Add Details'];
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(true);

    const [state, setState] = useState({
        file: "",
        title: "",
        email: "",
        price: "",
        contact: "",
        phoneNum: "",
        category: "",
        description: "",
    });
    const { file, title, email, price, contact, phoneNum, category, description } = state;
    const values = { file, title, email, price, contact, phoneNum, category, description };

    const handleChange = (e) => {
        const {id, value} = e.target;
        setState((ps)=>({
            ...ps,
            [id]: value,
        }));
    }
    console.log(state);

    const sendDetailsToServer = () => {
        // const token = localStorage.token
        const payload={
            ...state
        }
        axios.post('Route to the Database', payload, { 
            headers: {
                'Content-Type' : 'application/json',
                //'Authorization' : `Bearer ${token}`
            }
        }).then(res => {
                  
        }).catch(err => {
            console.error(err);
            alert('Error Sending Data to Backend ');
        });
    }

    const getStepContent = (step) => {
        switch (step) {
          case 0:
            return  <CreateRental 
                        handleChange={handleChange}
                        values={values}
                        state={state}
                    />
          case 1:
            return <CreateRentalTwo 
                        handleChange={handleChange}
                        values={values}
                        state={state}
                    />;
          case 2:
            return <CreateRentalThree
                        handleChange={handleChange}
                        values={values}  
                        state={state}
                   />;
          default:
            throw new Error('Unknown step');
        } 
      }
    const handleNext = () => {
        setActiveStep(activeStep + 1);
        if( activeStep === steps.length - 1){
          sendDetailsToServer()
        }
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => (
                        <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                    </Stepper>
                    <React.Fragment>
                {activeStep === steps.length ? (
                    <React.Fragment>
                    <div style={{textAlign: 'center'}}>
                        { loading === false ? <>
                        <Typography variant="h5" gutterBottom>
                            File was successfully saved
                        </Typography>
                        <Typography variant="subtitle1">
                            GENERATED ID... {' '} {state.generatedID}. 
                            <br/>
                            <DoneIcon style={{color: 'green', fontSize: 60}}/>
                        </Typography>
                        </>  : <h3>Loading...</h3> }
                        <Button 
                            href='/' 
                            className={classes.button}
                            style={{backgroundColor: '#005561', color: '#fff'}}
                            >
                                Back
                        </Button>
                    </div>
                    </React.Fragment>
                ): (
                    <React.Fragment>
                        {getStepContent(activeStep)}
                        <div className={classes.buttons}>
                            {activeStep !== 0 && (
                            <Button onClick={handleBack} className={classes.button}>
                                Back
                            </Button>
                            )}
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                style={{backgroundColor: '#005561', color: '#fff'}}
                                className={classes.button}
                            >
                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                            </Button>
                        </div>
                    </React.Fragment>
                )}
                </React.Fragment>
            </Paper>
        </main>
    </React.Fragment>
    );
}

