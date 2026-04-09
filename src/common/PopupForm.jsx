import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import CustomButton from "../components/CustomButton";

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
        console.log("Form submitted:", formData);
        alert("Thanks for contacting us!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        handleClose();
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