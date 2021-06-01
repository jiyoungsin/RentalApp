import React from 'react'
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

export default function RentalPost({title, src, address, desc, sendersName, profilePic, lastMsg, _id}) {

    const classes = useStyles();
    const link = `/rentalUnit/${_id}`
    console.log(link);
    return (
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
                        Delete
                    </div>
                    <div>{lastMsg}</div>
                </div>
            </div>
            <Link className={classes.addLink} to="/createRental">
                <AddCircleIcon/>
            </Link>
        </>
    )
}
