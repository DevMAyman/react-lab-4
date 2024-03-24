import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from "react";
import {Link} from 'react-router-dom'

export default function Mynavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to='/home'>Home</Link>
          </Nav>
          <Nav className='ms-auto'>
            <Link to='/login' className='nav-link'>Login</Link>
            <Link to='/register' className='nav-link'>Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

