import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
    messagedProfilePicture:{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "solid black 2px",
        margin: "5px",
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
    addLink:{
        width: '60%',
        height: '60%',
        margin: 'auto',
        display: "flex",
        padding: "10px",
        marginTop: "5vh",
        justifyContent: "center",
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

export default function RentalPost({title, src, address, desc, sendersName, profilePic, lastMsg, rentalPostId}) {

    const [requestDelete, setRequestDelete] = useState(false);
    useEffect(()=>{
        axios.delete(`http://localhost:5000/rentalUnit/delete/${rentalPostId}`, 
        ).then(res=>{
            console.log("Deleting Data from Database");
            console.log(res.data);
            Window.location.reload();
            //const rentals = res.arryOfRentals;
        }).catch(err=>{
            console.log(err);
            alert("Error while Deleting Rental Unit");
        })
    },[requestDelete])

    const classes = useStyles();
    const link = `/rentalUnit/${_id}`
    console.log(link);
    return (
        requestDelete === false ? 
        <>
            <div className={classes.container}>
                <img src={src} alt="Picture Of Rental"/>
                <div className={classes.rentalCard}>
                    <h5>{title}</h5>
                    <div>{address}</div>
                    <div>{desc}</div>
                    <div style={{padding: "10px"}}>
                        <img className={classes.messagedProfilePicture} src={profilePic} alt="Person that messaged Profile Picture"/>
                        {sendersName}
                    </div>
                </div>
                <div className={classes.lastTalked}>
                    <div>
                        <Link to={link}>Edit</Link>
                    </div>
                    <div>
                        <a href="" onClick={()=>setRequestDelete(true)}>Delete</a>
                    </div>
                    <div>{lastMsg}</div>
                </div>
            </div>
            <Link className={classes.addLink} to="/createRental">
                <AddCircleIcon/>
            </Link>
        </>: <Redirect to="/"/>
    )
}
