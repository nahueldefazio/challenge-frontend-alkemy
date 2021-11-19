import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <NavLink to={"/"}>
                <img src={'https://www.alkemy.org/logo512.png'} style={{width: "80px"}} className={'mx-3'} alt={'logo'}/>
            </NavLink>

            <Container>

                <Nav className="me-auto">
                    <NavLink to={"/"} className={" px-5 text-decoration-none link-warning fs-4"}>Home</NavLink>
                    <NavLink  to={"/new-post"}  className={"text-decoration-none link-warning fs-4"} > Create </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
