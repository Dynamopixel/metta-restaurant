import { Container, Form, Image, Row, Col, Button } from "react-bootstrap";
import contactImg from "../assets/images/conatct.png";
import CustomButton from './CustomButton';


const Contactsection = () => {
    return (
        <section className='custom-space text-light conatct-sec'>
            <Container fluid>
                <Row className="align-items-center d-flex justify-content-between contact-row">

                     {/* conatct Image Side */}
                    <Col xs={12} md={6} >
                        <Image
                            src={contactImg}
                            rounded
                            className='contact-img'
                        />
                    </Col>

                    {/* Text Side */}
                    <Col xs={12} md={6} className="mb-4 mb-md-0 text-center col-custom-space  ">
                    <span className="heading-style">Reservation</span>
                        <h2 className="text-center ">Book a Table</h2>
                        <form className="ps-0 ps-lg-5 text-start">

                            {/* Name */}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder=" Name"
                                    required
                                />
                            </div>

                            {/* Guests */}
                            <div className="mb-3">
                                <select
                                    name="guests"
                                    
                                >
                                    <option value="1">1 Person</option>
                                    <option value="2">2 People</option>
                                    <option value="3">3 People</option>
                                    <option value="4">4 People</option>
                                    <option value="5">5 People</option>
                                </select>
                            </div>

                            {/* Time and Date in One Line */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <span >
                                            <i className="bi bi-clock custom-icon"></i>
                                        </span>
                                        <input
                                            type="time"
                                            name="time"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="input-group">
                                        <span >
                                            <i className="bi bi-calendar3 custom-icon"></i>
                                        </span>
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Special Instructions */}
                            <div className="mb-3">
                                <textarea
                                    name="specialInstructions"
                                    rows="3"
                                    placeholder="Special Instruction"
                                ></textarea>
                            </div>

                            {/* Phone Number */}
                            <div className="mb-4">
                                <div className="input-group">
                                 
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <CustomButton text="RESERVATION"  />

                        </form>

                    </Col>

                   


                </Row>
            </Container>
        </section>
    )
}

export default Contactsection