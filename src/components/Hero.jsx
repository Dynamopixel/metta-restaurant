import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerBg from '../assets/images/bannerbg.png';
import CustomButton from './CustomButton';
import Arrow from "../assets/images/Vector.png"

const Hero = () => {
  return (
    <section
      className="hero d-flex align-items-center text-white position-relative"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100dvh",
        height: "100dvh",
        marginTop: "0",
        paddingTop: "0",
      }}
    >
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col
            md={6}
            sm={12}
            className="ps-4 ps-lg-5 ms-lg-5 d-flex flex-column justify-content-center text-center text-md-start"
          >
            <span className="banner-heading">Welcome</span>
            <h1 className="mt-0 mt-lg-3  fw-bold hero-heading">
              The Ultimate Place

            </h1>
            <h3 className='herosubhead' >for Enjoy Your Meal and Collect  Memorable Moments.</h3>

            <div className="mt-4">
              <CustomButton text="BOOK A TABLE" />
            </div>

            <div className="scroll-down mt-auto pt-5 pb-4">
              <a href="#About">
                <img
                  src={Arrow}
                  style={{ width: "100%", height: "25px" }}
                  alt="Scroll Down Arrow"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;