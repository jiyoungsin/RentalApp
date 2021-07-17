import React, { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';
import axios from 'axios';

// importing images
import remax from '../../images/remax.jpeg';
import sandBox from '../../images/sandBox.png';
import msTeams from '../../images/msTeams.png';
import discord from '../../images/discord.png';
import realitor from '../../images/realitor.png';
import reactLogo from '../../images/reactLogo.jpeg';
import SenecaLogo from '../../images/SenecaLogo.jpeg';
import githubBanner from '../../images/githubBanner.jpeg';
import herokuBanner from '../../images/herokuBanner.jpeg';

export default function LandingPage() {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '200px',
            height: '150px',
            color: 'white',
            padding: '20px',
            margin: '20px',
        },
        centerItems: {
            display: 'flex',
            textAlign: 'center',
        },
        centerText: {
            textAlign: 'center',
        },
        imageSize: {
            width: '200px',
            height: '150px',
            padding: '20px',
        },
        box: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
        },
        topBox: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            color: 'white',
        },
        inputStyles: {
            width: '250px',
            border: 'none',
            outline: 'none',
        },
        buttonColoring: {
            color: 'white',
            backgroundColor: '#242582',
        },
        centeringBoxes: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        testing: {
            width: '100px',
            height: '100px',
            backgroundColor: 'black',
            margin: '10px',
        },
        emailJumboTron: {
            padding: '20px',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(https://i.picsum.photos/id/307/1600/800.jpg?hmac=TSTIXBYJwXiMklQWE2YX-VvdQHSqCpFG5iOAeWQe7pk)`,
        },
        JumboTron: {
            padding: '20px',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(https://i.picsum.photos/id/307/1600/800.jpg?hmac=TSTIXBYJwXiMklQWE2YX-VvdQHSqCpFG5iOAeWQe7pk)`,
            marginBottom: '5vh',
        },
        mainTitle: {
            fontFamily: 'cursive',
            fontSize: '5vh',
        },
        fitImage: {
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }));

    const classes = useStyles();
    const [rentals, setRentals] = useState([]);
    const [formData, setFormData] = useState({
        email: '',
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((ps) => ({
            ...ps,
            [id]: value,
        }));
    };
    // sends sign up data to backend.
    const onSubmit = () => {
        // saves data to Database Endpoint /signup
        const payload = { ...formData };
        axios
            .post('http://localhost:5000/users/subscribe', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                console.log('Adding Subscriber');
                alert('Your Email has been Added.');
            })
            .catch((err) => {
                console.error(err);
                alert('Error: Adding Subscribers Email to Backend');
            });
    };

    useEffect(() => {
        axios
            .get('http://localhost:5000/rentals/rentals')
            .then((res) => {
                setRentals(res.data);
                console.log("res.data")
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err);
                alert('Error Fetching Data from Backend. Check Server');
            });
    }, []);

    return (
        <div>
            <div className={classes.JumboTron}>
                <div className={classes.topBox}>
                    <Typography className={classes.mainTitle}>Vroom</Typography>
                    <Typography className={classes.mainTitle}>
                        The Worlds First Digital Rental Company
                    </Typography>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <p>A web application to help you find a new rental unit.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    {rentals.map((i) => {
                        console.log("Rentals being Sent")
                        console.log(i)
                        return(
                            <PostCard key={i._id} rentals={i} />
                        )
                    })}
                </div>
            </div>
            <Price />
            <div style={{ display: 'flex', margin: '50px', backgroundColor: 'white' }}>
                <div className={classes.centerText} style={{ alignSelf: 'center' }}>
                    <h2>Stakeholders</h2>
                    <p>
                        Thank you to some of our Sponsers and The Vroom Team thanks you for your
                        never ending support!
                    </p>
                </div>
                <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div
                            className="col-3"
                            style={{
                                width: '100px',
                                height: '100px',
                                margin: '10px',
                            }}
                        >
                            <img className={classes.fitImage} src={SenecaLogo} alt="Sponsor" />
                        </div>
                        <div
                            className="col-3"
                            style={{
                                width: '100px',
                                height: '100px',
                                margin: '10px',
                            }}
                        >
                            <img className={classes.fitImage} src={reactLogo} alt="Sponsor" />
                        </div>
                        <div
                            className="col-3"
                            style={{
                                width: '100px',
                                height: '100px',
                                margin: '10px',
                            }}
                        >
                            <img className={classes.fitImage} src={githubBanner} alt="Sponsor" />
                        </div>
                        <div
                            className="col-3"
                            style={{
                                width: '100px',
                                height: '100px',
                                margin: '10px',
                            }}
                        >
                            <img className={classes.fitImage} src={herokuBanner} alt="Sponsor" />
                        </div>
                        <div
                            className="col-3"
                            style={{
                                width: '100px',
                                height: '100px',
                                margin: '10px',
                            }}
                        >
                            <img className={classes.fitImage} src={remax} alt="Sponsor" />
                        </div>
                        <div
                            className="col-3"
                            style={{
                                width: '100px',
                                height: '100px',
                                margin: '10px',
                            }}
                        >
                            <img className={classes.fitImage} src={sandBox} alt="Sponsor" />
                        </div>
                        <div
                            className="col-3"
                            style={{
                                width: '100px',
                                height: '100px',
                                margin: '10px',
                            }}
                        >
                            <img className={classes.fitImage} src={realitor} alt="Sponsor" />
                        </div>
                        <div
                            className="col-3"
                            style={{
                                width: '100px',
                                height: '100px',
                                margin: '10px',
                            }}
                        >
                            <img className={classes.fitImage} src={msTeams} alt="Sponsor" />
                        </div>
                        <div
                            className="col-3"
                            style={{
                                width: '100px',
                                height: '100px',
                                margin: '10px',
                            }}
                        >
                            <img className={classes.fitImage} src={discord} alt="Sponsor" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.emailJumboTron}>
                <div className={classes.box}>
                    <h2 style={{ color: 'white' }}>STAY IN TOUCH!</h2>
                    <form className="border" style={{ padding: '5px', backgroundColor: 'white' }}>
                        <input
                            class={classes.inputStyles}
                            onChange={handleChange}
                            placeholder="Email@gmail.com"
                            value={formData.userName}
                            type="text"
                            id="email"
                            name="email"
                        />
                        <Button
                            class={classes.buttonColoring}
                            onClick={() => {
                                onSubmit();
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
