import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
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
    const classes = useStyles();
    const [rentalPost, setRentalPost] = useState();
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useContext(userSessionContext);
    const usersFirstName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);
    const usersLastName = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);

    useEffect(() => {
        const payload = { user };
        axios
            .post(`http://localhost:5000/rentals/users-rental`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                setRentalPost(res.data);
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
                alert('Error while Fetching Rental Units');
            });
    }, [loading]);

    const arrayBufferTobase64 = (buffer) => {
        let binary = '';
        let base64Flag = 'data:image/jpeg;base64,';
        let bytes = [].slice.call(new Uint8Array(buffer.data));
        bytes.forEach((b) => {
            binary += String.fromCharCode(b);
        });

        let binaryString = window.btoa(binary);

        return base64Flag + binaryString;
    };
    return (
        <React.Fragment>
            {loading ? (
                <div className={classes.fillPage}>
                    <div className={classes.profileHeader}>
                            <img
                                className={classes.profilePicture}
                                src="https://picsum.photos/100/125"
                                alt="profile photo of user"
                            />
                        <h2 style={{ marginLeft: '40px', color: 'white' }}>{user.firstName} {user.lastName}</h2>
                    </div>
                    {loading
                        ? rentalPost.map((item) => (
                              <RentalPost
                                  key={item._id}
                                  src={arrayBufferTobase64(item.image.data)}
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
                                  _id={item._id}
                              />
                          ))
                        : null}
                    <Link className={classes.addLink} to="/createRental">
                        <AddCircleIcon />
                    </Link>
                </div>
            ) : null}
            ;
        </React.Fragment>
    );
}
