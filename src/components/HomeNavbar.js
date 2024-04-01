import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container'
import {auth} from './config/firebase'

function HomeNavbar1() {
  return (
    <Navbar style={{backgroundColor:'#A47C6F'}} variant="dark">
      <Container>
        <Navbar.Brand href="/">CoffeeKiosk</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">English</Nav.Link>
          <Nav.Link href="/korean">한국어</Nav.Link>
          <Nav.Link href="/spanish">Español</Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
        <h6>{auth?.currentUser?.email}</h6>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar1;