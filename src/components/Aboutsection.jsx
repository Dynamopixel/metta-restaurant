import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImg from "../assets/images/about.png";
import CustomButton from './CustomButton';

const Aboutsection = () => {
    return (
        <section id='About' className='custom-space text-light' style={{ backgroundColor: "transparent" }} >
            
            <Container fluid>
                <Row className='align-items-center'>

                    {/* Text Side */}
                    <Col xs={12} md={6} className="mb-4 mb-md-0 text-center text-md-start pe-md-5 order-2 order-md-1">
                        <h2 className="fw-semibold mt-5 mt-lg-0">
                            Exquisite Dining Experience Fit for <br className='d-none d-md-block' />
                            <span className='highlight'>Royalty</span>
                        </h2>

                        <p className="mt-3">
                            Welcome to our restaurant, where culinary artistry meets exceptional dining
                            experiences. At, we strive to create a gastronomic haven that tantalizes your <br />
                            taste buds and leaves you with unforgettable memories.
                        </p>

                        <p className="mt-3 mb-4">
                            Welcome to our restaurant, where culinary artistry meets exceptional dining
                            experiences.
                        </p>

                        <CustomButton text="View More" />
                    </Col>

                    {/* Image Side */}
                    <Col xs={12} md={6} className="text-center order-1 order-md-2">
                        <Image
                            src={aboutImg}

                            rounded
                            className='about-img'
                        />
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Aboutsection