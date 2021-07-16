import arrayBufferToBase64 from "../../utilities/arrayBufferToBase64";
import React, { useContext, useState, useEffect } from 'react';
import { userSessionContext } from '../../contextFile';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './styles.css';  


import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// Importing Icons needed for UI
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import OpacityIcon from '@material-ui/icons/Opacity';
import BathtubIcon from '@material-ui/icons/Bathtub';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import PeopleIcon from '@material-ui/icons/People';
import WifiIcon from '@material-ui/icons/Wifi';
import PetsIcon from '@material-ui/icons/Pets';
import GoogleMap from '../../components/GoogleMap/GoogleMap';

//CSS Styles
const useStyles = makeStyles((theme) => ({
    greenPriceTag: {
        color: '#37a864',
        fontSize: '30px',
    },
    iconPadding: {
        margin: '5px',
    },
    iconFlex: {
        margin: '0px 10px 0 10px',
    },
}));

export default function Rental() {
    const pathname = window.location.pathname.split('/');
    let rental_id = pathname[2];

    const { user, setUser } = useContext(userSessionContext);
    const classes = useStyles();
    const [rentalPost, setRentalPost] = useState([]);
    const [rentalPostImage, setRentalPostImage] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/profile/` + rental_id)
            .then((res) => {
                setRentalPost(res.data[0]);
                setLoaded(true);
                setRentalPostImage(res.data[0].image.data);
            })
            .catch((err) => {
                console.log(err);
                alert('Error while Fetching Rental Unit');
            });
    }, [loaded]);

    return (
        <React.Fragment>
            {loaded ? (
                <div className="container border borderSecondary p-5 mt-5">
                    <span>{user.userName}</span>
                    <span> > </span>
                    <span>{rentalPost.type}</span>
                    <span> > </span>
                    <span>{rentalPost._id}</span>
                    <div className="imageFlex">
                        <div className="col-6 align-center justify-content-center">
                            <img
                                src={arrayBufferToBase64(rentalPostImage)}
                                alt="pictures of unit"
                                style={{ width: '100%' }}
                            />
                            <div
                                className="d-flex justify-content-between mt-2 mb-2"
                                style={{ width: '100%' }}
                            >
                                <img
                                    style={{ width: '33%' }}
                                    src="https://picsum.photos/188/122"
                                    alt="pictures of unit"
                                />
                                <img
                                    style={{ width: '33%' }}
                                    src="https://picsum.photos/188/122"
                                    alt="pictures of unit"
                                />
                                <img
                                    style={{ width: '33%' }}
                                    src="https://picsum.photos/188/122"
                                    alt="pictures of unit"
                                />
                            </div>
                        </div>
                        <div className="col-6" id="rent-google-maps" style={{ width: "100px" }}>
                            <GoogleMap />
                        </div>
                    </div>
                    <div className="card ">
                        <div className="card-body">
                            <div
                                style={{ display: 'flex' }}
                                className="d-flex justify-content-between"
                            >
                                <div>
                                    <h3 className="card-title">
                                        {rentalPost.streetNumber} {rentalPost.streetName}{' '}
                                        {rentalPost.postalCode}
                                    </h3>
                                    <span>
                                        {rentalPost.landlord}
                                        {rentalPost.address}
                                        <Link to="/MapSearch"> ( View Map ) </Link>
                                    </span>
                                </div>
                                <div>
                                    <span className={classes.iconFlex}>
                                        <LocalParkingIcon className={classes.iconPadding} /> :{' '}
                                        {rentalPost.parking}
                                    </span>
                                    <span className={classes.iconFlex}>
                                        <LocalHotelIcon className={classes.iconPadding} />:{' '}
                                        {rentalPost.room}
                                    </span>
                                    <span className={classes.iconFlex}>
                                        <BathtubIcon className={classes.iconPadding} /> :{' '}
                                        {rentalPost.bathroom}
                                    </span>
                                    <span className={classes.iconFlex}>
                                        <PetsIcon className={classes.iconPadding} /> :{' '}
                                        {rentalPost.petFriendly ? 'Allowed' : 'Not Allowed'}
                                    </span>
                                </div>
                                <div>
                                    <span className={classes.greenPriceTag}>
                                        $ {rentalPost.price}
                                    </span>
                                </div>
                            </div>
                            <p class="card-text">{rentalPost.description}</p>
                            <table>
                                <tr style={{ textAlign: 'center' }}>
                                    <th>Utilities</th>
                                    <th>Amenities</th>
                                </tr>
                                <tr>
                                    <td>
                                        <AcUnitIcon />
                                        {rentalPost.airConditional ? ' Included' : ' Not Included'}
                                    </td>
                                    <td>
                                        <FitnessCenterIcon /> Gym :
                                        {rentalPost.gym ? ' Included' : ' Not Included'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <OpacityIcon />
                                        {rentalPost.water ? ' Included' : ' Not Included'}
                                    </td>
                                    <td>
                                        <PeopleIcon /> Roommates :
                                        {rentalPost.roommate ? ' Included' : ' Not Included'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <WifiIcon />
                                        {rentalPost.internet ? ' Included' : ' Not Included'}
                                    </td>
                                    <td>
                                        <OutdoorGrillIcon /> Outdoor Area :
                                        {rentalPost.balcony ? ' Included' : ' Not Included'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <FlashOnIcon />
                                        {rentalPost.hydro ? ' Included' : ' Not Included'}
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="col-3">
                                            <Link to="/StripePayment">
                                                <Button variant="primary">Pay Now</Button>{' '}
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="container">
                            <h4>Post comments</h4>
                            <form>
                                <div class="row">
                                    <div class="container">
                                    <input type="radio" name="score" id="score1" value="1"></input>
                                    <label for="score1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg></label>
                                    <input type="radio" name="score" id="score2" value="2"></input>
                                    <label for="score2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg></label>
                                    <input type="radio" name="score" id="score3" value="3"></input>
                                    <label for="score3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg></label>
                                    <input type="radio" name="score" id="score4" value="4"></input>
                                    <label for="score4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg></label>
                                    <input type="radio" name="score" id="score5" value="5"></input>
                                    <label for="score5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star star" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg></label>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <textarea name="description" id="description" placeholder="Leave your comment about the Rent unit" class="form-control"></textarea>
                                    </div>
                                    <div class="form-group col-md-12 text-right">
                                        <button type="submit" class="btn btn-secondary">Sumbit Comment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <h2> NOT loaded</h2>
            )}
        </React.Fragment>
    );
}
