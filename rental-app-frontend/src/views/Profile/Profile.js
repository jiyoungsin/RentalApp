import React from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    messagedProfilePicture:{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "solid black 2px",
    },
    profilePicture: {
        width: "175px",
        height: "175px",
        borderRadius: "50%",
        border: "solid black 2px",
    },
    profileHeader: {
        width: '60%',
        height: '60%',
        margin: 'auto',
        marginTop: "5vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(https://picsum.photos/850/250)`
    },
    container:{
        width: '60%',
        height: '60%',
        margin: 'auto',
        display: "flex",
        padding: "10px",
        marginTop: "5vh",
        border: "solid black 2px",
    },
    rentalCard: {
        padding: "10px",
        marginRight: "auto",
    },
    lastTalked:{
        alignSelf: "center",
    }
}));

export default function Profile() {
    
    const classes = useStyles();
    return (
        <>
            <div className={classes.profileHeader}>
                <img className={classes.profilePicture} src="https://picsum.photos/100/125" alt="profile photo of user"/>
                <h2 style={{marginLeft: "40px", color: "white"}}>Paul Sin</h2>
            </div>
            <div className={classes.container}>
                <img src="https://picsum.photos/100/125" alt="Picture Of Rental"/>
                <div className={classes.rentalCard}>
                    <h5>700 Sunmout Road Basement Apt</h5>
                    <div>Description of the Rental #1 given by the user fetch from Database</div>
                    <div style={{padding: "10px"}}>
                        <img className={classes.messagedProfilePicture} src="https://picsum.photos/10/10" alt="Person that messaged's Profile Picture"/>
                        Michael Won
                    </div>
                </div>
                <div className={classes.lastTalked}>
                    2W
                </div>
            </div>
        </>
    )
}
