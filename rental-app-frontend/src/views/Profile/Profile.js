import React from 'react'
import RentalPost from '../../components/RentalPost';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    fillPage: {
        marginBottom: "25vh",
    }
}));

export default function Profile() {
    
    const classes = useStyles();
    return (
        <div className={classes.fillPage}>
            <div className={classes.profileHeader}>
                <img className={classes.profilePicture} src="https://picsum.photos/100/125" alt="profile photo of user"/>
                <h2 style={{marginLeft: "40px", color: "white"}}>Paul Sin</h2>
            </div>
            <RentalPost 
                src="https://picsum.photos/100/125"
                address="800 Sunmount Road Basement Apt"
                desc="Description of the Rental #1 given by the user fetch from Database"
                profilePic="https://picsum.photos/10/10"
                sendersName="Michael Won"
                lastMsg="2W"
            />            
        </div>
    )
}
