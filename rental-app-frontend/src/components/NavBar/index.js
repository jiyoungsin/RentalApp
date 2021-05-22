import React, {useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

//const [role, setRole] = useState("");
// get the users role to determine navbar
const role = 'admin';

function adminNavBar(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Vroom Vroom</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/findProperty">Find Rental</Nav.Link>
                    <Nav.Link href="#bbbbbb">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#ViewAllUsers">View All Users</NavDropdown.Item>
                        <NavDropdown.Item href="#ManageContent">Manage Content</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://cloud.mongodb.com/v2/5f8263f40ca4614ab1bade00#clusters">Database</NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/jiyoungsin/RentalApp">Github repo</NavDropdown.Item>
                        <NavDropdown.Item href="https://trello.com/b/7yJynBog/rental-app-to-do">Trello Board</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* Linking the routes using Link component */}
                <Nav>
                    <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
                    <Nav.Link><Link to="/logout">Log out</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

function notLoggedinUserNavBar(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Vroom Vroom</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/findProperty">Find Rental</Nav.Link>
                    <Nav.Link href="#eeeeeeeee">Pricing</Nav.Link>
                </Nav>
                {/* Linking the routes using Link component */}
                <Nav>
                    <Nav.Link><Link to="/signup">Sign Up</Link></Nav.Link>
                    <Nav.Link><Link to="/login">Log in</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

function loggedInUserNavBar(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Vroom Vroom</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/findProperty">Find Rental</Nav.Link>
                    <Nav.Link href="#Favorites">Favorites</Nav.Link>
                    <Nav.Link href="#eeeeeeeee">Pricing</Nav.Link>
                </Nav>
                {/* Linking the routes using Link component */}
                <Nav>
                    <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
                    <Nav.Link><Link to="/signout">Sign Out</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default function NavBar() {
    return role === 'admin' ? adminNavBar() : role === 'user' ? loggedInUserNavBar() :notLoggedinUserNavBar()
}
