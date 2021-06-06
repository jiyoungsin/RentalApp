import React from 'react';
import Login from '../views/Login/login';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Signup from '../views/Signup/signup';
import { createBrowserHistory } from 'history';
import Profile from '../views/Profile/Profile';
import CreateRental from '../views/CreateRental';
import findProperty from '../views/FindProperty';
import EditRental from '../views/CreateRental/EditRental';
import LandingPage from '../views/LandingPage/LandingPage';
import { Router, Route , Switch } from "react-router";

const history = createBrowserHistory();

function Routes() {
    return (
        <Router history={history}>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/Profile/:id" component={Profile}/>
                <Route exact path="/createRental" component={CreateRental}/>
                <Route exact path="/rentalUnit/:id" component={EditRental}/>
                <Route exact path="/findProperty" component={findProperty}/>
            </Switch>
            <Footer/>
        </Router>
    )
}
export default Routes;
