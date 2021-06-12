import React, {useContext, useState, useEffect } from 'react';
import {userSessionContext} from '../../contextFile';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';

//CSS Styles
const useStyles = makeStyles((theme) => ({
    greenPriceTag: {
        color: "#37a864",
        fontSize: "30px",
    }
}));

export default function Rental() {
    const {user, setUser} = useContext(userSessionContext)
    const { rentals } = user;
    const classes = useStyles();
    const [rentalPost, setRentalPost] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get(`http://localhost:5000/profile/` + rentals,
        ).then(res=>{
            setRentalPost(res.data[0]);
            setLoaded(true)
        }).catch(err=>{
            console.log(err);
            alert("Error while Fetching Rental Units");
        })
    },[]);
    console.log(rentalPost)

    return ( <> { loaded ?
        <div className="container border borderSecondary p-5 mt-5">
            <span>{user.userName}</span>
            <span> > </span>
            <span>{rentalPost.category}</span>
            <span> > </span>
            <span>{rentalPost._id}</span>
            <div>
                <div>
                    <img src="https://picsum.photos/571/322" alt="pictures of unit" />
                </div>
                <div >
                    <img src="https://picsum.photos/178/122" alt="pictures of unit" />
                    <img src="https://picsum.photos/178/122" alt="pictures of unit" />
                    <img src="https://picsum.photos/178/122" alt="pictures of unit" />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div style={{display: "flex"}} className="d-flex justify-content-between">
                        <div>
                            <h3 className="card-title">{rentalPost.title}</h3>
                            <span>
                                {rentalPost.address}
                                <Link to="http://localhost:3000/MapSearch"> ( View Map ) </Link>
                            </span>
                        </div>
                        <div>
                            <span className={classes.greenPriceTag}>$ {rentalPost.price}</span>
                        </div>
                    </div>
                    <p class="card-text">{rentalPost.description}s a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes </p>
                </div>
            </div>
        </div>
        : <h2> NOT loaded</h2> } </>
    )
}
