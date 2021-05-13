import React, {useState} from 'react';
import Login from '../views/Login/login';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Signup from '../views/Signup/signup';
import Profile from '../views/Profile/Profile';
import CreateRental from '../views/CreateRental';
import Todo from '../views/Todo/Todo';
import LandingPage from '../views/LandingPage/LandingPage';
import { makeStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { Router, Route, Redirect, Switch } from "react-router";

const history = createBrowserHistory();
const useStyles = makeStyles(theme => ({
    displayText: {
        display: 'flex', 
        flexDirection: "column",
        alignItems: 'center',
    },
}));

export default function Routes() {
    return (
        <Router history={history}>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/Profile" component={Profile}/>
                <Route exact path="/createRental" component={CreateRental}/>
                <Route exact path="/Todo" component={Todo}/>
                {/* <Route path="*">
                    <Redirect to="/"/>
                </Route> */}
            </Switch>
            <Footer/>
        </Router>
    )
}
