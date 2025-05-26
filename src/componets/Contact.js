import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const phoneRegex = /^[0-9]{10}$/;

    // First Name validation
    if (!formDetails.firstName.trim()) {
      tempErrors.firstName = 'First name is required';
    }

    // Last Name validation
    if (!formDetails.lastName.trim()) {
      tempErrors.lastName = 'Last name is required';
    }

    // Email validation
    if (!formDetails.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!emailRegex.test(formDetails.email.trim())) {
      tempErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formDetails.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formDetails.phone.trim())) {
      tempErrors.phone = 'Phone number must be 10 digits';
    }

    // Message validation
    if (!formDetails.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formDetails.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    } else if (formDetails.message.trim().length > 1000) {
      tempErrors.message = 'Message cannot exceed 1000 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
    // Clear error when user starts typing
    if (errors[category]) {
      setErrors({
        ...errors,
        [category]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setButtonText("Sending...");

    // Simulate form submission
    setTimeout(() => {
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Thank you for your message! I'll get back to you soon." });
      setButtonText("Send");
    }, 1000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name *"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          className={errors.firstName ? 'error' : ''}
                        />
                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name *"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          className={errors.lastName ? 'error' : ''}
                        />
                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address *"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No. *"
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          className={errors.phone ? 'error' : ''}
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message *"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          className={errors.message ? 'error' : ''}
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success-message" : "danger-message"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="contact-info-box">
                    <h3>Contact Information</h3>
                    <div className="info-item">
                      <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <div className="info-content">
                        <h4>Location</h4>
                        <p> SURAT , GUJARAT </p>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="info-content">
                        <h4>Email</h4>
                        <p>payalmalakar55@gmail.com</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <div className="info-content">
                        <h4>Call</h4>
                        <p>+91 8849733281</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;