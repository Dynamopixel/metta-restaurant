import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import chiefood from "../assets/images/food.png";
import Madefood from "../assets/images/madefood.png";
import Stars from "../assets/images/stars.png";


const Food = () => {
    return (
        <section className='food-section custom-space text-light'>
            <Container fluid>
                <Row className='align-items-center '>

                    {/* Image side */}
                    <Col md={6}>
                        <Image src={chiefood} fluid rounded className='food-img' />
                    </Col>

                    <Col
                        md={1}
                        className="stars-col d-none d-md-flex justify-content-center align-items-center"
                    >
                        <Image src={Stars} fluid rounded style={{ objectFit: "cover" }} />
                    </Col>

                    <Col
                        md={5}
                        className='mb-4 mb-md-0 food-cnt d-flex flex-column align-items-end'
                    >
                        <h2 className="fw-semibold mt-5 mt-lg-0 text-end">
                            Our Chef’s Food
                            <br /> <span className='highlight'>Specialties</span>
                        </h2>
                        <p className="mt-4 text-end mb-5">
                            Welcome to our restaurant, where culinary artistry meets exceptional <br /> dining experiences. At, we strive to create a gastronomic haven that <br /> tantalizes your taste buds.
                        </p>
                        <Image src={Madefood} className='food2-img' />
                    </Col>

                </Row>
            </Container>

        </section>
    )
}

export default Food