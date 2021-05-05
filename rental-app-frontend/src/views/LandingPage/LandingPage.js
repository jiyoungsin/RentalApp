import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


export default function LandingPage() {
    const useStyles = makeStyles(theme => ({
        root: {
            width: "200px",
            height: "150px",
            color: "white",
            padding: "20px",
            margin: "20px",
        },
        x: {
            display: "flex",
            textAlign: "center",
            backgroundColor: "blue",
        }
    }));

    const classes = useStyles();

    return (
        <div class="container pt-2 mt-2">
            <h2>Renting Made Easy.</h2>
            <div className={classes.x}>
                <div class="col-6">Rent</div>
                <div class="col-6">Find Rental</div>
            </div>

        </div>
    )
}
