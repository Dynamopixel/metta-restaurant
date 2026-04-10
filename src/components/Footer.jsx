import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Logo from "../assets/images/Logo.png";
import PopupForm from "../common/PopupForm"

const Footer = () => {
    const [showContact, setShowContact] = useState(false);
  
  return (
    <footer className="footer-simple">
      <Container>

        {/* Logo and Nav */}
        <Row className="align-items-center mb-5 footer-row">
          <Col xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0">
            <div>
              <Image src={Logo} height={60} alt="Logo" />
            </div>
          </Col>

          <Col xs={12} md={8}>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-end align-items-center foot-nav text-center">
              <a href="#About" className="nav-link">About</a>
              <a href="#Menu" className="nav-link">Menu</a>
              <a href="#Portfolio" className="nav-link">Portfolio</a>
              <a href="#" onClick={() => setShowContact(true)}
                style={{ cursor: "pointer" }} className="nav-link">Contact</a>
            </div>
          </Col>
        </Row>

        <hr className=" opacity-100 mb-5" />

        {/* Details */}
        <Row className=" g-4">
          <Col xs={12} md={3} className='foot'>
            <h6 className='text-sm-start '>Address :</h6>
            <hr style={{ width: "120px", backgroundColor: "#fff", height: "1px", opacity: "100" }} />
            <p className="small lh-lg business">
              123 Fashion Avenue<br />
              Suite 456<br />
              New York, NY 10001<br />
              USA
            </p>
          </Col>

          <Col xs={12} md={3} className='foot'>
            <h6>Business Hours :</h6>
            <hr style={{ width: "120px", backgroundColor: "#fff", height: "1px", opacity: "100" }}  />
            <p className="small lh-lg business">
              Mon - Fri: 9:00 AM - 10:00 PM<br />
              Saturday: 10:00 AM - 7:00 PM<br />
              Sunday: Closed
            </p>
          </Col>

          <Col xs={12} md={3} className='foot'>
            <h6>Phone :</h6>
            <hr style={{ width: "120px", backgroundColor: "#fff", height: "1px", opacity: "100" }} />
            <p className="small lh-lg">
              +1 (123) 456-7890<br />
              +1 (123) 456-7890
            </p>
          </Col>

          <Col xs={12} md={3} className='foot'>
            <h6>Email :</h6>
            <hr style={{ width: "120px", backgroundColor: "#fff", height: "1px", opacity: "100" }} />
            <p className="small lh-lg">
              info@mettarestaurant.com<br />
              support@mettarestaurant.com
            </p>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-5">
          <Col className="text-center">
            <p className="small mb-0 opacity-75 text-center">
              COPYRIGHTED © 2026 <span style={{ color: "#d4af37" }}>METTA RESTAURANT</span> | DESIGNED BY DYNAMOPIXEL
            </p>
          </Col>
        </Row>

        <PopupForm show={showContact} handleClose={() => setShowContact(false)} />

      </Container>
    </footer>
  );
};

export default Footer;