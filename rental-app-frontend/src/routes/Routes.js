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
import Maintenance from '../views/Maintenance/Maintenance';
import MapSearch from '../views/MapSearch/MapSearch';
import Rental from '../views/Rental/Rental';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { UserSessionContextProvider } from '../contextFile';

const history = createBrowserHistory();

function Routes() {
    return (
        <BrowserRouter>
            <Router history={history}>
                <Switch>
                    <Route exact path="/signup" component={Signup} />
                    <UserSessionContextProvider>
                        <NavBar />
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/Profile/:id" component={Profile} />
                        <Route exact path="/createRental" component={CreateRental} />
                        <Route exact path="/rental/:id" component={Rental} />
                        <Route exact path="/rentalUnit/:id" component={EditRental} />
                        <Route exact path="/findProperty" component={findProperty} />
                        <Route exact path="/maintenance" component={Maintenance} />
                        <Route exact path="/MapSearch" component={MapSearch} />
                    </UserSessionContextProvider>
                </Switch>
                <Footer />
            </Router>
        </BrowserRouter>
    );
}
export default Routes;
