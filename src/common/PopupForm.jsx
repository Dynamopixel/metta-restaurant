import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import CustomButton from "../components/CustomButton";
import emailjs from '@emailjs/browser';

const ContactModal = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_r5l6deg",     // EmailJS se
            "template_h8z9bl8",    // EmailJS template
            {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            },
            "WxaRXt4X4HPanM-bY"      // EmailJS public key
        )
            .then((result) => {
                console.log("SUCCESS:", result.text);
                alert("Message sent successfully!");
               
                setFormData({ name: "", email: "", phone: "", message: "" });

                handleClose();
            })
            .catch((error) => {
                console.log(error.text);
                alert("Failed to send message");
            });
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            className="contact-modal "
        >
            <Modal.Header closeButton className="modal-header-custom">
                <Modal.Title style={{ color: "#0e2625" }}>Contact Us</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <form onSubmit={handleSubmit} className="contact-formm">

                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        required
                    />

                    <label>Phone</label>
                    <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        required
                    />

                    <label>Message</label>
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        required
                        className="text-black"
                    ></textarea>

                    <Button type="submit" className="submit-btn mx-auto d-block">
                        Submit
                    </Button>
                </form>

            </Modal.Body>
        </Modal>
    );
};

export default ContactModal;