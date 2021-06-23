import React, { useContext, useState, useEffect } from 'react';
import { userSessionContext } from '../../contextFile';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Importing Icons needed for UI
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import BathtubIcon from '@material-ui/icons/Bathtub';
import PetsIcon from '@material-ui/icons/Pets';

//CSS Styles
const useStyles = makeStyles((theme) => ({
    greenPriceTag: {
        color: '#37a864',
        fontSize: '30px',
    },
    iconPadding: {
        margin: "5px",
    },
    iconFlex: {
        margin: "0px 10px 0 10px",
    }
}));

export default function Rental() {
    const { user, setUser } = useContext(userSessionContext);
    const { rental } = user;
    const classes = useStyles();
    const [rentalPost, setRentalPost] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios
            .get(`http://localhost:5000/profile/` + rental)
            .then((res) => {
                setRentalPost(res.data[0]);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
                alert('Error while Fetching Rental Units');
            });
    }, [loaded]);
    return (
        <>
            {loaded ? (
                <div className="container border borderSecondary p-5 mt-5">
                    <span>{user.userName}</span>
                    <span> > </span>
                    <span>{rentalPost.type}</span>
                    <span> > </span>
                    <span>{rentalPost._id}</span>
                    <div>
                        <div>
                            <img src="https://picsum.photos/571/322" alt="pictures of unit" />
                        </div>
                        <div>
                            <img src="https://picsum.photos/178/122" alt="pictures of unit" />
                            <img src="https://picsum.photos/178/122" alt="pictures of unit" />
                            <img src="https://picsum.photos/178/122" alt="pictures of unit" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div
                                style={{ display: 'flex' }}
                                className="d-flex justify-content-between"
                            >
                                <div>
                                    <h3 className="card-title">{rentalPost.title}</h3>
                                    <span>
                                        {rentalPost.address}
                                        <Link to="http://localhost:3000/MapSearch">
                                            {' '}
                                            ( View Map ){' '}
                                        </Link>
                                    </span>
                                </div>
                                <div >
                                    <span className={classes.iconFlex}>
                                        <DirectionsCarIcon className={classes.iconPadding}/> : {rentalPost.parking}
                                    </span>
                                    <span className={classes.iconFlex}>
                                        <MeetingRoomIcon className={classes.iconPadding}/>: {rentalPost.room}
                                    </span>
                                    <span className={classes.iconFlex}>
                                        <BathtubIcon className={classes.iconPadding}/> : {rentalPost.bathroom}
                                    </span>
                                    <span className={classes.iconFlex}>
                                        <PetsIcon className={classes.iconPadding}/> : {rentalPost.pet ? "Allowed" : "Not Allowed"
                                }</span>
                                </div>
                                <div>
                                    <span className={classes.greenPriceTag}>
                                        $ {rentalPost.price}
                                    </span>
                                </div>
                            </div>
                            <p class="card-text">
                                {rentalPost.description}
                            </p>
                            <p>Updated at: {rentalPost.updatedAt}</p>

                        </div>
                    </div>
                </div>
            ) : (
                <h2> NOT loaded</h2>
            )}
        </>
    );
}
