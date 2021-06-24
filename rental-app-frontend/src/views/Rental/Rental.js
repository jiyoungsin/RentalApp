import React, { useContext, useState, useEffect} from 'react';
import { userSessionContext } from '../../contextFile';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    const pathname = window.location.pathname.split("/")
    let rental_id = pathname[2]

    const { user, setUser } = useContext(userSessionContext);
    const { rental } = user;
    const classes = useStyles();
    const [rentalPost, setRentalPost] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios
            .get(`http://localhost:5000/profile/` + rental_id)
            .then((res) => {
                setRentalPost(res.data[0]);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
                alert('Error while Fetching Rental Unit');
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
                                    <h3 className="card-title">{rentalPost.streetNumber} {rentalPost.streetName} {rentalPost.postalCode}</h3>
                                    <span>
                                        {rentalPost.landlord}
                                        {rentalPost.address}
                                        <Link to="/MapSearch">
                                            {' '}
                                            ( View Map ){' '}
                                        </Link>
                                    </span>
                                </div>
                                <div >
                                    <span className={classes.iconFlex}>
                                        <LocalParkingIcon className={classes.iconPadding}/> : {rentalPost.parking}
                                    </span>
                                    <span className={classes.iconFlex}>
                                        <LocalHotelIcon className={classes.iconPadding}/>: {rentalPost.room}
                                    </span>
                                    <span className={classes.iconFlex}>
                                        <BathtubIcon className={classes.iconPadding}/> : {rentalPost.bathroom}
                                    </span>
                                    <span className={classes.iconFlex}>
                                        <PetsIcon className={classes.iconPadding}/> : {rentalPost.petFriendly ? "Allowed" : "Not Allowed"
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
                            <table>
                                <tr style={{ textAlign: "center"}}>
                                    <th>Utilities</th>
                                    <th>Amenities</th>
                                </tr>
                                <tr>
                                    <td><AcUnitIcon/>{rentalPost.airConditional ? " Included" : " Not Included"}</td>
                                    <td><FitnessCenterIcon/> Gym :{rentalPost.gym ? " Included" : " Not Included"}</td>
                                </tr>
                                <tr>
                                    <td><OpacityIcon/>{rentalPost.water ? " Included" : " Not Included"}</td>
                                    <td><PeopleIcon/> Roommates :{rentalPost.roommate ? " Included" : " Not Included"}</td>
                                </tr>
                                <tr>
                                    <td><WifiIcon/>{rentalPost.internet ? " Included" : " Not Included"}</td>
                                    <td><OutdoorGrillIcon/> Outdoor Area :{rentalPost.balcony ? " Included" : " Not Included"}</td>
                                </tr>
                                <tr>
                                    <td><FlashOnIcon/>{rentalPost.hydro ? " Included" : " Not Included"}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <h2> NOT loaded</h2>
            )}
        </>
    );
}
