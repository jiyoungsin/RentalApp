import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    src,
    key,
    _id,
    type,
    streetNumber,
    streetName,
    postalCode,
    price,
    parking,
    room,
    bathroom,
    petFriendly,
    balcony,
    airConditional,
    gym,
    hydro,
    water,
    roommate,
    Availability,
    WiFi,
    additionalInfo,
    postDate,
    Reviews,
    Landlord,
    profilePic,
}) {
    const classes = useStyles();
    const EditLink = `/rentalUnit/${_id}`;
    const RentalLink = `/rental/${_id}`;
    const [requestDelete, setRequestDelete] = useState(false);

    let date = postDate;
    date.toString();
    date = date.substr(2, 8);
    let year = date.substr(0, 2);
    let month = date.substr(3, 2);
    let day = date.substr(6, 2);

    const buttonPushed = () => {
        axios
            .delete(`http://localhost:5000/rentalUnit/delete/${_id}`)
            .then((res) => {
                console.log('Deleting Data from Database');
                alert('Successfully Deleted Rental Unit');
            })
            .catch((err) => {
                alert('Error while Deleting Rental Unit');
            });
    };

    return requestDelete === false ? (
        <React.Fragment>
            <div className={classes.container}>
                <img
                    className="rounded border border-dark"
                    src={src}
                    alt="Picture Of Rental"
                    style={{ width: '200px', height: '135px' }}
                />
                <div className={classes.rentalCard}>
                    <Link
                        to={RentalLink}
                        _id={_id}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <span className={classes.greenPriceTag}>$ {price}</span>
                        <div className="font-italic" style={{ color: '#808080' }}>
                            {streetNumber} {streetName} {postalCode}
                        </div>
                        <div
                            style={{
                                width: '150px',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {additionalInfo}
                        </div>
                        <div style={{ padding: '10px' }}>
                            <img
                                className={classes.messagedProfilePicture}
                                src={profilePic}
                                alt="Person that messaged Profile Picture"
                            />
                            {Landlord}
                        </div>
                    </Link>
                </div>
                <div>
                    <span className={classes.iconFlex}>
                        <LocalParkingIcon className={classes.iconPadding} /> : {parking}
                        &nbsp;&nbsp;&nbsp;
                    </span>
                    <span className={classes.iconFlex}>
                        <LocalHotelIcon className={classes.iconPadding} />: {room}&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className={classes.iconFlex}>
                        <BathtubIcon className={classes.iconPadding} /> : {bathroom}
                        &nbsp;&nbsp;&nbsp;
                    </span>
                    <span className={classes.iconFlex}>
                        <PetsIcon className={classes.iconPadding} /> :{' '}
                        {petFriendly ? 'Allowed' : 'Not Allowed'}&nbsp;&nbsp;&nbsp;
                    </span>
                    <table className="mt-2">
                        <tr style={{ textAlign: 'center' }}>
                            <th>Utilities</th>
                            <th>Amenities</th>
                        </tr>
                        <tr>
                            <td>
                                <AcUnitIcon />
                                {airConditional ? ' Included' : ' Not Included'}
                            </td>
                            <td>
                                <FitnessCenterIcon className="ml-2" /> Gym :
                                {gym ? ' Included' : ' Not Included'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <OpacityIcon />
                                {water ? ' Included' : ' Not Included'}
                            </td>
                            <td>
                                <PeopleIcon className="ml-2" /> Roommates :
                                {roommate ? ' Included' : ' Not Included'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <WifiIcon />
                                {balcony ? ' Included' : ' Not Included'}
                            </td>
                            <td>
                                <OutdoorGrillIcon className="ml-2" /> Outdoor Area :
                                {balcony ? ' Included' : ' Not Included'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FlashOnIcon />
                                {hydro ? ' Included' : ' Not Included'}
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className={classes.lastTalked}>
                    <Button>
                        <Link style={{ color: '#000' }} to={EditLink}>
                            Edit
                        </Link>
                    </Button>
                    <Button onClick={() => buttonPushed()} style={{ color: '#000' }}>
                        Delete
                    </Button>
                    <Button style={{ color: '#000' }} disabled>
                        {year + '/' + month + '/' + day}
                    </Button>
                </div>
            </div>
        </React.Fragment>
    ) : (
        <Redirect to="/" />
    );
}
