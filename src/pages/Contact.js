import React from 'react';
import ContactForm from '../components/ContactForm';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Debugger Software</h1>
          <p>Have a question or want to discuss a project? We're here to help!</p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <i className="icon-location"></i>
              <div>
                <h3>Address</h3>
                <p>Rr. Ismail Qemali, Tiranë, Albania</p>
              </div>
            </div>
            
            <div className="contact-detail">
              <i className="icon-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+355 69 123 4567</p>
              </div>
            </div>
            
            <div className="contact-detail">
              <i className="icon-email"></i>
              <div>
                <h3>Email</h3>
                <p>info@debuggersoftware.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;