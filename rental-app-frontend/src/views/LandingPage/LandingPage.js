import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';

export default function LandingPage() {
    const useStyles = makeStyles(theme => ({
        root: {
            width: "200px",
            height: "150px",
            color: "white",
            padding: "20px",
            margin: "20px",
        },
        centerItems: {
            display: "flex",
            textAlign: "center",
        },
        centerText: {
            textAlign: "center",
        },
        imageSize: {
            width: "200px",
            height: "150px",
            padding: "20px",
        }
    }));

    const classes = useStyles();

    return (
        <div class="container pt-2 mt-2">
            <h2>Renting Made Easy.</h2>
            <div class="container" className={classes.centerText}>
                <img className={classes.imageSize} src="https://i.imgur.com/TGdhfQv.jpg" alt="piled up moving boxes"></img>
            </div>
            <div className={classes.centerItems}>
                <div class="col-6">
                    <a href="/createRental"><Button variant="primary">Rent Property</Button>{' '}</a>
                </div>
                <div class="col-6">
                    <a href="/login"><Button variant="primary">Find Property</Button>{' '}</a>
                </div>
            </div>

        </div>
    )
}
