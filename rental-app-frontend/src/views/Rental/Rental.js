import arrayBufferToBase64 from '../../utilities/arrayBufferToBase64';
import React, { useContext, useState, useEffect } from 'react';
import { userSessionContext } from '../../contextFile';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './styles.css';
import ContactRentalOwner from '../../components/ContactRentalOwner/ContactRentalOwner';

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
import ReviewsPost from '../../components/ReviewsPost/ReviewsPost';
import contactLandlord from '../../images/contactLandlord.png';
import CreateReviewLogin from '../../images/CreateReviewLogin.png';

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
    contactLandlordImage: {
        opacity: '0.5',
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
    const [reviews, setReviews] = useState([]);
    const [reviewsLoaded, setReviewsLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`http://www.aidatastructures.com:5000/profile/` + rental_id)
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

    useEffect(() => {
        axios
            .get(`http://www.aidatastructures.com:5000/review/` + rental_id)
            .then((res) => {
                setReviews(res.data);
                setReviewsLoaded(true);
            })
            .catch((err) => {
                console.log(err);
                alert('Error while Fetching Rental Units Reviews');
            });
    }, [reviewsLoaded]);

    const addr =
        rentalPost.streetNumber + ' ' + rentalPost.streetName + ' ' + rentalPost.postalCode;
    const [reviewForm, setReviewForm] = useState({
        user: user.userName,
        description: '',
        rental_id: rental_id,
    });

    const handleChangeReview = (e) => {
        const { id, value } = e.target;
        setReviewForm((ps) => ({
            ...ps,
            [id]: value,
        }));
    };
    const onSubmitReview = () => {
        const submitReview = { ...reviewForm };
        axios
            .post('http://www.aidatastructures.com:5000/review/create', submitReview, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                setReviewForm({ description: '' });
                document.getElementById('description').value = '';
                alert('Review Submitted!');
            })
            .catch((err) => {
                console.error(err);
                console.log('error creating review');
            });
    };

    return (
        <React.Fragment>
            {loaded ? (
                <div className="container border borderSecondary p-5 mt-5">
                    <span>{rentalPost.landlord}</span>
                    <span> > </span>
                    <span>{rentalPost.type}</span>
                    <span> > </span>
                    <span>{rentalPost._id}</span>
                    <div className="imageFlex mb-4">
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
                        <div className="container border border-primary p-3">
                            {user.userName ? (
                                <ContactRentalOwner landlord={rentalPost.landlord} />
                            ) : (
                                <Link to="/login">
                                    <div className={classes.contactLandlordImage}>
                                        <img src={contactLandlord} alt="" />
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div id="rent-google-maps">
                        <GoogleMap address={addr} />
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
                            </table>
                            {user.userName ==  rentalPost.landlord ? (
                                <div>
                                    <a
                                        target="blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                        href="https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=6c7e010f-6c7c-4de4-9679-4388aa581d47&env=demo&acct=14c96305-310a-40e4-9925-66f8abc7c383&v=2"
                                        className="btn btn-primary mr-1"
                                    >
                                        DocuSign
                                    </a>
                                    <a
                                        target="blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                        href="https://utsc.utoronto.ca/residences/sites/utsc.utoronto.ca.residences/files/images/Residential%20Tenancy%20Agreement%20%28Standard%20Form%20of%20Lease%29.pdf"
                                        className="btn btn-primary mr-1"
                                    >
                                        Ontario Rental Agreement
                                    </a>
                                    <Link to="/StripePayment">
                                        <Button variant="primary">Pay Now</Button>{' '}
                                    </Link>
                                    <Link to="/CreateMaintenance">
                                        <Button variant="primary">Maintenance</Button>{' '}
                                    </Link>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                        <div class="container">
                            {user.userName ? (
                                <>
                                    <h4>Post comments</h4>
                                    <form>
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <textarea
                                                    onChange={handleChangeReview}
                                                    name="description"
                                                    id="description"
                                                    placeholder="Leave your comment about the Rent unit"
                                                    class="form-control"
                                                ></textarea>
                                            </div>
                                            <div class="form-group col-md-12 text-right">
                                                <Button
                                                    onClick={onSubmitReview}
                                                    variant="primary"
                                                    className={classes.buttonPadding}
                                                >
                                                    Submit
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <Link to="/login">
                                    <div className={classes.contactLandlordImage}>
                                        <img
                                            src={CreateReviewLogin}
                                            alt=""
                                            style={{ width: '62vw' }}
                                        />
                                    </div>
                                </Link>
                            )}

                            {reviewsLoaded
                                ? reviews.map((item) => (
                                      <ReviewsPost
                                          user={item.user}
                                          timeCreated={item.timeCreated}
                                          description={item.description}
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                </div>
            ) : (
                <h2> NOT loaded</h2>
            )}
        </React.Fragment>
    );
}
