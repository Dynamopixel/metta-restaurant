import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import bannerBg from '../assets/images/bannerbg.png'
import CustomButton from './CustomButton';


const Hero = () => {
  return (
    <section
      className="d-flex align-items-center text-white hero"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "101vh",
      }}
    >
      <Container fluid>
        <Row>
          <Col md={6} sm={12} className="ps-4 ms-0 ps-lg-5 ms-lg-5">
            <span className="banner-heading">Welcome</span>
            <h1 className="mt-2 ">
              The Ultimate Place for Enjoy Your Meal and Collect Memorable Moments.
            </h1>

            <CustomButton text="BOOK A TABLE" className="mt-5" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero