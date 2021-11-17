import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <NavLink to={"/"} className={"mx-5"}>Home</NavLink>
                    <NavLink  to={"/new-post"}> Create </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
