import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { userSessionContext } from '../../contextFile';

// get the users role to determine navbar

function adminNavBar(user, signOut) {
    const users = user;
    const profileLink = '/profile/' + users._id;
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/" id="navbar-main-logo">
                Vroom
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/findProperty">Find Rental</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/">Pricing</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/aboutus">About</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/faq">FAQs</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/contactus">Contact Us</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/maintenance">Maintenance</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/MapSearch">Map</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/message" style={{color: "white"}}>Message</Link>
                    </Nav.Link>
                    <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/">View All Users</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/">Manage Content</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://cloud.mongodb.com/v2/5f8263f40ca4614ab1bade00#clusters">
                            Database
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/jiyoungsin/RentalApp">
                            Github repo
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://www.facebook.com/rentvroom/">
                            Facebook{' '}
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/rentvroom/">
                            Instagram{' '}
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://twitter.com/Vroomrent">
                            Twitter{' '}
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* Linking the routes using Link component */}
                <Nav>
                    <Nav.Link>
                        <Link to={profileLink}>Profile</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/" onClick={signOut}>
                            Log out
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

function loggedInUserNavBar(user, signOut) {
    const users = user;
    const profileLink = '/profile/' + users._id;
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/" id="navbar-main-logo" style={{color: "white"}}>
                Vroom
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/findProperty" style={{color: "white"}}>Find Rental</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/aboutus" style={{color: "white"}}>About</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/faq" style={{color: "white"}}>FAQs</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/ContactUs" style={{color: "white"}}>Contact Us</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/message" style={{color: "white"}}>Message</Link>
                    </Nav.Link>
                </Nav>
                {/* Linking the routes using Link component */}
                <Nav>
                    <Link
                        id="navbar-sign-logo"
                        to={profileLink}
                        style={{ paddingTop: '10px', paddingRight: '10px' }}
                    >
                        Profile
                    </Link>
                    <Link
                        id="navbar-sign-logo"
                        to="/"
                        style={{ paddingTop: '10px' }}
                        onClick={signOut}
                    >
                        Log out
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

function notLoggedInUserNavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/" id="navbar-main-logo">
                Vroom
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/findProperty">Find Rental</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/aboutus">About</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/faq">FAQs</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/contactus">Contact Us</Link>
                    </Nav.Link>
                </Nav>
                {/* Linking the routes using Link component */}
                <Nav>
                    <Nav.Link>
                        <Link to="/signup" id="navbar-sign-logo">
                            Sign Up
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/login" id="navbar-sign-logo">
                            Log in
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default function NavBar() {
    const { user, setUser, signOut } = useContext(userSessionContext);
    const role = user.role;
    return role === 'Admin'
        ? adminNavBar(user, signOut)
        : role === 'customer'
        ? loggedInUserNavBar(user, signOut)
        : notLoggedInUserNavBar(user);
}
