import React, { useState } from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import CustomButton from './CustomButton';
import Logo from "../assets/images/Logo.png";
import PopupForm from "../common/PopupForm"

const MyNavbar = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="navbar-custom py-3 px-3 px-lg-5">
        <Container fluid>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <Image src={Logo} height={55} alt="Metta Restaurant" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler">
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto align-items-center gap-lg-5 gap-3 text-center mt-4 mt-lg-0">

              <Nav.Link href="#About" className="nav-link-custom">ABOUT</Nav.Link>
              <Nav.Link href="#Menu" className="nav-link-custom">MENU</Nav.Link>
              <Nav.Link href="#Portfolio" className="nav-link-custom">PORTFOLIO</Nav.Link>

              {/* Contact link opens modal */}
              <Nav.Link
                className="nav-link-custom"
                onClick={() => setShowContact(true)}
                style={{ cursor: "pointer" }}
              >
                CONTACT
              </Nav.Link>


              {/* Book a Table Button */}
              <div className="mt-3 mt-lg-0">
                <a href="#Booktable"><CustomButton text="BOOK A TABLE" /></a>
              </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <PopupForm show={showContact} handleClose={() => setShowContact(false)} />

    </>
  );
};

export default MyNavbar;