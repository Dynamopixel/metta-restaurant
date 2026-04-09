import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import CustomButton from './CustomButton';
import Logo from "../assets/images/Logo.png";

const MyNavbar = () => {
  return (
    <Navbar 
      expand="lg" 
      className="navbar-custom py-3 px-3 px-lg-5"
     
    >
      <Container fluid>
        
        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <Image src={Logo} height={55} alt="Metta Restaurant" />
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle 
          aria-controls="navbarScroll"
          className="border-0"
        />

        {/* Navbar Content */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto align-items-center gap-lg-5 gap-3 text-center mt-4 mt-lg-0">

            <Nav.Link href="#about" className="nav-link-custom">ABOUT</Nav.Link>
            <Nav.Link href="#menu" className="nav-link-custom">MENU</Nav.Link>
            <Nav.Link href="#portfolio" className="nav-link-custom">PORTFOLIO</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">CONTACT</Nav.Link>

            {/* Book a Table Button */}
            <div className="mt-3 mt-lg-0">
              <CustomButton text="BOOK A TABLE" />
            </div>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default MyNavbar;