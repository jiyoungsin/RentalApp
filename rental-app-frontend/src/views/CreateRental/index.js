import React, {useState } from 'react';
import { Redirect } from "react-router";
import Step from '@material-ui/core/Step';
import CreateRental from './CreateRental';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import Stepper from '@material-ui/core/Stepper';
import CreateRentalTwo from './CreateRentalTwo';
import StepLabel from '@material-ui/core/StepLabel';
import sendDetailsToServer from './useCreateRental';
import CreateRentalThree from './CreateRentalThree';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Checkout() {

    const useStyles = makeStyles((theme) => ({
        appBar: {
          position: 'relative',
        },
        layout: {
            height:"80%",
            width: "80%",
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: "80%"
            },
        },
        paper: {
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
        center: {
            margin: '5%',
            display : 'flex',
            justifyContent: 'center',
        }
    }));

    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Create Title', 'Upload Photos', 'Add Details'];
    const [uploadComplete,setUploadComplete] = useState(false);

    const [state, setState] = useState({
        file: "",
        title: "",
        email: "",
        price: "",
        contact: "true",
        address : "",
        phoneNum: "",
        category: "",
        description: "",
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setState((ps)=>({
            ...ps,
            [id]: value,
        }));
    }
    console.log(state);
    const getStepContent = (step) => {
        switch (step) {
          case 0:
            return  <CreateRental 
                        handleChange={handleChange}
                        state={state}
                    />
          case 1:
            return <CreateRentalTwo 
                        handleChange={handleChange}
                        state={state}
                    />;
          case 2:
            return <CreateRentalThree
                        handleChange={handleChange}
                        state={state}
                   />;
          default:
            throw new Error('Unknown step');
        } 
      }
    const handleNext = () => {
        // move user to next page.
        setActiveStep(activeStep + 1);
        // send data to backend and redirect to root.
        if( activeStep === steps.length - 1){
          sendDetailsToServer(state);
          setUploadComplete(true);
        }
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <div className={classes.center}>
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
                                {setTimeout(() => {
                                    return <Redirect to='/'/>
                                }, 5000)}
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
        {uploadComplete ? <Redirect to="/"/> : null }
    </div>
    );
}

