import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const ContactPage = () => (
  <div className="main-contact-container">
    <p className="contact-header">Get in touch with us</p>
    <div className="contact-form-container">
      <div className="form">
        <p>send us a message/request info</p>
        <form className="contact-form">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              id="name" 
              type="text"
              name="name"
              placeholder="Enter your name." 
              
            />
          </div>
          <div className="input-container">
              <label htmlFor="email">Email Address</label>
              <input 
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address."
              />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              type="text"
              name="message"
              rows="10"
              cols="40"
            >
            </textarea>
          </div>
          <div className="submit-btn" style={{padding: '10px', alignSelf: 'flex-end'}}>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
    <div className="s-media-container">
      <div className="contact-card">
        <a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineMail size={23} style={{paddingRight: '4px'}} />
          <p>test@gmail.com</p>
        </a>
      </div>
      <div className="contact-card">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare size={23} style={{paddingRight: '4px'}} />
          <p>facebook</p>
        </a>
      </div>
      <div className="contact-card">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={23} style={{paddingRight: '4px'}} />
          <p>Instagram</p>
        </a>
      </div>
    </div>
  </div>
);

export default ContactPage;