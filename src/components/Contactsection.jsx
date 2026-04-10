import { Container, Form, Image, Row, Col, Button } from "react-bootstrap";
import contactImg from "../assets/images/conatct.png";
import CustomButton from './CustomButton';
import { useState } from "react";
import emailjs from '@emailjs/browser';
// import Clock from "../assets/images/clock.png";
// import Calender from "../assets/images/calender.png";



const Contactsection = () => {

    const [formData, setFormData] = useState({
        name: "",
        guests: "1",
        time: "",
        date: "",
        phone: "",
        specialInstructions: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFocus = (e) => {
    e.target.showPicker();
};

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_r5l6deg",     // EmailJS se
            "template_na5bdvk",    // EmailJS template
            {
                name: formData.name,
                guests: formData.guests,
                time: formData.time,
                date: formData.date,
                phone: formData.phone,
                specialInstructions: formData.specialInstructions,
            },
            "WxaRXt4X4HPanM-bY"      // EmailJS public key
        )
            .then((result) => {
                console.log("SUCCESS:", result.text);
                alert("Reservation sent successfully!");

                setFormData({
                    name: "",
                    guests: "1",
                    time: "",
                    date: "",
                    phone: "",
                    specialInstructions: ""
                });
            })
            .catch((error) => {
                console.log("ERROR:", error.text);
                alert("Failed to send reservation");
            });
    }

    return (
        <section id="Booktable" className='custom-space text-light conatct-sec'>
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
                        <form onSubmit={handleSubmit} className="ps-0 ps-lg-5 text-start reservation-form">

                            {/* Name */}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            {/* Guests */}
                            <div className="mb-3">
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                >
                                    <option value="1">1 Person</option>
                                    <option value="2">2 People</option>
                                    <option value="3">3 People</option>
                                    <option value="4">4 People</option>
                                    <option value="5">5 People</option>
                                </select>
                            </div>

                            {/* Time and Date in One Line */}
                            <div className="row mb-3 timedate-sec">
                                <div className="col-md-6">
                                    <div className="input-group custom-input-group">
                                        <span className="input-icon">
                                            {/* <img src={Clock} /> */}
                                        </span>
                                        <input
                                            type="time"
                                            name="time"
                                            value={formData.time}
                                             onFocus={(e) => e.target.showPicker()}   
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="input-group custom-input-group">
                                        <span className="input-icon" >
                                            {/* <img src={Calender} /> */}
                                        </span>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                             onFocus={(e) => e.target.showPicker()}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Special Instructions */}
                            <div className="mb-3">
                                <textarea
                                    name="specialInstructions"
                                    value={formData.specialInstructions}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Special Instructions"
                                ></textarea>
                            </div>

                            {/* Phone Number */}
                            <div className="mb-4">
                                <div className="input-group custom-input-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <CustomButton text="RESERVATION" />
                        </form>

                    </Col>




                </Row>
            </Container>
        </section>
    )
}

export default Contactsection