import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


export default function DataItem( {key, name, onClick, clicked, rest}) {
    const useStyles = makeStyles(theme => ({
        root: {
            backgroundColor: clicked ?  "green" : "black",
            width: "200px",
            height: "150px",
            color: "white",
            padding: "20px",
            margin: "20px",
        },
    }));

    const classes = useStyles();

    return (
        <div
            // key={key}
            {...rest}
            className={classes.root}
            onClick={onClick} >
            <h3>{name}</h3>    
        </div>
    )
}
