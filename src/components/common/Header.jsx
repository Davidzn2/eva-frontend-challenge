import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Super Crypto APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div>
                            <label>Filter By</label>
                            <select>
                                <option>Name</option>
                                <option>Price</option>
                                <option>Market Cap</option>
                                <option>Circulating supply</option>
                            </select>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header