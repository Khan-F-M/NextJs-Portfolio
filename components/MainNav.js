import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainNav() {
    return (
        <Navbar className="navbar-dark" bg="primary" expand="md">
            <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='justify-content-center' id="basic-navbar-nav">
                        <Nav className="d-flex">
                            <Nav.Link href="/" active>Home</Nav.Link>
                            <Nav.Link href="/about" active>About</Nav.Link>
                            <Nav.Link href="/projects" active>Projects</Nav.Link>
                            <Nav.Link href="/blog" active>Blog</Nav.Link>
                            <Nav.Link href="/contact" active>Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
