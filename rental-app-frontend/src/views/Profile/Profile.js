import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RentalPost from '../../components/RentalPost';
import { makeStyles } from '@material-ui/core/styles';
import { userSessionContext } from '../../contextFile';
import AddCircleIcon from '@material-ui/icons/AddCircle';

//CSS Styles
const useStyles = makeStyles((theme) => ({
    profilePicture: {
        width: '175px',
        height: '175px',
        borderRadius: '50%',
        border: 'solid black 2px',
    },
    profileHeader: {
        width: '60%',
        height: '60%',
        margin: 'auto',
        marginTop: '5vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(https://picsum.photos/850/250)`,
    },
    fillPage: {
        marginBottom: '25vh',
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
}));

export default function Profile(req, res) {
    const { user, setUser } = useContext(userSessionContext);
    const { rental } = user;
    const classes = useStyles();
    const [rentalPost, setRentalPost] = useState();
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        axios
            .get(`http://localhost:5000/rentals/all`)
            .then((res) => {
                setRentalPost(res.data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
                alert('Error while Fetching Rental Units');
            });
    }, [rentalPost]);

    const data =()=>{ 
    }
    
    return (
        <>
            {loading ? 
            <div className={classes.fillPage}>
                <div className={classes.profileHeader}>
                    <img
                        className={classes.profilePicture}
                        src="https://picsum.photos/100/125"
                        alt="profile photo of user"
                    />
                    <h2 style={{ marginLeft: '40px', color: 'white' }}>Paul Sin</h2>
                </div>
                { loading ? (rentalPost.map((item)=>(
                    <>
                        <RentalPost
                            key={item._id}
                            src="https://picsum.photos/100/125"
                            address="800 Sunmount Road Basement Apt"
                            type={item.type}
                            description={item.description}
                            profilePic="https://picsum.photos/10/10"
                            sendersName="Michael Won"
                            lastMsg="2W"
                            price={item.price}
                            parking={item.parking}
                            room={item.room}
                            bathroom={item.bathroom}
                            pet={item.pet}
                            Review={item.Review}
                            unitPictures={item.unitPictures}
                            _id={rental}
                        />
                    </>
                ))) : null
                }
                <Link className={classes.addLink} to="/createRental">
                    <AddCircleIcon />
                </Link>
            </div>
            : null };
        </>
    );
}
