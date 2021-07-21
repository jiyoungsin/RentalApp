import React, { useContext, useState, useEffect } from 'react';
import { userSessionContext } from '../../contextFile';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './styles.css';
import InputForm from "../../components/InputForm";


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

    const [formData, setFormData] = useState({
        user:'',
        score:'',
        description:'',
        rental:'',
    });

    const [reviewCreateSuccessful] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };

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
    const onSubmit = () => {
        const payload = { ...formData };
        axios
            .post('http://localhost:5000/review/create', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                console.log('Creating new ');
                const the_User = res.data;
                console.log(the_User);
                // set something here.
                // then redirect to the new maintence
            })
            .catch((err) => {
                console.error(err);
                alert('ERROR: Logging in');
            });
    };
    return (
        <React.Fragment>
            {loaded ? (
                <div className="container border borderSecondary p-5 mt-5">
                    <span>{user.userName}</span>
                    <span>  </span>
                    <span>{rentalPost.type}</span>
                    <span>  </span>
                    <span>{rentalPost._id}</span>
                    <div className="imageFlex">
                        <div className="col-6 align-center justify-content-center">
                            <img
                                src={arrayBufferTobase64(rentalPostImage)}
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
                                <input type="text" name="user" id="user" onChange={handleChange} value={user.userName} hidden>12</input>
                                <input type="text" name="rental" id="rental" onChange={handleChange} value={rentalPost._id} hidden>12</input>
                                <div class="row">
                                    <h5>Please provide a score of unit out of 5</h5>
                                    <div class="container">
                                        <input type="radio" onChange={handleChange} name="score" id="score1" value="1">1</input>
                                        <input type="radio" onChange={handleChange} name="score" id="score2" value="2">2</input>
                                        <input type="radio" onChange={handleChange} name="score" id="score3" value="3">3</input>
                                        <input type="radio" onChange={handleChange} name="score" id="score4" value="4">4</input>
                                        <input type="radio" onChange={handleChange} name="score" id="score5" value="5">5</input>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <textarea onChange={handleChange} name="description" id="description" placeholder="Leave your comment about the Rent unit" class="form-control"></textarea>
                                    </div>
                                    <div class="form-group col-md-12 text-right">
                                        <button onClick={onSubmit} class="btn btn-secondary">Sumbit Comment</button>
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
