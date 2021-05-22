import React from 'react';
import Todo from '../views/Todo/Todo';
import Login from '../views/Login/login';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Signup from '../views/Signup/signup';
import { createBrowserHistory } from 'history';
import Profile from '../views/Profile/Profile';
import CreateRental from '../views/CreateRental';
import LandingPage from '../views/LandingPage/LandingPage';
import findProperty from '../views/FindProperty';
import { makeStyles } from '@material-ui/core/styles';
import { Router, Route , Switch } from "react-router";

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
                <Route exact path="/findProperty" component={findProperty}/>
                <Route exact path="/Todo" component={Todo}/>
            </Switch>
            <Footer/>
        </Router>
    )
}
