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
        height: "100vh",
        minHeight: "700px",
      }}
    >
      <Container fluid>
        <Row className="h-100">
          <Col
            md={6}
            sm={12}
            className="ps-4 ps-lg-5 ms-lg-5 d-flex flex-column justify-content-center"
          >
            <span className="banner-heading">Welcome</span>
            <h1 className="mt-3 display-4 fw-bold">
              Enjoy Your Meal and Collect Memorable Moments.
            </h1>

            <div className="mt-4">
              <CustomButton text="BOOK A TABLE" />

            </div>
            <div className="scroll-down">
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