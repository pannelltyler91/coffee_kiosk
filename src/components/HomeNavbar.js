import React from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Logo from '../components/Logo'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navbar.css'


function HomeNavbar1() {
  return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Kiwi&Coffee</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">English</Nav.Link>
            <Nav.Link href="#features">한국어</Nav.Link>
            <Nav.Link href="#pricing">Español</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  );
}

export default HomeNavbar1;