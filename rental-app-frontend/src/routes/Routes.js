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
import CreateMaintenance from '../views/CreateMaintenance/CreateMaintenance';
import Maintenance from '../views/Maintenance/Maintenance';
import MapSearch from '../views/MapSearch/MapSearch';
import Rental from '../views/Rental/Rental';
import FAQ from '../views/FAQ/faq';
import AboutUs from '../views/AboutUs/aboutus';
import ContactUs from '../views/ContactUs/contactus';
import Payment from '../views/Payment/Payment';
import Page404 from '../views/PageNotFound/PageNotFound';
import StripePayment from '../views/StripePayment/StripePayment';
import Messaging from '../views/Messaging/messaging';

import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import { UserSessionContextProvider } from '../contextFile';

const history = createBrowserHistory();

function Routes() {
    return (
        <BrowserRouter>
            <Router history={history}>
                <Switch>
                    <UserSessionContextProvider>
                        <NavBar />
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/Profile/:id" component={Profile} />
                        <Route exact path="/createRental" component={CreateRental} />
                        <Route exact path="/rental/:id" component={Rental} />
                        <Route exact path="/rentalUnit/:id" component={EditRental} />
                        <Route exact path="/findProperty" component={findProperty} />
                        <Route exact path="/CreateMaintenance" component={CreateMaintenance} />
                        <Route exact path="/maintenance" component={Maintenance} />
                        <Route exact path="/MapSearch" component={MapSearch} />
                        <Route exact path="/FAQ" component={FAQ} />
                        <Route exact path="/AboutUs" component={AboutUs} />
                        <Route exact path="/ContactUs" component={ContactUs} />
                        <Route exact path="/Payment" component={Payment} />
                        <Route exact path="/404" component={Page404} />
                        <Route exact path="/StripePayment" component={StripePayment} />
                    </UserSessionContextProvider>
                </Switch>
                <Footer />
            </Router>
        </BrowserRouter>
    );
}
export default Routes;
