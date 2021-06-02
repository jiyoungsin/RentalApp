import React, {useState, useEffect} from 'react';
import axios from 'axios';  //allows us to talk to back end
import RentalPost from '../../components/RentalPost';
import { makeStyles } from '@material-ui/core/styles';

//CSS Styles
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
    
    const [rentalPost, setRentalPost] = useState({});
    useEffect(()=>{
        axios.get("http://localhost:5000/profile/rentals", 
        ).then(res=>{
            console.log("Fetching Data from Database");
            console.log(res.data);
            setRentalPost(res.data); 
            //const rentals = res.arryOfRentals;
        }).catch(err=>{
            console.log(err);
            alert("Error while Fetching Rental Units");
        })
    },[]);

    return (
        <div className={classes.fillPage}>
            <div className={classes.profileHeader}>
                <img className={classes.profilePicture} src="https://picsum.photos/100/125" alt="profile photo of user"/>
                <h2 style={{marginLeft: "40px", color: "white"}}>Paul Sin</h2>
            </div>
            <RentalPost 
                src="https://picsum.photos/100/125"
                address="800 Sunmount Road Basement Apt"
                title={rentalPost.title}
                desc={rentalPost.description}
                profilePic="https://picsum.photos/10/10"
                sendersName="Michael Won"
                lastMsg="2W"
                _id={rentalPost._id}
            />            
        </div>
    )
}
