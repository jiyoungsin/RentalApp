import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    messagedProfilePicture: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: 'solid black 2px',
        margin: '5px',
    },
    container: {
        width: '60%',
        height: '60%',
        margin: 'auto',
        display: 'flex',
        padding: '10px',
        marginTop: '5vh',
        border: 'solid black 2px',
    },
    addLink: {
        width: '60%',
        height: '60%',
        margin: 'auto',
        display: 'flex',
        padding: '10px',
        marginTop: '5vh',
        justifyContent: 'center',
        border: 'solid black 2px',
    },
    rentalCard: {
        padding: '10px',
        marginRight: 'auto',
    },
    lastTalked: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    textDecoration: {
        textDecoration: 'none',
    },
    boxHead: {
        color: '#000',
        textDecoration: 'none',
    },
    backgroundColor: '#FFF',
    '&:hover': {
        background: 'none',
    },
    greenPriceTag: {
        color: '#37a864',
        fontSize: '30px',
    },
}));

export default function RentalPost({
    type,
    src,
    address,
    description,
    sendersName,
    profilePic,
    lastMsg,
    _id,
    price,
    parking,
    room,
    bathroom,
    pet,
    Review,
    unitPictures,
}) {
    const classes = useStyles();
    const EditLink = `/rentalUnit/${_id}`;
    const RentalLink = `/rental/${_id}`;

    const [requestDelete, setRequestDelete] = useState(false);
    const buttonPushed = () => {
        axios
            .delete(`http://localhost:5000/rentalUnit/delete/${_id}`)
            .then((res) => {
                console.log('Deleting Data from Database');
                Window.location.reload();
                //const rentals = res.arryOfRentals;
            })
            .catch((err) => {
                console.log(err);
                alert('Error while Deleting Rental Unit');
            });
    };

    return requestDelete === false ? (
        <>
            <Link to={RentalLink} style={{ textDecoration: 'none', color: 'black' }}>
                <div className={classes.container}>
                    <img src={src} alt="Picture Of Rental" />
                    <div className={classes.rentalCard}>
                        <span className={classes.greenPriceTag}>
                            $ {price}
                        </span>
                        <div className="font-italic">{address}</div>
                        <div>{description}</div>
                        <div style={{ padding: '10px' }}>
                            <img
                                className={classes.messagedProfilePicture}
                                src={profilePic}
                                alt="Person that messaged Profile Picture"
                            />
                            {sendersName}
                        </div>
                    </div>
                    <div className={classes.lastTalked}>
                        <Button>
                            <Link style={{ color: '#000' }} to={EditLink}>
                                Edit
                            </Link>
                        </Button>
                        <Button onClick={() => buttonPushed} style={{ color: '#000' }}>
                            Delete
                        </Button>
                        <Button style={{ color: '#000' }} disabled>
                            {lastMsg}
                        </Button>
                    </div>
                </div>
            </Link>
        </>
    ) : (
        <Redirect to="/" />
    );
}
